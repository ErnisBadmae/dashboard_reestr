import { createAsyncThunk } from '@reduxjs/toolkit';
// import { correctlyDate } from '../../../helpers/utils';
import $api from '../../../http';

export const getUsersList = createAsyncThunk(
    'getUsersList/get',
    async (payload) => {
        const result = await $api.post('/user/user_clients', {
            //   row_page: payload.row_page,
            //   page: payload.page,
            //   filters: payload.filters,
        });
        console.log(result.data.data.data, 'getUsersList');

        return result.data.data.data;
    }
);

export const viewCurrentUser = createAsyncThunk(
    'viewCurrentUser/view',
    async (id) => {
        const result = await $api.get(`/user/user_client/${id}`, {
            //   row_page: payload.row_page,
            //   page: payload.page,
            //   filters: payload.filters,
        });
        console.log(result, 'viewCurrentUser');

        return result.data.data;
    }
);
