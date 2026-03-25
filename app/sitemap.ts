import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://sofisystem.com'
  const routes = ['', '/about', '/services', '/pricing', '/contact']
  const langs = ['', '/en']
  return routes.flatMap(route => langs.map(lang => ({
    url: `${base}${lang}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1 : 0.8,
  })))
}