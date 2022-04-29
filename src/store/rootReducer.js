import { usersReducer } from './users/reducers/users.reducer';
import { combineReducers } from '@reduxjs/toolkit';

export const rootReducer = combineReducers({
  entries: usersReducer,
});
