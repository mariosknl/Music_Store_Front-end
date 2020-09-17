import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchGuitars = createAsyncThunk('instruments/guitars', async () => {
  const options = {
    method: 'GET',
    url: 'https://tranquil-sea-36009.herokuapp.com/instruments/guitars',
    headers: '*',
  };
  const response = await axios(options);
  return response.data.guitars;
});

export default fetchGuitars;
