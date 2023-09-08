import styles from './Rates.module.scss'
import Rate from 'components/share/RateCard/Rate'

const Rates = () => {
  const rates = [
    {
      title: 'Personal',
      description:
        'Ideal for individuals and families looking to save on fuel costs.',
      options: [
        'Exclusive pricing on fuel',
        'Get rewarded for things your already buy',
        'Manage family spend',
        'Always save',
        'Not-brand specific',
      ],
    },
    {
      title: 'Business',
      description:
        'Ideal for organizations that want to easily distribute funds to their drivers and manage their spend.',
      options: [
        'Save on fuels costs',
        'Manage your teams’ spend',
        'Set individualized costs allocation',
        'Full audit capabilities',
        'Auto-reload for hands-off operation',
      ],
    },
    {
      title: 'Partners',
      description:
        'For organizations that want to grow their revenue by reducing credit card fees, while increasing traffic to their location.',
      options: [
        'Grow your customer base',
        'Save on transactional fees',
        'Run custom promotions',
        'Get access to the latest tech',
        'Win your market',
      ],
    },
  ]
  return (
    <div className={styles.mainRates}>
      <p className={styles.ratesTitle}>
        Start by selecting how you’ll use JSLab
      </p>
      <div className={styles.ratesCards}>
        {rates.map((rate) => (
          <Rate
            title={rate.title}
            description={rate.description}
            options={rate.options}
          />
        ))}
      </div>
    </div>
  )
}
export default Rates
