// import { Province } from '@/app/data/model/provinceModel';
// import { getProvinces } from '@/app/service/apiService';
// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// interface ProvinceState {
//   provinces: Province[];
//   loading: boolean;
//   error: string | null;
// }

// const initialState: ProvinceState = {
//   provinces: [],
//   loading: false,
//   error: null
// };

// export const fetchProvinces = createAsyncThunk<Province[]>(
//   'province/fetchProvinces',
//   async (_, thunkAPI) => {
//     try {
//       const provinces = await getProvinces();
//       return provinces;
//     } catch (error: any) {
//       return thunkAPI.rejectWithValue(error.response?.data || 'Error');
//     }
//   }
// );

// const provinceSlice = createSlice({
//   name: 'province',
//   initialState,
//   reducers: {},
//   extraReducers: builder => {
//     builder
//       .addCase(fetchProvinces.pending, state => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchProvinces.fulfilled, (state, action) => {
//         state.loading = false;
//         state.provinces = action.payload;
//       })
//       .addCase(fetchProvinces.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload as string;
//       });
//   }
// });

// export default provinceSlice.reducer;
