import {
    changeProposal,
    getCurrentProposalSdc,
    postSdcRequest,
} from './actions';
import { createSlice } from '@reduxjs/toolkit';

export const currentProposalTest = createSlice({
    name: 'currentProposalTest',
    initialState: {
        currentProposalSdc: {},
        isLoading: false,
        isSuccess: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(changeProposal.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(changeProposal.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.currentProposalSdc = action.payload;
            })
            .addCase(changeProposal.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
                state.currentProposalSdc = null;
            })
            .addCase(getCurrentProposalSdc.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getCurrentProposalSdc.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.currentProposalSdc = action.payload;
            })
            .addCase(getCurrentProposalSdc.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
                state.currentProposalSdc = null;
            })
            .addCase(postSdcRequest.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(postSdcRequest.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.currentProposalSdc = action.payload;
            })
            .addCase(postSdcRequest.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
                state.currentProposalSdc = null;
            });
    },
});

export const { editProposalCurrent, getCurrentProposal, createSdcProposal } =
    currentProposalTest.actions;
export default currentProposalTest.reducer;
