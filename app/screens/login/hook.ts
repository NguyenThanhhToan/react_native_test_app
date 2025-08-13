import { login } from '@/app/redux/slice/authSlice';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Alert } from 'react-native';
import { useDispatch } from 'react-redux';

const mockUsers = [
  { username: 'admin', password: '123456', role: 'admin' },
  { username: 'user1', password: 'password1', role: 'user' },
  { username: 'user2', password: 'password2', role: 'user' },
];

export default function useLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogin = () => {
    const user = mockUsers.find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
      Alert.alert('Đăng nhập thành công!', `Role: ${user.role}`);
      dispatch(login({ username: user.username, role: user.role }));

      router.replace('/screens/home');
    } else {
      Alert.alert('Sai tài khoản hoặc mật khẩu!');
    }
  };

  return { username, setUsername, password, setPassword, handleLogin };
}