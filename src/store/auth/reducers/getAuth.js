export const getLoginRequest = (state, action) => {
    return { ...state, isLoading: true, isSuccess: false };
};

export const getLoginSuccess = (state, action) => {
    return {
        ...state,
        isLoading: false,
        isSuccess: true,
        user: action.payload.user,
        token: action.payload.token,
    };
};

export const getLoginFail = (state, action) => {
    return { ...state, isLoading: false, isSuccess: false };
};
