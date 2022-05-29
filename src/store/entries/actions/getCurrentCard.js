import { createAsyncThunk } from '@reduxjs/toolkit';
import $api from '../../../http';

export const getCurrentCard = createAsyncThunk(
    'view/getCurrent',
    async (dispatch) => {
        let result = await $api.get(
            '/user/user_standard_certification/inclusion_request/view'
        );
        console.log(result, 'resultView');
        return result.data.data;
    }
);
