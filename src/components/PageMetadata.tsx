import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { blogArticles } from '../data/blog'
import { siteOrigin } from '../config/site'

const pageMetadata = {
  '/': { title: 'My-Cafe | Café & Coffee Shop in Kandy', description: 'My-Cafe is a welcoming café and coffee shop in Kandy, Sri Lanka, serving coffee, breakfast, light meals, pastries, desserts, and beverages.' },
  '/menu': { title: 'Menu | My-Cafe Kandy', description: 'Explore the My-Cafe menu of coffee, breakfast, light meals, pastries, desserts, and beverages in Kandy.' },
  '/about': { title: 'About My-Cafe | Café in Kandy', description: 'Learn about My-Cafe, a relaxed café and coffee shop serving fresh food and drinks in Kandy, Sri Lanka.' },
  '/visit': { title: 'Visit My-Cafe | Kandy Café', description: 'Find My-Cafe in Kandy, Sri Lanka, with the address, phone number, and email needed to plan your visit.' },
  '/blog': { title: 'My-Cafe Blog | Coffee and Café Ideas', description: 'Read useful My-Cafe articles about coffee, breakfast, food, and relaxed café experiences in Kandy.' },
  '/contact': { title: 'Contact My-Cafe | Kandy Café', description: 'Contact My-Cafe by phone or email, find the Kandy address, or send a message through the contact form.' },
} as const

export function PageMetadata() {
  const { pathname } = useLocation()

  useEffect(() => {
    const article = pathname.startsWith('/blog/') ? blogArticles.find((entry) => `/blog/${entry.slug}` === pathname) : undefined
    const metadata = article
      ? { title: `${article.title} | My-Cafe`, description: article.excerpt }
      : pageMetadata[pathname as keyof typeof pageMetadata] ?? pageMetadata['/']
    const canonicalPath = article ? `/blog/${article.slug}` : pathname
    const canonicalUrl = `${siteOrigin}${canonicalPath === '/' ? '/' : canonicalPath.replace(/\/$/, '')}`

    document.title = metadata.title
    let description = document.head.querySelector<HTMLMetaElement>('meta[name="description"]')
    if (!description) {
      description = document.createElement('meta')
      description.name = 'description'
      document.head.appendChild(description)
    }
    description.content = metadata.description

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    canonical.href = canonicalUrl
  }, [pathname])

  return null
}
