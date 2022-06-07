import { createAsyncThunk } from '@reduxjs/toolkit';
import { correctlyDate } from '../../../helpers/utils';
import $api from '../../../http';

export const getProposalSdcList = createAsyncThunk(
    'getRequestSdcCertifHolder/get',
    async (dispatch) => {
        const result = await $api.post(
            '/request/request_sdc_standard_certification/get_request_sdc_header_list'
        );
        const value = result.data.data.data.map((el) => {
            return {
                ...el,
                dttm_created: correctlyDate(el.dttm_created),
                dttm_updated: correctlyDate(el.dttm_updated),
                registration_date: correctlyDate(el.registration_date),
            };
        });
        return value;
    }
);
