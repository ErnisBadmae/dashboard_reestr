import { createReducer } from '@reduxjs/toolkit';
import { getCurrentProposalSdc, getProposalSdcList } from '../actions';
import {
    //получение списка holders
    getRequestsSdsProposalFail,
    getRequestsSdsProposalRequest,
    getRequestsSdsProposalSuccess,
} from './getEntries';

import {
    //получение объекта - заявка на вступление СДС
    viewSdcProposalFail,
    viewSdcProposalRequest,
    viewsSdcProposalSuccess,
} from './viewCurrent';

const initialState = {
    proposalSdcList: [],
    currentProposalSdc: {},
    fromPostProposalSdc: {},
};

export const proposalReducer = createReducer(initialState, {
    //получение знанчений для списка заявок СДС-holders
    [getProposalSdcList.pending.toString()]: getRequestsSdsProposalRequest,
    [getProposalSdcList.fulfilled.toString()]: getRequestsSdsProposalSuccess,
    [getProposalSdcList.rejected.toString()]: getRequestsSdsProposalFail,

    //получение информации о конкретной заявке оператору СДС(holders?)
    [getCurrentProposalSdc.pending.toString()]: viewSdcProposalRequest,
    [getCurrentProposalSdc.fulfilled.toString()]: viewsSdcProposalSuccess,
    [getCurrentProposalSdc.rejected.toString()]: viewSdcProposalFail,
});
