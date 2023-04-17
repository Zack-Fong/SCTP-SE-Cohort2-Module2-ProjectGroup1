import { configureStore } from "@reduxjs/toolkit";
import twoHoursWeatherForecastReducer from "./reducers/TwoHoursWeatherForecastReducer";
import twentyFourHoursWeatherForecastReducer from "./reducers/TwentyFourHoursWeatherForecastReducer";
import fourDaysWeatherForecastReducer from "./reducers/FourDaysWeatherForecastReducers";

const store = configureStore({
  reducer: {
    twoHoursWeatherForecastReducer: twoHoursWeatherForecastReducer,
    twentyFourHoursWeatherForecastReducer:
      twentyFourHoursWeatherForecastReducer,
    fourDaysWeatherForecastReducer: fourDaysWeatherForecastReducer,
  },
});

export default store;
