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
        // await $api.get('user/message/',id)

        return {
            message: {
                parent_virtual: {
                    id: 1,
                    subject: 'Subject!!!',
                },
                id: 2,
                subject: 'Subject!!!',
                body: 'Body!!!',
                sender: {
                    user_type_data: {
                        user_type: 'user_sdc',
                        user_type_name: 'Пользователь СДС',
                    },
                    id: 1,
                    email: 'user_sdc@mail.com',
                    dttm_created: null,
                    dttm_update: null,
                    dttn_last_authorization: '2022-07-04T12:57:24+00:00',
                    enabled: true,
                },
                recipient: {
                    user_type_data: {
                        user_type: 'user_admin',
                        user_type_name: 'Пользователь администрации',
                    },
                    id: 2,
                    email: 'admin@mail.com',
                    dttm_created: null,
                    dttm_update: null,
                    dttn_last_authorization: '2022-07-22T12:39:57+00:00',
                    enabled: true,
                },
                recipient_group: 'admin',
                sender_group: 'admin',
                view_user: {
                    user_type_data: {
                        user_type: 'user_admin',
                        user_type_name: 'Пользователь администрации',
                    },
                    id: 2,
                    email: 'admin@mail.com',
                    dttm_created: null,
                    dttm_update: null,
                    dttn_last_authorization: '2022-07-22T12:39:57+00:00',
                    enabled: true,
                },
                view_date: '2022-07-22T14:30:58+00:00',
                date_created: '2022-07-21T13:11:26+00:00',
            },
        };
    }
);
