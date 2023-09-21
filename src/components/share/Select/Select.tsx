import DefaultSelect, {components as selectComponents} from 'react-select'

// import './Select.scss'
import styles from './Select.module.scss'
import { Typography } from '../Typography'



const options = [
  { value: 'california', label: 'California' },
  { value: 'kansas', label: 'Kansas' },
  { value: 'washington', label: 'Washington' },
  { value: 'montana', label: 'Montana' },
  { value: 'maryland', label: 'Maryland' },
  { value: 'ohio', label: 'Ohio' },
  { value: 'oklahoma', label: 'Oklahoma' },
]

const Placeholder = ({innerProps, children}) =>{
  return
    <Typography 
    {...innerProps}
    className={styles.test}
    variant='ParagraphL'>

      {children}
    </Typography>
}

const MenuList = (props) => {
  return
  <selectComponents.MenuList 
  {...props}
  className = {styles.menuList}/>
}


export const CustomSelect = () => {
  const components = {
    Placeholder,
    MenuList
  }
  return (
    <div className="select-container">
      <DefaultSelect
        classNamePrefix="select"
        options={options}
        placeholder="ST"
        maxMenuHeight={135}
        isSearchable={false}
        inputId="id"
        onChange={(e) => console.log(e?.value)}
        {...components}
        unstyled = {true}
      />
    </div>
  )
}

export default CustomSelect
