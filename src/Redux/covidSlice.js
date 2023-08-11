import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
};

const url = 'https://covid-193.p.rapidapi.com/statistics';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'c3ea3ef7d6mshf9ebf0c1cc5734fp155ae6jsn928f52ac78ea',
    'X-RapidAPI-Host': 'covid-193.p.rapidapi.com',
  },
};

export const getCovidData = createAsyncThunk('get/data', async (rejectWithValue) => {
  try {
    const result = await fetch(url, options);
    const data = await result.json();
    const itemsToRender = data.response?.slice(100, 140);
    return itemsToRender;
  } catch (error) {
    console.log(error);
    return rejectWithValue(`there was an arror: ${error}`);
  }
});

const getDataSlice = createSlice({
  name: 'CovidAPI',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCovidData.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export default getDataSlice.reducer;
