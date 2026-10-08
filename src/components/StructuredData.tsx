import { useLocation } from 'react-router-dom'
import { siteOrigin } from '../config/site'
import { blogArticles } from '../data/blog'
import { business } from '../data/business'

const pageLabels: Record<string, string> = {
  '/': 'Home',
  '/menu': 'Menu',
  '/about': 'About',
  '/visit': 'Visit Us',
  '/blog': 'Blog',
  '/contact': 'Contact',
}

const faqEntries = [
  { question: 'What is My-Cafe?', answer: 'My-Cafe is a café and coffee shop in Kandy, Sri Lanka.' },
  { question: 'Where is My-Cafe located?', answer: `You can find My-Cafe at ${business.address.join(', ')}.` },
  { question: 'What does My-Cafe serve?', answer: 'The menu includes coffee, breakfast, light meals, pastries, desserts, and beverages.' },
  { question: 'How can I contact My-Cafe?', answer: `Call ${business.phone} or email ${business.email}.` },
]

function addressSchema() {
  return {
    '@type': 'PostalAddress',
    streetAddress: business.address[0],
    addressLocality: 'Kandy',
    postalCode: business.address[1].replace('Kandy ', ''),
    addressCountry: 'Sri Lanka',
  }
}

function businessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'CafeOrCoffeeShop'],
    '@id': `${siteOrigin}/#business`,
    name: business.name,
    description: `${business.name} is a ${business.type.toLowerCase()} in ${business.location}, serving coffee, breakfast, light meals, pastries, desserts, and beverages.`,
    url: siteOrigin,
    telephone: business.phone,
    email: business.email,
    address: addressSchema(),
  }
}

function breadcrumbs(pathname: string, articleTitle?: string) {
  const items = [{ name: 'Home', url: `${siteOrigin}/` }]
  if (articleTitle) {
    items.push({ name: 'Blog', url: `${siteOrigin}/blog` }, { name: articleTitle, url: `${siteOrigin}${pathname}` })
  } else if (pathname !== '/' && pageLabels[pathname]) {
    items.push({ name: pageLabels[pathname], url: `${siteOrigin}${pathname}` })
  }
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({ '@type': 'ListItem', position: index + 1, name: item.name, item: item.url })),
  }
}

export function StructuredData() {
  const { pathname } = useLocation()
  const article = pathname.startsWith('/blog/') ? blogArticles.find((entry) => `/blog/${entry.slug}` === pathname) : undefined
  const schemas: Record<string, unknown>[] = []

  if (pathname === '/') {
    schemas.push(businessSchema(), {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': `${siteOrigin}/#website`,
      name: business.name,
      url: siteOrigin,
    }, {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqEntries.map((entry) => ({ '@type': 'Question', name: entry.question, acceptedAnswer: { '@type': 'Answer', text: entry.answer } })),
    })
  }

  if (article) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'Article',
      '@id': `${siteOrigin}${pathname}#article`,
      headline: article.title,
      description: article.excerpt,
      url: `${siteOrigin}${pathname}`,
      publisher: { '@id': `${siteOrigin}/#business` },
    })
  }

  const isKnownPage = pathname === '/' || pathname in pageLabels || Boolean(article)
  if (isKnownPage) schemas.push(breadcrumbs(pathname, article?.title))

  if (schemas.length === 0) return null
  return <>{schemas.map((schema, index) => <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />)}</>
}
