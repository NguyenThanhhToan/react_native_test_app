import { useGetProvincesQuery } from '@/app/service/apiService';

export const useProvinceScreen = () => {
  const { data: provinces, isLoading, error, refetch, isFetching } = useGetProvincesQuery();

  return {
    provinces: provinces || [],
    loading: isLoading,
    fetching: isFetching,
    error,
    refresh: refetch,
  };
};
