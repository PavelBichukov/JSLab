import { HomeCard, Typography } from 'components/share'

import { news } from './NewsCard.constants'
import styles from './NewsCard.module.scss'

export const NewsCard = () => (
  <HomeCard variant="primary">
    <Typography variant="LabelL">News</Typography>
    <div className={styles.newsContainer}>
      {news.map((news) => (
        <div key={news.date} className={styles.container}>
          <img src={news.imgSrc} alt={news.title} />
          <div className={styles.subContainer}>
            <Typography variant="ParagraphL" className={styles.title}>
              {news.title}
            </Typography>
            <Typography variant="LabelS" className={styles.date}>
              {news.date}
            </Typography>
          </div>
        </div>
      ))}
    </div>
  </HomeCard>
)

export default NewsCard
