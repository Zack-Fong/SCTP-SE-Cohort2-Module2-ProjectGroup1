import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Button from "../src/components/button/Button";
import "./App.css";
import { getTwoHoursWeatherForecast } from "./api/weatherForecastServices";

const DefaultPage = () => <p>Nothing to see here!</p>;

function App() {
  useEffect(() => {
    getTwoHoursWeatherForecast();
  }, []);
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
          <Route path="*" element={<DefaultPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
