export const getStepIndex = (currentStep: string, constants: any) => {
  const index = constants.findIndex((step) => step.key === currentStep)
  return index + 1
}