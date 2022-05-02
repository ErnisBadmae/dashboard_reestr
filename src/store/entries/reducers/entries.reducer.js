import { createReducer } from '@reduxjs/toolkit';
import { getEntries } from '../actions';
import {
  getEntriesFail,
  getEntriesRequest,
  getEntriesSuccess,
} from './getEntries';

const initialState = {
  loading: false,
  entries: [],
};

export const entriesReducer = createReducer(initialState, {
  [getEntries.pending.toString()]: getEntriesRequest,
  [getEntries.fulfilled.toString()]: getEntriesSuccess,
  [getEntries.rejected.toString()]: getEntriesFail,
});
