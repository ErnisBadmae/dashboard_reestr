import { createAsyncThunk } from '@reduxjs/toolkit';
import { correctlyDate } from '../../../helpers/utils';
import $api from '../../../http';

export const getProposalOsList = createAsyncThunk(
    'getProposalOsList/get',
    async (payload) => {
        const result = await $api.post(
            '/request/request_sdc_standard_certification/get_request_sdc_header_list',
            {
                row_page: payload.row_page,
                page: payload.page,
                filters: payload.filters,
            }
        );
        const value = result.data.data.data.map((el) => {
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

export const getCurrentProposalOs = createAsyncThunk(
    'getCurrentProposalOs/view',
    async (cardId) => {
        let result = await $api.get(
            `request/request_sdc_standard_certification/get_request_sdc_header/${cardId}`
        );

        const value = result.data.data?.requestSdcHeader;
        return {
            ...value,
            dttm_created: correctlyDate(value.dttm_created),
            dttm_updated: correctlyDate(value.dttm_updated),
            dttm_desicion: correctlyDate(value.dttm_desicion),
        };
    }
);
