import { getUsersList } from '../actions';
import { createSlice } from '@reduxjs/toolkit';

export const getUsers = createSlice({
    name: 'getUsers',
    initialState: {
        users: [],
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
                //  changeIsCardEditable(action.payload.status.id, state);
                state.users = action.payload;
            })
            .addCase(getUsersList.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
                state.users = null;
            });
    },
});

export default getUsers.reducer;
