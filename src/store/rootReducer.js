import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice';
import { entriesReducer } from './entries/reducers/entries.reducer';
import { entriesRegistryReducer } from './registry/reducers/entriesRegistry.reducer';
import { proposalReducer } from './proposal/reducers/proposal.reducer';
import currentProposalTest from './proposal/proposalSlice';

export const rootReducer = combineReducers({
    auth: authReducer,
    proposalTest: currentProposalTest,
    registries: entriesRegistryReducer,
    entries: entriesReducer,
    proposal: proposalReducer,
});
