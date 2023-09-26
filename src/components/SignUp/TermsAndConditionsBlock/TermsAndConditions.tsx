import cn from 'classnames'

import { useForm } from 'react-hook-form'

import { Typography } from 'src/components/share/Typography'
import { FormController, Checkbox } from 'src/components/share'

import styles from './TermsAndConditions.module.scss'

export const TermsAndConditions = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      termsCheckBox: '',
    },
  })

  const onSubmit = () => {
    console.log('Terms checkbox is checked')
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
        <FormController
              name="termsCheckBox"
              control={control}
              errorClassName={styles.checkBoxError}
              rules={{
                required: 'Field is required!',
              }}
              render={({ field }: any) => (
                // <input
                //   {...field}
                //   className={cn(styles.input, {
                //     [styles.inputError]: errors?.termsCheckBox,
                //   })}
                //   ref={null}
                //   type="checkbox"
                //   id="checkbox"
                //   name="checkbox"
                // />
                <Checkbox
                {...field}
                ref={null}
                id="termsCheckBox"
                hasError = {!!errors?.termsCheckBox}
                />
              )}
            />
          <Typography variant="ParagraphL">
            {'I agree to JSLab '}
            <a href="#">Terms & Conditions</a>
            {' and '}
            <a href="#">Privacy Policy</a>
          </Typography>
        </div>
        <div className={styles.buttonsBlock}>
          <button
            className={cn(styles.formButton, styles.buttonBack)}
            type="button"
          >
            Back
          </button>
          <button className={cn(styles.formButton, {
            [styles.formButtonDisabled]: !isValid,
          })}  type="submit">
            Finished
          </button>
        </div>
      </form>
    </div>
  )
}

export default TermsAndConditions
