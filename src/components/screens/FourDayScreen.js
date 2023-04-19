import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { formattedFourDaysItemsSelector } from "../../reducers/FourDaysWeatherForecastReducers";
import tableStyles from "./Table.module.css";
import { formatDateFourDay } from "../../common/common";

function FourDayScreen() {
  const formattedFourDaysItems = useSelector(formattedFourDaysItemsSelector);

  return (
    <div>
      <p>Four Days Weather Forecast</p>
      <table className={tableStyles.table}>
        <thead>
          <tr>
            <th>Date</th>
            <th>Temperature (low:high) </th>
            <th>Humidity (low:high) </th>
            <th>Wind Speed(low:high) </th>
            <th>Forecast </th>
          </tr>
        </thead>
        <tbody>
          {formattedFourDaysItems &&
            formattedFourDaysItems.map((formattedFourDaysItem) => (
              <tr key={uuidv4()}>
                <th>{formatDateFourDay(formattedFourDaysItem.date)}</th>
                <th>
                  {formattedFourDaysItem.temperature_low}:{" "}
                  {formattedFourDaysItem.temperature_high}
                </th>
                <th>
                  {formattedFourDaysItem.relative_humidity_low}:{" "}
                  {formattedFourDaysItem.relative_humidity_high}
                </th>
                <th>
                  {formattedFourDaysItem.wind_speed_low}:{" "}
                  {formattedFourDaysItem.wind_speed_high}
                </th>
                <th>{formattedFourDaysItem.forecast}</th>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
export default FourDayScreen;
