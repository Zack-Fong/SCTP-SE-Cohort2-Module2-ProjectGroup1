import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Button from "../src/components/button/Button";
import SampleScreen from "./components/screens/SampleScreen";
import TwoHourScreen from "./components/screens/TwoHourScreen";
import TwentyFourHourScreen from "./components/screens/TwentyFourHourScreen";
import {
  getFourDaysWeatherForecast,
  getTwentyFourHoursWeatherForecast,
  getTwoHoursWeatherForecast,
} from "./api/WeatherForecastServices";
import "./App.css";
import { useSelector } from "react-redux";
import { fourDaysItemsSelector } from "./reducers/FourDaysWeatherForecastReducers";

function App() {
  const fourDaysItems = useSelector(fourDaysItemsSelector);

  useEffect(() => {
    getTwoHoursWeatherForecast();
    getTwentyFourHoursWeatherForecast();
    getFourDaysWeatherForecast();
  }, []);

  /*Example Usage of fourDaysItemsSelector*/
  useEffect(() => {
    console.log("our Days Items in reducer", fourDaysItems);
  }, [fourDaysItems]);

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
          <Route path="*" element={<SampleScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
