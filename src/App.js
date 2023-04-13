import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Button from "../src/components/button/Button";
import "./App.css";
import { getTwoHoursWeatherForecast } from "./api/weatherForecastServices";
import WeatherTable from "./components/WeatherTable";

const DefaultPage = () => <p>Nothing to see here!</p>;

function App() {
  const [weatherData, setWeatherData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTwoHoursWeatherForecast();
      setWeatherData(data.items);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <div className="button-container">
                <Button label="2 Hours" to="/2-hour-weather-forecast" />
                <Button label="24 Hours" to="/24-hours-weather-forecast" />
                <Button label="4 days" to="/4-days-weather-forecast" />
              </div>
            }
          />
          <Route
            path="/2-hour-weather-forecast"
            element={
              <>
                {isLoading ? (
                  <p>Loading...</p>
                ) : (
                  <WeatherTable data={weatherData} />
                )}
              </>
            }
          />
          <Route
            path="/2HoursTable"
            element={<WeatherTable data={weatherData} />}
          />
          <Route path="*" element={<DefaultPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
