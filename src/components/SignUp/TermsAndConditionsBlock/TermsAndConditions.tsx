import cn from 'classnames'

import { useForm } from 'react-hook-form'

import { Typography } from 'src/components/share/Typography'

import styles from './TermsAndConditions.module.scss'

export const TermsAndConditions = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      termsCheckBox: '',
    }
  })

  const onSubmit = () => {
    console.log('checkbox is checked')
  }

  return (
    <div className={styles.main}>
      <Typography variant="HeaderM">Terms and Conditions</Typography>
      <Typography variant="ParagraphL" className={styles.subTittle}>
        Just the legal requirements
      </Typography>
      <Typography variant="ParagraphL" className={styles.textInfo}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
        consequatur iste, sed, doloribus, dolor nisi numquam odit veniam
        adipisci assumenda alias. Error perspiciatis suscipit doloribus corrupti
        explicabo maxime quam at?Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Ratione consequatur iste, sed, doloribus, dolor nisi
        numquam odit veniam adipisci assumenda alias. Error perspiciatis
        suscipit doloribus corrupti explicabo maxime quam at?Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Ratione consequatur iste, sed,
        doloribus, dolor nisi numquam odit veniam adipisci assumenda alias.
        Error perspiciatis suscipit doloribus corrupti explicabo maxime quam
        at?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
        consequatur iste, sed, doloribus, dolor nisi numquam odit veniam
        adipisci assumenda alias. Error perspiciatis suscipit doloribus corrupti
        explicabo maxime quam at?Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Ratione consequatur iste, sed, doloribus, dolor nisi
        numquam odit veniam adipisci assumenda alias. Error perspiciatis
        suscipit doloribus corrupti explicabo maxime quam at?suscipit doloribus
        corrupti explicabo maxime quam at?Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Ratione consequatur iste, sed, doloribus, dolor nisi
        numquam odit veniam adipisci assumenda alias. Error perspiciatis
        suscipit doloribus corrupti explicabo maxime quam at?Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Ratione consequatur iste, sed,
        doloribus, dolor nisi numquam odit veniam adipisci assumenda alias.
        Error perspiciatis suscipit doloribus corrupti explicabo maxime quam
        at?nda alias. Error perspiciatis suscipit doloribus corrupti explicabo
        maxime quam at?Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Ratione consequatur iste, sed, doloribus, dolor nisi numquam odit veniam
        adipisci assumenda alias. Error perspiciatis suscipit doloribus corrupti
        explicabo maxime quam at?odit veniam adipisci assumenda alias. Error
        perspiciatis suscipit doloribus corrupti explicabo maxime quam at?Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Ratione consequatur
        iste, sed, doloribus, dolor nisi numquam odit veniam adipisci assumenda
        alias. Error perspiciatis suscipit doloribus corrupti explicabo maxime
        quam at?nda alias. Error perspiciatis suscipit doloribus corrupti
        explicabo maxime quam at?Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Ratione consequatur iste, sed, doloribus, dolor nisi
        numquam odit veniam adipisci assumenda alias. Error perspiciatis
        suscipit doloribus corrupti explicabo maxime quam at?
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.checkBoxBlock}>
          <input
            {...register('termsCheckBox', { required: 'Field is required!' })}
            type="checkbox"
            id="checkbox"
            name="checkbox"
          />
          <Typography variant="ParagraphL">
            {'I agree to JSLab '}
            <a href="#">Terms & Conditions</a>
            {' and '}
            <a href="#">Privacy Policy</a>
          </Typography>
        </div>
        {errors?.termsCheckBox && (
          <p className={styles.errorMessage}>
            {errors?.termsCheckBox?.message as string}
          </p>
        )}
        <div className={styles.buttonsBlock}>
          <button
            className={cn(styles.button, styles.buttonBack)}
            type="button"
          >
            Back
          </button>
          <button className={styles.button} type="submit">
            Finished
          </button>
        </div>
      </form>
    </div>
  )
}

export default TermsAndConditions
