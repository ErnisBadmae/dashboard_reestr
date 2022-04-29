import { createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

export const getUsers = createAsyncThunk('users/get', async (dispatch) => {
  let result = {};
  // await axios('http://api-prof-sdc.anonamis.ru/api/register/standard-certification/list',{
  //   // credentials: "include",
  return result;
  // });
  // let result = await res.json();
  // result.data.array.forEach(element => {
  //   element
  // });
  // return result.data;
  // console.log('data', data)
  // console.log(dispatch)
  // dispatch({ type: 'GET_DATA', payload: data });
});
