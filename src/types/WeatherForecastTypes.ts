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