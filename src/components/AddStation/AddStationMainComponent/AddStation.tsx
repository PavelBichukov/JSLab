import cn from 'classnames'

import { GeneralInfoBlock } from 'components/AddStation/GeneralInfoBlock'
import { Modal, Typography } from 'components/share'
import { StationTypeBlock } from 'src/components/AddStation'
import { ADD_STATION_STEPS } from 'src/constants/addStationSteps'
import { useModal } from 'src/hooks/useModal'
import { getStepIndex } from 'src/utils'
import { useAppSelector } from 'src/utils/redux-hooks/hooks'

import styles from './AddStation.module.scss'
import { progressBarConstants } from './progressBarConstants'

const _renderStep = (step: string) => {
  switch (step) {
    case ADD_STATION_STEPS.STATION_TYPE: {
      return <StationTypeBlock />
    }
    case ADD_STATION_STEPS.GENERAL_INFORMATION: {
      return <GeneralInfoBlock />
    }
    case ADD_STATION_STEPS.STATION_AMENITIES: {
      return <StationTypeBlock />
    }
    case ADD_STATION_STEPS.CONNECT_YOUR_BANK: {
      return <StationTypeBlock />
    }
    case ADD_STATION_STEPS.CONNECT_YOUR_SYSTEM: {
      return <StationTypeBlock />
    }
    case ADD_STATION_STEPS.FINALIZE: {
      return <StationTypeBlock />
    }
    default:
      return <StationTypeBlock />
  }
}

export const AddStationMainComponent = () => {
  const currentStep = useAppSelector(
    (state) => state.addStationStep.currentStep
  )
  const [isOpen, openModal, closeModal] = useModal()
  return (
    <div>
      <button onClick={openModal}>Open</button>
      <Modal
        isOpen={isOpen}
        onModalClose={closeModal}
        withCloseButton={false}
        variant="medium"
      >
        <div className={styles.signUpBlock}>
          <section className={styles.sideSection}>
            <Typography variant="HeaderM" className={styles.headerStation}>
              Add a Station
            </Typography>
            <div className={styles.progressBar}>
              {progressBarConstants.map((item) => (
                <div
                  className={cn(styles.progressBarItem, {
                    [styles.progressBarItemActive]:
                      getStepIndex(item.key, progressBarConstants) <=
                      getStepIndex(currentStep, progressBarConstants),
                  })}
                  key={item.key}
                >
                  <div className={styles.circleNumber}>
                    <Typography variant="LabelL">
                      {getStepIndex(item.key, progressBarConstants)}
                    </Typography>
                  </div>
                  <Typography variant="ParagraphL">{item.name}</Typography>
                </div>
              ))}
            </div>
          </section>
          <div className={styles.formBlock}>{_renderStep(currentStep)}</div>
        </div>
      </Modal>
    </div>
  )
}

export default AddStationMainComponent
