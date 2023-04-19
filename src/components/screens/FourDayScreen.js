import { useSelector } from "react-redux";
import { formattedFourDaysItemsSelector } from "../../reducers/FourDaysWeatherForecastReducers";
import TableGeneral from "../table/TableGeneral";

function FourDayScreen() {
  const formattedFourDaysItems = useSelector(formattedFourDaysItemsSelector);
  const fourDaysHeaders = [
    "Date",
    "Forecast",
    "Relative Humidity (low : high)",
    "Temperature (low : high)",
    "Wind Speed (low : high)",
    "Wind Direction",
  ];

  return (
    <div>
      <p>Four Days Weather Forecast</p>
      <TableGeneral
        generalForecast={formattedFourDaysItems}
        generalHeaders={fourDaysHeaders}
      />
    </div>
  );
}
export default FourDayScreen;
