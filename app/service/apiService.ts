// app/service/provinceApi.ts
import { Province } from '@/app/data/model/provinceModel';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const GHN_TOKEN = '8ff33aa8-baa7-11ef-9083-dadc35c0870d';

export const provinceApi = createApi({
  reducerPath: 'provinceApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://dev-online-gateway.ghn.vn/shiip/public-api/',
    prepareHeaders: (headers) => {
      headers.set('Token', GHN_TOKEN);
      headers.set('Content-Type', 'application/json');
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getProvinces: builder.query<Province[], void>({
      query: () => 'master-data/province',
      transformResponse: (response: any) =>
        response.data.map((p: any) => ({
          id: p.ProvinceID,
          name: p.ProvinceName,
        })),
    }),
  }),
});

export const { useGetProvincesQuery } = provinceApi;
