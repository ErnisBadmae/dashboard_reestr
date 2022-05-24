import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    isError: false,
    isSuccess: false,
    isLoading: false,
    menu: {},
};

export const getMenu = createAsyncThunk(
    'menu/get',
    async (payload, thunkAPI) => {
        const menuList = axios.get(
            'http://api-prof-sdc.anonamis.ru/api/register/menu',
            {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token'),
                },
            }
        );
        return menuList;
    }
);

export const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getMenu.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getMenu.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.token = action.payload.token;
            })
            .addCase(getMenu.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
                state.token = null;
            });
    },
});

export default menuSlice.reducer;
