import { createSelector } from "@reduxjs/toolkit";
import { ACTION_NAMES } from "../common/constants";

const defaultTwoHoursWeatherForecastState: TwoHoursWeatherForecastsPayloadType = {
  areaMetadata: [],
  items: [],
};

function twoHoursWeatherForecastReducer(
  state = defaultTwoHoursWeatherForecastState,
  action: TwoHoursWeatherForecastsActionType
) {
  switch (action.type) {
    case ACTION_NAMES.SET_TWO_HOURS_WEATHER_FORECAST:
      return {
        ...state,
        areaMetadata: action.payload.areaMetadata,
        items: action.payload.items
      };
    default: return state;
  }
}
export default twoHoursWeatherForecastReducer;

const areaMetadataState = (state: any) => {
  return state.twoHoursWeatherForecastReducer.areaMetadata
}
export const twoHoursAreaMetadataSelector = createSelector(areaMetadataState, (data) => data);

const itemsState = (state: any) => {
  return state.twoHoursWeatherForecastReducer.items
}
export const twoHoursItemsSelector = createSelector(itemsState, (data) => data);