import cn from 'classnames'

import { Typography } from 'components/share'

import styles from './MainLayout.module.scss'
import { ILayoutProps } from './MainLayout.types'

const MainLayout = ({
  mainClassName,
  tittle,
  children,
  headerActions,
}: ILayoutProps) => (
  <div className={styles.container}>
    <div className={styles.sidebar}>Sidebar</div>
    <div className={styles.inner}>
      <div className={styles.header}>
        <Typography variant="HeaderM">{tittle}</Typography>
        {headerActions && { headerActions }}
      </div>
      <div className={cn(styles.main, mainClassName)}>{children}</div>
    </div>
  </div>
)

export default MainLayout
