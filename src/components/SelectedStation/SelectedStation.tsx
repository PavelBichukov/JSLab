import cn from 'classnames'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { ReactComponent as DotsIcon } from 'assets/icons/side-bar-icons/moreVert.svg'
import { Typography } from 'components/share'

import { getBankAccountInfo, getStationInfo } from 'src/api'

import { SwitchBoxConstants } from './SelectedStation.constants'
import styles from './SelectedStation.module.scss'
import { IStation } from './SelectedStation.types'
import {
  SelectedStationDetails,
  SelectedStationOverview,
  SelectedStationPayments,
  SelectedStationTransactions,
} from './SelectedStationSubComponents'


const _renderChapter = (chapter: string, stationInfo: IStation) => {
  switch (chapter) {
    case 'Overview': {
      return <SelectedStationOverview />
    }
    case 'Details': {
      return <SelectedStationDetails stationInfo={stationInfo} />
    }
    case 'Transactions': {
      return <SelectedStationTransactions />
    }
    case 'Payments': {
      return <SelectedStationPayments />
    }
    default:
      return <SelectedStationOverview />
  }
}

const SelectedStation = () => {
  const { stationId } = useParams()

  const [chapter, setChapter] = useState('Overview')

  const [stationInfo, setStationInfo] = useState({} as IStation)


  useEffect(() => {
    const getStation = async () => {
      try {
        const response = await getStationInfo(stationId)
        const { status, data, message } = response && response.data
        if (status === 'UPDATED') {
          const responseAccount = await getBankAccountInfo(data.bankAccountId)
          const { status, accountData, message } =
            responseAccount && responseAccount.data
          if (status === 'UPDATED') {
            setStationInfo({
              ...data,
              ...accountData,
            })
          } else {
            alert(message)
          }
        } else {
          alert(message)
        }
      } catch (error) {
        alert('Oops... Something go wrong')
      }
    }
    getStation()
  }, [])

  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <div className={styles.stationInfoBox}>
          <div className={styles.stationLogoSquare}></div>
          <div className={styles.stationInfoText}>
            <Typography className={styles.stationInfoTittle} variant="LabelXL">
              {stationInfo && `Shell Station ${stationInfo.stationName}`}
            </Typography>
            <Typography className={styles.stationAddress} variant="ParagraphM">
              55 Kibby Ln, Cincinnati, OH 45233
            </Typography>
            <Typography className={styles.stationType} variant="ParagraphS">
              {stationInfo && stationInfo.stationType}
            </Typography>
            <Typography
              className={styles.stationMerchantId}
              variant="ParagraphM"
            >
              Merchant ID: 1537-2713
            </Typography>
          </div>
        </div>
        <div className={styles.contentSwitchBox}>
          {SwitchBoxConstants.map((button) => (
            <button
              className={cn(styles.switchButton, {
                [styles.switchButtonDisabled]: button.name !== chapter,
              })}
              key={button.key}
              onClick={() => setChapter(button.name)}
            >
              {button.name}
            </button>
          ))}
        </div>
        <div className={styles.moreVert}>
          <DotsIcon className={styles.headerDotsIcon} />
        </div>
      </div>
      <div className={styles.content}>
        {_renderChapter(chapter, stationInfo)}
      </div>
    </div>
  )
}

export default SelectedStation
