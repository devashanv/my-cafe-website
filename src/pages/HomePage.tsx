import { Link } from 'react-router-dom'
import { blogArticles } from '../data/blog'
import { business } from '../data/business'
import { menuCategories } from '../data/menu'

import heroCoffeeCup from '../assets/my-cafe-kandy-cofee-shop-hero-cofee-cup.png'
import bannerCoffeeSeeds from '../assets/my-cafe-kandy-banner-coffee-seeds.png'

const focusRing = 'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cafe-terracotta'

export function HomePage() {
  return (
    <div className="space-y-20 pb-8">
      <section aria-labelledby="hero-heading" className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div className="max-w-2xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-cafe-terracotta">Kandy, Sri Lanka</p>
          <h1 className="text-4xl font-semibold tracking-tight text-cafe-coffee sm:text-5xl lg:text-6xl" id="hero-heading">
            My-Cafe, a relaxed café and coffee shop in Kandy
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-cafe-ink/75">
            Fresh coffee, breakfast, light meals, pastries, desserts, and refreshing drinks for easy mornings and unhurried café visits.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link className={`rounded-full bg-cafe-coffee px-5 py-3 font-semibold text-cafe-cream hover:bg-cafe-terracotta ${focusRing}`} to="/menu">
              Explore the menu
            </Link>
            <Link className={`rounded-full border border-cafe-coffee px-5 py-3 font-semibold text-cafe-coffee hover:border-cafe-terracotta hover:text-cafe-terracotta ${focusRing}`} to="/visit">
              Plan your visit
            </Link>
          </div>
        </div>
        <div
          aria-label="A warm, welcoming café atmosphere"
          className="flex min-h-72 flex-col items-center justify-center gap-6 rounded-3xl bg-cafe-coffee p-8 shadow-sm sm:min-h-96">
          <img
            src={heroCoffeeCup}
            alt="My-Cafe coffee cup hero image"
            className="w-[440px] max-w-full object-contain"
          />

          <p className="max-w-xs text-center text-2xl font-medium leading-tight text-cafe-cream">
            A welcoming place for good coffee and fresh food.
          </p>
        </div>
      </section>

      <section aria-labelledby="introduction-heading" className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cafe-terracotta">Welcome to My-Cafe</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-cafe-coffee" id="introduction-heading">A café made for everyday moments</h2>
        <p className="mt-5 text-lg leading-8 text-cafe-ink/75">
          {business.name} is a {business.type.toLowerCase()} in {business.location}. We bring together coffee, breakfast, light meals, pastries, desserts, and beverages in a relaxed setting for local customers and visitors exploring Kandy.
        </p>
      </section>

      <section aria-labelledby="offerings-heading">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cafe-terracotta">What we serve</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-cafe-coffee" id="offerings-heading">Something for every café visit</h2>
          </div>
          <Link className={`font-semibold text-cafe-coffee underline decoration-cafe-terracotta decoration-2 underline-offset-4 hover:text-cafe-terracotta ${focusRing}`} to="/menu">See the full menu</Link>
        </div>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {menuCategories.map((category) => (
            <li className="rounded-2xl border border-cafe-coffee/10 bg-white/50 p-5" key={category.name}>
              <h3 className="font-semibold text-cafe-coffee">{category.name === 'Bakery & Desserts' ? 'Pastries & Desserts' : category.name}</h3>
              <p className="mt-3 text-sm leading-6 text-cafe-ink/70">{category.items.slice(0, 3).join(' · ')}</p>
            </li>
          ))}
        </ul>
      </section>

      <section
        aria-labelledby="experience-heading"
        className="grid items-center gap-8 rounded-3xl bg-cafe-terracotta/15 p-7 sm:p-10 lg:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cafe-terracotta">
            The café experience
          </p>

          <h2
            id="experience-heading"
            className="mt-3 text-3xl font-semibold tracking-tight text-cafe-coffee"
          >
            Take your time at My-Cafe
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-cafe-ink/75">
            Whether you are starting the day with breakfast, meeting someone for
            coffee, or taking a quiet break, My-Cafe is designed for comfortable,
            uncomplicated time around fresh food and drinks.
          </p>
        </div>

        <img
          src={bannerCoffeeSeeds}
          alt="A relaxing café interior at My-Cafe"
          className="h-full min-h-64 w-full rounded-2xl object-cover"
        />
      </section>

      <section aria-labelledby="visit-heading" className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end rounded-2xl border border-cafe-coffee/10 bg-white/50 p-5">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cafe-terracotta">Find us in Kandy</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-cafe-coffee" id="visit-heading">Make My-Cafe part of your day</h2>
          <address className="mt-5 space-y-1 text-lg not-italic leading-8 text-cafe-ink/75">
            {business.address.map((line) => <div key={line}>{line}</div>)}
            <a className={`block text-cafe-coffee underline underline-offset-4 hover:text-cafe-terracotta ${focusRing}`} href={`tel:${business.phone}`}>{business.phone}</a>
            <a className={`block text-cafe-coffee underline underline-offset-4 hover:text-cafe-terracotta ${focusRing}`} href={`mailto:${business.email}`}>{business.email}</a>
          </address>
        </div>
        <Link className={`inline-flex w-fit rounded-full bg-cafe-coffee px-5 py-3 font-semibold text-cafe-cream hover:bg-cafe-terracotta ${focusRing}`} to="/visit">Get visit information</Link>
      </section>

      <section aria-labelledby="faq-heading">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cafe-terracotta">Useful answers</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-cafe-coffee" id="faq-heading">Frequently asked questions</h2>
        <dl className="mt-8 grid gap-6 md:grid-cols-2">
          <div><dt className="font-semibold text-cafe-coffee">What is My-Cafe?</dt><dd className="mt-2 leading-7 text-cafe-ink/75">My-Cafe is a café and coffee shop in Kandy, Sri Lanka.</dd></div>
          <div><dt className="font-semibold text-cafe-coffee">Where is My-Cafe located?</dt><dd className="mt-2 leading-7 text-cafe-ink/75">You can find My-Cafe at {business.address.join(', ')}.</dd></div>
          <div><dt className="font-semibold text-cafe-coffee">What does My-Cafe serve?</dt><dd className="mt-2 leading-7 text-cafe-ink/75">The menu includes coffee, breakfast, light meals, pastries, desserts, and beverages. <Link className={`font-semibold text-cafe-coffee underline underline-offset-4 hover:text-cafe-terracotta ${focusRing}`} to="/menu">View the full menu</Link>.</dd></div>
          <div><dt className="font-semibold text-cafe-coffee">How can I contact My-Cafe?</dt><dd className="mt-2 leading-7 text-cafe-ink/75">Call {business.phone} or email {business.email}. <Link className={`font-semibold text-cafe-coffee underline underline-offset-4 hover:text-cafe-terracotta ${focusRing}`} to="/contact">Contact My-Cafe</Link>.</dd></div>
        </dl>
      </section>

      <section aria-labelledby="blog-heading">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cafe-terracotta">From the journal</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-cafe-coffee" id="blog-heading">Ideas for coffee and café time</h2>
          </div>
          <Link className={`font-semibold text-cafe-coffee underline decoration-cafe-terracotta decoration-2 underline-offset-4 hover:text-cafe-terracotta ${focusRing}`} to="/blog">Read the blog</Link>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {blogArticles.map((article) => (
            <article className="rounded-2xl border border-cafe-coffee/10 bg-white/50 p-5" key={article.slug}>
              <h3 className="text-lg font-semibold leading-7 text-cafe-coffee"><Link className={`hover:text-cafe-terracotta ${focusRing}`} to={`/blog/${article.slug}`}>{article.title}</Link></h3>
              <p className="mt-3 text-sm text-cafe-ink/70">A useful read for your next coffee, food, or Kandy café experience.</p>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="final-cta-heading" className="rounded-3xl bg-cafe-coffee px-7 py-10 text-center sm:px-10">
        <h2 className="text-3xl font-semibold tracking-tight text-cafe-cream" id="final-cta-heading">Ready for your next café visit?</h2>
        <p className="mx-auto mt-4 max-w-xl text-cafe-cream/80">Explore what is on the menu or find the details you need to visit My-Cafe in Kandy.</p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <Link className={`rounded-full bg-cafe-cream px-5 py-3 font-semibold text-cafe-coffee hover:bg-white ${focusRing}`} to="/menu">Explore the menu</Link>
          <Link className={`rounded-full border border-cafe-cream/60 px-5 py-3 font-semibold text-cafe-cream hover:border-cafe-cream ${focusRing}`} to="/visit">Visit My-Cafe</Link>
        </div>
      </section>
    </div>
  )
}
