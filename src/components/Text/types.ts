import { ReactNode, ElementType } from 'react'

export interface ITextProps {
  id?: string
  className?: string
  'data-testid'?: string
  as?: ElementType // Adiciona suporte para elementos personalizados
  children: ReactNode
}
