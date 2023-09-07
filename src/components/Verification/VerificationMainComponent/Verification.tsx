import { Typography } from 'src/components/share/Typography'

import styles from './Verification.module.scss'

import { EmailBlock, SuccessBlock } from 'src/components'

import { IBenefitsList } from 'src/types/types'



const benefitsLists: IBenefitsList [] = [
    {id:1, name:'Grow your customer base'},
    {id:2, name:'Save on transactional fees'},
    {id:3, name:'Run custom promotions'},
    {id:4, name:'Get access to the latest tech'},
    {id:5, name:'Win your market'},
]

export const VerificationMainComponent = () => {
    return(
        <div className={styles.container}>
            <div className={styles.verificationBlock}>
                <section className={styles.sideSection}>
                    <button className={styles.backButton}>Back</button>
                    <Typography variant='HeaderM'>Stations</Typography>
                    <Typography variant='ParagraphL' className={styles.sideSectionDescription}> For organizations that want to grow their revenue by reducing
                    credit card fees,while increasing traffic to their location.</Typography>
                    <ul className={styles.benefitsList}>
                        {
                            benefitsLists.map((item:IBenefitsList) => <Typography variant='ParagraphL'className={styles.listitem} key={item.id}>{item.name}</Typography>)
                        }
                    </ul>
                </section>
                <div className={styles.formBlock}>
                    <EmailBlock/>
                    {/* <SuccessBlock/> */}
                </div>
            </div>
        </div>
    )
}

export default VerificationMainComponent