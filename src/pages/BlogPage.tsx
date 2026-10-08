import { Link } from 'react-router-dom'
import { blogArticles } from '../data/blog'

const focusRing = 'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cafe-terracotta'

export function BlogPage() {
  return (
    <div className="space-y-12">
      <header className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cafe-terracotta">From My-Cafe</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-cafe-coffee sm:text-5xl">The My-Cafe blog</h1>
        <p className="mt-5 text-lg leading-8 text-cafe-ink/75">Useful ideas about coffee, breakfast, food, and enjoying relaxed café time in Kandy.</p>
      </header>
      <section aria-labelledby="article-list-heading">
        <h2 className="sr-only" id="article-list-heading">All articles</h2>
        <div className="grid gap-5 md:grid-cols-3">
          {blogArticles.map((article) => (
            <article className="flex flex-col rounded-3xl border border-cafe-coffee/10 bg-white/50 p-6" key={article.slug}>
              <p className="text-sm font-semibold uppercase tracking-wide text-cafe-terracotta">My-Cafe journal</p>
              <h2 className="mt-4 text-2xl font-semibold leading-8 text-cafe-coffee"><Link className={`hover:text-cafe-terracotta ${focusRing}`} to={`/blog/${article.slug}`}>{article.title}</Link></h2>
              <p className="mt-4 flex-1 leading-7 text-cafe-ink/75">{article.excerpt}</p>
              <Link className={`mt-6 w-fit font-semibold text-cafe-coffee underline decoration-cafe-terracotta decoration-2 underline-offset-4 hover:text-cafe-terracotta ${focusRing}`} to={`/blog/${article.slug}`}>Read this article</Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
