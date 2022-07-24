import { createAsyncThunk } from '@reduxjs/toolkit';
import { correctlyDate } from '../../../helpers/utils';
import $api from '../../../http';

export const getInbox = createAsyncThunk('getInbox/get', async (payload) => {
    //     const result =
    //     await $api.post('/user/message/incoming_list', {
    //         row_page: payload.row_page,
    //         page: payload.page,
    //         filters: payload.filters,
    //     });

    return {
        success: true,
        message: 'OK',
        data: {
            data: [
                {
                    parent_virtual: null,
                    id: 1,
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
                        dttn_last_authorization: '2022-07-19T17:32:19+00:00',
                        enabled: true,
                    },
                    recipient_group: 'admin',
                    sender_group: 'admin',
                    view_date: null,
                    date_created: '2022-07-21T13:11:26+00:00',
                },
                {
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
                        dttn_last_authorization: '2022-07-19T17:32:19+00:00',
                        enabled: true,
                    },
                    recipient_group: 'admin',
                    sender_group: 'admin',
                    view_date: null,
                    date_created: '2022-07-21T13:11:26+00:00',
                },
            ],
            data_header: {
                count: 2,
                count_pages: 1,
                page: 1,
                row_page: 20,
            },
        },
    };
});

export const getOutBox = createAsyncThunk('getOutBox/get', async (payload) => {
    //    const result =
    await $api.post('/user/message/outgoing_list ', {
        row_page: payload.row_page,
        page: payload.page,
        filters: payload.filters,
    });
    return {
        success: true,
        message: 'OK',
        data: {
            data: [
                {
                    parent_virtual: null,
                    id: 1,
                    subject: 'Subject!!!',
                    body: 'Body!!!',
                    sender: {
                        user_type_data: {
                            user_type: 'user_admin',
                            user_type_name: 'Пользователь администрации',
                        },
                        id: 2,
                        email: 'admin@mail.com',
                        dttm_created: null,
                        dttm_update: null,
                        dttn_last_authorization: '2022-07-19T17:32:19+00:00',
                        enabled: true,
                    },
                    recipient: {
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
                    recipient_group: 'admin',
                    sender_group: 'admin',
                    view_date: null,
                    date_created: '2022-07-21T13:11:26+00:00',
                },
                {
                    parent_virtual: {
                        id: 1,
                        subject: 'Subject!!!',
                    },
                    id: 2,
                    subject: 'Subject!!!',
                    body: 'Body!!!',
                    sender: {
                        user_type_data: {
                            user_type: 'user_admin',
                            user_type_name: 'Пользователь администрации',
                        },
                        id: 2,
                        email: 'admin@mail.com',
                        dttm_created: null,
                        dttm_update: null,
                        dttn_last_authorization: '2022-07-19T17:32:19+00:00',
                        enabled: true,
                    },
                    recipient: {
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
                    recipient_group: 'admin',
                    sender_group: 'admin',
                    view_date: null,
                    date_created: '2022-07-21T13:11:26+00:00',
                },
            ],
            data_header: {
                count: 2,
                count_pages: 1,
                page: 1,
                row_page: 20,
            },
        },
    };
});
