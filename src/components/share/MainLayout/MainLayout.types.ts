export interface ILayoutProps{
  mainClassName?: string,
  tittle: string,
  adornment: string,
  children: JSX.Element | JSX.Element[],
  headerActions?: JSX.Element | JSX.Element[] | any,
}