import { render, screen } from '@testing-library/react'
import type { ImgHTMLAttributes } from 'react'
import { describe, expect, test, vi } from 'vitest'
import About from '@/components/About'

vi.mock('next/image', () => ({
  default: ({ alt = '' }: ImgHTMLAttributes<HTMLImageElement>) => (
    <div role="img" aria-label={alt} />
  ),
}))

describe('About component', () => {
  test('should render the about section content and carousel', () => {
    render(<About />)

    expect(screen.getByTestId('about-section')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'Sobre a Escola' }),
    ).toBeInTheDocument()
    expect(
      screen.getByText(/A Escola Municipal João Corso tem como missão/i),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('region', { name: 'Carrossel de imagens' }),
    ).toBeInTheDocument()
  })
})
