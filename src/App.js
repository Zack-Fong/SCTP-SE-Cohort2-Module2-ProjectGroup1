import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Button from "../src/components/button/Button";
import SampleScreen from "./components/screens/SampleScreen";
import TwoHourScreen from "./components/screens/TwoHourScreen";
import TwentyFourHourScreen from "./components/screens/TwentyFourHourScreen";
import "./App.css";

function App() {
  useEffect(() => {
    /*Example To Call Api*/
    /*
      getTwoHoursWeatherForecast().then((twoHoursWeatherForecastResponse) =>
        console.log(
          "twoHoursWeatherForecastResponse: ",
          twoHoursWeatherForecastResponse
        )
      );

      getTwentyFourHoursWeatherForecast().then(
        (twentyFourHoursWeatherForecastResponse) =>
          console.log(
            "twentyFourHoursWeatherForecastResponse: ",
            twentyFourHoursWeatherForecastResponse
          )
      );

      getFourDaysWeatherForecast().then((fourDaysWeatherForecastResponse) =>
        console.log(
          "fourDaysWeatherForecastResponse: ",
          fourDaysWeatherForecastResponse
        )
      );
      */
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Button label="2 Hours" to="/2Hours" />
                <Button label="24 Hours" to="/24Hours" />
                <Button label="4 days" to="/4Days" />
              </>
            }
          />
          <Route
            path="/2Hours"
            element={<TwoHourScreen />}
          />
          <Route
            path="/24Hours"
            element={<TwentyFourHourScreen />}
          />
          <Route path="*" element={<SampleScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
