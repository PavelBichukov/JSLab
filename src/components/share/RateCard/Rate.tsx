import styles from './Rate.module.scss'

const Rate = (props) => {
  const { title, description, options } = props
  return (
    <div className={styles.mainCard}>
      <p className={styles.cardTitle}>{title}</p>
      <div className={styles.cardDescription}>
        <p>{description}</p>
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
