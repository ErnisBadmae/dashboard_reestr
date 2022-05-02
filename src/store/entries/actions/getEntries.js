import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getEntries = createAsyncThunk('entries/get', async (dispatch) => {
  let result= await axios('/table.json'
    // credentials: "include",
//   }
  );
  // let result = await res.json();
  // result.data.array.forEach(element => {
  //   element
  // });
  return result.data.data
  // console.log('data', data)
  // console.log(dispatch)
  // dispatch({ type: 'GET_DATA', payload: data });
});
