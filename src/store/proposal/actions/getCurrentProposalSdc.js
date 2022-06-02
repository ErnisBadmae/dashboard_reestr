import { createAsyncThunk } from '@reduxjs/toolkit';
import $api from '../../../http';

const headersAxios = {
    headers: {
        'Content-Type': 'application/json',
    },
};

export const getCurrentProposalSdc = createAsyncThunk(
    'view/getCurrentRequestSdc',
    async (cardId, dispatch) => {
        let result = await $api.get(
            `/request/request_sdc_standard_certification/${cardId}`
        );
        console.log(result, 'resultView');
        return result.data.data?.requestSdcStandardCertification;
    }
);

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

export const changeProposal = createAsyncThunk(
    'changeProposal/post',
    async (id, payload) => {
        let result = await $api.post(
            `/request/request_sdc_standard_certification/edit/${id}`,
            payload,
            headersAxios
        );

        return result;
    }
);
