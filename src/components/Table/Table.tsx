import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

import { Toggle, Typography } from 'components/share'
import { filters as FILTERS, columns } from 'components/Table/Table.constants'
import { getAllStations } from 'src/api'
import ChevronDownIcon from 'src/assets/icons/ChevronDownIcon.svg'
import { useAppSelector } from 'src/utils/redux-hooks/hooks'

import styles from './Table.module.scss'

const Table = () => {
  const email = useAppSelector((state) => state.user.email)
  const [data, setData] = useState<any[]>([])

  const toggleStationHandler = (stationName: any) => {
    setData(
      data.map((station) => {
        return station.stationName === stationName
          ? { ...station, online: !station.online }
          : { ...station }
      })
    )
  }

  useEffect(() => {
    const getStations = async () => {
      try {
        const response = await getAllStations(email)
        const { status, data, message } = response && response.data
        if (status === 'OK') {
          setData(data)
        } else {
          alert(message)
        }
      } catch (error) {
        alert('Oops... Something go wrong')
      }
    }
    getStations()
  }, [])

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  const navigate = useNavigate()

  const handleNav = (e: any, id: any) => {
    if (
      e.target.className.includes('slider') !== true &&
      e.target.type !== 'checkbox'
    ) {
      navigate(`/stations/${id}`)
    }
  }

  return (
    <div className={styles.table}>
      <div className={styles.subDiv}>
        {FILTERS.map((filter) => (
          <div key={filter.filterName} className={styles.subDivElement}>
            <div>
              <Typography variant="LabelS" className={styles.labelTypo}>
                {filter.filterName}
              </Typography>
            </div>
            <div className={styles.subDivTypo}>
              <Typography variant="ParagraphM">
                {filter.subFilterName}
              </Typography>
              <img src={ChevronDownIcon} alt={ChevronDownIcon} />
            </div>
          </div>
        ))}
        <Typography variant="LabelM" className={styles.filters}>
          More Filters
        </Typography>
        <Typography variant="LabelM" className={styles.filters}>
          Clear
        </Typography>
      </div>
      <table className={styles.tableContainer}>
        <thead className={styles.header}>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
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
          {data.map((station) => (
            <tr
              key={station.id}
              className={styles.trStyle}
              id={station.id}
              onClick={(e) => handleNav(e, station.stationId)}
            >
              <td>
                <div className={styles.stationContainer}>
                  <div className={styles.subSquare}>
                    <div className={styles.square}></div>
                  </div>
                  <div className={styles.subContainer}>
                    <NavLink
                      to={`/stations/${station.stationId}`}
                      className={styles.labelStation}
                    >
                      {station.stationName}
                    </NavLink>
                    <Typography
                      variant="ParagraphS"
                      className={styles.paragraphStation}
                    >
                      Merchant 2023-2983 • Store 2832-2083
                    </Typography>
                  </div>
                </div>
              </td>
              <td className={styles.addressTd}>
                <Typography variant="ParagraphL">
                  55 Kibby Ln, Cincinnati, OH 45233
                </Typography>
              </td>
              <td>
                <Typography variant="ParagraphL">{station.latitude}</Typography>
              </td>
              <td>
                <Typography variant="ParagraphL">
                  {station.longitude}
                </Typography>
              </td>
              <td className={styles.addressTd}>
                <Typography variant="ParagraphL">
                  Feb 14, 2023 • 12:00:01 AM EST
                </Typography>
              </td>
              <td>
                <Toggle
                  online={station.online}
                  stationName={station.stationName}
                  toggleStationHandler={toggleStationHandler}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table
