import { createReducer } from '@reduxjs/toolkit';
// import { createSlice } from '@reduxjs/toolkit';
import {
    //     getCurrentProposalSdc,
    //     postSdcRequest,
    getProposalSdcList,
    //     getPreviewCurrentProposalSdc,
} from '../../proposal/actions';

import //получение объекта - заявка на вступление СДС
//     viewSdcProposalFail,
//     viewSdcProposalRequest,
//     viewSdcProposalSuccess,
//     setProposalSdcFail,
//     setProposalSdcRequest,
//     setProposalSdcSuccess,
//превью
//     setPreviewProposalSdcFail,
//     setPreviewProposalSdcRequest,
//     setPreviewProposalSdcSuccess,
'./viewCurrent';

import {
    //списки заявок СДС
    getRequestsSdsProposalFail,
    getRequestsSdsProposalRequest,
    getRequestsSdsProposalSuccess,
} from './getProposalType';

const initialState = {
    proposalSdcList: [],
    //     previewProposalSdc: {},
    //     currentProposalSdc: {},
};

export const proposalReducer = createReducer(initialState, {
    //получение знанчений для списка заявок СДС-holders
    [getProposalSdcList.pending.toString()]: getRequestsSdsProposalRequest,
    [getProposalSdcList.fulfilled.toString()]: getRequestsSdsProposalSuccess,
    [getProposalSdcList.rejected.toString()]: getRequestsSdsProposalFail,

    //получение краткой информации о заявке
    //     [getPreviewCurrentProposalSdc.pending.toString()]:
    //         setPreviewProposalSdcRequest,
    //     [getPreviewCurrentProposalSdc.fulfilled.toString()]:
    //         setPreviewProposalSdcSuccess,
    //     [getPreviewCurrentProposalSdc.rejected.toString()]:
    //         setPreviewProposalSdcFail,

    //получение информации о конкретной заявке оператору СДС(holders?)
    //     [getCurrentProposalSdc.pending.toString()]: setProposalSdcRequest,
    //     [getCurrentProposalSdc.fulfilled.toString()]: setProposalSdcSuccess,
    //     [getCurrentProposalSdc.rejected.toString()]: setProposalSdcFail,
    //получение информации о конкретной заявке оператору СДС(holders?)
    //     [postSdcRequest.pending.toString()]: setProposalSdcRequest,
    //     [postSdcRequest.fulfilled.toString()]: setProposalSdcSuccess,
    //     [postSdcRequest.rejected.toString()]: setProposalSdcFail,

    //обновление стэйта
});
