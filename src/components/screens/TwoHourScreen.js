import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { formatDate } from "../../common/common";
import {
  formattedTwoHoursAreaMetadataSelector,
  twoHoursItemsForecastsSelector,
  twoHoursItemsTimeRangeSelector,
} from "../../reducers/TwoHoursWeatherForecastReducer";
import styles from "./Table.module.css";

function TwoHourScreen() {
  const [twoHoursWeatherForecasts, setTwoHoursWeatherForecasts] = useState([]);
  const formattedTwoHoursAreaMetadata = useSelector(
    formattedTwoHoursAreaMetadataSelector
  );
  const twoHoursItemsForecasts = useSelector(twoHoursItemsForecastsSelector);
  const twoHoursItemsTimeRange = useSelector(twoHoursItemsTimeRangeSelector);

  useEffect(() => {
    const twoHoursForecasts = formattedTwoHoursAreaMetadata.map(
      (twoHoursAreaMetadata, index) => ({
        ...twoHoursAreaMetadata,
        forecast: twoHoursItemsForecasts[index].forecast,
      })
    );
    setTwoHoursWeatherForecasts(twoHoursForecasts);
  }, [formattedTwoHoursAreaMetadata]);

  return (
    <div>
      {twoHoursItemsTimeRange && (
        <h2>
          {formatDate(
            twoHoursItemsTimeRange.time_start +
              " - " +
              twoHoursItemsTimeRange.time_end
          )}
        </h2>
      )}
      <table className={`${styles.table} table-dark table-striped`}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Latitude</th>
            <th>Longitude</th>
            <th>Forecast</th>
          </tr>
        </thead>
        <tbody>
          {twoHoursWeatherForecasts &&
            twoHoursWeatherForecasts.map((twoHoursWeatherForecast) => (
              <tr key={uuidv4()}>
                <td>{twoHoursWeatherForecast.id}</td>
                <td>{twoHoursWeatherForecast.latitude.toFixed(3)}</td>
                <td>{twoHoursWeatherForecast.longitude.toFixed(3)}</td>
                <td>{twoHoursWeatherForecast.forecast}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default TwoHourScreen;
