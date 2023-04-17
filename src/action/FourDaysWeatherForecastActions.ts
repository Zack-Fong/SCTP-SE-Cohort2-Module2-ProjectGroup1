import { action } from "typesafe-actions";
import { ACTION_NAMES } from "../common/constants";

export const setFourDaysWeatherForecast = (payload: FourDaysWeatherForecastsPayloadType) => action(ACTION_NAMES.SET_FOUR_DAYS_WEATHER_FORECAST, payload);