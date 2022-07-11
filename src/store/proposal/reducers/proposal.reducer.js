import { createReducer } from '@reduxjs/toolkit';

import { getProposalSdcList } from '../../proposal/actions';

import {
    //списки заявок СДС
    getRequestsSdsProposalFail,
    getRequestsSdsProposalRequest,
    getRequestsSdsProposalSuccess,
} from './getProposalType';

const initialState = {
    proposalSdcList: [],
};

export const proposalReducer = createReducer(initialState, {
    //получение знанчений для списка заявок СДС-holders
    [getProposalSdcList.pending.toString()]: getRequestsSdsProposalRequest,
    [getProposalSdcList.fulfilled.toString()]: getRequestsSdsProposalSuccess,
    [getProposalSdcList.rejected.toString()]: getRequestsSdsProposalFail,
});
