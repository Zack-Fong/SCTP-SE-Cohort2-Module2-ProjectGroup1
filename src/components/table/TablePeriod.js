import { v4 as uuidv4 } from "uuid";
import styles from "./Table.module.css";

function TablePeriod({ periodForecast }) {
  return (
    <table className={`${styles.table} table-dark table-striped`}>
      <thead>
        <tr>
          {Object.keys(periodForecast[0]).map((item, i) => (
            <th key={i}>{item}</th>
          ))}
          {/* <th>Name</th>
          <th>Latitude</th>
          <th>Longitude</th>
          <th>Forecast</th> */}
        </tr>
      </thead>
      <tbody>
        {periodForecast &&
          periodForecast.map((periodForecast) => (
            <tr key={uuidv4()}>
              {Object.keys(periodForecast).map((item, i) => (
                <td key={i}>{periodForecast[item]}</td>
              ))}
              {/* <td>{twoHoursWeatherForecast.id}</td>
              <td>{twoHoursWeatherForecast.latitude.toFixed(3)}</td>
              <td>{twoHoursWeatherForecast.longitude.toFixed(3)}</td>
              <td>{twoHoursWeatherForecast.forecast}</td> */}
            </tr>
          ))}
      </tbody>
    </table>
  );
}

export default TablePeriod;
