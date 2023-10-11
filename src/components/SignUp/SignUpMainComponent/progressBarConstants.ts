import { SIGN_UP_STEPS } from 'src/constants/signUpSteps'
import { IBenefitsList } from 'src/types/types'

export const progressBarConstants: IBenefitsList[] = [
  { key: SIGN_UP_STEPS.SUCCESS, name: 'Personal Information' },
  { key: SIGN_UP_STEPS.BUSINESS_INFO, name: 'Business Information' },
  { key: SIGN_UP_STEPS.BUSINESS_LOCATION, name: 'Business Address' },
  { key: SIGN_UP_STEPS.TERMS_AND_CONDITIONS, name: 'Terms and Conditions' },
]
