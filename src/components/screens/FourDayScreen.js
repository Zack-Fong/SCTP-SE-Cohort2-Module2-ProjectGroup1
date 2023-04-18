import { useSelector } from "react-redux";
import { formattedFourDaysItemsSelector } from "../../reducers/FourDaysWeatherForecastReducers";
import tableStyles from "./Table.module.css";

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
            formattedFourDaysItems.map((item) => (
              <tr key={item}>
                <th>{item.date}</th>
                <th>
                  {item.temperature_low}: {item.temperature_high}
                </th>
                <th>
                  {item.relative_humidity_low}: {item.relative_humidity_high}
                </th>
                <th>
                  {item.wind_speed_low}: {item.wind_speed_high}
                </th>
                <th>{item.forecast}</th>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
export default FourDayScreen;
