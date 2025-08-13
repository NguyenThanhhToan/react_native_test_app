// useHomeScreen.ts
import { logout } from '@/app/redux/slice/authSlice';
import { RootState } from '@/app/redux/store/appStore';
import { useRouter } from 'expo-router';
import { useDispatch, useSelector } from 'react-redux';

export default function useHomeScreen(){
  const dispatch = useDispatch();
  const router = useRouter();

  const username = useSelector((state: RootState) => state.auth.username);

  const handleLogout = () => {
    dispatch(logout());
    console.log(username);
    router.replace('/screens/login');
  };

  return { username, handleLogout };
};