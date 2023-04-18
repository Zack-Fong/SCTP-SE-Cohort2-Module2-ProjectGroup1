import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { formatDate } from "../../common/common";
import {
  formattedTwoHoursAreaMetadataSelector,
  twoHoursItemsForecastsSelector,
  twoHoursItemsTimeRangeSelector,
} from "../../reducers/TwoHoursWeatherForecastReducer";
import TablePeriod from "../table/TablePeriod";

function TwoHourScreen() {
  const [twoHoursWeatherForecasts, setTwoHoursWeatherForecasts] = useState([]);
  const formattedTwoHoursAreaMetadata = useSelector(
    formattedTwoHoursAreaMetadataSelector
  );
  const twoHoursItemsForecasts = useSelector(twoHoursItemsForecastsSelector);
  const twoHoursItemsTimeRange = useSelector(twoHoursItemsTimeRangeSelector);
  const twoHourHeaders = ["Location", "Latitude", "Longitude", "Forecast"];

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
      <p>Two Hours Weather Forecast</p>
      {twoHoursItemsTimeRange && (
        <h2>
          {formatDate(
            twoHoursItemsTimeRange.time_start +
              " - " +
              twoHoursItemsTimeRange.time_end
          )}
        </h2>
      )}

      <TablePeriod
        periodForecast={twoHoursWeatherForecasts}
        periodHeaders={twoHourHeaders}
      />
    </div>
  );
}

export default TwoHourScreen;
