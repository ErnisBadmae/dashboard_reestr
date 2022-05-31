import { createAsyncThunk } from '@reduxjs/toolkit';
import $api from '../../../http';
import axios from 'axios';

export const getEntries = createAsyncThunk('entries/get', async (dispatch) => {
    let result = await axios.post('/table.json');
    // let result = await res.json();
    // result.data.array.forEach(element => {
    //   element
    // });
    return result.data.data;
    // console.log('data', data)
    // console.log(dispatch)
    // dispatch({ type: 'GET_DATA', payload: data });
});

export const getRequestSds = createAsyncThunk(
    'getRequestSds/get',
    async (dispatch) => {
        let result = await $api.post(
            '/user/user_standard_certification/inclusion_request/list'
        );
        //    console.log(result.data.data.data, 'result');
        return result.data.data.data;
    }
);

export const getRequestSdcCertifHolder = createAsyncThunk(
    'getRequestSdcCertifHolder/get',
    async (dispatch) => {
        let result = await $api.post(
            '/request/request_sdc_standard_certification/get_request_sdc_header_list'
        );
        console.log(
            result,
            'getRequestSdcCertifHoldergetRequestSdcCertifHolder'
        );
        return result.data;
    }
);
