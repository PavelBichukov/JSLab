import { useForm } from 'react-hook-form'

import {
  Button,
  Checkbox,
  FormController,
  Input,
  Select,
} from 'src/components/share'
import { Typography } from 'src/components/share/Typography'

import { businessTypeOptions, yearsOptions } from './BusinessInfo.constants'
import styles from './BusinessInfoBlock.module.scss'

export const BusinessInfoBlock = () => {
  const {
    control,
    formState: { isValid, errors },
    handleSubmit,
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      businessName: '',
      yearsOfOperation: '',
      businessType: '',
      checkboxBusiness: '',
    },
  })

  const onSubmit = (data: any) => {
    console.log(JSON.stringify(data))
  }

  return (
    <div className={styles.main}>
      <Typography variant="HeaderM">Tell us about your business</Typography>
      <Typography variant="ParagraphL" className={styles.subTittle}>
        We’ll use this information to verify your organization.
      </Typography>
      <form className={styles.formBlock} onSubmit={handleSubmit(onSubmit)}>
        <div>
          <FormController
            name="businessName"
            control={control}
            rules={{
              required: 'Business Legal Name is required!',
            }}
            render={({ field }: any) => (
              <Input
                {...field}
                ref={null}
                variant="text"
                label="Business Legal Name"
                id="businessName"
              />
            )}
          />
          <div className={styles.selectsGroup}>
            <FormController
              errorClassName={styles.selectError}
              name="yearsOfOperation"
              control={control}
              rules={{
                required: 'Years of Operation is required!',
              }}
              render={({ field }: any) => (
                <Select
                  {...field}
                  ref={null}
                  options={yearsOptions}
                  placeholder="Years of Operation"
                />
              )}
            />
            <FormController
              errorClassName={styles.selectError}
              name="businessType"
              control={control}
              rules={{
                required: 'Business type is required!',
              }}
              render={({ field }: any) => (
                <Select
                  {...field}
                  ref={null}
                  options={businessTypeOptions}
                  placeholder="Business type"
                />
              )}
            />
          </div>
          <div className={styles.checkBoxBlock}>
            <FormController
              errorClassName={styles.checkBoxError}
              name="checkboxBusiness"
              control={control}
              rules={{
                required: 'Field is required!',
              }}
              render={({ field }: any) => (
                <Checkbox
                  {...field}
                  ref={null}
                  id="checkboxBusiness"
                  hasError={!!errors?.checkboxBusiness}
                />
              )}
            />
            <Typography variant="ParagraphL">
              I am an authorized representative with authority to create an
              business account for my organization.
            </Typography>
          </div>
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

export default BusinessInfoBlock
