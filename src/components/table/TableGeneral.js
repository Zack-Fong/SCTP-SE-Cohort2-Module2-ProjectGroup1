import tableStyles from "./Table.module.css";
import { v4 as uuidv4 } from "uuid";

function TableGeneral({ generalForecast, generalHeaders }) {
  return (
    <table className={tableStyles.table}>
      <thead>
        <tr>
          {generalHeaders.map((item) => {
            return <th>{item}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {generalForecast &&
          generalForecast.map((generalForecast) => (
            <tr key={uuidv4()}>
              {generalForecast.date && <td>{generalForecast.date}</td>}
              <td>{generalForecast.forecast}</td>
              <td>
                {generalForecast.relative_humidity_low} :{" "}
                {generalForecast.relative_humidity_high}
              </td>
              <td>
                {generalForecast.temperature_low} :{" "}
                {generalForecast.temperature_high}
              </td>
              <td>
                {generalForecast.wind_speed_low} :{" "}
                {generalForecast.wind_speed_high}
              </td>
              <td>{generalForecast.wind_direction}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}

export default TableGeneral;
