//Функции по получению данных для списка сдс-holders

export const getRequestsSdsProposalRequest = (state, action) => {
    return { ...state, loading: true };
};

export const getRequestsSdsProposalSuccess = (state, action) => {
    return { ...state, loading: false, proposalSdcList: action.payload };
};

export const getRequestsSdsProposalFail = (state, action) => {
    return { ...state, loading: false };
};
