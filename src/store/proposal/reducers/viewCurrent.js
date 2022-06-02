//Функции по получению данных для конкретной заявки оператору СДС
export const viewSdcProposalRequest = (state, action) => {
    return { ...state, loading: true };
};

export const viewsSdcProposalSuccess = (state, action) => {
    return { ...state, loading: false, currentProposalSdc: action.payload };
};

export const viewSdcProposalFail = (state, action) => {
    return { ...state, loading: false };
};
