import { createReducer } from '@reduxjs/toolkit';
import { login } from '../actions';
import { getLoginFail, getLoginRequest, getLoginSuccess } from './getAuth';

const initialState = {
    user: null,
    isSuccess: false,
    isLoading: false,
    message: '',
    token: null,
};

export const authReducer = createReducer(initialState, {
    [login.pending.toString()]: getLoginRequest,
    [login.fulfilled.toString()]: getLoginSuccess,
    [login.rejected.toString()]: getLoginFail,
});
