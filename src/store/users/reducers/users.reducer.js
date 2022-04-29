import { createReducer } from '@reduxjs/toolkit';
import { getUsers } from '../actions';
import { getUsersFail, getUsersRequest, getUsersSuccess } from './getUsers';

const initialState = {
  loading: false,
  users: [],
};

export const usersReducer = createReducer(initialState, {
  [getUsers.pending.toString()]: getUsersRequest,
  [getUsers.fulfilled.toString()]: getUsersSuccess,
  [getUsers.rejected.toString()]: getUsersFail,
});
