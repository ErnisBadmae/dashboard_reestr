import { createReducer } from '@reduxjs/toolkit';
import {
    getEntries,
    getCurrentCard,
    getCurrentProposalSdc,
    getRequestSdcProposal,
    getRequestSds,
    postSdcRequest,
} from '../actions';
import {
    getEntriesFail,
    getEntriesRequest,
    getEntriesSuccess,
    //получение списка для заявок юзерСДС
    getRequestsSdsFail,
    getRequestsSdsRequest,
    getRequestsSdsSuccess,
    //получение объекта - заявка юзерСДС
    getViewSdsFail,
    getViewSdsRequest,
    getViewtsSdsSuccess,
    //получение списка holders
    getRequestsSdsProposalFail,
    getRequestsSdsProposalRequest,
    getRequestsSdsProposalSuccess,
    //получение объекта - заявка на вступление СДС
    getViewSdcProposalFail,
    getViewSdcProposalRequest,
    getViewtsSdcProposalSuccess,
    //сетаем заявку оператора СДС
    setProposalSdcFail,
    setProposalSdcRequest,
    setProposalSdcSuccess,
} from './getEntries';

const initialState = {
    loading: false,
    entries: [],
    requestsSds: [],
    requestCurrentCardSds: {},
    proposalSdc: [],
    currentProposalSdc: {},
};

export const entriesReducer = createReducer(initialState, {
    //получение значений для реестра СДС
    [getEntries.pending.toString()]: getEntriesRequest,
    [getEntries.fulfilled.toString()]: getEntriesSuccess,
    [getEntries.rejected.toString()]: getEntriesFail,

    //получение знанчений для списка заявок СДС
    [getRequestSds.pending.toString()]: getRequestsSdsRequest,
    [getRequestSds.fulfilled.toString()]: getRequestsSdsSuccess,
    [getRequestSds.rejected.toString()]: getRequestsSdsFail,

    //получение информации о конкретной заявке
    [getCurrentCard.pending.toString()]: getViewSdsRequest,
    [getCurrentCard.fulfilled.toString()]: getViewtsSdsSuccess,
    [getCurrentCard.rejected.toString()]: getViewSdsFail,

    //получение знанчений для списка заявок СДС-holders
    [getRequestSdcProposal.pending.toString()]: getRequestsSdsProposalRequest,
    [getRequestSdcProposal.fulfilled.toString()]: getRequestsSdsProposalSuccess,
    [getRequestSdcProposal.rejected.toString()]: getRequestsSdsProposalFail,

    //получение информации о конкретной заявке оператору СДС(holders?)
    [getCurrentProposalSdc.pending.toString()]: getViewSdcProposalRequest,
    [getCurrentProposalSdc.fulfilled.toString()]: getViewtsSdcProposalSuccess,
    [getCurrentProposalSdc.rejected.toString()]: getViewSdcProposalFail,

    //получение информации о конкретной заявке оператору СДС(holders?)
    [postSdcRequest.pending.toString()]: setProposalSdcRequest,
    [postSdcRequest.fulfilled.toString()]: setProposalSdcSuccess,
    [postSdcRequest.rejected.toString()]: setProposalSdcFail,
});
