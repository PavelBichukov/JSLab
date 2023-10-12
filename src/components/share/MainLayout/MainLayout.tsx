import cn from 'classnames'

import { Typography } from 'components/share'
import { SideBar } from 'src/components'

import styles from './MainLayout.module.scss'
import { ILayoutProps } from './MainLayout.types'

const MainLayout = ({
  mainClassName,
  tittle,
  adornment,
  children,
  headerActions,
}: ILayoutProps) => (
  <div className={styles.container}>
    <SideBar />
    <div className={styles.inner}>
      <div className={styles.header}>
        <div className={styles.headerText}>
          <Typography variant="HeaderM">{tittle}</Typography>
          {adornment && (
            <Typography className={styles.headerAdornment} variant="ParagraphL">{adornment}</Typography>
          )}
        </div>
        {headerActions && <div>{headerActions}</div>}
      </div>
      <div className={cn(styles.main, mainClassName)}>{children}</div>
    </div>
  </div>
)

export default MainLayout
