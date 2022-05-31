import { createAsyncThunk } from '@reduxjs/toolkit';
import $api from '../../../http';

const headersAxios = {
    headers: {
        'Content-Type': 'application/json',
    },
};

export const postDeclarations = createAsyncThunk(
    'declaration/post',
    async (id, payload) => {
        let result = await $api.post(
            `/request/request_sdc_standard_certification_holder/add/${id}`,
            payload,
            headersAxios
        );
        console.log(result, 'result');
        return result;
    }
);
