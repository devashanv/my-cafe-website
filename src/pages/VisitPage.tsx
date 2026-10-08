import { Link } from 'react-router-dom'
import { business } from '../data/business'

const focusRing = 'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cafe-terracotta'

export function VisitPage() {
  return (
    <div className="space-y-14">
      <header className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cafe-terracotta">Visit us</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-cafe-coffee sm:text-5xl">Find My-Cafe in Kandy</h1>
        <p className="mt-5 text-lg leading-8 text-cafe-ink/75">{business.name} is a {business.type.toLowerCase()} at the address below in {business.location}. Use the contact details to plan your visit or ask a question before you arrive.</p>
      </header>

      <section aria-labelledby="visit-details-heading" className="grid gap-8 md:grid-cols-2">
        <div className="rounded-3xl border border-cafe-coffee/10 bg-white/50 p-7 sm:p-8">
          <h2 className="text-2xl font-semibold text-cafe-coffee" id="visit-details-heading">Where is My-Cafe located?</h2>
          <address className="mt-5 text-lg not-italic leading-8 text-cafe-ink/80">
            <strong className="font-semibold text-cafe-coffee">{business.name}</strong>
            {business.address.map((line) => <div key={line}>{line}</div>)}
            <div>{business.location}</div>
          </address>
        </div>
        <div className="rounded-3xl border border-cafe-coffee/10 bg-white/50 p-7 sm:p-8">
          <h2 className="text-2xl font-semibold text-cafe-coffee">Contact before your visit</h2>
          <address className="mt-5 space-y-3 text-lg not-italic leading-8">
            <a className={`block text-cafe-coffee underline underline-offset-4 hover:text-cafe-terracotta ${focusRing}`} href={`tel:${business.phone}`}>{business.phone}</a>
            <a className={`block break-words text-cafe-coffee underline underline-offset-4 hover:text-cafe-terracotta ${focusRing}`} href={`mailto:${business.email}`}>{business.email}</a>
          </address>
        </div>
      </section>

      <section aria-labelledby="visit-context-heading" className="max-w-3xl">
        <h2 className="text-2xl font-semibold text-cafe-coffee" id="visit-context-heading">A simple place to meet, eat, and pause</h2>
        <p className="mt-4 leading-7 text-cafe-ink/75">Whether you are looking for coffee, breakfast, a light meal, or a relaxed break while exploring Kandy, My-Cafe offers a straightforward way to enjoy time at a café.</p>
        <Link className={`mt-6 inline-flex rounded-full bg-cafe-coffee px-5 py-3 font-semibold text-cafe-cream hover:bg-cafe-terracotta ${focusRing}`} to="/contact">Contact My-Cafe</Link>
      </section>
    </div>
  )
}
