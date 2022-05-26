import { createAsyncThunk } from '@reduxjs/toolkit';
// import { correctlyDate } from '../../../helpers/utils';
import axios from 'axios';

// export const getView = createAsyncThunk(
//     'view/getCurrent',
//     async (payload, dispatch) => {
//         let result = await axios.get(
//             `http://api-prof-sdc.anonamis.ru/api/register${payload}`
//         );
//         const value = result.data.data.reduce((acc, el, i) => {
//             return {
//                 ...acc,
//                 ...el,
//                 //  certificate_date: correctlyDate(el.certificate_date),
//                 //  valid_date: correctlyDate(el.valid_date),
//                 //  valid: correctlyDate(el.valid),
//                 //  registration_date: correctlyDate(el.registration_date),
//             };
//         }, {});

//         return value;
//     }
// );

export const getCurrentCard = createAsyncThunk(
    'view/getCurrent',
    async (dispatch) => {
        let result = await axios('/requestView.json');
        console.log(result, 'resultView');
        return result.data.data;
    }
);
