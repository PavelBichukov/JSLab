import { Typography } from 'src/components/share/Typography'
// import TextField from '@mui/material/TextField';
import styles from './EmailEnterBlock.module.scss'

import { SubmitHandler, useForm } from 'react-hook-form'


interface IEmail {
    email: string
}



export const EmailBlock = () => {
    const {register, handleSubmit} = useForm<IEmail>({

    })

    const submit: SubmitHandler<IEmail> = (data :any) => {
        console.log(data)
    }

    return(
            <div className={styles.emailBlock}>
                <Typography variant='HeaderM'>What’s your email address?</Typography>
                <Typography variant='ParagraphL'>We’ll send you a six-digit code.  It expires 10 minutes after your request.</Typography>
                <form className={styles.emailForm} onSubmit={handleSubmit(submit)}>
                    <input 
                    className={styles.emailFormInput} 
                    type="email" 
                    name="email"
                    onChange={(e) => console.log(e.target.value)}/>
                    <button className={styles.emailContinueButton} type='submit'> Continue </button>
                </form>
                <Typography variant='ParagraphS' className={styles.emailAgreement}>By tapping Continue, you confirm that you are authorized to use the email address entered and 
                agree to receive emails messages to verify you own the email.  Carrier fees may apply..</Typography>
            </div>
    )
}

export default EmailBlock