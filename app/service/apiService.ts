import { Province } from '@/app/data/model/provinceModel';
import axios from 'axios';

const GHN_TOKEN = '8ff33aa8-baa7-11ef-9083-dadc35c0870d';

export const getProvinces = async (): Promise<Province[]> => {
  const response = await axios.get(
    'https://dev-online-gateway.ghn.vn/shiip/public-api/master-data/province',
    {
      headers: {
        'Token': GHN_TOKEN,
        'Content-Type': 'application/json'
      }
    }
  );

  return response.data.data.map((p: any) => ({
    id: p.ProvinceID,
    name: p.ProvinceName
  }));
};
