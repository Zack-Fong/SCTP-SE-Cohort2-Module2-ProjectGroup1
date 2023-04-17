import { createSelector } from "@reduxjs/toolkit";
import { ACTION_NAMES } from "../common/constants";

const defaultTwentyFourHoursWeatherForecastState: TwentyFourHoursWeatherForecastsPayloadType = {
    items: [],
};

function twentyFourHoursWeatherForecastReducer(
    state = defaultTwentyFourHoursWeatherForecastState,
    action: TwentyFourHoursWeatherForecastsActionType
) {
    switch (action.type) {
        case ACTION_NAMES.SET_TWENTY_FOUR_HOURS_WEATHER_FORECAST:
            return {
                ...state,
                items: action.payload.items
            };
        default: return state;
    }
}
export default twentyFourHoursWeatherForecastReducer;

const itemsState = (state: any) => {
    return state.twentyFourHoursWeatherForecastReducer.items
}
export const twentyFourHoursItemsSelector = createSelector(itemsState, (twentyFourHoursItemsList) => twentyFourHoursItemsList);
export const twentyFourHoursGeneralSelector = createSelector(itemsState, (twentyFourHoursItemsList) => {
    const generalItem = twentyFourHoursItemsList && twentyFourHoursItemsList[0]?.general;
    return {
        forecast: generalItem?.forecast,
        relative_humidity_low: generalItem?.relative_humidity.low,
        relative_humidity_high: generalItem?.relative_humidity.high,
        temperature_low: generalItem?.temperature.low,
        temperature_high: generalItem?.temperature.high,
        wind_speed_low: generalItem?.wind.speed.low,
        wind_speed_high: generalItem?.wind.speed.high,
        wind_direction: generalItem?.wind.direction,
    }
})
export const formattedTwentyFourHoursPeriodsSelector = createSelector(itemsState, (twentyFourHoursItemsList) => {
    const formattedTwentyFourHoursPeriods = twentyFourHoursItemsList && twentyFourHoursItemsList[0]?.periods.map((period: PeriodType) => {
        return ({
            time_start: new Date(period.time.start).toLocaleString(
                "en-GB",
                {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                    hour: "numeric",
                    minute: "numeric",
                }
            ),
            time_end: new Date(period.time.end).toLocaleString(
                "en-GB",
                {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                    hour: "numeric",
                    minute: "numeric",
                }
            ),
            west: period.regions.west,
            east: period.regions.east,
            central: period.regions.central,
            south: period.regions.south,
            north: period.regions.north,
        })
    })
    return formattedTwentyFourHoursPeriods;
})