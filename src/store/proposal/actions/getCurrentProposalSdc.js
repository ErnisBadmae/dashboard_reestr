import { createAsyncThunk } from '@reduxjs/toolkit';
import $api from '../../../http';
import { correctlyDate } from '../../../helpers/utils';
import { error, info } from '../../../components/Toast/Toast.jsx';

const headersAxios = {
    headers: {
        'Content-Type': 'application/json',
    },
};

//создание заявки
export const postSdcRequest = createAsyncThunk(
    'requestSdc/post',
    async (payload) => {
        try {
            let result = await $api.post(
                '/request/request_sdc_standard_certification/add',
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

//препросмотр текущей карточки СДС
export const getPreviewCurrentProposalSdc = createAsyncThunk(
    'preview/getPreviewCurrentRequestSdc',
    async (cardId) => {
        let result = await $api.get(
            `request/request_sdc_standard_certification/get_request_sdc_header/${cardId}`
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

//получение текущей заявки
export const getCurrentProposalSdc = createAsyncThunk(
    'view/getCurrentRequestSdc',
    async (sdcId) => {
        const result = await $api.get(
            `/request/request_sdc_standard_certification/${sdcId}`
        );
        const value = result.data.data?.requestSdcStandardCertification;

        //    return {
        //        ...value,
        //        registration_date: correctlyDate(value.registration_date),
        //    };
        return value;
    }
);
//изменение заявки
export const changeProposal = createAsyncThunk(
    'changeProposal/edit',
    async (payload) => {
        const response = await fetch(
            `https://api-prof-sdc.anonamis.ru/api/request/request_sdc_standard_certification/edit/${payload.sdcId}`,
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

//добавление держателя
export const postDeclarationHolder = createAsyncThunk(
    'declaration/post',
    async (payload) => {
        const result = await $api.post(
            `/request/request_sdc_standard_certification_holder/add/${payload.sdcId}`,
            payload.formData,
            headersAxios
        );

        if (result.data.success) {
            const value = result.data.data.organCertification;
            info('Данные успешно добавлены!');
            return value;
        } else {
            error(`ошибка сервера: ${result.data.message}`);
        }

        const value = result.data.data.holder;
        return value;
    }
);

//получение массива держателей
export const getHolders = createAsyncThunk('holders/get', async (sdcId) => {
    const result = await $api.post(
        `/request/request_sdc_standard_certification_holder/list/${sdcId}`
    );

    const value = result.data.data.data;
    //     .map((obj) => {
    //         return {
    //             ...obj,
    //             registration_date: correctlyDate(obj.registration_date),
    //             exclusion_date: correctlyDate(obj.exclusion_date),
    //         };
    //     });

    return value;
});

//просмотр текущего держателя
export const getCurrentHolder = createAsyncThunk(
    'CurrentHolder/getView',
    async (holderId) => {
        const result = await $api.get(
            `/request/request_sdc_standard_certification_holder/${holderId}`
        );

        const value = result.data.data.holder;
        return value;
    }
);

//редактирование держателя

export const changeHolder = createAsyncThunk(
    'changeHolder/editHolder',
    async (payload) => {
        const response = await fetch(
            `https://api-prof-sdc.anonamis.ru/api/request/request_sdc_standard_certification_holder/edit/${payload.holderId}`,
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

//добавление ОС СДС
export const postOrganSertificationSdc = createAsyncThunk(
    'OrganSertificationSdc/post',
    async (payload) => {
        const result = await $api.post(
            `/request/request_sdc_standard_certification_organ_certification/add/${payload.sdcId}`,
            payload.formData,
            headersAxios
        );
        console.log(result, 'result OrganSertificationSdc/post');
        if (result.data.success) {
            const value = result.data.data.organCertification;
            info('Данные успешно добавлены!');
            return value;
        } else {
            error(`ошибка сервера: ${result.data.message}`);
        }
    }
);

//получение массива ОС СДС
export const getOrganSertifications = createAsyncThunk(
    'osSdc/getList',
    async (sdcId) => {
        const result = await $api.post(
            `/request/request_sdc_standard_certification_organ_certification/list/${sdcId}`
        );

        const value = result.data.data.data.map((obj) => {
            return {
                ...obj,
                certificate_date: correctlyDate(obj.certificate_date),
            };
        });
        return value;
    }
);

//получение текущей карточки ОС СДС
export const getCurrentOsSdc = createAsyncThunk(
    'viewOs/getCurrentOsSdc',
    async (oSid) => {
        const result = await $api.get(
            `/request/request_sdc_standard_certification_organ_certification/${oSid}`
        );

        const value = result.data.data.organCertification;
        //    return {
        //        ...value,
        //        certificate_date: correctlyDate(value.certificate_date),
        //    };
        return value;
    }
);

//изменение ОС СДС
export const editCurrentOsSdc = createAsyncThunk(
    'viewEditCard/editCurrentOsSdc',
    async (payload) => {
        const response = await fetch(
            `https://api-prof-sdc.anonamis.ru/api/request/request_sdc_standard_certification_organ_certification/edit/${payload.oSid}`,
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
            return jsonResponse.data.organCertification;
        } else {
            error(`ошибка сервера: ${jsonResponse.message}`);
            return jsonResponse;
        }
    }
);
