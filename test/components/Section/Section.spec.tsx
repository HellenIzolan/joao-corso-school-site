import { render, screen } from '@testing-library/react'
import type { ImgHTMLAttributes } from 'react'
import { describe, expect, it, vi } from 'vitest'
import Section from '@/components/Section'

vi.mock('next/image', () => ({
  default: ({ alt = '' }: ImgHTMLAttributes<HTMLImageElement>) => (
    <div role="img" aria-label={alt} />
  ),
}))

describe('Section component', () => {
  it('should render the single-column layout with content', () => {
    render(
      <Section
        data-testid="section"
        title="Section title"
        description="Section description"
      >
        <span>Section content</span>
      </Section>,
    )

    expect(screen.getByTestId('section')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'Section title' }),
    ).toBeInTheDocument()
    expect(screen.getByText('Section description')).toBeInTheDocument()
    expect(screen.getByText('Section content')).toBeInTheDocument()
  })

  it('should render the two-column layout with an image', () => {
    render(
      <Section
        data-testid="section-with-image"
        title="Section title"
        description="Section description"
        imageSrc="/image.jpg"
        imageAlt="Example image"
        imagePosition="right"
      >
        <span>Section content</span>
      </Section>,
    )

    expect(screen.getByTestId('section-with-image')).toBeInTheDocument()
    expect(
      screen.getByRole('img', { name: 'Example image' }),
    ).toBeInTheDocument()
    expect(screen.getByText('Section content')).toBeInTheDocument()
  })
})
