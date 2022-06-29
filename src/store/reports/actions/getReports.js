import { createAsyncThunk } from '@reduxjs/toolkit';
// import { correctlyDate } from '../../../helpers/utils';
// import $api from '../../../http';

export const getReportProfSdcByCount = createAsyncThunk(
    'getReportProfSdcFormByCount/get',
    async (payload) => {
        return {
            report: {
                report_date: '2022-06-28 16:18:20',
                report_title: 'Отчет по количеству',
                data: {
                    // register_sdc_count: 2,
                    register_sdc_count: { title: 'Количество СДС', value: 2 },
                    register_oc_count: { title: 'Количество ОС', value: 2 },
                    register_oc_certified_experts_count: {
                        title: 'Количество сертифицированных экспертов',
                        value: 1,
                    },
                    register_oc_issued_certificates_count: {
                        title: 'Количество сертификатов ОС',
                        value: 2,
                    },
                },
            },
        };
    }
);

export const getReportProfSdcFormByYears = createAsyncThunk(
    'getReportProfSdcFormByYears/get',
    async (id) => {
        // const result = await $api.get('/report/prof_sdc_form2', {});

        return {
            report: {
                report_date: '2022-06-28 16:18:20',
                report_title: 'Отчет по включению по годам',
                data: [
                    {
                        year: '2021',
                        register_sdc_count: {
                            title: 'Количество СДС',
                            value: 0,
                        },
                        register_oc_count: { title: 'Количество ОС', value: 1 },
                        register_oc_certified_experts_count: {
                            title: 'Количество сертифицированных экспертов',
                            value: 0,
                        },
                        register_oc_issued_certificates_count: {
                            title: 'Количество сертификатов ОС',
                            value: 1,
                        },
                    },
                    {
                        year: '2022',
                        register_sdc_count: {
                            title: 'Количество СДС',
                            value: 3,
                        },
                        register_oc_count: { title: 'Количество ОС', value: 2 },
                        register_oc_certified_experts_count: {
                            title: 'Количество сертифицированных экспертов',
                            value: 1,
                        },
                        register_oc_issued_certificates_count: {
                            title: 'Количество сертификатов ОС',
                            value: 1,
                        },
                    },
                ],
            },
        };
    }
);
