import { progressBarConstants } from './progressBarConstants'

export const getStepIndex = (currentStep: string) => {
  const index = progressBarConstants.findIndex(
    (step) => step.key === currentStep
  )
  return index + 1
}
