// src/store/index.ts
import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../slice/authSlice';
import provinceReducer from '../slice/provinceSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    province: provinceReducer
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
