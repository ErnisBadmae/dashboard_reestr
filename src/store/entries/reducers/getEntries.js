export const getEntriesRequest = (state, action) => {
    return { ...state, loading: true };
};

export const getEntriesSuccess = (state, action) => {
    return { ...state, loading: false, entries: action.payload };
};

export const getEntriesFail = (state, action) => {
    return { ...state, loading: false };
};

//RequestsSds

export const getRequestsSdsRequest = (state, action) => {
    return { ...state, loading: true };
};

export const getRequestsSdsSuccess = (state, action) => {
    return { ...state, loading: false, requestsSds: action.payload };
};

export const getRequestsSdsFail = (state, action) => {
    return { ...state, loading: false };
};

//RequestsSdsView

export const getViewSdsRequest = (state, action) => {
    return { ...state, loading: true };
};

export const getViewtsSdsSuccess = (state, action) => {
    return { ...state, loading: false, requestSdsView: action.payload };
};

export const getViewSdsFail = (state, action) => {
    return { ...state, loading: false };
};
