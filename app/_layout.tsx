import { store } from '@/app/redux/store/appStore';
import { Slot, useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Provider, useSelector } from 'react-redux';

function LayoutWrapper() {
  const router = useRouter();
  const isLoggedIn = useSelector((state: any) => state.auth.isLoggedIn);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    if (isLoggedIn) {
      router.replace('/screens/home');
    } else {
      router.replace('/screens/login');
    }
  }, [isLoggedIn, mounted]);

  return <Slot />;
}

export default function RootLayout() {
  return (
    <Provider store={store}>
      <LayoutWrapper />
    </Provider>
  );
}
