import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice';
import { entriesReducer } from './entries/reducers/entries.reducer';
import { entriesRegistryReducer } from './registry/reducers/entriesRegistry.reducer';
import { proposalReducer } from './proposal/reducers/proposal.reducer';

import currentProposalTest from './proposal/proposalSlice';
import getUsers from './users/reducers/usersSilce';

export const rootReducer = combineReducers({
    auth: authReducer,
    proposalTest: currentProposalTest,
    users: getUsers,
    registries: entriesRegistryReducer,
    entries: entriesReducer,
    proposal: proposalReducer,
});
