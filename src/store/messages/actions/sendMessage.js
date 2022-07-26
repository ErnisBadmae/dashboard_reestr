import { createAsyncThunk } from '@reduxjs/toolkit';
import $api from '../../../http';

export const sendMessage = createAsyncThunk(
    'sendMessage/send',
    async ({ group, messageText, users }) => {
        const result = await $api.post('/user/message/send', {
            subject: 'subject1',
            body: messageText,
            group,
            users,
        });

        return result;
    }
);

export const getContactList = createAsyncThunk(
    'messages/getContactList',
    async ({ userRole }) => {
        let contactsRole;

        switch (userRole) {
            case 'user_sdc':
                contactsRole = 'sdc';
                break;
            case 'user_admin':
                contactsRole = 'prof_sdc';
                break;
            case 'user_os':
                contactsRole = 'os';
                break;
            case 'user':
                contactsRole = 'client';
                break;
            default:
                break;
        }

        const res = await $api.post(
            `/user/message/contacts_${contactsRole}`,
            {}
        );

        return res?.data?.data?.contacts;
    }
);
