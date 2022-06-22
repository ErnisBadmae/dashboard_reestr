import { createAsyncThunk } from '@reduxjs/toolkit';
import { correctlyDate } from '../../../helpers/utils';
import axios from 'axios';

export const getData = createAsyncThunk('dataRegistry/get', async (payload) => {
    const result = await axios.post(
        `https://api-prof-sdc.anonamis.ru/api/register${payload.pathname}`,
        payload.filterValues ? { filters: payload.filterValues } : null
    );
    const value = result.data.data.data.map((el) => {
        return {
            ...el,
            certificate_date: correctlyDate(el.certificate_date),
            valid_date: correctlyDate(el.valid_date),
            registration_date: correctlyDate(el.registration_date),
        };
    });
    return value;
});
