import { getInbox, getOutBox } from '../actions';
import { createSlice } from '@reduxjs/toolkit';

export const getMessages = createSlice({
    name: 'getMessages',
    initialState: {
        inbox: [],
        outbox: [],
        currentMessage: {},
        isLoading: false,
        isSuccess: false,
        errorMessage: '',
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getInbox.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getInbox.fulfilled, (state, action) => {
                state.isLoading = false;
                state.inbox = action.payload;
            })
            .addCase(getInbox.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
                state.inbox = null;
            })

            .addCase(getOutBox.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getOutBox.fulfilled, (state, action) => {
                state.isLoading = false;
                state.outbox = action.payload;
            })
            .addCase(getOutBox.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
                state.outbox = null;
            });

        //    .addCase(viewCurrentRequestSdcUser.pending, (state) => {
        //        state.isLoading = true;
        //    })
        //    .addCase(viewCurrentRequestSdcUser.fulfilled, (state, action) => {
        //        state.isLoading = false;
        //        state.currentRequestSdcUser = action.payload;
        //    })
        //    .addCase(viewCurrentRequestSdcUser.rejected, (state, action) => {
        //        state.isLoading = false;
        //        state.isError = true;
        //        state.message = action.payload;
        //        state.currentRequestSdcUser = null;
        //    });
    },
});

export default getMessages.reducer;
