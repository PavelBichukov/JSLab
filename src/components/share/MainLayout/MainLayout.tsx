import cn from 'classnames'

import { Typography } from 'components/share'
import { SideBar } from 'src/components'

import styles from './MainLayout.module.scss'
import { ILayoutProps } from './MainLayout.types'

const MainLayout = ({
  innerClassName,
  actionsClassName,
  mainClassName,
  headerClassName,
  title,
  adornment,
  children,
  headerActions,
}: ILayoutProps) => (
  <div className={styles.container}>
    <SideBar />
    <div className={cn(styles.inner, innerClassName)}>
      <div className={cn(styles.header, headerClassName)}>
        <div className={styles.headerText}>
          <Typography variant="HeaderM">{title}</Typography>
          {adornment && (
            <Typography className={styles.headerAdornment} variant="ParagraphL">
              {adornment}
            </Typography>
          )}
        </div>
        {headerActions && (
          <div className={cn(styles.headerActions, actionsClassName)}>
            {headerActions}
          </div>
        )}
      </div>
      <div className={cn(styles.main, mainClassName)}>{children}</div>
    </div>
  </div>
)

export default MainLayout
