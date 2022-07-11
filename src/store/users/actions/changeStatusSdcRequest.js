import { createAsyncThunk } from '@reduxjs/toolkit';
import $api from '../../../http';
// import { correctlyDate } from '../../../helpers/utils';
import { error, info } from '../../../components/Toast/Toast.jsx';

export const changeStatusSdcRequest = createAsyncThunk(
    'changeStatusSdcRequest/change',
    async (payload) => {
        try {
            let res = await $api.post(
                `/user/user_standard_certification/inclusion_request_decision/${payload.id}/${payload.statusId}`
            );
            if (res.data?.success === false) {
                error(res.data?.message);
            } else {
                info('Статус заявки успешно изменен!');
            }

            if (res.status === 500) {
                error('ошибка сервера, 500');
            }
        } catch (err) {
            console.log(err.response.data);
            error(err.response.data.detail);
        }
    }
);
