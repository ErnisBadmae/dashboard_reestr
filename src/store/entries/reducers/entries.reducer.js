import { createReducer } from '@reduxjs/toolkit';
import { getEntries, getCurrentCard, getRequestSdsList } from '../actions';
import {
    getEntriesFail,
    getEntriesRequest,
    getEntriesSuccess,

    //получение списка для заявок юзерСДС
    getRequestsSdsFail,
    getRequestsSdsRequest,
    getRequestsSdsSuccess,
} from './getEntries';

import {
    //получение объекта - заявка юзерСДС
    viewSdsFail,
    viewSdsRequest,
    viewSdsSuccess,
} from '../reducers/viewCurrent';

const initialState = {
    loading: false,
    entries: [],
    requestsSds: [],
    requestCurrentCardSds: {},
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
});
