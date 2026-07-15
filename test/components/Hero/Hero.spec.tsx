import { render, screen } from '@testing-library/react'
import type { ImgHTMLAttributes } from 'react'
import { describe, expect, test, vi } from 'vitest'
import Hero from '@/components/Hero'
import { WHATSAPP_URL } from '../../../src/constants'

vi.mock('next/image', () => ({
  default: ({ alt = '' }: ImgHTMLAttributes<HTMLImageElement>) => (
    <div role="img" aria-label={alt} />
  ),
}))

describe('Hero component', () => {
  test('should render the main hero content and contact link', () => {
    render(<Hero />)

    expect(screen.getByTestId('hero-section')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'Bem-vindo à' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'Escola Municipal João Corso' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Fale Conosco' })).toHaveAttribute(
      'href',
      WHATSAPP_URL,
    )
  })
})
