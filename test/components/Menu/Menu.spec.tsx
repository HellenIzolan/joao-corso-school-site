import { fireEvent, render, screen, within } from '@testing-library/react'
import type { ImgHTMLAttributes } from 'react'
import { describe, expect, it, vi } from 'vitest'
import Menu from '@/components/Menu'
import { MAPS_URL } from '../../../src/constants'

vi.mock('next/image', () => ({
  default: ({ alt = '' }: ImgHTMLAttributes<HTMLImageElement>) => (
    <img alt={alt} />
  ),
}))

describe('Menu component', () => {
  it('should render navigation and desktop menu items', () => {
    render(<Menu />)

    const nav = screen.getByTestId('menu')

    expect(nav).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /sobre/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /contato/i })).toBeInTheDocument()
    expect(
      screen.getByRole('link', { name: /localização/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /localização/i })).toHaveAttribute(
      'href',
      MAPS_URL,
    )
  })

  it('should open and close the mobile menu on button click', () => {
    render(<Menu />)

    const openBtn = screen.getByRole('button', {
      name: /abrir menu principal/i,
    })

    expect(openBtn).toHaveAttribute('aria-expanded', 'false')
    fireEvent.click(openBtn)

    expect(openBtn).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByRole('dialog')).toBeInTheDocument()

    const closeBtn = screen.getByRole('button', { name: /fechar menu/i })
    fireEvent.click(closeBtn)

    expect(openBtn).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('should render the logo inside the mobile menu overlay', () => {
    render(<Menu />)

    fireEvent.click(
      screen.getByRole('button', {
        name: /abrir menu principal/i,
      }),
    )

    const dialog = screen.getByRole('dialog')

    expect(
      within(dialog).getByRole('img', {
        name: /escola municipal joão corso logo/i,
      }),
    ).toBeInTheDocument()
  })

  it('should close the mobile menu on Escape key', () => {
    render(<Menu />)

    const openBtn = screen.getByRole('button', {
      name: /abrir menu principal/i,
    })
    fireEvent.click(openBtn)
    expect(screen.getByRole('dialog')).toBeInTheDocument()

    fireEvent.keyDown(window, { key: 'Escape', code: 'Escape' })

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('should close the mobile menu when a menu item is clicked', () => {
    render(<Menu />)

    const openBtn = screen.getByRole('button', {
      name: /abrir menu principal/i,
    })
    fireEvent.click(openBtn)

    const aboutLink = within(screen.getByRole('dialog')).getByRole('link', {
      name: /^sobre$/i,
    })
    fireEvent.click(aboutLink)

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })
})
