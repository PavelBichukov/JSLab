export interface IStation {
  userEmail: string
  stationId: string
  stationType: string
  stationBrand: string
  stationName: string
  latitude: string
  longitude: string
  phoneNumber: string
  additionalEmailAddress: string
  emailAddress: string
  additionalPhoneNumber: string
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
  hoursOfOperations?: any
}
