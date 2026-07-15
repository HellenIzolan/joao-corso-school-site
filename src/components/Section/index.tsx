import Image from 'next/image'
import type { SectionProps } from './types'

/**
 * Section component with optional image and two-column layout.
 */
export default function Section({
  title,
  description,
  yPadding,
  'data-testid': dataTestId,
  children,
  imageSrc,
  imageAlt,
  imagePosition = 'left',
}: Readonly<SectionProps>) {
  const hasImage = Boolean(imageSrc)
  const hasHeader = Boolean(title || description)

  // If image is present, use two-column layout
  if (hasImage && hasHeader) {
    return (
      <section
        className={[
          'mx-auto max-w-screen-lg px-4 md:px-8 lg:px-6',
          yPadding || 'py-16',
        ].join(' ')}
        data-testid={dataTestId}
      >
        <div className="flex flex-col md:flex-row md:items-center md:gap-8">
          {imagePosition === 'left' && imageSrc && (
            <div className="md:w-1/2 w-full mb-8 md:mb-0 flex justify-center">
              <Image
                src={imageSrc}
                alt={imageAlt || ''}
                width={500}
                height={350}
                className="max-w-full h-auto rounded-lg shadow-md"
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>
          )}
          <div className="md:w-1/2 w-full text-center md:text-left">
            {title && (
              <h2 className="text-4xl font-bold text-gray-900">{title}</h2>
            )}
            {description && (
              <div className="mt-4 text-xl md:px-0">{description}</div>
            )}
          </div>
          {imagePosition === 'right' && imageSrc && (
            <div className="md:w-1/2 w-full mb-8 md:mb-0 flex justify-center md:order-2 order-1">
              <Image
                src={imageSrc}
                alt={imageAlt || ''}
                width={500}
                height={350}
                className="max-w-full h-auto rounded-lg shadow-md"
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>
          )}
        </div>
        <div className="mt-12">{children}</div>
      </section>
    )
  }

  // Default: single column layout
  return (
    <section
      className={[
        'mx-auto max-w-screen-lg px-4 md:px-8 lg:px-6',
        yPadding || 'py-16',
      ].join(' ')}
      data-testid={dataTestId}
    >
      {hasHeader && (
        <div className="mb-12 text-center">
          {title && (
            <h2 className="text-4xl font-bold text-gray-900">{title}</h2>
          )}
          {description && (
            <div className="mt-4 text-xl md:px-20">{description}</div>
          )}
        </div>
      )}
      {children}
    </section>
  )
}
