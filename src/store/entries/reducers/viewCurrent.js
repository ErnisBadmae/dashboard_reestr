//функция по получению данных на конкретную заявку

export const viewSdsRequest = (state, action) => {
    return { ...state, loading: true };
};

export const viewSdsSuccess = (state, action) => {
    return { ...state, loading: false, requestCurrentCardSds: action.payload };
};

export const viewSdsFail = (state, action) => {
    return { ...state, loading: false };
};

//Функции по получению данных для конкретной заявки оператору СДС
export const viewSdcProposalRequest = (state, action) => {
    return { ...state, loading: true };
};

export const viewsSdcProposalSuccess = (state, action) => {
    return { ...state, loading: false, proposalSdc: action.payload };
};

export const viewSdcProposalFail = (state, action) => {
    return { ...state, loading: false };
};
