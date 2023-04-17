import { action } from "typesafe-actions";
import { ACTION_NAMES } from "../common/constants";

export const setTwentyFourHoursWeatherForecast = (payload: TwentyFourHoursWeatherForecastsPayloadType) => action(ACTION_NAMES.SET_TWENTY_FOUR_HOURS_WEATHER_FORECAST, payload);