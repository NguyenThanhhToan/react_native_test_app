// src/store/index.ts
import { configureStore } from '@reduxjs/toolkit';
import { provinceApi } from '../../service/apiService';
import authReducer from '../slice/authSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    // province: provinceReducer
    [provinceApi.reducerPath]: provinceApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(provinceApi.middleware),
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
