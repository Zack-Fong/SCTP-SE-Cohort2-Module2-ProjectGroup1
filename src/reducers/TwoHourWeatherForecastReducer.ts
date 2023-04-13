

export const defaultTwoHoursWeatherForecasts: DefaultTwoHoursWeatherForecastsType = {
  areaMetadata: [],
  items: []
};

export function twoHourWeatherForecastReducer(state: DefaultTwoHoursWeatherForecastsType, action: TwoHoursWeatherForecastsActionType) {
  switch (action.type) {
    case ACTION_NAMES.SET_TWO_HOURS_WEATHER_FORECAST:
      return {...state, state: action.payload};
    default:
    throw Error(`twoHourWeatherForecastReducer - unknown action: ${action.type}` );
  }
}
