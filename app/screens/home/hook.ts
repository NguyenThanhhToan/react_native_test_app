// useHomeScreen.ts
import { logout } from '@/app/redux/slice/authSlice';
import { useAppDispatch, useAppSelector } from '@/app/redux/store/hook';

export function useHomeScreen() {
  const dispatch = useAppDispatch();
  const username = useAppSelector((state) => state.auth.user?.username);

  const handleLogout = () => {
    dispatch(logout());
  };

  return { username, handleLogout };
}