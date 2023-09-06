import { Typography } from 'src/components/share/Typography'
import styles from './Verification.module.scss'


const benefitsList: string[] = [
    'Grow your customer base',
    'Save on transactional fees',
    'Run custom promotions',
    'Get access to the latest tech',
    'Win your market',
]

export const VerificationMainComponent = () => {

    return(
        <div className={styles.container}>
            <div className={styles.verificationBlock}>
                <section className={styles.sideSection}>
                    <button className={styles.backButton}>Back</button>
                    <Typography variant='HeaderM'>Stations</Typography>
                    <Typography variant='ParagraphL' className={styles.sideSectionDescription}> For organizations that want to grow their revenue by reducing credit card fees,
                    while increasing traffic to their location.</Typography>
                    <ul className={styles.benefitsList}>
                        {
                            benefitsList.map((item, index) => <Typography variant='ParagraphL'className={styles.listitem} key={index}>{item}</Typography>  )
                        }
                    </ul>
                </section>
                <div className={styles.formBlock}>
                    
                </div>
            </div>
        </div>
    )
}

export default VerificationMainComponent