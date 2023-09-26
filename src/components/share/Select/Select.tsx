import cn from 'classnames'
import DefaultSelect, { components as selectComponents } from 'react-select'

import { Typography } from 'src/components/share/Typography'
import { ReactComponent as Chevron } from 'assets/icons/ChevronDownIcon.svg'

import styles from './Select.module.scss'

const Control = ({ menuIsOpen, hasValue, isValid, ...restProps }: any) => (
  <selectComponents.Control
    {...restProps}
    hasValue={hasValue}
    className={cn(styles.control, { [styles.controlActive]: menuIsOpen })}
  />
)

const DropdownIndicator = (props: any) => {
  const { menuIsOpen } = props.selectProps
  return (
    <Chevron
      className={cn(styles.indicator, { [styles.indicatorActive]: menuIsOpen })}
    />
  )
}

const Placeholder = ({ innerProps, children, searchable }: any) => (
  <Typography
    {...innerProps}
    variant="ParagraphL"
    className={cn(styles.placeholder, {
      [styles.placeholderSearchable]: searchable,
    })}
  >
    {children}
  </Typography>
)

const ValueContainer = ({ children }: any) => <>{children}</>

const SingleValue = ({
  innerProps,
  children,
  searchable,
  valueRenderer,
  data,
}: any) => {
  if (valueRenderer) {
    return valueRenderer({ data: data.label, innerProps })
  }

  return (
    <Typography
      {...innerProps}
      className={cn(styles.value, { [styles.searchableValue]: searchable })}
      variant="ParagraphL"
    >
      {children}
    </Typography>
  )
}

const MenuList = (props: any) => {
  return <selectComponents.MenuList {...props} className={styles.menuList} />
}

const Option = ({ innerProps, label, children, optionRenderer }: any) => {
  if (optionRenderer) {
    return optionRenderer({ data: label, innerProps })
  }

  return (
    <Typography {...innerProps} className={styles.option} variant="ParagraphL">
      {children}
    </Typography>
  )
}

const NoOptionsMessage = ({ innerProps }: any) => (
  <Typography {...innerProps} className={styles.noOption} variant="ParagraphL">
    No options...
  </Typography>
)

const Input = ({ props }: any) => (
  <selectComponents.Input {...props} className={styles.input} />
)

const Select = ({
  options,
  placeholder,
  optionRenderer,
  valueRenderer,
  onChange,
}: any) => {
  const components = {
    Control: (props: any) => <Control {...props} />,
    DropdownIndicator,
    Placeholder: (props: any) => <Placeholder {...props} />,
    SingleValue: (valueProps: any) => (
      <SingleValue {...valueProps} valueRenderer={valueRenderer} />
    ),
    MenuList,
    Input: (props: any) => <Input {...props} />,
    Option: (optionProps: any) => (
      <Option {...optionProps} optionRenderer={optionRenderer} />
    ),
    NoOptionsMessage,
    ValueContainer,
    IndicatorSeparator: null,
  }

  const commonProps = {
    components,
    unstyled: true,
  }

  return (
    <DefaultSelect
      {...commonProps}
      isSearchable={false}
      options={options}
      className={cn(styles.container)}
      menuPlacement="auto"
      maxMenuHeight={150}
      menuShouldBlockScroll
      placeholder={placeholder}
      onChange={onChange}
    />
  )
}

Select.defaultProps = {
  variant: 'outlined',
  type: 'default',
  mode: 'portal',
  searchable: false,
  multi: false,
}

export default Select
