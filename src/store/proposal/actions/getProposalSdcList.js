import { createAsyncThunk } from '@reduxjs/toolkit';
import $api from '../../../http';

export const getProposalSdcList = createAsyncThunk(
    'getRequestSdcCertifHolder/get',
    async (dispatch) => {
        let result = await $api.post(
            '/request/request_sdc_standard_certification/get_request_sdc_header_list'
        );

        return result.data.data.data;
    }
);
