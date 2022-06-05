import { createReducer } from '@reduxjs/toolkit';
// import { createSlice } from '@reduxjs/toolkit';
import {
    getCurrentProposalSdc,
    getProposalSdcList,
    postSdcRequest,
    getPreviewCurrentProposalSdc,
} from '../../proposal/actions';

import {
    //получение объекта - заявка на вступление СДС
    viewSdcProposalFail,
    viewSdcProposalRequest,
    viewSdcProposalSuccess,
    setProposalSdcFail,
    setProposalSdcRequest,
    setProposalSdcSuccess,
} from './viewCurrent';

import {
    getRequestsSdsProposalFail,
    getRequestsSdsProposalRequest,
    getRequestsSdsProposalSuccess,
} from './getProposalType';

const initialState = {
    proposalSdcList: [],
    currentProposalSdc: {},
};

// export const editState = createSlice({
//     name: 'editProposalSdc',
//     initialState,
//     reducers: {
//         editProposalCurrent: (state, action) => {
//             state.currentProposalSdc = action.payload;
//         },
//     },
// });

// export const { editProposalCurrent } = editState.actions;
// export default editState.reducer;

export const proposalReducer = createReducer(initialState, {
    //получение знанчений для списка заявок СДС-holders
    [getProposalSdcList.pending.toString()]: getRequestsSdsProposalRequest,
    [getProposalSdcList.fulfilled.toString()]: getRequestsSdsProposalSuccess,
    [getProposalSdcList.rejected.toString()]: getRequestsSdsProposalFail,

    //получение информации о конкретной заявке оператору СДС(holders?)
    [getCurrentProposalSdc.pending.toString()]: viewSdcProposalRequest,
    [getCurrentProposalSdc.fulfilled.toString()]: viewSdcProposalSuccess,
    [getCurrentProposalSdc.rejected.toString()]: viewSdcProposalFail,

    //получение краткой информации о заявке
    [getPreviewCurrentProposalSdc.pending.toString()]: viewSdcProposalRequest,
    [getPreviewCurrentProposalSdc.fulfilled.toString()]: viewSdcProposalSuccess,
    [getPreviewCurrentProposalSdc.rejected.toString()]: viewSdcProposalFail,

    //получение информации о конкретной заявке оператору СДС(holders?)
    [postSdcRequest.pending.toString()]: setProposalSdcRequest,
    [postSdcRequest.fulfilled.toString()]: setProposalSdcSuccess,
    [postSdcRequest.rejected.toString()]: setProposalSdcFail,
});
