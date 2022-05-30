import { createReducer } from '@reduxjs/toolkit';
import { getEntries, getRequestSds, postDeclarations } from '../actions';
import {
    getEntriesFail,
    getEntriesRequest,
    getEntriesSuccess,
    getRequestsSdsFail,
    getRequestsSdsRequest,
    getRequestsSdsSuccess,
    getViewSdsFail,
    getViewSdsRequest,
    getViewtsSdsSuccess,
} from './getEntries';
import { getCurrentCard } from '../actions/getCurrentCard';

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
    //получение знанчений для списка заявок СДС
    [getRequestSds.pending.toString()]: getRequestsSdsRequest,
    [getRequestSds.fulfilled.toString()]: getRequestsSdsSuccess,
    [getRequestSds.rejected.toString()]: getRequestsSdsFail,
    //получение информации о конкретной заявке
    [getCurrentCard.pending.toString()]: getViewSdsRequest,
    [getCurrentCard.fulfilled.toString()]: getViewtsSdsSuccess,
    [getCurrentCard.rejected.toString()]: getViewSdsFail,
});
