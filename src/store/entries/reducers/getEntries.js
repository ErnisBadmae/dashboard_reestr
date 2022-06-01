export const getEntriesRequest = (state, action) => {
    return { ...state, loading: true };
};

export const getEntriesSuccess = (state, action) => {
    return { ...state, loading: false, entries: action.payload };
};

export const getEntriesFail = (state, action) => {
    return { ...state, loading: false };
};

//Функции по получению данных для списка заявок СДС

export const getRequestsSdsRequest = (state, action) => {
    return { ...state, loading: true };
};

export const getRequestsSdsSuccess = (state, action) => {
    return { ...state, loading: false, requestsSds: action.payload };
};

export const getRequestsSdsFail = (state, action) => {
    return { ...state, loading: false };
};

//функция по получению данных на конкретную заявку

export const getViewSdsRequest = (state, action) => {
    return { ...state, loading: true };
};

export const getViewtsSdsSuccess = (state, action) => {
    return { ...state, loading: false, requestCurrentCardSds: action.payload };
};

export const getViewSdsFail = (state, action) => {
    return { ...state, loading: false };
};

//Функции по получению данных для списка сдс-holders

export const getRequestsSdsProposalRequest = (state, action) => {
    return { ...state, loading: true };
};

export const getRequestsSdsProposalSuccess = (state, action) => {
    return { ...state, loading: false, proposalSdc: action.payload };
};

export const getRequestsSdsProposalFail = (state, action) => {
    return { ...state, loading: false };
};

//Функции по получению данных для конкретной заявки оператору СДС
export const getViewSdcProposalRequest = (state, action) => {
    return { ...state, loading: true };
};

export const getViewtsSdcProposalSuccess = (state, action) => {
    return { ...state, loading: false, proposalSdc: action.payload };
};

export const getViewSdcProposalFail = (state, action) => {
    return { ...state, loading: false };
};

//Функции отправления данных по заявке СДС
export const setProposalSdcRequest = (state, action) => {
    return { ...state, loading: true };
};

export const setProposalSdcSuccess = (state, action) => {
    return { ...state, loading: false, currentProposalSdc: action.payload };
};

export const setProposalSdcFail = (state, action) => {
    return { ...state, loading: false };
};
