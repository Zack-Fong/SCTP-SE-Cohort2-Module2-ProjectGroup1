import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import {
  formattedTwentyFourHoursPeriodsSelector,
  twentyFourHoursGeneralSelector,
} from "../../reducers/TwentyFourHoursWeatherForecastReducer";
import styles from "./Table.module.css";

function TwentyFourHourScreen() {
  const twentyFourHoursGeneral = useSelector(twentyFourHoursGeneralSelector);
  const twentyFourHoursPeriod = useSelector(
    formattedTwentyFourHoursPeriodsSelector
  );

  return (
    <div>
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
            <td>{twentyFourHoursGeneral.forecast}</td>
            <td>
              {twentyFourHoursGeneral.relative_humidity_low} :{" "}
              {twentyFourHoursGeneral.relative_humidity_high}
            </td>
            <td>
              {twentyFourHoursGeneral.temperature_low} :{" "}
              {twentyFourHoursGeneral.temperature_high}
            </td>
            <td>
              {twentyFourHoursGeneral.wind_speed_low} :{" "}
              {twentyFourHoursGeneral.wind_speed_high}
            </td>
            <td>{twentyFourHoursGeneral.wind_direction}</td>
          </tr>
        </tbody>
      </table>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Date & Time</th>
            <th>West</th>
            <th>East</th>
            <th>Central</th>
            <th>South</th>
            <th>North</th>
          </tr>
        </thead>
        <tbody>
          {twentyFourHoursPeriod &&
            twentyFourHoursPeriod.map((item) => (
              <tr key={uuidv4()}>
                <td>
                  {item.time_start}
                  <br />
                  <br />
                  <strong>Till</strong>
                  <br />
                  <br />
                  {item.time_end}
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
