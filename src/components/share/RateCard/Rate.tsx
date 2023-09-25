import styles from './Rate.module.scss'
import Button from '../Button/Button'
import { Typography } from '../Typography'

const Rate = ({
  title,
  description,
  options,
}: {
  title: string
  description: string
  options: string[]
}) => (
  <div className={styles.mainCard}>
    <Typography variant="HeaderM">{title}</Typography>
    <div className={styles.cardDescription}>
      <Typography variant="ParagraphL">{description}</Typography>
    </div>
    <div className={styles.cardListContainer}>
      <ul className={styles.cardList}>
        {options.map((option) => (
          <li key={option} className={styles.cardListElement}>
            <Typography variant="ParagraphL">{option}</Typography>
          </li>
        ))}
      </ul>
    </div>
    <Button
      className={styles.cardButton}
      type="button"
      size="medium"
      mode="defaultBlack"
      variant="secondary"
    >
      Select
    </Button>
  </div>
)
export default Rate
