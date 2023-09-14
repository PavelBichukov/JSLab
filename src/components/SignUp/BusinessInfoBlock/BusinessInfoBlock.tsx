import cn from 'classnames'
import { Typography } from 'src/components/share/Typography'

import styles from './BusinessInfoBlock.module.scss'

export const BusinessInfoBlock = () => {
  return (
    <div className={styles.main}>
      <Typography variant="HeaderM">Tell us about your business</Typography>
      <Typography variant="ParagraphL" className={styles.subTittle}>
        We’ll use this information to verify your organization.
      </Typography>
      <form className={styles.formBlock}>
        <div>
          <div className={styles.businessInputBox}>
            <input
              className={styles.businessFormInput}
              type="text"
              name="businessName"
              id="businessName"
              placeholder=""
              onChange={(e) => console.log(e.target.value)}
            />
            <label htmlFor="businessName">Business Legal Name</label>
          </div>
          <div className={styles.selectsGroup}>
            <div className={styles.selectBox}>
              <label htmlFor="years">Years of Operation</label>
              <select
                name="years"
                id="years"
                onChange={(e) => console.log(e.target.value)}
              >
                <option value="Between 11-20">Between 11-20</option>
                <option value="Between 20-23">Between 20-23</option>
                <option value="Between 00-11">Between 00-11</option>
              </select>
            </div>
            <div className={styles.selectBox}>
              <label htmlFor="businessType">Business Type</label>
              <select
                name="businessType"
                id="businessType"
                onChange={(e) => console.log(e.target.value)}
              >
                <option value="Corporations">Corporations</option>
                <option value="Partnerships">Partnerships</option>
                <option value="LLC">LLC</option>
              </select>
            </div>
          </div>
          <div className={styles.checkBoxBlock}>
            <input type="checkbox" id="checkbox" name="checkbox" />
            <Typography variant="ParagraphL">
              I am an authorized representative with authority to create an
              business account for my organization. Paragraph
            </Typography>
          </div>
        </div>
        <div className={styles.buttonsBlock}>
          <button
            className={cn(styles.button, styles.buttonBack)}
            type="button"
          >
            Back
          </button>
          <button className={styles.button} type="submit">
            Finished
          </button>
        </div>
      </form>
    </div>
  )
}

export default BusinessInfoBlock
