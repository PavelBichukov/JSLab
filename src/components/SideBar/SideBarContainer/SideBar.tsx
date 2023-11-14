import cn from 'classnames'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'

import { ReactComponent as LogoIcon } from 'assets/icons/side-bar-icons/logo.svg'
import { ReactComponent as DotsIcon } from 'assets/icons/side-bar-icons/moreVert.svg'
import { ReactComponent as SearchIcon } from 'assets/icons/side-bar-icons/search.svg'
import { ReactComponent as UserIcon } from 'assets/icons/side-bar-icons/userLogo.svg'
import { Typography } from 'components/share'
import { SideBarItem } from 'src/components'

import { ADDITIONAL_ITEMS, MENU_ITEMS } from './SideBar.constantns'
import styles from './SideBar.module.scss'

export const SideBar = () => {
  const [collapsed, setCollapsed] = useState(true)
  const [help, setHelp] = useState(false)
  const currentPath = useLocation()

  const toggleCollapsed = () => {
    setCollapsed(!collapsed)
    setHelp(!help)
  }

  return (
    <div>
      <div
        className={cn(styles.sideBar, { [styles.sideBarCollapsed]: collapsed })}
      >
        <div className={styles.logoBox}>
          <LogoIcon className={styles.logo} onClick={toggleCollapsed} />
        </div>
        <div className={styles.searchBox}>
          <SearchIcon className={cn(styles.searchIcon)} />
          {!collapsed && (
            <input
              className={styles.searchInput}
              type="text"
              name="sideBarSearch"
              id="sideBarSearch"
              placeholder="Search..."
            />
          )}
        </div>
        <div className={styles.menuItems}>
          <Typography className={styles.menuTitle} variant="ParagraphS">
            Menu
          </Typography>
          {MENU_ITEMS.map(
            (item: { icon: string; title: string; route: string }) => (
              <SideBarItem
                key={item.title}
                icon={item.icon}
                title={item.title}
                route={item.route}
                collapsed={collapsed}
                pathname={currentPath.pathname}
              />
            )
          )}
        </div>
        <div className={styles.additionalItems}>
          {ADDITIONAL_ITEMS.map(
            (item: { icon: string; title: string; route: string }) => (
              <SideBarItem
                key={item.title}
                icon={item.icon}
                title={item.title}
                route={item.route}
                collapsed={collapsed}
                pathname={currentPath.pathname}
                setHelp={toggleCollapsed}
              />
            )
          )}
        </div>
        <div className={styles.user}>
          <UserIcon />
          {!collapsed && (
            <>
              <div className={styles.userInfo}>
                <Typography variant="LabelL">User Name</Typography>
                <Typography variant="ParagraphS">User Role</Typography>
              </div>
              <DotsIcon className={styles.userDotsIcon} />
            </>
          )}
        </div>
      </div>
      {help ? <div className={styles.help}></div> : null}
    </div>
  )
}

export default SideBar
