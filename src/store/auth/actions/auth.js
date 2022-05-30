import { createAsyncThunk } from '@reduxjs/toolkit';
import $api from '../../../http';
import jwt_decode from 'jwt-decode';

const headersAxios = {
    headers: {
        'Content-Type': 'application/json',
    },
};

export const login = createAsyncThunk(
    'auth/login',
    async (payload, dispatch) => {
        let responseLoginUser = await $api.post(
            '/login_check',
            payload,
            headersAxios
        );

        const value = {
            user: jwt_decode(responseLoginUser.data.token),
            token: responseLoginUser.data.token,
        };

        return value;
    }
);
