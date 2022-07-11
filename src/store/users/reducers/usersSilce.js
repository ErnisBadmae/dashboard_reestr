import {
    getUsersList,
    viewCurrentUser,
    getRequestUserSdc,
    viewCurrentRequestSdcUser,
} from '../actions';
import { createSlice } from '@reduxjs/toolkit';

export const getUsers = createSlice({
    name: 'getUsers',
    initialState: {
        users: [],
        currentUser: {},
        requestsListSdc: [],
        currentRequestSdcUser: {},
        isLoading: false,
        isSuccess: false,
        errorMessage: '',
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getUsersList.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getUsersList.fulfilled, (state, action) => {
                state.isLoading = false;
                state.users = action.payload;
            })
            .addCase(getUsersList.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
                state.users = null;
            })
            .addCase(viewCurrentUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(viewCurrentUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.currentUser = action.payload;
            })
            .addCase(viewCurrentUser.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
                state.currentUser = null;
            })
            .addCase(getRequestUserSdc.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getRequestUserSdc.fulfilled, (state, action) => {
                state.isLoading = false;
                state.requestsListSdc = action.payload;
            })
            .addCase(getRequestUserSdc.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
                state.requestsListSdc = null;
            })
            .addCase(viewCurrentRequestSdcUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(viewCurrentRequestSdcUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.currentRequestSdcUser = action.payload;
            })
            .addCase(viewCurrentRequestSdcUser.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
                state.currentRequestSdcUser = null;
            });
    },
});

export default getUsers.reducer;
