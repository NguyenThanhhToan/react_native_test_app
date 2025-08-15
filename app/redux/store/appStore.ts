// src/redux/store/appStore.ts
import { configureStore } from '@reduxjs/toolkit';
import { locationApi } from '../../service/locationApi';
import authReducer from '../slice/authSlice';

const loggerMiddleware = (storeAPI: any) => (next: any) => (action: any) => {
  console.log('[Middleware] Dispatching action:', action.type);
  if (action.payload) console.log('Payload:', action.payload);
  return next(action);
};

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [locationApi.reducerPath]: locationApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(locationApi.middleware, loggerMiddleware),
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
