import { createAsyncThunk } from '@reduxjs/toolkit';
import $api from '../../../http';

const headersAxios = {
    headers: {
        'Content-Type': 'application/json',
    },
};

export const postDeclarations = createAsyncThunk(
    'declaration/post',
    async (payload, dispatch) => {
        let result = await $api.post(
            '/request/request_sdc_standard_certification/add',
            payload,
            headersAxios
        );
        console.log(result.data.data.data, 'result');
        return result.data.data.data;
    }
);
