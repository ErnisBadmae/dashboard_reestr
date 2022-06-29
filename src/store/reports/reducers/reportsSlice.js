import {
    getReportProfSdcByCount,
    getReportProfSdcFormByYears,
} from '../actions';
import { createSlice } from '@reduxjs/toolkit';

export const getReports = createSlice({
    name: 'getReports',
    initialState: {
        reportProfSdcCount: {},
        reportProfSdcYears: {},
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
                state.reportProfSdcCount = action.payload.report;
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
                state.reportProfSdcYears = action.payload.report;
            })
            .addCase(getReportProfSdcFormByYears.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
                state.reportProfSdcYears = null;
            });
    },
});

export default getReports.reducer;
