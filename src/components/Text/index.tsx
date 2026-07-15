import { ITextProps } from './types'

/**
 * Text component.
 *
 * Used to render text elements, such as paragraphs or headings.
 *
 * @example
 * ```tsx
 * <Text as="h1" dataTestId="heading-about">
 *   About Us
 * </Text>
 * ```
 */

export default function Text({
  id,
  className,
  'data-testid': dataTestId,
  as: Component = 'p',
  children,
}: ITextProps) {
  return (
    <Component id={id} className={className} data-testid={dataTestId}>
      {children}
    </Component>
  )
}
