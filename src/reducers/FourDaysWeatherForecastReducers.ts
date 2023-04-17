import { createSelector } from "@reduxjs/toolkit";
import { ACTION_NAMES } from "../common/constants";

const defaultFourDaysWeatherForecastState: FourDaysWeatherForecastsPayloadType = {
    items: [],
};

function fourDaysWeatherForecastReducer(
    state = defaultFourDaysWeatherForecastState,
    action: FourDaysWeatherForecastsActionType
) {
    switch (action.type) {
        case ACTION_NAMES.SET_FOUR_DAYS_WEATHER_FORECAST:
            return {
                ...state,
                items: action.payload.items
            };
        default: return state;
    }
}
export default fourDaysWeatherForecastReducer;

const itemsState = (state: any) => {
    return state.fourDaysWeatherForecastReducer.items
}
export const fourDaysItemsSelector = createSelector(itemsState, (fourDaysItemsList) => fourDaysItemsList);
export const fourDaysItemsForecastsSelector = createSelector(itemsState, (fourDaysItemsList) => {
    return fourDaysItemsList[0]?.forecasts || []
});
export const formattedFourDaysItemsSelector = createSelector(itemsState, (fourDaysItemsList) => {
    const fourDaysItemsForecastsList = fourDaysItemsList[0]?.forecasts || [];
    const formattedFourDaysForecast = fourDaysItemsForecastsList?.map((forecast: GeneralType) => {
        const dateTimeString = new Date(forecast.timestamp || "").toLocaleString(
            "en-GB",
            {
                day: "numeric",
                month: "short",
                year: "numeric",
                hour: "numeric",
                minute: "numeric",
            }
        );

        return ({
            date: forecast?.date,
            forecast: forecast?.forecast,
            relative_humidity_low: forecast?.relative_humidity.low,
            relative_humidity_high: forecast?.relative_humidity.high,
            temperature_low: forecast?.temperature.low,
            temperature_high: forecast?.temperature.high,
            wind_speed_low: forecast?.wind.speed.low,
            wind_speed_high: forecast?.wind.speed.high,
            wind_direction: forecast?.wind.direction,
            timestamp: dateTimeString?.split("at")[1]?.trim(),
        })
    })
    return formattedFourDaysForecast;
});