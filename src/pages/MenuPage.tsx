import { Link } from 'react-router-dom'
import { menuCategories } from '../data/menu'

const focusRing = 'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cafe-terracotta'

export function MenuPage() {
  return (
    <div className="space-y-14">
      <header className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cafe-terracotta">What we serve</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-cafe-coffee sm:text-5xl">The My-Cafe menu</h1>
        <p className="mt-5 text-lg leading-8 text-cafe-ink/75"><strong className="font-semibold text-cafe-coffee">What does My-Cafe serve?</strong> My-Cafe serves coffee, breakfast, light meals, pastries, desserts, and refreshing beverages for relaxed café time in Kandy.</p>
      </header>

      <section aria-labelledby="menu-categories-heading">
        <h2 className="sr-only" id="menu-categories-heading">Menu categories</h2>
        <div className="grid gap-5 md:grid-cols-2">
          {menuCategories.map((category) => {
            const heading = category.name === 'Bakery & Desserts' ? 'Pastries & Desserts' : category.name
            return (
              <article className="rounded-3xl border border-cafe-coffee/10 bg-white/50 p-6 sm:p-8" key={category.name}>
                <h2 className="text-2xl font-semibold text-cafe-coffee">{heading}</h2>
                <ul className="mt-5 divide-y divide-cafe-coffee/10">
                  {category.items.map((item) => <li className="py-3 text-cafe-ink/80 first:pt-0 last:pb-0" key={item}>{item}</li>)}
                </ul>
              </article>
            )
          })}
        </div>
      </section>

      <section aria-labelledby="menu-visit-heading" className="rounded-3xl bg-cafe-coffee px-7 py-9 sm:px-10">
        <h2 className="text-2xl font-semibold text-cafe-cream" id="menu-visit-heading">Planning a café visit?</h2>
        <p className="mt-3 max-w-2xl leading-7 text-cafe-cream/80">Find the address and contact details you need before visiting My-Cafe in Kandy.</p>
        <Link className={`mt-6 inline-flex rounded-full bg-cafe-cream px-5 py-3 font-semibold text-cafe-coffee hover:bg-white ${focusRing}`} to="/visit">Plan your visit</Link>
      </section>
    </div>
  )
}
