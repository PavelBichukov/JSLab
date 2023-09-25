import cn from 'classnames'

import { useForm } from 'react-hook-form'

import { Typography } from 'src/components/share/Typography'
import { Input, Select, FormController } from 'src/components/share'

import { yearsOptions, businessTypeOptions } from './BusinessInfo.constants'

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
      checkBox: '',
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
              required: 'Field is required!',
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
              name="yearsOfOperation"
              control={control}
              haveError={errors?.checkBox}
              rules={{
                required: 'Field is required!',
              }}
              render={({ field }: any) => (
                <Select
                  {...field}
                  ref={null}
                  options={yearsOptions}
                  placeholder="Years of Operation"
                  haveError={errors?.checkBox}
                />
              )}
            />
            <FormController
              name="businessType"
              control={control}
              rules={{
                required: 'Field is required!',
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
              name="checkBox"
              control={control}
              errorClassName={styles.checkBoxError}
              rules={{
                required: 'Field is required!',
              }}
              render={({ field }: any) => (
                <input
                  {...field}
                  className={cn(styles.input, {
                    [styles.inputError]: errors?.checkBox,
                  })}
                  ref={null}
                  type="checkbox"
                  id="checkbox"
                  name="checkbox"
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
          <button
            className={cn(styles.formButton, styles.buttonBack)}
            type="button"
          >
            Back
          </button>
          <button className={cn(styles.formButton, {
            [styles.formButtonDisabled]: !isValid,
          })} type="submit">
            Finished
          </button>
        </div>
      </form>
    </div>
  )
}

export default BusinessInfoBlock
