import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  filterData: [],
};

const url = process.env.REACT_APP_API_URL;
// const options = {
//   method: 'GET',
//   headers: {
//     'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
//     'X-RapidAPI-Host': 'covid-193.p.rapidapi.com',
//   },
// };

export const getCovidData = createAsyncThunk('get/data', async (rejectWithValue) => {
  try {
    const result = await fetch(url);
    const data = await result.json();
    const itemsToRender = data?.slice(0, 11);
    return itemsToRender;
  } catch (error) {
    return rejectWithValue(`there was an error: ${error}`);
  }
});

const getDataSlice = createSlice({
  name: 'CovidAPI',
  initialState,
  reducers: {
    filterRegions: (state, action) => {
      const selectedContinent = action.payload;
      state.filterData = state.data.filter((item) => (
        item.continent === selectedContinent
      ));
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCovidData.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export const { filterRegions } = getDataSlice.actions;

export default getDataSlice.reducer;
