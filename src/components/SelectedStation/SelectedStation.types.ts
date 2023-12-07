export interface IStation {
  userEmail: string
  stationId: string
  stationType: string
  stationBrand: string
  stationName: string
  latitude: string
  longitude: string
  phoneNumber: string
  emailAddress: string
  stationAmenities: string[]
  online: boolean
  bankAccountId: string
  posSystem: string
  accountId?: string
  paymentMethod?: string
  accountNickname?: string
  accountType?: string
  routingNumber?: string
  accountNumber?: string
}
