export interface ILayoutProps {
  mainClassName?: string
  innerClassName?: string
  actionsClassName?: string
  headerClassName?: string
  tittle: string
  adornment?: string
  children: JSX.Element | JSX.Element[]
  headerActions?: JSX.Element | JSX.Element[] | any
}
