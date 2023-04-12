import { createContext, useReducer } from "react";
import { twoHourWeatherForecastReducer } from "../reducers/TwoHourWeatherForecastReducer";
import { defaultTwoHoursWeatherForecasts } from "../reducers/TwoHourWeatherForecastReducer";

const TwoHoursWeatherForecastContext = createContext();

export function TwoHoursWeatherForecastProvider({ children }) {
  const [state, dispatch] = useReducer(
    twoHourWeatherForecastReducer,
    defaultTwoHoursWeatherForecasts
  );

  const setTwoHoursWeatherForecast = (value) => {
    dispatch({
      type: ACTION_NAMES.SET_TWO_HOURS_WEATHER_FORECAST,
      payload: value,
    });
  };

  const context = {
    areaMetadata: state.areaMetadata,
    items: state.items,
    forecasts: state.items.forecasts || [],
    timestamp: state.items.timestamp || "",
    updateTimestamp: state.items.update_timestamp || "",
    validPeriod: state.items.valid_period,
    setTwoHoursWeatherForecast: setTwoHoursWeatherForecast,
  };

  return (
    <TwoHoursWeatherForecastContext.Provider value={context}>
      {children}
    </TwoHoursWeatherForecastContext.Provider>
  );
}
export default TwoHoursWeatherForecastContext;
