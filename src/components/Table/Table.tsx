import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { useEffect, useReducer, useState } from 'react'

import { Toggle, Typography } from 'components/share'

import styles from './Table.module.scss'

type Person = {
  stationName: string
  stationDescription: string
  address: string
  latitude: string
  longitude: string
  lastUpdated: string
  online: string
}

const defaultData: Person[] = [
  {
    stationName: 'Shell #218',
    stationDescription: 'Merchant 2023-2983 • Store 2832-2083',
    address: '55 Kibby Ln, Cincinnati, OH 45233',
    latitude: '32.802774',
    longitude: '-96.800143',
    lastUpdated: 'Feb 14, 2023 • 12:00:01 AM EST',
    online: false,
  },
  {
    stationName: 'Shell #218',
    stationDescription: 'Merchant 2023-2983 • Store 2832-2083',
    address: '55 Kibby Ln, Cincinnati, OH 45233',
    latitude: '32.802774',
    longitude: '-96.800143',
    lastUpdated: 'Feb 14, 2023 • 12:00:01 AM EST',
    online: false,
  },
  {
    stationName: 'Shell #218',
    stationDescription: 'Merchant 2023-2983 • Store 2832-2083',
    address: '55 Kibby Ln, Cincinnati, OH 45233',
    latitude: '32.802774',
    longitude: '-96.800143',
    lastUpdated: 'Feb 14, 2023 • 12:00:01 AM EST',
    online: false,
  },
]

const columnHelper = createColumnHelper<Person>()

const columns = [
  columnHelper.accessor('stationName', {
    header: () => 'Station Name | IDs',
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('address', {
    header: () => 'Address',
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('latitude', {
    header: () => 'Latitude',
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('longitude', {
    header: () => 'Longitude',
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('lastUpdated', {
    header: () => 'Last Updated',
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('online', {
    header: () => 'Online',
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
]
const Example = () => {
  const [data, setData] = useState(() => [...defaultData])
  const rerender = useReducer(() => ({}), {})[1]
  useEffect(() => {}, [defaultData])
  const toggleState = (name) => {
    console.log('rerender')
    console.log(defaultData[0])
    defaultData.map((person) => {
      return person.stationName === name
        ? { ...person, online: !person.online }
        : { ...person }
    })
  }

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <div className={styles.table}>
      <table className={styles.tableContainer}>
        <thead className={styles.header}>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className={styles.headerTr}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} className={styles.headerTh}>
                  <Typography variant="LabelS" className={styles.headerLabel}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </Typography>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className={styles.tbody}>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className={styles.trStyle}>
              <td>
                <div className={styles.stationContainer}>
                  <div className={styles.subSquare}>
                    <div className={styles.square}></div>
                  </div>
                  <div className={styles.subContainer}>
                    <Typography
                      variant="LabelM"
                      className={styles.labelStation}
                    >
                      {row.original.stationName}
                    </Typography>
                    <Typography
                      variant="ParagraphS"
                      className={styles.paragraphStation}
                    >
                      {row.original.stationDescription}
                    </Typography>
                  </div>
                </div>
              </td>
              <td className={styles.addressTd}>
                <div className={styles.address}>
                  <Typography variant="ParagraphL">
                    {row.original.address}
                  </Typography>
                </div>
              </td>
              <td>
                <Typography variant="ParagraphL">
                  {row.original.latitude}
                </Typography>
              </td>
              <td>
                <Typography variant="ParagraphL">
                  {row.original.longitude}
                </Typography>
              </td>
              <td className={styles.addressTd}>
                <Typography variant="ParagraphL">
                  {row.original.lastUpdated}
                </Typography>
              </td>
              <td>
                <Toggle
                  name={row.original.stationName}
                  online={row.original.online}
                  toggleState={toggleState}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Example
