import styles from "./Table.module.css";

function TableGeneral({generalForecast}) {
    return (
        <table className={styles.table}>
        <thead>
          <tr>
            {/* {Object.keys(generalForecast).map((item, i) => (
                <th key={i}>{item}</th>
            ))} */}
            <th>Forecast</th>
            <th>Relative Humidity</th>
            <th>Temperature</th>
            <th>Wind Speed</th>
            <th>Wind Direction</th>
          </tr>
        </thead>
        <tbody>
        <tr>
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
        </tbody>
      </table>
    )
}

export default TableGeneral;