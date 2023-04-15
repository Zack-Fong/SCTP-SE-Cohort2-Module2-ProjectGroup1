import { useState } from "react";
import { getTwentyFourHoursWeatherForecast } from "../../api/WeatherForecastServices";
import Button from "../button/Button";
import { uniqueId } from "lodash";
import styles from "./Table.module.css";

function TwentyFourHourScreen() {
  const [general, setGeneral] = useState({});
  const [period, setPeriod] = useState([]);

  const twentyFourHourGet = async () => {
    const response = await getTwentyFourHoursWeatherForecast();
    // console.log(response.items[0].periods)
    const generalList = {
      forecast: response.items[0].general.forecast,
      relative_humidity_low: response.items[0].general.relative_humidity.low,
      relative_humidity_high: response.items[0].general.relative_humidity.high,
      temperature_low: response.items[0].general.temperature.low,
      temperature_high: response.items[0].general.temperature.high,
      wind_speed_low: response.items[0].general.wind.speed.low,
      wind_speed_high: response.items[0].general.wind.speed.high,
      wind_direction: response.items[0].general.wind.direction,
    };
    setGeneral(generalList);
    const periodList = response.items[0].periods.map((item, i) => ({
      ...item,
      time_start: response.items[0].periods[i].time.start,
      time_end: response.items[0].periods[i].time.end,
      west: response.items[0].periods[i].regions.west,
      east: response.items[0].periods[i].regions.east,
      central: response.items[0].periods[i].regions.central,
      south: response.items[0].periods[i].regions.south,
      north: response.items[0].periods[i].regions.north,
    }));
    setPeriod(periodList);
    console.log(period);
  };

  return (
    <div>
      <Button onClick={twentyFourHourGet} />
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Forecast</th>
            <th>Relative Humidity</th>
            <th>Temperature</th>
            <th>Wind Speed</th>
            <th>Wind Direction</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{general.forecast}</td>
            <td>
              {general.relative_humidity_low} : {general.relative_humidity_high}
            </td>
            <td>
              {general.temperature_low} : {general.temperature_high}
            </td>
            <td>
              {general.wind_speed_low} : {general.wind_speed_high}
            </td>
            <td>{general.wind_direction}</td>
          </tr>
        </tbody>
      </table>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Time</th>
            <th>West</th>
            <th>East</th>
            <th>Central</th>
            <th>South</th>
            <th>North</th>
          </tr>
        </thead>
        <tbody>
          {period &&
            period.map((item) => (
              <tr key={uniqueId()}>
                <td>
                  {item.time_start} : {item.time_end}
                </td>
                <td>{item.west}</td>
                <td>{item.east}</td>
                <td>{item.central}</td>
                <td>{item.south}</td>
                <td>{item.north}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default TwentyFourHourScreen;
