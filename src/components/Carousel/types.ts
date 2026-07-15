export interface ICarouselImage {
  src: string
  alt: string
  description?: string
}

export interface ICarouselProps {
  images: ICarouselImage[]
  ariaLabel?: string
}
