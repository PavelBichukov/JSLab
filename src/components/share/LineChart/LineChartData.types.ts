export interface IDataItem{
  label: string,
  revenue?: number
}

export interface IData{
  dataSet: IDataItem[],
  symbol?: string,
  minScale: number,
  maxScale: number,
  baseline?: boolean
}