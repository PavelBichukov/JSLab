import { Controller } from 'react-hook-form'
import cn from 'classnames'

import { Typography } from 'src/components/share/Typography'

import styles from './FormController.module.scss'

const FormController = ({
  name,
  control,
  rules,
  render,
  errorClassName,
  rootClassName,
}: any) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState, formState }) => (
        <div className={cn(styles.root, rootClassName)}>
          {render({ field, fieldState, formState })}
          {fieldState.error && (
            <Typography
              className={cn(styles.error, errorClassName)}
              variant="ParagraphM"
            >
              {fieldState.error?.message as string}
            </Typography>
          )}
        </div>
      )}
    />
  )
}

export default FormController
