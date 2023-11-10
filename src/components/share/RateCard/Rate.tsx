import { Link } from 'react-router-dom'

import { Button, Typography } from 'components/share'

import styles from './Rate.module.scss'

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
    <Link to="/login">
      <Button
        className={styles.cardButton}
        type="button"
        size="medium"
        mode="defaultBlack"
        variant="secondary"
        onClick={() => console.log('clicked')}
      >
        Select
      </Button>
    </Link>
  </div>
)
export default Rate
