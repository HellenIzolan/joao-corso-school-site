import { render } from '@testing-library/react'
import type { ScriptHTMLAttributes } from 'react'
import { describe, expect, it, vi } from 'vitest'
import StructuredData from '@/components/StructuredData'

vi.mock('next/script', () => ({
  default: (props: ScriptHTMLAttributes<HTMLScriptElement>) => (
    <script {...props} />
  ),
}))

describe('StructuredData component', () => {
  it('should render the organization, business, and breadcrumb schemas', () => {
    const { container } = render(<StructuredData />)

    const scripts = container.querySelectorAll(
      'script[type="application/ld+json"]',
    )

    expect(scripts).toHaveLength(3)
    expect(container.querySelector('#organization-schema')).toBeInTheDocument()
    expect(
      container.querySelector('#local-business-schema'),
    ).toBeInTheDocument()
    expect(container.querySelector('#breadcrumb-schema')).toBeInTheDocument()

    const organizationSchema = JSON.parse(scripts[0]?.textContent ?? '{}') as {
      name?: string
      alternateName?: string
      ['@type']?: string
      address?: { streetAddress?: string }
      sameAs?: string[]
    }
    const localBusinessSchema = JSON.parse(scripts[1]?.textContent ?? '{}') as {
      name?: string
      ['@type']?: string
      geo?: { latitude?: number; longitude?: number }
    }
    const breadcrumbSchema = JSON.parse(scripts[2]?.textContent ?? '{}') as {
      ['@type']?: string
      itemListElement?: Array<{ position?: number; name?: string }>
    }

    expect(organizationSchema['@type']).toBe('EducationalOrganization')
    expect(organizationSchema.name).toBe(
      'Escola Municipal de Ensino Fundamental João Corso',
    )
    expect(organizationSchema.alternateName).toBe('EMEF João Corso')
    expect(organizationSchema.address?.streetAddress).toBe(
      'Rua Castro Alves, 401',
    )
    expect(organizationSchema.sameAs).toEqual([
      'https://facebook.com/escolajoaocorso',
      'https://instagram.com/escolajoaocorso',
    ])

    expect(localBusinessSchema['@type']).toBe('School')
    expect(localBusinessSchema.name).toBe('Escola Municipal João Corso')
    expect(localBusinessSchema.geo).toEqual({
      '@type': 'GeoCoordinates',
      latitude: -28.7126,
      longitude: -51.5948,
    })

    expect(breadcrumbSchema['@type']).toBe('BreadcrumbList')
    expect(breadcrumbSchema.itemListElement).toHaveLength(3)
    expect(breadcrumbSchema.itemListElement?.[0]).toMatchObject({
      position: 1,
      name: 'Início',
    })
  })
})
