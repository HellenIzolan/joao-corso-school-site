import Menu from '@/components/Menu'

/**
 * Header component.
 *
 * Used to render header
 *
 * @example
 * ```tsx
 * <Header />
 * ```
 */

export default function Header() {
  return (
    <header
      className="relative inset-x-0 top-0 z-50 max-w-6xl mx-auto px-4 pt-4 md:px-8 lg:px-6"
      data-testid="header"
    >
      <Menu />
    </header>
  )
}
