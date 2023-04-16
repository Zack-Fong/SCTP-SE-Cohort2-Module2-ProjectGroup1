import { action } from "typesafe-actions";
import { ACTION_NAMES } from "../common/constants";

export const setTwoHoursWeatherForecast = (payload: TwoHoursWeatherForecastsPayloadType) => action(ACTION_NAMES.SET_TWO_HOURS_WEATHER_FORECAST, payload);