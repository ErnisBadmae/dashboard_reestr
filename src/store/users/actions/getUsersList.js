import { createAsyncThunk } from '@reduxjs/toolkit';
import { correctlyDate } from '../../../helpers/utils';
import $api from '../../../http';

export const getUsersList = createAsyncThunk(
    'getUsersList/get',
    async (payload) => {
        const result = await $api.post('/user/users', {
            //   row_page: payload.row_page,
            //   page: payload.page,
            //   filters: payload.filters,
        });

        return result.data.data.data.map((el) => {
            return {
                ...el,
                roleTitle: el?.user_role?.title,
            };
        });
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
        return result.data.data;
    }
);

export const getRequestUserSdc = createAsyncThunk(
    'getRequestUserSdc/get',
    async (payload) => {
        const result = await $api.post(
            'user/user_standard_certification/inclusion_request/list',
            {
                row_page: payload.row_page,
                page: payload.page,
            }
        );
        const value = result.data.data.data.map((el) => {
            return { ...el, dttm_created: correctlyDate(el.dttm_created) };
        });
        const totalElements = result.data.data.data_header.count;
        return { data: value, totalElements };
    }
);

export const viewCurrentRequestSdcUser = createAsyncThunk(
    'viewCurrentRequestSdcUser/view',
    async (id) => {
        const result = await $api.get(
            `user/user_standard_certification/inclusion_request/view/${id}`
        );

        return result.data.data;
    }
);
