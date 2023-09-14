import cn from 'classnames'
import { Typography } from 'src/components/share/Typography'

import styles from './TermsAndConditions.module.scss'

export const TermsAndConditions = () => {
  return (
    <div className={styles.main}>
      <Typography variant="HeaderM">Terms and Conditions</Typography>
      <Typography variant="ParagraphL" className={styles.subTittle}>
        Just the legal requirements
      </Typography>
      <Typography variant="ParagraphL" className={styles.textInfo}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
        consequatur iste, sed, doloribus, dolor nisi numquam odit veniam
        adipisci assumenda alias. Error perspiciatis suscipit doloribus corrupti
        explicabo maxime quam at?Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Ratione consequatur iste, sed, doloribus, dolor nisi
        numquam odit veniam adipisci assumenda alias. Error perspiciatis
        suscipit doloribus corrupti explicabo maxime quam at?Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Ratione consequatur iste, sed,
        doloribus, dolor nisi numquam odit veniam adipisci assumenda alias.
        Error perspiciatis suscipit doloribus corrupti explicabo maxime quam
        at?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
        consequatur iste, sed, doloribus, dolor nisi numquam odit veniam
        adipisci assumenda alias. Error perspiciatis suscipit doloribus corrupti
        explicabo maxime quam at?Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Ratione consequatur iste, sed, doloribus, dolor nisi
        numquam odit veniam adipisci assumenda alias. Error perspiciatis
        suscipit doloribus corrupti explicabo maxime quam at?suscipit doloribus
        corrupti explicabo maxime quam at?Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Ratione consequatur iste, sed, doloribus, dolor nisi
        numquam odit veniam adipisci assumenda alias. Error perspiciatis
        suscipit doloribus corrupti explicabo maxime quam at?Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Ratione consequatur iste, sed,
        doloribus, dolor nisi numquam odit veniam adipisci assumenda alias.
        Error perspiciatis suscipit doloribus corrupti explicabo maxime quam
        at?nda alias. Error perspiciatis suscipit doloribus corrupti explicabo
        maxime quam at?Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Ratione consequatur iste, sed, doloribus, dolor nisi numquam odit veniam
        adipisci assumenda alias. Error perspiciatis suscipit doloribus corrupti
        explicabo maxime quam at?odit veniam adipisci assumenda alias. Error
        perspiciatis suscipit doloribus corrupti explicabo maxime quam at?Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Ratione consequatur
        iste, sed, doloribus, dolor nisi numquam odit veniam adipisci assumenda
        alias. Error perspiciatis suscipit doloribus corrupti explicabo maxime
        quam at?nda alias. Error perspiciatis suscipit doloribus corrupti
        explicabo maxime quam at?Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Ratione consequatur iste, sed, doloribus, dolor nisi
        numquam odit veniam adipisci assumenda alias. Error perspiciatis
        suscipit doloribus corrupti explicabo maxime quam at?
      </Typography>
      <div className={styles.checkBoxBlock}>
        <input type="checkbox" id="checkbox" name="checkbox" />
        <Typography variant="ParagraphL">
          {'I agree to JSLab '}
          <a href="#">Terms & Conditions</a>
          {' and '}
          <a href="#">Privacy Policy</a>
        </Typography>
      </div>
      <div className={styles.buttonsBlock}>
        <button className={cn(styles.button, styles.buttonBack)}>Back</button>
        <button className={styles.button}>Finished</button>
      </div>
    </div>
  )
}

export default TermsAndConditions
