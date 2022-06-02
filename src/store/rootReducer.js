import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice';
import { entriesReducer } from './entries/reducers/entries.reducer';
import { proposalReducer } from './proposal/reducers/proposal.reducer';

export const rootReducer = combineReducers({
    entries: entriesReducer,
    auth: authReducer,
    proposal: proposalReducer,
});
