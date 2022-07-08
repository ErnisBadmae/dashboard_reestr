import {
    getReportProfSdcByCount,
    getReportProfSdcFormByYears,
    getMonthsInclusionReport,
    getReportExpertsProfSdc,
} from '../actions';
import { createSlice } from '@reduxjs/toolkit';

export const getReports = createSlice({
    name: 'getReports',
    initialState: {
        reportProfSdcCount: {},
        reportProfSdcYears: {},
        reportProfSdcMonth: {},
        reportProfSdcExperts: {},
        isLoading: false,
        isSuccess: false,
        errorMessage: '',
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getReportProfSdcByCount.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getReportProfSdcByCount.fulfilled, (state, action) => {
                state.isLoading = false;
                state.reportProfSdcCount = action.payload;
            })
            .addCase(getReportProfSdcByCount.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
                state.reportProfSdcCount = null;
            })

            .addCase(getReportProfSdcFormByYears.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getReportProfSdcFormByYears.fulfilled, (state, action) => {
                state.isLoading = false;
                state.reportProfSdcYears = action.payload;
            })
            .addCase(getReportProfSdcFormByYears.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
                state.reportProfSdcYears = null;
            })
            .addCase(getMonthsInclusionReport.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getMonthsInclusionReport.fulfilled, (state, action) => {
                state.isLoading = false;
                state.reportProfSdcMonth = action.payload;
            })
            .addCase(getMonthsInclusionReport.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
                state.reportProfSdcMonth = null;
            })

            .addCase(getReportExpertsProfSdc.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getReportExpertsProfSdc.fulfilled, (state, action) => {
                state.isLoading = false;
                state.reportProfSdcExperts = action.payload;
            })
            .addCase(getReportExpertsProfSdc.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
                state.reportProfSdcExperts = null;
            });
    },
});

export default getReports.reducer;
