import { Link } from 'react-router-dom'
import { business } from '../data/business'

const focusRing = 'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cafe-terracotta'

export function AboutPage() {
  return (
    <div className="space-y-14">
      <header className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cafe-terracotta">About My-Cafe</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-cafe-coffee sm:text-5xl">A welcoming café and coffee shop in Kandy</h1>
        <p className="mt-5 text-lg leading-8 text-cafe-ink/75">{business.name} is a {business.type.toLowerCase()} in {business.location}, serving coffee, breakfast, light meals, pastries, desserts, and beverages for everyday visits.</p>
      </header>

      <section aria-labelledby="about-offering-heading" className="grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold text-cafe-coffee" id="about-offering-heading">What does My-Cafe serve?</h2>
          <p className="mt-4 leading-7 text-cafe-ink/75">My-Cafe serves coffee, breakfast, light meals, pastries, desserts, and beverages. The menu offers useful choices whether you are stopping by for a drink, a meal, or something sweet.</p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-cafe-coffee">A relaxed café experience</h2>
          <p className="mt-4 leading-7 text-cafe-ink/75">My-Cafe is a comfortable place to begin the morning, meet someone over coffee, enjoy a casual meal, or take a quiet break while spending time in Kandy.</p>
        </div>
      </section>

      <section aria-labelledby="about-location-heading" className="rounded-3xl bg-cafe-terracotta/15 p-7 sm:p-10">
        <h2 className="text-2xl font-semibold text-cafe-coffee" id="about-location-heading">Connected to Kandy</h2>
        <p className="mt-4 max-w-2xl leading-7 text-cafe-ink/75">Located at {business.address.join(', ')}, My-Cafe is part of the everyday café experience in Kandy, Sri Lanka.</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link className={`rounded-full bg-cafe-coffee px-5 py-3 font-semibold text-cafe-cream hover:bg-cafe-terracotta ${focusRing}`} to="/menu">Explore the menu</Link>
          <Link className={`rounded-full border border-cafe-coffee px-5 py-3 font-semibold text-cafe-coffee hover:border-cafe-terracotta hover:text-cafe-terracotta ${focusRing}`} to="/visit">Find us in Kandy</Link>
        </div>
      </section>
    </div>
  )
}
