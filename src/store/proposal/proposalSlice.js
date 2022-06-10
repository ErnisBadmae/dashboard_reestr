import {
    postSdcRequest,
    postDeclarationHolder,
    getCurrentProposalSdc,
    getPreviewCurrentProposalSdc,
    getHolders,
    changeProposal,
} from './actions';
import { createSlice } from '@reduxjs/toolkit';

export const currentProposalTest = createSlice({
    name: 'currentProposalTest',
    initialState: {
        currentProposalSdc: {},
        previewProposalSdc: {},
        holders: [],
        isLoading: false,
        isSuccess: false,
    },
    reducers: {
        //     holdersAdded: {
        //          reducer(state, action){
        //               state.holders.push(action.payload)
        //          }
        //     }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getPreviewCurrentProposalSdc.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(
                getPreviewCurrentProposalSdc.fulfilled,
                (state, action) => {
                    state.isLoading = false;
                    state.isSuccess = true;
                    state.previewProposalSdc = action.payload;
                }
            )
            .addCase(getPreviewCurrentProposalSdc.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
                state.previewProposalSdc = null;
            })
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
            })

            //Держатели
            .addCase(postDeclarationHolder.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(postDeclarationHolder.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.holders = action.payload;
            })
            .addCase(postDeclarationHolder.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
                state.holders = null;
            })
            .addCase(getHolders.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getHolders.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.holders = action.payload;
            })
            .addCase(getHolders.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
                state.holders = null;
            });
    },
});

// export const { editProposalCurrent, getCurrentProposal, createSdcProposal } =
//     currentProposalTest.actions;
export default currentProposalTest.reducer;
