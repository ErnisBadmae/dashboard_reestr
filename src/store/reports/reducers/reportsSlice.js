import { getReportProfSdcForm1, getReportProfSdcForm2 } from '../actions';
import { createSlice } from '@reduxjs/toolkit';

export const getReports = createSlice({
    name: 'getReports',
    initialState: {
        reportProfSdcCount: {},
        reportProfSdcYears: [],
        isLoading: false,
        isSuccess: false,
        errorMessage: '',
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getReportProfSdcForm1.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getReportProfSdcForm1.fulfilled, (state, action) => {
                state.isLoading = false;
                state.reportProfSdcCount = action.payload;
            })
            .addCase(getReportProfSdcForm1.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
                state.reportProfSdcCount = null;
            })

            .addCase(getReportProfSdcForm2.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getReportProfSdcForm2.fulfilled, (state, action) => {
                state.isLoading = false;
                state.reportProfSdcYears = action.payload;
            })
            .addCase(getReportProfSdcForm2.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
                state.reportProfSdcYears = null;
            });
    },
});

export default getReports.reducer;
