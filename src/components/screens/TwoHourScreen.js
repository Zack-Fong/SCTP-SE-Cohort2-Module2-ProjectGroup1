import { useState, useEffect } from "react";
import { getTwoHoursWeatherForecast } from "../../api/WeatherForecastServices";
import Button from "../button/Button";
import { uniqueId } from "lodash";
import styles from "./Table.module.css";

function TwoHourScreen() {
  const [products, setProducts] = useState([]);
  const [time, setTime] = useState({});
  const twoHourGet = async () => {
    const response = await getTwoHoursWeatherForecast();
    // console.log(response.areaMetadata[0].name)
    setTime({
      time_start: response.items[0].valid_period.start,
      time_end: response.items[0].valid_period.end,
    });
    console.log(time);
    const itemList = [];
    for (const d of response.areaMetadata) {
      const item = {
        id: d.name,
        latitude: d.label_location.latitude,
        longitude: d.label_location.longitude,
      };
      itemList.push(item);
    }
    const newList = itemList.map((item, i) => ({
      ...item,
      forecast: response.items[0].forecasts[i].forecast,
    }));
    setProducts(newList);
    // console.log(products);
  };

  useEffect(() => {
    twoHourGet();
  }, []);

  return (
    <div>
      <h2>{time.time_start} : {time.time_end}</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Latitude</th>
            <th>Longitude</th>
            <th>Forecast</th>
          </tr>
        </thead>
        <tbody>
          {products &&
            products.map((item) => (
              <tr key={uniqueId()}>
                <td>{item.id}</td>
                <td>{item.latitude.toFixed(3)}</td>
                <td>{item.longitude.toFixed(3)}</td>
                <td>{item.forecast}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default TwoHourScreen;
