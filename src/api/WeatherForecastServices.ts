import { setFourDaysWeatherForecast } from "../action/FourDaysWeatherForecastActions";
import { setTwentyFourHoursWeatherForecast } from "../action/TwentyFourHoursWeatherForecastActions";
import { setTwoHoursWeatherForecast } from "../action/TwoHoursWeatherForecastActions";
import {
  convertObjectToQueryString,
  getCurrentISOString,
  getRequest,
} from "../common/common";
import { FOUR_DAYS_WEATHER_FORECAST, TWENTY_FOUR_HOURS_WEATHER_FORECAST, TWO_HOURS_WEATHER_FORECAST } from "../common/configuration";
import store from "../store";

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
        store.dispatch(setTwoHoursWeatherForecast({
          areaMetadata: response.data.area_metadata || [],
          items: response.data.items || []
        }));
        resolve(undefined);
      })
      .catch((error) => {
        console.log("Two Hours Weather Forecast Error: ", error);
        store.dispatch(setTwoHoursWeatherForecast({
          areaMetadata: [],
          items: []
        }));
        resolve(undefined);
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
        store.dispatch(setTwentyFourHoursWeatherForecast({
          items: response.data.items || []
        }));
        resolve(undefined);
      })
      .catch((error) => {
        console.log("Twenty Four Hours Weather Forecast Error: ", error);
        store.dispatch(setTwentyFourHoursWeatherForecast({
          items: []
        }));
        resolve(undefined);
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
        store.dispatch(setFourDaysWeatherForecast({
          items: response.data.items || []
        }));
        resolve(undefined);
      })
      .catch((error) => {
        console.log("Four Days Weather Forecast Error: ", error);
        store.dispatch(setFourDaysWeatherForecast({
          items: []
        }));
        resolve(undefined);
      });
  })
}
