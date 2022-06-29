import { createAsyncThunk } from '@reduxjs/toolkit';
import $api from '../../../http';
import axios from 'axios';

export const getEntries = createAsyncThunk('entries/get', async (dispatch) => {
    let result = await axios.post('/table.json');
    return result.data.data;
});

export const getRequestSdsList = createAsyncThunk(
    'getRequestSds/get',
    async (dispatch) => {
        let result = await $api.post(
            '/user/user_standard_certification/inclusion_request/list'
        );

        return result.data.data.data;
    }
);
