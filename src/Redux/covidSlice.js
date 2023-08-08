import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: []
}

const getCovidData = createAsyncThunk('get/data', async (rejectWithValue) => {
   try {
     const response = await fetch('https://covid-19.dataflowkit.com/v1');
     const data = response.json();
     return data;
   } catch (error) {
    console.log(error);
    rejectWithValue(`there was an arror: ${error}`);
   }
})

const getData = createSlice({
    name: "CovidAPI",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getCovidData.fulfilled, (state, action) => {
            state.data = action.payload;
        })
    }
})

export default getData.reducer