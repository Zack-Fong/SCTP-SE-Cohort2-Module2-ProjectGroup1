interface TwoHoursWeatherForecastsActionType {
    type: string,
    payload: DefaultTwoHoursWeatherForecastsType
}

interface DefaultTwoHoursWeatherForecastsType {
  areaMetadata: AreaMetaDataType[],
  items: TwoHourWeatherForecastItemType[]
}
