import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/test-analytics'], // Disallow test pages from being indexed
    },
    sitemap: 'https://css-nc2-companion.vercel.app/sitemap.xml',
  }
} 