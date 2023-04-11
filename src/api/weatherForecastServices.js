import {
  convertObjectToQueryString,
  getCurrentISOString,
  getRequest,
} from "../common/common";
import { TWO_HOURS_WEATHER_FORCAST } from "../common/configuration";

export function getTwoHoursWeatherForecast() {
  const date_time = getCurrentISOString();
  const url =
    TWO_HOURS_WEATHER_FORCAST +
    "?" +
    convertObjectToQueryString({
      date_time,
    });
  console.log(date_time);
  getRequest(url)
    .then((response) => {
      console.log(
        "Two Hours Weather Forecast Response: ",
        response.data,
        response.status
      );
    })
    .catch((error) => {
      console.log("Two Hours Weather Forecast Error: ", error);
    });
}
