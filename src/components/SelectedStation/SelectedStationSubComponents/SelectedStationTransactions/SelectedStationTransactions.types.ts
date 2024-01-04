export interface ITableProps {
  transaction: string
  customer: string
  date: string
  fuel: string
  price: string
  amount: string
}

export interface ITransaction {
  checked: boolean
  transactionID: string
  customer: {
    name: string
    id: string
  }
  date: string[]
  fuel: {
    type: string
    grade: string
  }
  fuelPrice: {
    cost: string
    discount: string
  }
  transactionAmount: string
}
