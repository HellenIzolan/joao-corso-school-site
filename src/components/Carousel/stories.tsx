import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import Carousel from './index'
import type { ICarouselImage } from './types'

const images: ICarouselImage[] = [
  {
    src: '/images/joao-corso-frente-atual.jpg',
    alt: 'Fachada da escola Joao Corso atualmente',
  },
  {
    src: '/images/joao-corso-frente-antiga.jpg',
    alt: 'Fachada da escola Joao Corso antigamente',
  },
  {
    src: '/images/joao-corso-lateral-antiga.jpg',
    alt: 'Lateral da escola Joao Corso antigamente',
  },
]

const meta: Meta<typeof Carousel> = {
  title: 'Components/Carousel',
  component: Carousel,
  args: {
    images,
  },
}

export default meta

type Story = StoryObj<typeof Carousel>

export const Default: Story = {}
