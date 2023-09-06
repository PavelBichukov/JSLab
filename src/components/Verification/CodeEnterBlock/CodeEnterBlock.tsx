import styles from './CodeEnterBlock.module.scss'

import { Typography } from 'src/components/share/Typography'



export const CodeEnterBlock = () => {
    return(
        <div className={styles.codeEnterBlock}>
            <Typography variant='HeaderM'> Confirm your phone number? </Typography> 
            <Typography variant='HeaderM'> Confirm your phone number? </Typography> 
        </div>
    )
}

export default CodeEnterBlock