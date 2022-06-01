import { entriesReducer } from './entries/reducers/entries.reducer';

import authReducer from './auth/authSlice';
import { combineReducers } from '@reduxjs/toolkit';
import { proposalReducer } from './entries/reducers/proposal.reducer';

export const rootReducer = combineReducers({
    entries: entriesReducer,
    auth: authReducer,
    proposal: proposalReducer,
});
