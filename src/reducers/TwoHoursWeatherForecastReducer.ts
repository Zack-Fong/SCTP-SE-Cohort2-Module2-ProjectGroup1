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
export const formattedTwoHoursAreaMetadataSelector = createSelector(areaMetadataState, (areaMetadataList) => {
  const formattedAreaMetadataList = [];

  for (const areaMetadata of areaMetadataList) {
    formattedAreaMetadataList.push({
      location: areaMetadata.name,
      latitude: areaMetadata.label_location.latitude.toFixed(3),
      longitude: areaMetadata.label_location.longitude.toFixed(3),
    });
  }

  return formattedAreaMetadataList;
});

const itemsState = (state: any) => {
  return state.twoHoursWeatherForecastReducer.items
}
export const twoHoursItemsSelector = createSelector(itemsState, (data) => data);
export const twoHoursItemsTimeRangeSelector = createSelector(itemsState, (itemsList) => {
  return {
    time_start: itemsList[0]?.valid_period?.start,
    time_end: itemsList[0]?.valid_period?.end,
  }
})
export const twoHoursItemsForecastsSelector = createSelector(itemsState, (itemsList) => {
  return itemsList[0]?.forecasts;
})