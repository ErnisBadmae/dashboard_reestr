import { createAsyncThunk } from '@reduxjs/toolkit';
import $api from '../../../http';
import { correctlyDate } from '../../../helpers/utils';
import { error, info } from '../../../components/Toast/Toast.jsx';

const headersAxios = {
    headers: {
        'Content-Type': 'application/json',
    },
};

export const postExpertOsSdc = createAsyncThunk(
    'postExpertOsSdc/post',
    async (payload) => {
        const result = await $api.post(
            `/request/request_sdc_standard_certification_expert/add/${payload.oSid}`,
            payload.formData,
            headersAxios
        );
        console.log(result, 'result postExpertOsSdc/post');
        if (result.data.success) {
            const value = result.data.data.organCertification;
            info('Данные успешно добавлены!');
            return value;
        } else {
            error(`ошибка сервера: ${result.data.message}`);
        }
    }
);

export const getExpertsOs = createAsyncThunk(
    'getExpertsOs/getList',
    async (id) => {
        const result = await $api.post(
            `/request/request_sdc_standard_certification_expert/list/${id}`
        );

        const value = result.data.data.data.map((obj) => {
            return {
                ...obj,
                introduction_date: correctlyDate(obj.introduction_date),
                valid: correctlyDate(obj.valid),
                exclusion_date: correctlyDate(obj.exclusion_date),
                education_date: correctlyDate(obj.education_date),
            };
        });
        return value;
    }
);

export const getCurrentExpertOs = createAsyncThunk(
    'getCurrentExpertOs/view',
    async (cardId) => {
        const result = await $api.get(
            `/request/request_sdc_standard_certification_expert/${cardId}`
        );

        const value = result.data.data.expert;

        return value;
    }
);

export const editCurrentExpertOs = createAsyncThunk(
    'edit/CurrentExpertOs',
    async (payload) => {
        const response = await fetch(
            `https://api-prof-sdc.anonamis.ru/api/request/request_sdc_standard_certification_expert/edit/${payload.expertId}`,
            {
                method: 'PATCH',
                body: JSON.stringify(payload.body),
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            }
        );
        const jsonResponse = await response.json();

        if (jsonResponse.success === true) {
            info('Ваши данные успешно отредактированы!');
            return jsonResponse.data.organCertification;
        } else {
            error(`ошибка сервера: ${jsonResponse.message}`);
            return jsonResponse;
        }
    }
);
