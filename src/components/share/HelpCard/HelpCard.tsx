import { useEffect, useState } from 'react'

import { ReactComponent as SuccessIcon } from 'assets/icons/SuccessIcon.svg'
import { Button, Input, Typography } from 'components/share'

import styles from './HelpCard.module.scss'

export const HelpCard = () => {
  const [message, setMessage] = useState('')
  const [send, setSend] = useState(false)
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
          setMessage('')
        }, 3000)
      : console.log('okay')
  }, [send])
  return (
    <div>
      <div className={!send ? styles.helpContainer : styles.helpContainerHide}>
        <Typography variant="HeaderM">Need some help?</Typography>
        <Typography variant="ParagraphM" className={styles.helpParagraph}>
          Your can send an email with your issue or question to
          <span className={styles.helpSpan}> support@jslab.com</span> Or you can
          send us a message using a form below.
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
            className={message.length ? styles.visibleBtn : styles.invisibleBtn}
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
      <div className={send ? styles.sendContainer : styles.sendContainerHide}>
        <SuccessIcon />
        <Typography variant="HeaderM" className={styles.sendHeader}>
          Your message has been sent
        </Typography>
        <Typography variant="ParagraphL" className={styles.sendParagraph}>
          We’ll get back to you as soon as possible
        </Typography>
      </div>
    </div>
  )
}
export default HelpCard
