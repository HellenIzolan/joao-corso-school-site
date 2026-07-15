import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Home from '@/app/home/page'

describe('Home page', () => {
  it('should render the page composition sections', () => {
    render(<Home />)

    expect(screen.getByTestId('header')).toBeInTheDocument()
    expect(screen.getByTestId('hero-section')).toBeInTheDocument()
    expect(screen.getByTestId('about-section')).toBeInTheDocument()
    expect(screen.getByTestId('footer')).toBeInTheDocument()
  })
})
