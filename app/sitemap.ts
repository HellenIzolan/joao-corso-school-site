import type { MetadataRoute } from 'next'

/**
 * Sitemap generator for search engines
 *
 * Automatically generates a sitemap.xml file with all routes
 * Updates last modified date dynamically
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.joaocorso.net.br'
  const lastModified = new Date()

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/#sobre`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#contato`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#redes-sociais`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ]
}
