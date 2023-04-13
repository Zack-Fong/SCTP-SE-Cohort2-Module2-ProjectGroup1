import {
  convertObjectToQueryString,
  getCurrentISOString,
  getRequest,
} from "../common/common";
import { FOUR_DAYS_WEATHER_FORECAST, TWENTY_FOUR_HOURS_WEATHER_FORECAST, TWO_HOURS_WEATHER_FORECAST } from "../common/configuration";

export function getTwoHoursWeatherForecast() {
  const date_time = getCurrentISOString();
  const url =
    TWO_HOURS_WEATHER_FORECAST +
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

export function getTwentyFourHoursWeatherForecast() {
  const date_time = getCurrentISOString();
  const url =
    TWENTY_FOUR_HOURS_WEATHER_FORECAST +
    "?" +
    convertObjectToQueryString({
      date_time,
    });

  return new Promise((resolve) => {
    getRequest(url)
      .then((response: TwentyFourHoursWeatherForecastResponse) => {
        console.log(
          "Twenty Four Hours Weather Forecast Response: ",
          response.data, response.status
        );
        resolve({
          items: response.data.items || []
        });
      })
      .catch((error) => {
        console.log("Twenty Four Hours Weather Forecast Error: ", error);
        resolve({
          items: []
        });
      });
  })
}

export function getFourDaysWeatherForecast() {
  const date_time = getCurrentISOString();
  const url =
    FOUR_DAYS_WEATHER_FORECAST +
    "?" +
    convertObjectToQueryString({
      date_time,
    });

  return new Promise((resolve) => {
    getRequest(url)
      .then((response: FourDaysWeatherForecastResponse) => {
        console.log(
          "Four Days Weather Forecast Response: ",
          response.data, response.status
        );
        resolve({
          items: response.data.items || []
        });
      })
      .catch((error) => {
        console.log("Four Days Weather Forecast Error: ", error);
        resolve({
          items: []
        });
      });
  })
}
