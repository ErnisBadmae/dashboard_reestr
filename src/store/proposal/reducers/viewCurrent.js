//Функции по получению данных для конкретной заявки оператору СДС
export const viewSdcProposalRequest = (state, action) => {
    return { ...state, loading: true };
};

export const viewSdcProposalSuccess = (state, action) => {
    return { ...state, loading: false, currentProposalSdc: action.payload };
};

export const viewSdcProposalFail = (state, action) => {
    return { ...state, loading: false };
};

//Функции внесения изменнных данных по заявке СДС
export const setProposalSdcRequest = (state, action) => {
    return { ...state, loading: true };
};

export const setProposalSdcSuccess = (state, action) => {
    return { ...state, loading: false, currentProposalSdc: action.payload };
};

export const setProposalSdcFail = (state, action) => {
    return { ...state, loading: false };
};

// export const editProposalCurrent = (state, action) => {

//     return { ...state, currentProposalSdc: action.payload };
// };
