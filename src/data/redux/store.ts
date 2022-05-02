import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import { setAuthHeader } from './middleware';
import { authReducer } from './userSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(createLogger()).concat(setAuthHeader),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
