export const getUsersRequest = (state, action) => {
  return { ...state, loading: true };
};

export const getUsersSuccess = (state, action) => {
  return { ...state, loading: false, users: action.payload };
};

export const getUsersFail = (state, action) => {
  return { ...state, loading: false };
};
