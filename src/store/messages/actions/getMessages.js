import { createAsyncThunk } from '@reduxjs/toolkit';
import { correctlyDate } from '../../../helpers/utils';
import $api from '../../../http';

export const getInbox = createAsyncThunk('getInbox/get', async (payload) => {
    const result = await $api.post('/user/message/incoming_list', {
        //         row_page: payload.row_page,
        //         page: payload.page,
        //         filters: payload.filters,
        //     });
    });

    return result.data?.data?.data;
});

export const getOutBox = createAsyncThunk('getOutBox/get', async (payload) => {
    const result = await $api.post('/user/message/outgoing_list ', {
        //         row_page: payload.row_page,
        //         page: payload.page,
        //         filters: payload.filters,
        //     });
    });
    console.log(result, 'resultresult');
    return result.data?.data?.data;
});

export const viewCurrentMessage = createAsyncThunk(
    'viewCurrentMessage/view',
    async (id) => {
        const res = await $api.post(`user/message/${id}`);

        return res.data?.data?.message;
    }
);
