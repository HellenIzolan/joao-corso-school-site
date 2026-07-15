import Image from 'next/image'
import { useState, useEffect } from 'react'
import type { ICarouselProps } from './types'

export default function Carousel({
  images,
  ariaLabel = 'Carrossel de imagens',
}: ICarouselProps) {
  const [current, setCurrent] = useState(0)
  const total = images.length

  function goTo(idx: number) {
    setCurrent(idx)
  }
  function next() {
    setCurrent((prev) => (prev + 1) % total)
  }
  function prev() {
    setCurrent((prev) => (prev - 1 + total) % total)
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        prev()
      } else if (e.key === 'ArrowRight') {
        next()
      }
    }
    globalThis.addEventListener('keydown', handleKeyDown)
    return () => globalThis.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <section
      className="overflow-hidden rounded-lg w-full max-w-3xl mx-auto"
      aria-label={ariaLabel}
    >
      {/* Live region for screen readers */}
      <div
        className="sr-only"
        role="status"
        aria-live="polite"
        aria-atomic="true"
      >
        Imagem {current + 1} de {total}
        {images[current]?.alt && `: ${images[current].alt}`}
      </div>
      <div className="relative h-[500px] w-full flex items-center justify-center bg-black/10">
        {images.map((img, idx) => (
          <div
            key={img.src}
            className={
              'absolute top-0 left-0 w-full h-full transition-opacity duration-500 flex flex-col items-center justify-center' +
              (idx === current
                ? ' opacity-100 z-10'
                : ' opacity-0 z-0 pointer-events-none')
            }
            aria-hidden={idx !== current}
          >
            <div className="absolute top-2 left-2 text-xs bg-black/60 text-white px-2 py-1 rounded">
              {idx + 1} / {total}
            </div>
            <Image
              src={img.src}
              alt={img.alt}
              className="w-full h-[500px] object-cover rounded-lg"
              width={1000}
              height={500}
              loading="lazy"
            />
            {img.alt && !img.description && (
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-black/60 text-white px-4 py-2 rounded text-sm max-w-[90%] text-center">
                {img.alt}
              </div>
            )}
          </div>
        ))}
        {/* Prev/Next buttons */}
        <button
          type="button"
          onClick={prev}
          aria-label="Slide anterior"
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white rounded-full w-10 h-10 flex items-center justify-center text-2xl z-20 cursor-pointer"
        >
          &#10094;
        </button>
        <button
          type="button"
          onClick={next}
          aria-label="Próximo slide"
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white rounded-full w-10 h-10 flex items-center justify-center text-2xl z-20 cursor-pointer"
        >
          &#10095;
        </button>
      </div>
      {/* Description below image */}
      {images[current]?.description && (
        <div className="mt-6 max-w-4xl mx-auto text-left px-4">
          <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
            {images[current].description}
          </p>
        </div>
      )}
      {/* Dots */}
      <nav
        className="flex justify-center gap-2 mt-6 mb-2"
        aria-label="Controles do carrossel"
      >
        {images.map((img, idx) => (
          <button
            key={img.src}
            type="button"
            onClick={() => goTo(idx)}
            aria-label={`Ir para imagem ${idx + 1}${current === idx ? ' (atual)' : ''}`}
            aria-current={current === idx ? 'true' : 'false'}
            className={
              'w-3 h-3 rounded-full border-2 border-green-300 transition-all duration-300 cursor-pointer ' +
              (idx === current
                ? 'bg-green-400 scale-125 opacity-100'
                : 'bg-green-400 opacity-60 hover:opacity-100')
            }
          ></button>
        ))}
      </nav>
    </section>
  )
}
