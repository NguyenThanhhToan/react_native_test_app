// useHomeScreen.ts
import { logout } from '@/app/redux/slice/authSlice';
import type { AppDispatch } from '@/app/redux/store/appStore';
import { RootState } from '@/app/redux/store/appStore';
import { useRouter } from 'expo-router';
import { useDispatch, useSelector } from 'react-redux';

export default function useHomeScreen(){
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  const username = useSelector((state: RootState) => state.auth.user?.username);

  const handleLogout = () => {
    dispatch(logout());
  };

  return { username, handleLogout };
};