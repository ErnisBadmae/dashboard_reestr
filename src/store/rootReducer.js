import { combineReducers } from '@reduxjs/toolkit';
import { entriesReducer } from './entries/reducers/entries.reducer';
import { entriesRegistryReducer } from './registry/reducers/entriesRegistry.reducer';
import { proposalReducer } from './proposal/reducers/proposal.reducer';

import authReducer from './auth/authSlice';
import currentProposalTest from './proposal/proposalSlice';
import getUsers from './users/reducers/usersSilce';
import documents from './documents/reducers/documentsSlice';

export const rootReducer = combineReducers({
    auth: authReducer,
    proposalTest: currentProposalTest,
    users: getUsers,
    files: documents,
    registries: entriesRegistryReducer,
    entries: entriesReducer,
    proposal: proposalReducer,
});
