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
        console.log(result, 'postSdcRequest');
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
        console.log(result, 'resultPreview');
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
        console.log(value, 'current proposal request');
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

export const postDeclarationHolder = createAsyncThunk(
    'declaration/post',
    async (id, payload) => {
        let result = await $api.post(
            `/request/request_sdc_standard_certification_holder/add/${id}`,
            payload,
            headersAxios
        );
        console.log(result, 'resultfrompostDeclar');
        return result;
    }
);
