// app/service/locationApi.ts
import { District } from '@/app/data/model/districtModel';
import { Province } from '@/app/data/model/provinceModel';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const GHN_TOKEN = '8ff33aa8-baa7-11ef-9083-dadc35c0870d';

export const locationApi = createApi({
  reducerPath: 'locationApi',
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

    getDistricts: builder.query<District[], number>({
      query: (provinceId) => {
        return {
          url: 'master-data/district',
          method: 'POST',
          headers: {
            'Token': GHN_TOKEN,
            'Content-Type': 'application/json',
          },
          body: { province_id: provinceId },
        };
      },
      transformResponse: (response: any) =>
        response.data.map((d: any) => ({
          id: d.DistrictID,
          name: d.DistrictName,
        })),
    }),
  }),
});
export const { useGetProvincesQuery, useGetDistrictsQuery } = locationApi;
