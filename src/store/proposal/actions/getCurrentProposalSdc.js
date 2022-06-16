import { createAsyncThunk } from '@reduxjs/toolkit';
import $api from '../../../http';
import { correctlyDate } from '../../../helpers/utils';

const headersAxios = {
    headers: {
        'Content-Type': 'application/json',
    },
};

//создание заявки
export const postSdcRequest = createAsyncThunk(
    'requestSdc/post',
    async (payload) => {
        let result = await $api.post(
            '/request/request_sdc_standard_certification/add',
            payload,
            headersAxios
        );

        return result.data.data.requestSdcStandardCertification;
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
    async (cardId) => {
        const result = await $api.get(
            `/request/request_sdc_standard_certification/${cardId}`
        );
        const value = result.data.data?.requestSdcStandardCertification;

        return {
            ...value,
            registration_date: correctlyDate(value.registration_date),
        };
    }
);

//изменение заявки
export const changeProposal = createAsyncThunk(
    'changeProposal/edit',
    async (id, payload) => {
        let result = await $api.post(
            `/request/request_sdc_standard_certification/edit/${id}`,
            payload,
            headersAxios
        );

        return result;
    }
);

//добавление держателя
export const postDeclarationHolder = createAsyncThunk(
    'declaration/post',
    async (payload) => {
        const result = await $api.post(
            `/request/request_sdc_standard_certification_holder/add/${payload.id}`,
            payload.declarationSdsData,
            headersAxios
        );

        const value = result.data.data.holder;
        return value;
    }
);

//получение массива держателей
export const getHolders = createAsyncThunk('holders/get', async (id) => {
    const result = await $api.post(
        `/request/request_sdc_standard_certification_holder/list/${id}`
    );

    console.log(result, 'result holders/getList');
    const value = result.data.data.data.map((obj) => {
        return {
            ...obj,
            registration_date: correctlyDate(obj.registration_date),
            exclusion_date: correctlyDate(obj.exclusion_date),
        };
    });

    return value;
});

//добавление ОС СДС
export const postOrganSertificationSdc = createAsyncThunk(
    'OrganSertificationSdc/post',
    async (payload) => {
        const result = await $api.post(
            `/request/request_sdc_standard_certification_organ_certification/add/${payload.id}`,
            payload.osSdsData,
            headersAxios
        );
        //    console.log(result, 'result OrganSertificationSdc/post');
        const value = result.data.data.organCertification;
        return value;
    }
);

//получение массива ОС СДС
export const getOrganSertifications = createAsyncThunk(
    'osSdc/getList',
    async (id) => {
        const result = await $api.post(
            `/request/request_sdc_standard_certification_organ_certification/list/${id}`
        );

        const value = result.data.data.data.map((obj) => {
            return {
                ...obj,
                certificate_date: correctlyDate(obj.certificate_date),
            };
        });
        console.log(value, 'value from ');
        return value;
    }
);

//получение текущей карточки ОС СДС
export const getCurrentOsSdc = createAsyncThunk(
    'viewOs/getCurrentOsSdc',
    async (cardId) => {
        const result = await $api.get(
            `/request/request_sdc_standard_certification_organ_certification/${cardId}`
        );

        const value = result.data.data.organCertification;
        return {
            ...value,
            certificate_date: correctlyDate(value.certificate_date),
        };
    }
);

//изменение ОС СДС
export const editCurrentOsSdc = createAsyncThunk(
    'viewEditCard/editCurrentOsSdc',
    async (payload) => {
        const response = await fetch(
            `/request/request_sdc_standard_certification_organ_certification/edit/${payload.id}`,
            {
                method: 'PATCH',
                body: JSON.stringify(payload.body),
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            }
        );
        //  if (response.status === 403) {
        //      setMessage('Ошибка! Редактирование заявки запрещено.');
        //      setIsEditSuccess(true);
        //  }
        const value = await response.json();
        console.log(value, 'value');
        return value.data.organCertification;
    }
);
