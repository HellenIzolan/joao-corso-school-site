import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Footer from '@/components/Footer'

describe('Footer component', () => {
  it('should render correctly', () => {
    render(<Footer />)

    expect(screen.getByTestId('footer')).toBeInTheDocument()
  })

  it('should render the phone number as a tel link', () => {
    render(<Footer />)

    expect(screen.getByTestId('footer-phone-link')).toHaveAttribute(
      'href',
      'tel:+555434441699',
    )
  })
})
