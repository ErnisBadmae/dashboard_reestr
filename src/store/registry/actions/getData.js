import { createAsyncThunk } from '@reduxjs/toolkit';
import { correctlyDate } from '../../../helpers/utils';
import axios from 'axios';

export const getData = createAsyncThunk('dataRegistry/get', async (payload) => {
    const result = await axios.post(
        `https://api-prof-sdc.anonamis.ru/api/register${payload.pathname}`,
        payload.filterValues ? { filters: payload.filterValues } : null
    );
    const value = result.data.data.data.map((el) => {
        return {
            ...el,
            certificate_date: correctlyDate(el.certificate_date),
            valid: correctlyDate(el.valid),
            registration_date: correctlyDate(el.registration_date),
            statusId: el.status?.id,
            statusTitle: el.status
                ? el.status?.title
                : el.status_certificate
                ? el.status_certificate?.title
                : '',
            osValue:
                el.organ_certification_certificate
                    ?.short_name_organ_certification,
        };
    });
    return value;
});
