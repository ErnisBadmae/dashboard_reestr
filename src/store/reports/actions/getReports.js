import { createAsyncThunk } from '@reduxjs/toolkit';
// import { correctlyDate } from '../../../helpers/utils';
import $api from '../../../http';

export const getReportProfSdcByCount = createAsyncThunk(
    'getReportProfSdcFormByCount/get',
    async () => {
        const result = await $api.post('/register/report/prof_sdc_form1');

        return result.data.data.report;
        //    return {
        //        report_date: '2022-07-01 10:36:59',
        //        report_title: 'Отчет по количеству',
        //        data: {
        //            register_sdc_count: {
        //                title: 'Количество СДС',
        //                cnt: 5,
        //            },
        //            register_oc_count: {
        //                title: 'Количество ОС',
        //                cnt: 3,
        //            },
        //            register_oc_certified_experts_count: {
        //                title: 'Аттестовано Экспертов',
        //                cnt: 1,
        //            },
        //            register_oc_issued_certificates_count: {
        //                title: 'Выдано Сертификатов',
        //                cnt: 2,
        //            },
        //        },
        //    };
    }
);

export const getReportProfSdcFormByYears = createAsyncThunk(
    'getReportProfSdcFormByYears/get',
    async () => {
        const result = await $api.post('/register/report/prof_sdc_form2', {});

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
        // return {
        //     report: {
        //         report_date: '2022-07-01 10:37:27',
        //         report_title: 'Отчет по включению по месяцам',
        //         dateFrom: '2021-04-01',
        //         dateTo: '2022-05-31',
        //         data: [
        //             {
        //                 month: '1',
        //                 monthName: 'Январь',
        //                 register_sdc_count: {
        //                     title: 'СДС по дате регистрации',
        //                     cnt: 3,
        //                 },
        //                 register_oc_count: {
        //                     title: 'ОС по дате регистрации',
        //                     cnt: 1,
        //                 },
        //                 register_oc_certified_experts_count: {
        //                     title: 'Аттестовано Экспертов',
        //                     cnt: 4,
        //                 },
        //                 register_oc_issued_certificates_count: {
        //                     title: 'Выдано Сертификатов',
        //                     cnt: 1,
        //                 },
        //             },
        //             {
        //                 month: '3',
        //                 monthName: 'Март',
        //                 register_sdc_count: {
        //                     title: 'СДС по дате регистрации',
        //                     cnt: 2,
        //                 },
        //                 register_oc_count: {
        //                     title: 'ОС по дате регистрации',
        //                     cnt: 1,
        //                 },
        //                 register_oc_certified_experts_count: {
        //                     title: 'Аттестовано Экспертов',
        //                     cnt: 3,
        //                 },
        //                 register_oc_issued_certificates_count: {
        //                     title: 'Выдано Сертификатов',
        //                     cnt: 5,
        //                 },
        //             },
        //             {
        //                 month: '4',
        //                 monthName: 'Апрель',
        //                 register_sdc_count: {
        //                     title: 'СДС по дате регистрации',
        //                     cnt: 3,
        //                 },
        //                 register_oc_count: {
        //                     title: 'ОС по дате регистрации',
        //                     cnt: 1,
        //                 },
        //                 register_oc_certified_experts_count: {
        //                     title: 'Аттестовано Экспертов',
        //                     cnt: 1,
        //                 },
        //                 register_oc_issued_certificates_count: {
        //                     title: 'Выдано Сертификатов',
        //                     cnt: 2,
        //                 },
        //             },
        //         ],
        //     },
        // };
    }
);

export const getReportExpertsProfSdc = createAsyncThunk(
    'getReportExpertsProfSdc/get',
    async () => {
        const result = await $api.post('/register/report/prof_sdc_form4');

        return result.data.data.report;
        //    return {
        //        success: true,
        //        message: 'OK',
        //        data: {
        //            report: {
        //                report_date: '2022-07-01 10:37:42',
        //                report_title: 'Отчет по экспертам',
        //                data: {
        //                    announced_count: {
        //                        title: 'Заявлено',
        //                        cnt: 10,
        //                    },
        //                    admitted_count: {
        //                        title: 'Допущено к аттестации',
        //                        cnt: 7,
        //                    },
        //                    certified_count: {
        //                        title: 'Аттестовано',
        //                        cnt: 5,
        //                    },
        //                    certification_failed_count: {
        //                        title: 'Не прошли аттестацию',
        //                        cnt: 2,
        //                    },
        //                },
        //            },
        //        },
        //    };
    }
);
