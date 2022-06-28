import { getUsersList, viewCurrentUser } from '../actions';
import { createSlice } from '@reduxjs/toolkit';

export const getUsers = createSlice({
    name: 'getUsers',
    initialState: {
        users: [],
        currentUser: {},
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
            });
    },
});

export default getUsers.reducer;
