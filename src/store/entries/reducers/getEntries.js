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

//Функции отправления данных по заявке СДС
export const setProposalSdcRequest = (state, action) => {
    return { ...state, loading: true };
};

export const setProposalSdcSuccess = (state, action) => {
    return { ...state, loading: false, fromPostProposalSdc: action.payload };
};

export const setProposalSdcFail = (state, action) => {
    return { ...state, loading: false };
};
