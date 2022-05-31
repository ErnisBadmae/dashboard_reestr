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

export const getRequestsSdsHolderRequest = (state, action) => {
    return { ...state, loading: true };
};

export const getRequestsSdsHolderSuccess = (state, action) => {
    return { ...state, loading: false, requestsSds: action.payload };
};

export const getRequestsSdsHolderFail = (state, action) => {
    return { ...state, loading: false };
};
