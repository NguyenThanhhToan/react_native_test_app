// app/hooks/useLogin.ts
import { mockUsers } from '@/app/data/mockData';
import { login } from '@/app/redux/slice/authSlice';
import type { AppDispatch } from '@/app/redux/store/appStore';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Alert } from 'react-native';
import { useDispatch } from 'react-redux';

export default function useLogin() {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  const handleLogin = () => {
    const user = mockUsers.find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
      dispatch(login(user));
      Alert.alert('Đăng nhập thành công!', `Role: ${user.role}`);

    } else {
      Alert.alert('Sai tài khoản hoặc mật khẩu!');
    }
  };

  return { username, setUsername, password, setPassword, handleLogin };
}