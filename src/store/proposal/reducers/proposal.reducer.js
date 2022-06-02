import { createReducer } from '@reduxjs/toolkit';
import {
    getCurrentProposalSdc,
    getProposalSdcList,
    postSdcRequest,
} from '../../proposal/actions';

import {
    //получение объекта - заявка на вступление СДС
    viewSdcProposalFail,
    viewSdcProposalRequest,
    viewsSdcProposalSuccess,
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

export const proposalReducer = createReducer(initialState, {
    //получение знанчений для списка заявок СДС-holders
    [getProposalSdcList.pending.toString()]: getRequestsSdsProposalRequest,
    [getProposalSdcList.fulfilled.toString()]: getRequestsSdsProposalSuccess,
    [getProposalSdcList.rejected.toString()]: getRequestsSdsProposalFail,

    //получение информации о конкретной заявке оператору СДС(holders?)
    [getCurrentProposalSdc.pending.toString()]: viewSdcProposalRequest,
    [getCurrentProposalSdc.fulfilled.toString()]: viewsSdcProposalSuccess,
    [getCurrentProposalSdc.rejected.toString()]: viewSdcProposalFail,

    //получение информации о конкретной заявке оператору СДС(holders?)
    [postSdcRequest.pending.toString()]: setProposalSdcRequest,
    [postSdcRequest.fulfilled.toString()]: setProposalSdcSuccess,
    [postSdcRequest.rejected.toString()]: setProposalSdcFail,
});
