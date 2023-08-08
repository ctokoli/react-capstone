import { configureStore } from "@reduxjs/toolkit";
import getData from './covidSlice' 

const store = configureStore({
    reducer: {
        convidData: getData
    }
});

export default store;