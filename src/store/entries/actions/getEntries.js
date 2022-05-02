import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getEntries = createAsyncThunk('entries/get', async (dispatch) => {
  let result = await axios('http://api-prof-sdc.anonamis.ru/api/register/standard-certification/list',{
    // credentials: "include",
    
  });
  // let result = await res.json();
  // result.data.array.forEach(element => {
  //   element
  // });
  return result.data;
  // console.log('data', data)
  // console.log(dispatch)
  // dispatch({ type: 'GET_DATA', payload: data });
});
