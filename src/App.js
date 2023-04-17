import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Button from "../src/components/button/Button";
import SampleScreen from "./components/screens/SampleScreen";
import TwoHourScreen from "./components/screens/TwoHourScreen";
import TwentyFourHourScreen from "./components/screens/TwentyFourHourScreen";
import FourDayScreen from "./components/screens/FourDayScreen";
import {
  getFourDaysWeatherForecast,
  getTwentyFourHoursWeatherForecast,
  getTwoHoursWeatherForecast,
} from "./api/WeatherForecastServices";
import "./App.css";

function App() {
  useEffect(() => {
    getTwoHoursWeatherForecast();
    getTwentyFourHoursWeatherForecast();
    getFourDaysWeatherForecast();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <div className="button-container">
                <Button label="2 Hours" to="/2Hours" />
                <Button label="24 Hours" to="/24Hours" />
                <Button label="4 days" to="/4Days" />
              </div>
            }
          />
          <Route path="/2Hours" element={<TwoHourScreen />} />
          <Route path="/24Hours" element={<TwentyFourHourScreen />} />
          <Route path="/4Days" element={<FourDayScreen />} />
          <Route path="*" element={<SampleScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
