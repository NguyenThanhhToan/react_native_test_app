// src/screens/hooks/useProvinceScreen.ts
import { fetchProvinces } from '@/app/redux/slice/provinceSlice';
import { AppDispatch, RootState } from '@/app/redux/store/appStore';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const useProvinceScreen = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { provinces, loading, error } = useSelector((state: RootState) => state.province);

  useEffect(() => {
    dispatch(fetchProvinces());
  }, [dispatch]);

  return { provinces, loading, error };
};
