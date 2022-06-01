import { createReducer } from '@reduxjs/toolkit';
import {
    getEntries,
    getCurrentCard,
    getCurrentProposalSdc,
    getProposalSdcList,
    getRequestSdsList,
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

    //получение списка holders
    getRequestsSdsProposalFail,
    getRequestsSdsProposalRequest,
    getRequestsSdsProposalSuccess,

    //сетаем заявку оператора СДС
    setProposalSdcFail,
    setProposalSdcRequest,
    setProposalSdcSuccess,
} from './getEntries';

import {
    //получение объекта - заявка юзерСДС
    viewSdsFail,
    viewSdsRequest,
    viewSdsSuccess,

    //получение объекта - заявка на вступление СДС
    viewSdcProposalFail,
    viewSdcProposalRequest,
    viewsSdcProposalSuccess,
} from './viewCurrent';

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

    //получение знанчений для списка заявок на вступление в систему(регистрация юзеров)
    [getRequestSdsList.pending.toString()]: getRequestsSdsRequest,
    [getRequestSdsList.fulfilled.toString()]: getRequestsSdsSuccess,
    [getRequestSdsList.rejected.toString()]: getRequestsSdsFail,

    //получение информации о конкретной заявке на вступление в систему(юзер)
    [getCurrentCard.pending.toString()]: viewSdsRequest,
    [getCurrentCard.fulfilled.toString()]: viewSdsSuccess,
    [getCurrentCard.rejected.toString()]: viewSdsFail,

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
