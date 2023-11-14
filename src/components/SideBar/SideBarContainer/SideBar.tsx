import cn from 'classnames'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

import { ReactComponent as LogoIcon } from 'assets/icons/side-bar-icons/logo.svg'
import { ReactComponent as DotsIcon } from 'assets/icons/side-bar-icons/moreVert.svg'
import { ReactComponent as SearchIcon } from 'assets/icons/side-bar-icons/search.svg'
import { ReactComponent as UserIcon } from 'assets/icons/side-bar-icons/userLogo.svg'
import { ReactComponent as SuccessIcon } from 'assets/icons/SuccessIcon.svg'
import { Button, Input, Typography } from 'components/share'
import { SideBarItem } from 'src/components'

import { ADDITIONAL_ITEMS, MENU_ITEMS } from './SideBar.constantns'
import styles from './SideBar.module.scss'

export const SideBar = () => {
  const [collapsed, setCollapsed] = useState(true)
  const [help, setHelp] = useState(false)
  const [message, setMessage] = useState('')
  const [send, setSend] = useState(false)
  const currentPath = useLocation()
  const toggleCollapsed = () => {
    setCollapsed(!collapsed)
    setHelp(false)
  }
  const toggleHelp = () => {
    setHelp(!help)
  }
  const handleInput = (ev) => {
    setMessage(ev.target.value)
  }
  const handleClear = (ev: any) => {
    ev.preventDefault()
    setMessage('')
  }
  const handleSend = () => {
    setSend(true)
  }
  useEffect(() => {
    send
      ? setTimeout(() => {
          setSend(false)
          setHelp(false)
          setMessage('')
        }, 3000)
      : console.log('okay')
  }, [send])

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
          {!collapsed && !help && (
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
                help={help}
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
                help={help}
                toggleHelp={toggleHelp}
              />
            )
          )}
        </div>
        <div className={styles.user}>
          <UserIcon />
          {!collapsed && !help && (
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
      {help ? (
        <div>
          <div
            className={!send ? styles.helpContainer : styles.helpContainerHide}
          >
            <Typography variant="HeaderM">Need some help?</Typography>
            <Typography variant="ParagraphM" className={styles.helpParagraph}>
              Your can send an email with your issue or question to
              <span className={styles.helpSpan}> support@jslab.com</span> Or you
              can send us a message using a form below.
            </Typography>
            <Input
              variant="text"
              label="Your message"
              id="message"
              value={message}
              onChange={handleInput}
            />
            <div className={styles.buttonBlock}>
              <Button
                type="button"
                mode="outlinedWhite"
                variant="primary"
                size="small"
                className={
                  message.length ? styles.visibleBtn : styles.invisibleBtn
                }
                onClick={handleClear}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                mode="defaultBlack"
                variant="primary"
                size="small"
                onClick={handleSend}
                className={styles.visibleBtn}
              >
                Send
              </Button>
            </div>
          </div>
          <div
            className={send ? styles.sendContainer : styles.sendContainerHide}
          >
            <SuccessIcon />
            <Typography variant="HeaderM" className={styles.sendHeader}>
              Your message has been sent
            </Typography>
            <Typography variant="ParagraphL" className={styles.sendParagraph}>
              We’ll get back to you as soon as possible
            </Typography>
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default SideBar
