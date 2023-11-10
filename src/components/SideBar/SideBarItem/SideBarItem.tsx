import cn from 'classnames'
import { NavLink } from 'react-router-dom'

import { ReactComponent as AnalyticsIcon } from 'assets/icons/side-bar-icons/analyst.svg'
import { ReactComponent as CampaignsIcon } from 'assets/icons/side-bar-icons/campaigns.svg'
import { ReactComponent as DashBoardIcon } from 'assets/icons/side-bar-icons/dashboard.svg'
import { ReactComponent as NotificationsIcon } from 'assets/icons/side-bar-icons/notifications.svg'
import { ReactComponent as PaymentsIcon } from 'assets/icons/side-bar-icons/payments.svg'
import { ReactComponent as PeopleIcon } from 'assets/icons/side-bar-icons/people.svg'
import { ReactComponent as SettingsIcon } from 'assets/icons/side-bar-icons/settings.svg'
import { ReactComponent as StationsIcon } from 'assets/icons/side-bar-icons/stations.svg'
import { ReactComponent as SupportIcon } from 'assets/icons/side-bar-icons/support.svg'
import { ReactComponent as TransactionsIcon } from 'assets/icons/side-bar-icons/transactions.svg'
import { Typography } from 'components/share'

import styles from './SideBarItem.module.scss'
import { IIcons } from './SideBarItems.types'

const SideBarItem = ({
  icon,
  tittle,
  route,
  collapsed,
  pathname,
}: {
  icon: string
  tittle: string
  route: string
  collapsed: boolean
  pathname: string
}) => {
  const TYPES = {
    analytics: AnalyticsIcon,
    campaigns: CampaignsIcon,
    dashboard: DashBoardIcon,
    notifications: NotificationsIcon,
    payments: PaymentsIcon,
    people: PeopleIcon,
    settings: SettingsIcon,
    stations: StationsIcon,
    supports: SupportIcon,
    transactions: TransactionsIcon,
  } as unknown as IIcons

  const Icon = TYPES[icon]

  return (
    <NavLink
      className={cn(
        styles.item,
        { [styles.itemActive]: pathname === route },
        { [styles.itemCollapsed]: collapsed }
      )}
      to={route}
    >
      <Icon />
      {!collapsed && (
        <Typography className={styles.tittle} variant="LabelM">
          {tittle}
        </Typography>
      )}
    </NavLink>
  )
}

export default SideBarItem
