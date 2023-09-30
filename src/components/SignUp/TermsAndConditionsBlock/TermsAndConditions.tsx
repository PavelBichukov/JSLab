import { useForm } from 'react-hook-form'

import { Button, Checkbox, FormController, Typography } from 'components/share'

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
              <Checkbox
                {...field}
                ref={null}
                id="termsCheckBox"
                hasError={!!errors?.termsCheckBox}
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
          <Button
            className={styles.buttonBack}
            type="button"
            mode="outlinedWhite"
            variant="secondary"
            size="small"
            onClick={() => console.log('clicked')}
          >
            Back
          </Button>
          <Button
            className={styles.buttonFinished}
            type="submit"
            mode={isValid ? 'defaultBlack' : 'disabled'}
            variant="secondary"
            size="small"
            onClick={() => console.log('clicked')}
          >
            Finished
          </Button>
        </div>
      </form>
    </div>
  )
}

export default TermsAndConditions
