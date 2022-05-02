import { usersReducer } from './users/reducers/users.reducer';
import authReducer from './auth/authSlice'

import { combineReducers } from '@reduxjs/toolkit';

export const rootReducer = combineReducers({
  entries: usersReducer,
  auth: authReducer
});
