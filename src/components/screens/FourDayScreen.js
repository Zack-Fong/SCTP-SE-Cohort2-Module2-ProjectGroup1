import {useState, useEffect} from "react";
import {useSelector} from "react-redux";
import { getFourDaysWeatherForecast } from "../../api/WeatherForecastServices";
import styles from "./Table.module.css";
import TableGeneral from "../table/TableGeneral";
import { formattedFourDaysItemsSelector} from "../../reducers/FourDaysWeatherForecastReducers";

function FourDayScreen(){
    /*const fourDayScreenGeneral = useSelector(formattedFourDaysItemsSelector);*/
   const[general, setGeneral] =useState({});

   const fourDayScreenGet = async() => {
        const response = await getFourDaysWeatherForecast();
        console.log("data1", response.items[0].forecasts[0].relative_humidity.low);

        const generalList ={
            date: response.items[0].forecasts[0].date,
            temperature_low: response.items[0].forecasts[0].temperature.low,
            temperature_high:response.items[0].forecasts[0].temperature.high,
            humidity_low: response.items[0].forecasts[0].relative_humidity.low,
            humidity_high: response.items[0].forecasts[0].relative_humidity.high,
            wind_speed_low: response.items[0].forecasts[0].temperature.low,
            wind_speed_high: response.items[0].forecasts[0].temperature.high,
            forecast: response.items[0].forecasts[0].forecast,
        
        };

        setGeneral(generalList);
    }

    useEffect(() =>{
        fourDayScreenGet();
    }, []); 
        

    return(
       /* <div>
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
            </tbody>
        </table>
    </div>
    );
  }
export default FourDayScreen;