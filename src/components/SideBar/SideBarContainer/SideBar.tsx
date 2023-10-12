import cn from 'classnames'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'

import { ReactComponent as LogoIcon } from 'assets/icons/side-bar-icons/logo.svg'
import { ReactComponent as DotsIcon } from 'assets/icons/side-bar-icons/moreVert.svg'
import { ReactComponent as SearchIcon } from 'assets/icons/side-bar-icons/search.svg'
import { ReactComponent as UserIcon } from 'assets/icons/side-bar-icons/userLogo.svg'
import { Typography } from 'components/share'
import SideBarItem from 'src/components/SideBar/SideBarItem/SideBarItem'

import { ADDITIONAL_ITEMS, MENU_ITEMS } from './SideBar.constantns'
import styles from './SideBar.module.scss'

const SideBar = () => {
  const [collapsed, setCollapsed] = useState(true)
  const currentPath = useLocation()

  return (
    <div
      className={cn(styles.sideBar, { [styles.sideBarCollapsed]: collapsed })}
    >
      <div className={styles.logoBox}>
        <LogoIcon
          className={styles.logo}
          onClick={() => setCollapsed((collapsed) => !collapsed)}
        />
      </div>
      <div className={styles.searchBox}>
        <SearchIcon
          className={cn(styles.searchIcon, {
            [styles.searchIconCollapsed]: collapsed,
          })}
        />
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
        <Typography className={styles.menuTittle} variant="ParagraphS">
          Menu
        </Typography>
        {MENU_ITEMS.map(
          (item: { icon: string; tittle: string; route: string }) => (
            <SideBarItem
              key={item.tittle}
              icon={item.icon}
              tittle={item.tittle}
              route={item.route}
              collapsed={collapsed}
              pathname={currentPath.pathname}
            />
          )
        )}
      </div>
      <div className={styles.additionalItems}>
        {ADDITIONAL_ITEMS.map(
          (item: { icon: string; tittle: string; route: string }) => (
            <SideBarItem
              key={item.tittle}
              icon={item.icon}
              tittle={item.tittle}
              route={item.route}
              collapsed={collapsed}
              pathname={currentPath.pathname}
            />
          )
        )}
      </div>
      <div className={styles.user}>
        <UserIcon/>
        {!collapsed && (
          <>
            <div className={styles.userInfo}>
          <Typography variant='LabelL'>User Name</Typography>
          <Typography variant='ParagraphS'>User Role</Typography>
      </div>
      <DotsIcon className={styles.userDotsIcon}/>
          </>
        )}
      </div>
    </div>
  )
}

export default SideBar
