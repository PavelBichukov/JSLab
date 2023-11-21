import { createColumnHelper } from '@tanstack/react-table'

import { ITableProps } from 'components/Table/Table.types'

const columnHelper = createColumnHelper<ITableProps>()

export const columns = [
  columnHelper.accessor('stationName', {
    header: () => 'Station Name | IDs',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('address', {
    header: () => 'Address',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('latitude', {
    header: () => 'Latitude',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('longitude', {
    header: () => 'Longitude',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('lastUpdated', {
    header: () => 'Last Updated',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('online', {
    header: () => 'Online',
    cell: (info) => info.getValue(),
  }),
]
