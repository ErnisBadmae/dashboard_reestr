import { createAsyncThunk } from '@reduxjs/toolkit';
import { correctlyDate } from '../../../helpers/utils';
import { error, info } from '../../../components/Toast/Toast.jsx';

import $api from '../../../http';

const headersAxios = {
    headers: {
        'Content-Type': 'application/json',
    },
};

export const postOcRequest = createAsyncThunk(
    'postOcRequest/post',
    async (payload) => {
        try {
            let result = await $api.post(
                '/request/request_oc_organ_certification/add',
                payload.formData,
                headersAxios
            );

            if (result.data.success) {
                info('Ваши данные успешно добавлены!');
                return result.data.data.requestSdcStandardCertification;
            } else {
                error(`ошибка сервера: ${result.message}`);
                return {};
            }
        } catch (e) {
            error(`ошибка сервера: ${e.message}`);
        }
    }
);

export const getProposalOsList = createAsyncThunk(
    'getProposalOsList/get',
    async (payload) => {
        const result = await $api.post(
            '/request/request_oc_organ_certification/get_request_oc_header_list',
            {
                row_page: payload.row_page,
                page: payload.page,
                filters: payload.filters,
            }
        );
        //    console.log(result, 'result');
        //    return result.data;
        const value = result.data.data.data.map((el) => {
            return {
                ...el,
                dttm_created: correctlyDate(el.dttm_created),
                dttm_updated: correctlyDate(el.dttm_updated),
                registration_date: correctlyDate(el.registration_date),
            };
        });
        const totalElements = result.data.data.data_header.count;
        return { data: value, totalElements };
    }
);

export const getCurrentProposalOs = createAsyncThunk(
    'getCurrentProposalOs/view',
    async (cardId) => {
        let result = await $api.get(
            `request/request_oc_organ_certification/get_request_oc_header/${cardId}`
        );

        const value = result.data.data?.requestOcHeader;
        return {
            ...value,
            dttm_created: correctlyDate(value.dttm_created),
            dttm_updated: correctlyDate(value.dttm_updated),
            dttm_desicion: correctlyDate(value.dttm_desicion),
        };
    }
);

export const getPreviewCurrentProposalOc = createAsyncThunk(
    'preview/getPreviewCurrentProposalOc',
    async (cardId) => {
        let result = await $api.get(
            `request/request_sdc_standard_certification/get_request_oc_header/${cardId}`
        );

        const value = result.data.data?.requestSdcHeader;
        return {
            ...value,
            dttm_created: correctlyDate(value.dttm_created),
            dttm_updated: correctlyDate(value.dttm_updated),
            dttm_desicion: correctlyDate(value.dttm_desicion),
        };
    }
);

//изменение заявки
export const changeProposalOc = createAsyncThunk(
    'changeProposalOc/editOc',
    async (payload) => {
        const response = await fetch(
            `https://api-prof-sdc.anonamis.ru/api/request/request_oc_organ_certification/edit/${payload.sdcId}`,
            {
                method: 'PATCH',
                body: JSON.stringify(payload.formData),
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            }
        );
        const jsonResponse = await response.json();

        if (jsonResponse.success === true) {
            info('Ваши данные успешно отредактированы!');
            return jsonResponse.data.requestSdcStandardCertification;
        } else {
            error(`ошибка сервера: ${jsonResponse.message}`);
            return jsonResponse;
        }
    }
);
