import { Typography } from 'components/share/Typography'

import styles from './Rate.module.scss'

const Rate = (props) => {
  const { title, description, options } = props
  return (
    <div className={styles.mainCard}>
      <Typography variant="HeaderM">{title}</Typography>
      <div className={styles.cardDescription}>
        <Typography variant="ParagraphL">{description}</Typography>
      </div>
      <div className={styles.cardListContainer}>
        <ul className={styles.cardList}>
          {options.map((option) => (
            <li key={option} className={styles.cardListElement}>
              {option}
            </li>
          ))}
        </ul>
      </div>
      <button className={styles.cardButton}>Select</button>
    </div>
  )
}
export default Rate
