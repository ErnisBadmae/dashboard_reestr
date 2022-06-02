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
