export interface ILayoutProps {
  mainClassName?: string
  innerClassName?: string
  actionsClassName?: string
  headerClassName?: string
  title: string
  navLinkTo?: string
  adornment?: string
  children: JSX.Element | JSX.Element[] | any
  headerActions?: JSX.Element | JSX.Element[] | any
}
