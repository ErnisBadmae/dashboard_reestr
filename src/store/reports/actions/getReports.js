import { createAsyncThunk } from '@reduxjs/toolkit';
// import { correctlyDate } from '../../../helpers/utils';
import $api from '../../../http';

export const getReportProfSdcForm1 = createAsyncThunk(
    'getReportProfSdcForm1/get',
    async (payload) => {
        const result = await $api.post('/report/prof_sdc_form1', {});
        console.log(result, 'getReportProfSdcForm1');

        return result;
    }
);

export const getReportProfSdcForm2 = createAsyncThunk(
    'getReportProfSdcForm2/get',
    async (id) => {
        const result = await $api.get('/report/prof_sdc_form2', {});

        return result;
    }
);
