import { createColumnHelper } from '@tanstack/react-table'

import { ITableProps, ITransaction } from './SelectedStationTransactions.types'

const columnHelper = createColumnHelper<ITableProps>()

export const columns = [
  columnHelper.accessor('transaction', {
    header: () => 'Transaction ID',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('customer', {
    header: () => 'Customer Name | ID',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('date', {
    header: () => 'Date | Time',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('fuel', {
    header: () => 'Fuel Type | Grade/Rate',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('price', {
    header: () => 'Cost | Discount',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('amount', {
    header: () => 'Transaction Amount',
    cell: (info) => info.getValue(),
  }),
]

export const customers = [
  'Johnathan Winters',
  'Saige Fuentes',
  'Bowen Higgins',
  'Leighton Kramer',
  'Kylan Gentry',
  'Amelie Griffith',
  'Franklin Sierra',
  'Marceline Avila',
  'Jaylen Blackwell',
]

export const transactions = customers.map((item, index) => {
  let fuelType = ''
  let discount = ''
  if (index <= 3) {
    fuelType = 'Diesel'
    discount = '0.10'
  } else if (index >= 4 && index <= 6) {
    fuelType = 'Electric'
    discount = '0.20'
  } else {
    fuelType = 'Gasoline'
    discount = '0.30'
  }
  return {
    checked: false,
    transactionID: `2023-0213-${131922 + index}`,
    customerName: item,
    customer: {
      name: item,
      id: `0000${1237319 + index}`,
    },
    date: new Date().toString().split(' '),
    fuel: {
      type: fuelType,
      grade: 'Shell Regular',
    },
    fuelPrice: {
      cost: '3.49',
      discount: discount,
    },
    transactionAmount: `${78.19 + index}`,
  } as ITransaction
})

const dayOptions = [
  {
    value: 'Feb 1 14',
    label: `Feb 1. 2023 - Feb 14. 2023`,
  },
  {
    value: 'Feb 15 28',
    label: 'Feb 15. 2023 - Feb 28. 2023',
  },
] as { value: string; label: string }[]

const FuelTypeOptions = [
  {
    value: 'Gasoline',
    label: 'Gasoline',
  },
  {
    value: 'Diesel',
    label: 'Diesel',
  },
  {
    value: 'Electric',
    label: 'Electric',
  },
  {
    value: 'All',
    label: 'All',
  },
] as { value: string; label: string }[]

const discountOptions = [
  {
    value: 'All',
    label: 'All',
  },
  {
    value: '0.10',
    label: '$0.10',
  },
  {
    value: '0.20',
    label: '$0.20',
  },
  {
    value: '0.30',
    label: '$0.30',
  },
] as { value: string; label: string }[]

export const filters = [
  {
    name: 'Date Range',
    options: dayOptions,
  },
  {
    name: 'Fuel type',
    options: FuelTypeOptions,
  },
  {
    name: 'Discount Amount',
    options: discountOptions,
  },
]
