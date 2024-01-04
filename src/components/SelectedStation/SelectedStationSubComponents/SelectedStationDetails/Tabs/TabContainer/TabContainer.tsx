import cn from 'classnames'
import { useState } from 'react'

import { ReactComponent as Chevron } from 'assets/icons/ChevronDownIcon.svg'
import { Button, Typography } from 'components/share'

import styles from './TabContainer.module.scss'

const TabContainer = ({
  tittle,
  children,
  subTittle,
  onSave,
  onDiscard,
  onSubmit,
  isDisabled,
}: {
  tittle: string
  children: any
  subTittle?: string
  onSave?: () => void
  onDiscard?: () => void
  onSubmit?: any
  isDisabled?: boolean
}) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <form className={cn(styles.container, { [styles.containerOpen]: isOpen })} onSubmit={onSubmit}>
      <header className={styles.header}>
        <div className={styles.headerText}>
          <Typography className={styles.tittle} variant="LabelL">
            {tittle}
          </Typography>
          {subTittle && (
            <Typography
              className={cn(styles.subTittle, {
                [styles.subTittleHidden]: !isOpen,
              })}
              variant="ParagraphM"
            >
              {subTittle}
            </Typography>
          )}
        </div>
        <Chevron
          className={cn(styles.chevron, { [styles.chevronActive]: isOpen })}
          onClick={() => setIsOpen(!isOpen)}
        />
      </header>
      <div className={cn(styles.main, { [styles.mainOpen]: isOpen })}>
        {children}
      </div>
      <div
        className={cn(styles.buttonsBlock, {
          [styles.buttonsBlockOpen]: isOpen,
        })}
      >
        <Button
          className={styles.buttonDiscard}
          type="button"
          mode="outlinedWhite"
          variant="primary"
          size="medium"
          onClick={onDiscard}
          disabled = {isDisabled}
        >
          Discard
        </Button>
        <Button
          className={styles.buttonSave}
          type="submit"
          mode="defaultBlack"
          variant="primary"
          size="medium"
          onClick={onSave}
          disabled = {isDisabled}
        >
          Save
        </Button>
      </div>
    </form>
  )
}


export default TabContainer
