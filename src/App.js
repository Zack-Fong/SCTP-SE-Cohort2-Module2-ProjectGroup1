import { Routes, Route, HashRouter } from "react-router-dom";
import { useEffect, useState } from "react";
import Button from "../src/components/button/Button";
import TwoHourScreen from "./components/screens/TwoHourScreen";
import FourDayScreen from "./components/screens/FourDayScreen";
import TwentyFourHourScreen from "./components/screens/TwentyFourHourScreen";
import {
  getFourDaysWeatherForecast,
  getTwentyFourHoursWeatherForecast,
  getTwoHoursWeatherForecast,
} from "./api/WeatherForecastServices";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    Promise.allSettled([
      getTwoHoursWeatherForecast(),
      getTwentyFourHoursWeatherForecast(),
      getFourDaysWeatherForecast(),
    ]).then((promiseAllSettledResults) => {
      console.log("Promise All Settled results: ", promiseAllSettledResults);
      setLoading(false);
    });
  }, []);

  return (
    <div className="App">
      {loading ? (
        <div className="loader-container">
          <div className="spinner"></div>
        </div>
      ) : (
        <HashRouter>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <p>Group 1 Weather Forecasts</p>
                  <div className="button-container">
                    <Button label="2 Hours" to="/2Hours" />
                    <Button label="24 Hours" to="/24Hours" />
                    <Button label="4 days" to="/4Days" />
                  </div>
                </>
              }
            />
            <Route path="/2Hours" element={<TwoHourScreen />} />
            <Route path="/24Hours" element={<TwentyFourHourScreen />} />
            <Route path="/4days" element={<FourDayScreen />} />
            <Route
              path="*"
              element={<div>You have entered an invalid address</div>}
            />
          </Routes>
        </HashRouter>
      )}
    </div>
  );
}

export default App;
