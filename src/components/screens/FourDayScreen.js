import {useState, useEffect} from "react";
import {useSelector} from "react-redux";
import { getFourDaysWeatherForecast } from "../../api/WeatherForecastServices";
import styles from "./Table.module.css";
import TableGeneral from "../table/TableGeneral";
import { formattedFourDaysItemsSelector} from "../../reducers/FourDaysWeatherForecastReducers";

function FourDayScreen(){
    const fourDayScreenGeneral = useSelector(formattedFourDaysItemsSelector);
   const[general, setGeneral] =useState([]);

   const fourDayScreenGet = async() => {
        const response = await getFourDaysWeatherForecast();
        console.log("data1", response.items[0].forecasts[1]);

        const generalList = {
            date: response.items[0].forecasts[0].date,
            temperature_low: response.items[0].forecasts[0].temperature.low,
            temperature_high:response.items[0].forecasts[0].temperature.high,
            humidity_low: response.items[0].forecasts[0].relative_humidity.low,
            humidity_high: response.items[0].forecasts[0].relative_humidity.high,
            wind_speed_low: response.items[0].forecasts[0].temperature.low,
            wind_speed_high: response.items[0].forecasts[0].temperature.high,
            forecast: response.items[0].forecasts[0].forecast,
            date1: response.items[0].forecasts[1].date,
            temperature_low1: response.items[0].forecasts[1].temperature.low,
            temperature_high1:response.items[0].forecasts[1].temperature.high,
            humidity_low1: response.items[0].forecasts[1].relative_humidity.low,
            humidity_high1: response.items[0].forecasts[1].relative_humidity.high,
            wind_speed_low1: response.items[0].forecasts[1].temperature.low,
            wind_speed_high1: response.items[0].forecasts[1].temperature.high,
            forecast1: response.items[0].forecasts[1].forecast,
            date2: response.items[0].forecasts[2].date,
            temperature_low2: response.items[0].forecasts[2].temperature.low,
            temperature_high2:response.items[0].forecasts[2].temperature.high,
            humidity_low2: response.items[0].forecasts[2].relative_humidity.low,
            humidity_high2: response.items[0].forecasts[2].relative_humidity.high,
            wind_speed_low2: response.items[0].forecasts[2].temperature.low,
            wind_speed_high2: response.items[0].forecasts[2].temperature.high,
            forecast2: response.items[0].forecasts[2].forecast,
            date3: response.items[0].forecasts[3].date,
            temperature_low3: response.items[0].forecasts[3].temperature.low,
            temperature_high3:response.items[0].forecasts[3].temperature.high,
            humidity_low3: response.items[0].forecasts[3].relative_humidity.low,
            humidity_high3: response.items[0].forecasts[3].relative_humidity.high,
            wind_speed_low3: response.items[0].forecasts[3].temperature.low,
            wind_speed_high3: response.items[0].forecasts[3].temperature.high,
            forecast3: response.items[0].forecasts[3].forecast,
        
        };

        setGeneral(generalList);
    }

    useEffect(() =>{
        fourDayScreenGet();
    }, []); 
        

    return(
       /*<div>
            <TableGeneral generalForecast={general}/>
        </div>*/
        <div>
          <table className={styles.table}>
            <thead> 
                <tr>
                    <th>Date</th>
                    <th>Temperature (low:high) </th>
                    <th>Humidity (low:high) </th> 
                    <th>Wind Speed(low:high) </th> 
                    <th>Forecast </th>
            </tr>
            </thead>
            <tbody>
               
                <tr> 
                    <td>{general.date}</td>
                    <td>{general.temperature_low}:{general.temperature_high}</td>
                    <td>{general.humidity_low}:{general.humidity_high}</td>
                    <td>{general.wind_speed_low}:{general.wind_speed_high}</td>
                    <td>{general.forecast}</td>
                </tr>
                <tr> 
                    <td>{general.date1}</td>
                    <td>{general.temperature_low1}:{general.temperature_high1}</td>
                    <td>{general.humidity_low1}:{general.humidity_high1}</td>
                    <td>{general.wind_speed_low1}:{general.wind_speed_high1}</td>
                    <td>{general.forecast1}</td>
                </tr>
                <tr> 
                    <td>{general.date2}</td>
                    <td>{general.temperature_low2}:{general.temperature_high2}</td>
                    <td>{general.humidity_low2}:{general.humidity_high2}</td>
                    <td>{general.wind_speed_low2}:{general.wind_speed_high2}</td>
                    <td>{general.forecast2}</td>
                </tr>
                <tr> 
                    <td>{general.date3}</td>
                    <td>{general.temperature_low3}:{general.temperature_high3}</td>
                    <td>{general.humidity_low3}:{general.humidity_high3}</td>
                    <td>{general.wind_speed_low3}:{general.wind_speed_high3}</td>
                    <td>{general.forecast3}</td>
                </tr>
            </tbody>
        </table>
    </div>
    );
  }
export default FourDayScreen;