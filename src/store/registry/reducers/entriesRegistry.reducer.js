import { createReducer } from '@reduxjs/toolkit';
import { getData } from '../actions/getData';
import { getView } from '../actions/getView';

import {
    getEntriesFail,
    getEntriesRequest,
    getEntriesSuccess,
    getViewFail,
    getViewRequest,
    getViewSuccess,
} from './getRegistryEntries';

const initialState = {
    loading: false,
    entries: [],
    currentCard: null,
};

export const entriesRegistryReducer = createReducer(initialState, {
    [getData.pending.toString()]: getEntriesRequest,
    [getData.fulfilled.toString()]: getEntriesSuccess,
    [getData.rejected.toString()]: getEntriesFail,
    [getView.pending.toString()]: getViewRequest,
    [getView.fulfilled.toString()]: getViewSuccess,
    [getView.rejected.toString()]: getViewFail,
});
