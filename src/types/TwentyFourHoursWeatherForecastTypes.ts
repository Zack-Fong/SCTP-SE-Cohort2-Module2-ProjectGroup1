interface TwentyFourHoursWeatherForecastResponse {
    data: TwentyFourHoursWeatherForecastDataResponse,
    status: number
}

interface TwentyFourHoursWeatherForecastDataResponse {
    api_info: APIInfoType,
    items: TwentyFourHoursWeatherForecastItemType[]
}

interface TwentyFourHoursWeatherForecastItemType {
    general: GeneralType,
    periods: PeriodType[],
    timestamp: string,
    update_timestamp: string,
    valid_period: ValidPeriodType
}

interface TwentyFourHoursWeatherForecastsActionType {
    type: string,
    payload: TwentyFourHoursWeatherForecastsPayloadType
}

interface TwentyFourHoursWeatherForecastsPayloadType {
    items: TwentyFourHoursWeatherForecastItemType[]
}