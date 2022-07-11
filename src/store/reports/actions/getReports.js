import { createAsyncThunk } from '@reduxjs/toolkit';
import $api from '../../../http';

export const getReportProfSdcByCount = createAsyncThunk(
    'getReportProfSdcFormByCount/get',
    async () => {
        const result = await $api.post('/register/report/prof_sdc_form1');

        return result.data.data.report;
    }
);

export const getReportProfSdcFormByYears = createAsyncThunk(
    'getReportProfSdcFormByYears/get',
    async () => {
        const result = await $api.post('/register/report/prof_sdc_form2');

        return result.data.data.report;
    }
);

export const getMonthsInclusionReport = createAsyncThunk(
    'getMonthsInclusionReport/get',
    async (payload) => {
        const result = await $api.post(
            '/register/report/prof_sdc_form3',
            payload
        );

        return result.data.data.report;
    }
);

export const getReportExpertsProfSdc = createAsyncThunk(
    'getReportExpertsProfSdc/get',
    async () => {
        const result = await $api.post('/register/report/prof_sdc_form4');

        return result.data.data.report;
    }
);
