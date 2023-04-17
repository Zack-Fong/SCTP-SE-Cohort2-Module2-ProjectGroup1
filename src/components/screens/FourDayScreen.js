import { useSelector } from "react-redux";
import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { fourDaysItemsSelector } from "../../reducers/FourDaysWeatherForecastReducers";
import styles from "./Table.module.css";

function FourDayScreen() {
  const fourDaysItems = useSelector(fourDaysItemsSelector);
  useEffect(() => {
    console.log("our Days Items", fourDaysItems);
  }, []);

  return (
    <div>
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
          {/* {twentyFourHoursPeriod &&
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
            ))} */}
        </tbody>
      </table>
    </div>
  );
}

export default FourDayScreen;
