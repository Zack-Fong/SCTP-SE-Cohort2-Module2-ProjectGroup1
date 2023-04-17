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
