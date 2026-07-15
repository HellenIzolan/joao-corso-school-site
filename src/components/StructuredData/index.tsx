import Script from 'next/script'
import { SITE_URL, SOCIAL_LINKS } from '@/constants'

/**
 * Structured Data component
 *
 * Adds JSON-LD structured data for better SEO
 * Includes LocalBusiness and EducationalOrganization schemas
 */
export default function StructuredData() {
  const organizationData = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: 'Escola Municipal de Ensino Fundamental João Corso',
    alternateName: 'EMEF João Corso',
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo-escola-joao-corso.png`,
    description:
      'Escola Municipal de Ensino Fundamental localizada em Serafina Corrêa/RS, oferecendo educação de qualidade.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Rua Castro Alves, 401',
      addressLocality: 'Serafina Corrêa',
      addressRegion: 'RS',
      postalCode: '99250-000',
      addressCountry: 'BR',
    },
    telephone: '+55-54-3444-1699',
    email: 'ejcorso@net11.com.br',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '07:30',
        closes: '11:30',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '13:00',
        closes: '17:00',
      },
    ],
    sameAs: [SOCIAL_LINKS.facebook, SOCIAL_LINKS.instagram],
  }

  const localBusinessData = {
    '@context': 'https://schema.org',
    '@type': 'School',
    name: 'Escola Municipal João Corso',
    image: `${SITE_URL}/images/hero-students.jpeg`,
    '@id': SITE_URL,
    url: SITE_URL,
    telephone: '+55-54-3444-1699',
    priceRange: 'Gratuito',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Rua Castro Alves, 401',
      addressLocality: 'Serafina Corrêa',
      addressRegion: 'RS',
      postalCode: '99250-000',
      addressCountry: 'BR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -28.7126,
      longitude: -51.5948,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '07:30',
        closes: '11:30',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '13:00',
        closes: '17:00',
      },
    ],
  }

  const breadcrumbData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Início',
        item: SITE_URL,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Sobre',
        item: `${SITE_URL}/#sobre`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Contato',
        item: `${SITE_URL}/#contato`,
      },
    ],
  }

  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationData),
        }}
      />
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessData),
        }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbData),
        }}
      />
    </>
  )
}
