import { createReducer } from '@reduxjs/toolkit';
import { getEntries, getRequestSds } from '../actions';
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
import { getView } from '../actions/getView';
const initialState = {
    loading: false,
    entries: [],
    requestsSds: [],
    requestSdsView: {},
};

export const entriesReducer = createReducer(initialState, {
    [getEntries.pending.toString()]: getEntriesRequest,
    [getEntries.fulfilled.toString()]: getEntriesSuccess,
    [getEntries.rejected.toString()]: getEntriesFail,
    [getRequestSds.pending.toString()]: getRequestsSdsRequest,
    [getRequestSds.fulfilled.toString()]: getRequestsSdsSuccess,
    [getRequestSds.rejected.toString()]: getRequestsSdsFail,
    [getView.pending.toString()]: getViewSdsRequest,
    [getView.fulfilled.toString()]: getViewtsSdsSuccess,
    [getView.rejected.toString()]: getViewSdsFail,
});
