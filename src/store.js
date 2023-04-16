import { configureStore } from "@reduxjs/toolkit";
import twoHoursWeatherForecastReducer from "./reducers/TwoHoursWeatherForecastReducer";

const store = configureStore({
  reducer: {
    twoHoursWeatherForecastReducer: twoHoursWeatherForecastReducer,
  },
});

export default store;
