import { configureStore } from '@reduxjs/toolkit';
import getDataReducer from './covidSlice';

const store = configureStore({
  reducer: {
    convidData: getDataReducer,
  },
});

export default store;
