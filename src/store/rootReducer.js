// import { usersReducer } from './users/reducers/users.reducer';
import { entriesReducer } from './entries/reducers/entries.reducer';
// import menuReducer from './menuSlice/menuSlice';
// import { authReducer } from './auth/reducers/auth.reduer';

import authReducer from './auth/authSlice';
import { combineReducers } from '@reduxjs/toolkit';

export const rootReducer = combineReducers({
    entries: entriesReducer,
    auth: authReducer,
    //     menu: menuReducer,
});
