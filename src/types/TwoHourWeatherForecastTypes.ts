interface TwoHourWeatherForecastResponse {
    data: TwoHourWeatherForecastDataResponse,
    status: number
}

interface TwoHourWeatherForecastDataResponse {
    api_info: APIInfoType,
    area_metadata: AreaMetaDataType[],
    items: TwoHourWeatherForecastItemType[]
}

interface TwoHourWeatherForecastItemType {
    forecasts: TwoHourWeatherForecastType[],
    timestamp: string,
    update_timestamp: string,
    valid_period: ValidPeriodType
}

interface TwoHourWeatherForecastType {
    area: string,
    forecast: string
}

interface TwoHoursWeatherForecastsActionType {
    type: string,
    payload: TwoHoursWeatherForecastsPayloadType
}

interface TwoHoursWeatherForecastsPayloadType {
    areaMetadata: AreaMetaDataType[],
    items: TwoHourWeatherForecastItemType[]
}

