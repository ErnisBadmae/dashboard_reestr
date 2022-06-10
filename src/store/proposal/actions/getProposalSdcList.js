import { createAsyncThunk } from '@reduxjs/toolkit';
import { correctlyDate } from '../../../helpers/utils';
import $api from '../../../http';

export const getProposalSdcList = createAsyncThunk(
    'getRequestSdcCertifHolder/get',
    async (payload) => {
        const result = await $api.post(
            '/request/request_sdc_standard_certification/get_request_sdc_header_list',
            { row_page: payload.row_page, page: payload.page }
        );
        const value = result.data.data.data
            //   .filter((el) => el.status.title === 'Черновик')
            .map((el) => {
                return {
                    ...el,
                    dttm_created: correctlyDate(el.dttm_created),
                    dttm_updated: correctlyDate(el.dttm_updated),
                    registration_date: correctlyDate(el.registration_date),
                };
            });
        const totalElements = result.data.data.data_header.count;
        return { data: value, totalElements };
    }
);
