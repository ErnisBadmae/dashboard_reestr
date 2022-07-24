import { combineReducers } from '@reduxjs/toolkit';
import { entriesReducer } from './entries/reducers/entries.reducer';
import { entriesRegistryReducer } from './registry/reducers/entriesRegistry.reducer';
import { proposalReducer } from './proposal/reducers/proposal.reducer';

import authReducer from './auth/authSlice';
import currentProposalTest from './proposal/proposalSlice';
import getUsers from './users/reducers/usersSilce';
import documents from './documents/reducers/documentsSlice';
import getReports from './reports/reducers/reportsSlice';
import getMessages from './messages/reducers/messageSlice';

export const rootReducer = combineReducers({
    auth: authReducer,
    proposalTest: currentProposalTest,
    users: getUsers,
    files: documents,
    reports: getReports,
    messages: getMessages,
    registries: entriesRegistryReducer,
    entries: entriesReducer,
    proposal: proposalReducer,
});
