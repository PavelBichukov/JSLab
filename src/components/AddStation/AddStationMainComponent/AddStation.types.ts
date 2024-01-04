export interface IStation {
  userEmail: string,
  stationId: string,
  stationType: string,
  stationBrand: string,
  stationName: string,
  latitude: string,
  longitude: string,
  phoneNumber: string,
  emailAddress: string,
  stationAmenities: string [],
  paymentMethod:string,
  accountNickname:string,
  accountType:string,
  routingNumber:string,
  accountNumber:string,
  bankAccountId: string,
  posSystem: string,
}

export interface IChildrenProps {
  stationState : IStation,
  setStationState: (prev: (value: IStation) => IStation) => void;
}