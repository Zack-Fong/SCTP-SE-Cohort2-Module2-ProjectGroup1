import { useState, useEffect } from "react";
import axios from "axios";

function WeatherTable() {
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(
          "https://api.data.gov.sg/v1/environment/2-hour-weather-forecast"
        );
        setWeatherData(response.api_info.area_metadata.items[0].periods);
      } catch (error) {
        console.error(error);
      }
    };

    fetchWeatherData();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Start Time</th>
          <th>End Time</th>
          <th>Region</th>
          <th>Forecast</th>
        </tr>
      </thead>
      <tbody>
        {weatherData.map((period, index) => (
          <tr key={index}>
            <td>{period.time.start}</td>
            <td>{period.time.end}</td>
            <td>{period.regions}</td>
            <td>{period.forecast}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default WeatherTable;
