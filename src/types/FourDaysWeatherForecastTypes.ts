interface FourDaysWeatherForecastResponse {
    data: FourDaysWeatherForecastDataResponse,
    status: number
}

interface FourDaysWeatherForecastDataResponse {
    api_info: APIInfoType,
    items: FourDaysWeatherForecastItemType[]
}

interface FourDaysWeatherForecastItemType {
    forecasts: GeneralType[],
    timestamp: string,
    update_timestamp: string
}
