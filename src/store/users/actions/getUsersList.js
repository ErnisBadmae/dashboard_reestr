import { createAsyncThunk } from '@reduxjs/toolkit';
// import { correctlyDate } from '../../../helpers/utils';
import $api from '../../../http';

export const getUsersList = createAsyncThunk(
    'getUsersList/get',
    async (payload) => {
        const result = await $api.post('/user/user_clients', {
            row_page: payload.row_page,
            page: payload.page,
            filters: payload.filters,
        });
        console.log(result, 'getUsersList');

        return result;
    }
);
