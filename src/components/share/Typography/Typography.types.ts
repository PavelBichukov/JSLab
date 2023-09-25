export interface ITypography {
  Header3XL: string
  Header2XL: string
  HeaderXL: string
  HeaderL: string
  HeaderM: string
  HeaderS: string
  HeaderXS: string
  ParagraphXL: string
  ParagraphL: string
  ParagraphM: string
  ParagraphS: string
  ParagraphXS: string
  LabelXL: string
  LabelL: string
  LabelM: string
  LabelS: string
  LabelXS: string
}

export interface ITypographyProps {
  variant: string
  children?: any
  className?: string
  component?: string
  htmlFor?: string
}
