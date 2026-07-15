import type { ReactNode } from 'react'

/**
 * Props for the Section component.
 */
export interface SectionProps {
  /** Section title */
  title?: string
  /** Section description */
  description?: string
  /** Optional vertical padding classes */
  yPadding?: string
  /** Optional test id for the section root */
  'data-testid'?: string
  /** Section content */
  children: ReactNode
  /** Optional image URL to display */
  imageSrc?: string
  /** Alt text for the image (required if imageSrc is provided) */
  imageAlt?: string
  /** Image position: 'left' or 'right' (default: 'left') */
  imagePosition?: 'left' | 'right'
}
