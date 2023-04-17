import { configureStore } from "@reduxjs/toolkit";
import twoHoursWeatherForecastReducer from "./reducers/TwoHoursWeatherForecastReducer";
import twentyFourHoursWeatherForecastReducer from "./reducers/TwentyFourHoursWeatherForecastReducer";

const store = configureStore({
  reducer: {
    twoHoursWeatherForecastReducer: twoHoursWeatherForecastReducer,
    twentyFourHoursWeatherForecastReducer:
      twentyFourHoursWeatherForecastReducer,
  },
});

export default store;
