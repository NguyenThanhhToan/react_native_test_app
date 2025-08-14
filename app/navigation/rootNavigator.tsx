import { RootState } from '@/app/redux/store/appStore';
import React from 'react';
import { useSelector } from 'react-redux';
import AuthStack from './authStack';
import MainTab from './mainTab';

export default function RootNavigator() {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  return isLoggedIn ? <MainTab /> : <AuthStack />;
}