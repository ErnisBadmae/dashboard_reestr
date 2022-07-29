import { createAsyncThunk } from '@reduxjs/toolkit';
import $api from '../../../http';
import { correctlyDate } from '../../../helpers/utils';
import { error, info } from '../../../components/Toast/Toast.jsx';

export const changeStatus = createAsyncThunk(
    'changeStatus/check',
    async (payload) => {
        try {
            let res = await $api.post(
                `request/request_sdc_standard_certification/change_sdc_header_status/${payload.id}/${payload.code}`
            );
            info('Статус заявки успешно изменен!');
            console.log(res, 'responseFromcheckstatus');
            //   debugger;
            const value = res.data.data?.requestSdcHeader;
            return {
                ...value,
                dttm_created: correctlyDate(value.dttm_created),
                dttm_updated: correctlyDate(value.dttm_updated),
                dttm_desicion: correctlyDate(value.dttm_desicion),
            };
        } catch (err) {
            error(err.response.data.message);
        }
    }
);

export const changeStatusOc = createAsyncThunk(
    'changeStatus/check',
    async (payload) => {
        try {
            let res = await $api.post(
                `request/request_sdc_standard_certification/change_oc_header_status/${payload.id}/${payload.code}`
            );
            info('Статус заявки успешно изменен!');
            console.log(res, 'responseFromcheckstatus');
            //   debugger;
            const value = res.data.data?.requestSdcHeader;
            return {
                ...value,
                dttm_created: correctlyDate(value.dttm_created),
                dttm_updated: correctlyDate(value.dttm_updated),
                dttm_desicion: correctlyDate(value.dttm_desicion),
            };
        } catch (err) {
            error(err.response.data.message);
        }
    }
);
