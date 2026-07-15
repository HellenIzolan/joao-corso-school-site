import { fireEvent, render, screen } from '@testing-library/react'
import type { ImgHTMLAttributes } from 'react'
import { describe, expect, it, vi } from 'vitest'
import Carousel from '@/components/Carousel'

vi.mock('next/image', () => ({
  default: ({ alt = '' }: ImgHTMLAttributes<HTMLImageElement>) => (
    <div role="img" aria-label={alt} />
  ),
}))

describe('Carousel component', () => {
  it('should render the current slide and show the description when available', () => {
    render(
      <Carousel
        images={[
          {
            src: '/one.jpg',
            alt: 'First slide',
          },
          {
            src: '/two.jpg',
            alt: 'Second slide',
            description: 'Second description',
          },
        ]}
      />,
    )

    expect(
      screen.getByRole('region', { name: 'Carrossel de imagens' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('status')).toHaveTextContent('Imagem 1 de 2')
    expect(screen.queryByText('First description')).not.toBeInTheDocument()
    expect(screen.getByText('First slide')).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: 'Próximo slide' }))

    expect(screen.getByRole('status')).toHaveTextContent('Imagem 2 de 2')
    expect(screen.getByText('Second description')).toBeInTheDocument()

    fireEvent.keyDown(window, { key: 'ArrowLeft', code: 'ArrowLeft' })

    expect(screen.getByRole('status')).toHaveTextContent('Imagem 1 de 2')
    expect(screen.getByText('First slide')).toBeInTheDocument()
  })

  it('should wrap around when using previous and next controls', () => {
    render(
      <Carousel
        images={[
          { src: '/one.jpg', alt: 'One' },
          { src: '/two.jpg', alt: 'Two' },
          { src: '/three.jpg', alt: 'Three' },
        ]}
      />,
    )

    fireEvent.click(screen.getByRole('button', { name: 'Slide anterior' }))
    expect(screen.getByRole('status')).toHaveTextContent('Imagem 3 de 3')

    fireEvent.click(screen.getByRole('button', { name: 'Próximo slide' }))
    expect(screen.getByRole('status')).toHaveTextContent('Imagem 1 de 3')
  })

  it('should navigate through dots and keyboard arrows', () => {
    render(
      <Carousel
        images={[
          { src: '/one.jpg', alt: 'One', description: 'First' },
          { src: '/two.jpg', alt: 'Two', description: 'Second' },
          { src: '/three.jpg', alt: 'Three', description: 'Third' },
        ]}
      />,
    )

    fireEvent.click(screen.getByRole('button', { name: 'Ir para imagem 3' }))
    expect(screen.getByRole('status')).toHaveTextContent('Imagem 3 de 3')
    expect(screen.getByText('Third')).toBeInTheDocument()

    fireEvent.keyDown(window, { key: 'ArrowRight', code: 'ArrowRight' })
    expect(screen.getByRole('status')).toHaveTextContent('Imagem 1 de 3')

    fireEvent.keyDown(window, { key: 'ArrowLeft', code: 'ArrowLeft' })
    expect(screen.getByRole('status')).toHaveTextContent('Imagem 3 de 3')
  })
})
