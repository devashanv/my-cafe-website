import { Link, useParams } from 'react-router-dom'
import { blogArticles } from '../data/blog'

const focusRing = 'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cafe-terracotta'

export function BlogArticlePage() {
  const { slug } = useParams()
  const article = blogArticles.find((entry) => entry.slug === slug)

  if (!article) {
    return <section aria-labelledby="article-not-found-heading" className="max-w-2xl space-y-5"><p className="text-sm font-semibold uppercase tracking-[0.2em] text-cafe-terracotta">Article not found</p><h1 className="text-4xl font-semibold tracking-tight text-cafe-coffee" id="article-not-found-heading">That article is not available</h1><p className="leading-7 text-cafe-ink/75">The article link may be out of date. Return to the blog to choose from the current articles.</p><Link className={`inline-flex rounded-full bg-cafe-coffee px-5 py-3 font-semibold text-cafe-cream hover:bg-cafe-terracotta ${focusRing}`} to="/blog">Back to the blog</Link></section>
  }

  return <article className="mx-auto max-w-3xl"><header className="border-b border-cafe-coffee/10 pb-8"><Link className={`font-semibold text-cafe-terracotta underline underline-offset-4 hover:text-cafe-coffee ${focusRing}`} to="/blog">Back to the blog</Link><p className="mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-cafe-terracotta">My-Cafe journal</p><h1 className="mt-3 text-4xl font-semibold leading-tight tracking-tight text-cafe-coffee sm:text-5xl">{article.title}</h1><p className="mt-5 text-lg leading-8 text-cafe-ink/75">{article.excerpt}</p></header><div className="space-y-10 py-10">{article.sections.map((section) => <section key={section.heading}><h2 className="text-2xl font-semibold text-cafe-coffee">{section.heading}</h2><div className="mt-4 space-y-4 leading-8 text-cafe-ink/80">{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{section.list && <ul className="list-disc space-y-2 pl-6">{section.list.map((item) => <li key={item}>{item}</li>)}</ul>}</div></section>)}</div><footer className="border-t border-cafe-coffee/10 pt-8"><h2 className="text-2xl font-semibold text-cafe-coffee">Continue your café visit</h2><p className="mt-3 leading-7 text-cafe-ink/75">Explore the menu or find the details you need to visit My-Cafe in Kandy.</p><div className="mt-5 flex flex-wrap gap-3"><Link className={`rounded-full bg-cafe-coffee px-5 py-3 font-semibold text-cafe-cream hover:bg-cafe-terracotta ${focusRing}`} to="/menu">Explore the menu</Link><Link className={`rounded-full border border-cafe-coffee px-5 py-3 font-semibold text-cafe-coffee hover:border-cafe-terracotta hover:text-cafe-terracotta ${focusRing}`} to="/visit">Plan your visit</Link></div></footer></article>
}
