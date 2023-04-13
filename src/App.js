import { BrowserRouter, Routes, Route } from "react-router-dom";
import Button from "../src/components/button/Button";
import SampleScreen from "./components/screens/SampleScreen";
import "./App.css";

function App() {
  /*Example To Call Api*/
  /*
  useEffect(() => {
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
  }, []);
  */

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Button label="2 Hours" onClick={() => {}} />
                <Button label="24 Hours" onClick={() => {}} />
                <Button label="4 days" onClick={() => {}} />
              </>
            }
          />
          <Route path="*" element={<SampleScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
