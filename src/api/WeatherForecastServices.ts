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

  return new Promise((resolve) => {
    getRequest(url)
    .then((response: TwoHourWeatherForecastResponse) => {
      console.log(
        "Two Hours Weather Forecast Response: ",
        response.data
      );
      resolve({
          areaMetadata: response.data.area_metadata || [],
          items: response.data.items || []
        });
    })
    .catch((error) => {
      console.log("Two Hours Weather Forecast Error: ", error);
      resolve({
          areaMetadata: [],
          items: []
        });
    });
  })
}
