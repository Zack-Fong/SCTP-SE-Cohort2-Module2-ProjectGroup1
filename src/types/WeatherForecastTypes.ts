interface APIInfoType {
    status: string
}

interface AreaMetaDataType {
    name: string,
    label_location: LabelLocationType
}

interface LabelLocationType {
    longitude: number,
    latitude: number
}

interface ValidPeriodType {
    start: string,
    end: string
}

interface GeneralType {
    forecast: string,
    relative_humidity: HighLowType,
    temperature: HighLowType,
    wind: WindType
    date?: string,
    timestamp?: string
}

interface HighLowType {
    high: number,
    low: number
}

interface WindType {
    direction: string,
    speed: HighLowType
}

interface PeriodType {
    regions: {
        central: string,
        east: string,
        north: string,
        south: string,
        west: string
    },
    time: ValidPeriodType
}