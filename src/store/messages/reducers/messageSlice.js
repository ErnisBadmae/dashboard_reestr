import { getInbox, getOutBox, viewCurrentMessage } from '../actions';
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
            })

            .addCase(viewCurrentMessage.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(viewCurrentMessage.fulfilled, (state, action) => {
                state.isLoading = false;
                state.currentMessage = action.payload;
            })
            .addCase(viewCurrentMessage.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
                state.currentMessage = null;
            });
    },
});

export default getMessages.reducer;
