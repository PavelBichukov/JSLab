export const chartPeriods = [
  {
    key: '1 D',
    text: '1 D',
    isActive: 'true',
  },
  {
    key: '5 D',
    text: '5 D',
    isActive: false,
  },
  {
    key: '1 M',
    text: '1 M',
    isActive: false,
  },
  {
    key: '3 M',
    text: '3 M',
    isActive: false,
  },
  {
    key: '6 M',
    text: '6 M',
    isActive: false,
  },
  {
    key: 'YTD',
    text: 'YTD',
    isActive: false,
  },
  {
    key: '1 Y',
    text: '1 Y',
    isActive: false,
  },
] as { key: string, text: string; isActive: boolean }[]


export const marketWatchData = [
  {
    label: '8pm',
    revenue: 77.5,
  }, 
  {
    label: '12am',
    revenue: 77.7,
  }, 
  {
    label: '4am',
    revenue: 76.8,
  }, 
  {
    label: '8am',
    revenue: 77.3,
  }, 
  {
    label: '12pm',
    revenue: 76.2,
  }, 
  {
    label: '4pm',
  }, 
] as {label: string, revenue?: number}[]