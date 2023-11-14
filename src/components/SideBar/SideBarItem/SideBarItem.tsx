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
  title,
  route,
  collapsed,
  pathname,
  help,
  toggleHelp,
}: {
  icon: string
  title: string
  route: string
  collapsed: boolean
  pathname: string
  help: boolean
  toggleHelp?: any
}) => {
  const TYPES: any = {
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
    <div>
      {title != 'Supports' ? (
        <NavLink
          className={cn(
            styles.item,
            { [styles.itemActive]: pathname === route },
            { [styles.itemCollapsed]: collapsed }
          )}
          to={route}
        >
          <Icon />
          {!collapsed && !help && (
            <Typography className={styles.tittle} variant="LabelM">
              {title}
            </Typography>
          )}
        </NavLink>
      ) : (
        <div
          className={cn(
            styles.item,
            { [styles.itemActive]: pathname === route },
            { [styles.itemCollapsed]: collapsed }
          )}
          onClick={toggleHelp}
        >
          <Icon />
          {!collapsed && !help && (
            <Typography className={styles.tittle} variant="LabelM">
              {title}
            </Typography>
          )}
        </div>
      )}
    </div>
  )
}

export default SideBarItem
