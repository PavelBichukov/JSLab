import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { useState } from 'react'

import { ReactComponent as CloudIcon } from 'assets/icons/cloud-download.svg'
import { ReactComponent as PrinterIcon } from 'assets/icons/printerIcon.svg'
import { Checkbox, Select, Typography } from 'components/share'

import {
  columns,
  filters,
  transactions,
} from './SelectedStationTransactions.constants'
import styles from './SelectedStationTransactions.module.scss'
import { ITransaction } from './SelectedStationTransactions.types'

const SelectedStationTransactions = () => {
  const [data, setData] = useState<ITransaction[]>(transactions)

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  const handleCheck = (e: any) => {
    setData(
      data.map((transaction) => {
        return transaction.customer.id === e.target.id
          ? { ...transaction, checked: !transaction.checked }
          : { ...transaction }
      })
    )
  }

  const handleSetFilter = (
    value: { value: string; label: string },
    filterName: string
  ) => {
    switch (filterName) {
      case 'Fuel type': {
        switch (value.value) {
          case 'Diesel': {
            return setData(
              transactions.filter(
                (transaction) => transaction.fuel.type === value.value
              )
            )
          }
          case 'Gasoline': {
            return setData(
              transactions.filter(
                (transaction) => transaction.fuel.type === value.value
              )
            )
          }
          case 'Electric': {
            return setData(
              transactions.filter(
                (transaction) => transaction.fuel.type === value.value
              )
            )
          }
          case 'All': {
            return setData(transactions)
          }
          default:
            return setData(transactions)
        }
      }
      case 'Discount Amount': {
        switch (value.value) {
          case '0.10': {
            return setData(
              transactions.filter(
                (transaction) => transaction.fuelPrice.discount === value.value
              )
            )
          }
          case '0.20': {
            return setData(
              transactions.filter(
                (transaction) => transaction.fuelPrice.discount === value.value
              )
            )
          }
          case '0.30': {
            return setData(
              transactions.filter(
                (transaction) => transaction.fuelPrice.discount === value.value
              )
            )
          }
          case 'All': {
            return setData(transactions)
          }
          default:
            return setData(transactions)
        }
      }
      default:
        console.log(filterName)
    }
  }

  return (
    <div className={styles.main}>
      <div className={styles.filtersContainer}>
        {filters.map((filter) => (
          <div key={filter.name} className={styles.filterBox}>
            <Typography className={styles.filterLabel} variant="LabelS">
              {filter.name}
            </Typography>
            <Select
              options={filter.options}
              placeholder={filter.name}
              id={filter.name}
              onChange={(value: { value: string; label: string }) =>
                handleSetFilter(value, filter.name)
              }
            />
          </div>
        ))}
        <div className={styles.filtersButtons}>
          <PrinterIcon className={styles.filterButton} />
          <CloudIcon className={styles.filterButton} />
        </div>
      </div>
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
          {data.map((transaction) => (
            <tr key={transaction.customer.id} className={styles.tableTr}>
              <td className={styles.tableTd}>
                <div className={styles.transactionIdBox}>
                  <Checkbox
                    id={transaction.customer.id}
                    checked={transaction.checked}
                    onChange={(e) => handleCheck(e)}
                  />
                  <Typography variant="ParagraphS">
                    {transaction.transactionID}
                  </Typography>
                </div>
              </td>
              <td className={styles.tableTd}>
                <div className={styles.customer}>
                  <Typography className={styles.tdTittle} variant="ParagraphM">
                    {transaction.customer.name}
                  </Typography>
                  <Typography
                    className={styles.tdSubTittle}
                    variant="ParagraphS"
                  >
                    {transaction.customer.id}
                  </Typography>
                </div>
              </td>
              <td className={styles.tableTd}>
                <div className={styles.date}>
                  <Typography className={styles.tdTittle} variant="ParagraphM">
                    {`${transaction.date[1]} ${transaction.date[2]}, ${transaction.date[3]}`}
                  </Typography>
                  <Typography
                    className={styles.tdSubTittle}
                    variant="ParagraphS"
                  >
                    {transaction.date[4]}
                  </Typography>
                </div>
              </td>
              <td className={styles.tableTd}>
                <div className={styles.fuel}>
                  <Typography className={styles.tdTittle} variant="ParagraphM">
                    {transaction.fuel.type}
                  </Typography>
                  <Typography
                    className={styles.tdSubTittle}
                    variant="ParagraphS"
                  >
                    {transaction.fuel.grade}
                  </Typography>
                </div>
              </td>
              <td className={styles.tableTd}>
                <div className={styles.price}>
                  <Typography className={styles.tdTittle} variant="ParagraphM">
                    {`$${transaction.fuelPrice.cost} / gallon`}
                  </Typography>
                  <Typography
                    className={styles.tdSubTittle}
                    variant="ParagraphS"
                  >
                    {`$${transaction.fuelPrice.discount} / gallon`}
                  </Typography>
                </div>
              </td>
              <td className={styles.tableTd}>
                <div className={styles.amount}>
                  <Typography variant="ParagraphM">
                    {`$${transaction.transactionAmount}`}
                  </Typography>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default SelectedStationTransactions
