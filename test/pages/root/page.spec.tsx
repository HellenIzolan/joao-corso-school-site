import { render, screen } from '@testing-library/react'
import type { ImgHTMLAttributes } from 'react'
import { describe, expect, it, vi } from 'vitest'
import Page from '@/app/page'

vi.mock('next/image', () => ({
  default: ({ alt = '' }: ImgHTMLAttributes<HTMLImageElement>) => (
    <div role="img" aria-label={alt} />
  ),
}))

describe('Root page', () => {
  it('should render the homepage composition', () => {
    render(<Page />)

    expect(screen.getByTestId('header')).toBeInTheDocument()
    expect(screen.getByTestId('hero-section')).toBeInTheDocument()
    expect(screen.getByTestId('about-section')).toBeInTheDocument()
    expect(screen.getByTestId('footer')).toBeInTheDocument()
  })
})
