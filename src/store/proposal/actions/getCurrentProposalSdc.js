import { createAsyncThunk } from '@reduxjs/toolkit';
import $api from '../../../http';

export const getCurrentProposalSdc = createAsyncThunk(
    'view/getCurrentRequestSdc',
    async (cardId, dispatch) => {
        let result = await $api.get(
            `/request/request_sdc_standard_certification/${cardId}`
        );
        console.log(result, 'resultView');
        return result.data.data?.requestSdcStandardCertification;
    }
);
