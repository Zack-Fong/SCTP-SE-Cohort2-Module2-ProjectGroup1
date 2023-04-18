import { useSelector } from "react-redux";
import {
  formattedTwentyFourHoursPeriodsSelector,
  twentyFourHoursGeneralSelector,
} from "../../reducers/TwentyFourHoursWeatherForecastReducer";
import TableGeneral from "../table/TableGeneral";
import TablePeriod from "../table/TablePeriod";

function TwentyFourHourScreen() {
  const twentyFourHoursGeneral = useSelector(twentyFourHoursGeneralSelector);
  const twentyFourHoursPeriod = useSelector(
    formattedTwentyFourHoursPeriodsSelector
  );
  const twentyFourHourGeneralHeaders = [
    "Forecast",
    "Relative Humidity (low : high)",
    "Temperature (low : high)",
    "Wind Speed (low : high)",
    "Wind Direction",
  ];
  const twentyFourHourPeriodHeaders = [
    "Start Date & Time",
    "End Date & Time",
    "West",
    "East",
    "Central",
    "South",
    "North",
  ];

  return (
    <div>
      <p>Twenty Four Hours Weather Forecast</p>
      <TableGeneral
        generalForecast={twentyFourHoursGeneral}
        generalHeaders={twentyFourHourGeneralHeaders}
      />
      <TablePeriod
        periodForecast={twentyFourHoursPeriod}
        periodHeaders={twentyFourHourPeriodHeaders}
      />
    </div>
  );
}

export default TwentyFourHourScreen;
