import cn from 'classnames'
import { NavLink } from 'react-router-dom'

import { Typography } from 'components/share'
import { SideBar } from 'src/components'

import styles from './MainLayout.module.scss'
import { ILayoutProps } from './MainLayout.types'

const MainLayout = ({
  innerClassName,
  mainClassName,
  headerClassName,
  title,
  navLinkTo,
  adornment,
  children,
  headerActions,
}: ILayoutProps) => (
  <div className={styles.container}>
    <SideBar />
    <div className={cn(styles.inner, innerClassName)}>
      <div className={cn(styles.header, headerClassName)}>
        <div className={styles.headerText}>
          {navLinkTo ? (
            <NavLink to={navLinkTo} className={styles.tittle}>
              {title}
            </NavLink>
          ) : (
            <Typography variant="HeaderM">{title}</Typography>
          )}
          {adornment && (
            <Typography className={styles.headerAdornment} variant="ParagraphL">
              {adornment}
            </Typography>
          )}
        </div>
        {headerActions && <div>{headerActions}</div>}
      </div>
      <div className={mainClassName}>{children}</div>
    </div>
  </div>
)

export default MainLayout
