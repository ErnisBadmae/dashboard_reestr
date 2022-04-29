import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './rootReducer';
import { createLogger } from 'redux-logger';

const loggerMiddleware = createLogger();

export default configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    if (process.env.NODE_ENV !== 'production') {
      return getDefaultMiddleware().concat(loggerMiddleware);
    }
    return getDefaultMiddleware();
  },
});
