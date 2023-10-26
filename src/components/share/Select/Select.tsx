import cn from 'classnames'
import DefaultSelect, { components as selectComponents } from 'react-select'
import AsyncSelect from 'react-select/async'

import { ReactComponent as Chevron } from 'assets/icons/ChevronDownIcon.svg'
import { Typography } from 'components/share'

import styles from './Select.module.scss'

const Control = ({ menuIsOpen, hasValue, ...restProps }: any) => (
  <selectComponents.Control
    {...restProps}
    hasValue={hasValue}
    className={cn(styles.control, { [styles.controlActive]: menuIsOpen })}
  />
)

const DropdownIndicator = (props: any) => {
  const { menuIsOpen, isSearchable } = props.selectProps
  return (
    <Chevron
      className={cn(
        styles.indicator,
        { [styles.indicatorActive]: menuIsOpen },
        { [styles.indicatorHidden]: isSearchable }
      )}
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
//todo add types
const SingleValue = ({
  innerProps,
  children,
  searchable,
  valueRenderer,
  data,
  type,
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
      {type === 'async' ? children : children.split(',')[0]}
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

const LoadingMessage = ({ innerProps }: any) => (
  <Typography {...innerProps} className={styles.noOption} variant="ParagraphL">
    Loading...
  </Typography>
)

const NoOptionsMessage = ({ innerProps }: any) => (
  <Typography {...innerProps} className={styles.noOption} variant="ParagraphL">
    No options...
  </Typography>
)

const Input = ({ searchable, ...props }: any) => (
  <selectComponents.Input {...props} className={styles.input} />
)

const TYPES = {
  default: DefaultSelect,
  async: AsyncSelect,
}

const Select = ({
  options,
  placeholder,
  optionRenderer,
  valueRenderer,
  onChange,
  type,
  searchable,
  loadOptions,
  defaultValue,
  ...restProps
}: {
  options: { value: string; label: string }[]
  placeholder: string
  optionRenderer: any
  valueRenderer: any
  onChange: () => void
  type: string
  searchable: boolean
  loadOptions: () => void
  defaultValue: { value: string; label: string }
}) => {
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
    LoadingMessage,
    ValueContainer,
    IndicatorSeparator: null,
  }

  const SelectComponent = (TYPES as any)[type]!

  const commonProps = {
    components,
    unstyled: true,
  }

  return (
    <SelectComponent
      {...commonProps}
      {...restProps}
      isSearchable={searchable}
      options={options}
      loadOptions={loadOptions}
      className={cn(styles.container)}
      menuPlacement="auto"
      maxMenuHeight={150}
      menuShouldBlockScroll
      placeholder={placeholder}
      onChange={onChange}
      defaultValue={defaultValue}
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
