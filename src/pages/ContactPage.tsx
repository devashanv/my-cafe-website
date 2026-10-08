import { Link } from 'react-router-dom'
import { business } from '../data/business'

const focusRing = 'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cafe-terracotta'

export function ContactPage() {
  return (
    <div className="space-y-14">
      <header className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cafe-terracotta">Get in touch</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-cafe-coffee sm:text-5xl">Contact My-Cafe</h1>
        <p className="mt-5 text-lg leading-8 text-cafe-ink/75">Call, email, or use the form below to prepare for a visit to My-Cafe in Kandy.</p>
      </header>

      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <section aria-labelledby="contact-details-heading">
          <h2 className="text-2xl font-semibold text-cafe-coffee" id="contact-details-heading">How can I contact My-Cafe?</h2>
          <address className="mt-5 space-y-2 text-lg not-italic leading-8 text-cafe-ink/80">
            <strong className="block font-semibold text-cafe-coffee">{business.name}</strong>
            {business.address.map((line) => <div key={line}>{line}</div>)}
            <a className={`block pt-2 text-cafe-coffee underline underline-offset-4 hover:text-cafe-terracotta ${focusRing}`} href={`tel:${business.phone}`}>{business.phone}</a>
            <a className={`block break-words text-cafe-coffee underline underline-offset-4 hover:text-cafe-terracotta ${focusRing}`} href={`mailto:${business.email}`}>{business.email}</a>
          </address>
          <Link className={`mt-7 inline-flex rounded-full border border-cafe-coffee px-5 py-3 font-semibold text-cafe-coffee hover:border-cafe-terracotta hover:text-cafe-terracotta ${focusRing}`} to="/visit">View visit information</Link>
        </section>

        <section aria-labelledby="contact-form-heading" className="rounded-3xl border border-cafe-coffee/10 bg-white/50 p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-cafe-coffee" id="contact-form-heading">Send a message</h2>
          <form className="mt-6 space-y-5" onSubmit={(event) => event.preventDefault()}>
            <div>
              <label className="block text-sm font-semibold text-cafe-coffee" htmlFor="name">Name</label>
              <input className={`mt-2 w-full rounded-xl border border-cafe-coffee/20 bg-cafe-cream px-4 py-3 text-cafe-ink ${focusRing}`} id="name" name="name" type="text" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-cafe-coffee" htmlFor="email">Email</label>
              <input className={`mt-2 w-full rounded-xl border border-cafe-coffee/20 bg-cafe-cream px-4 py-3 text-cafe-ink ${focusRing}`} id="email" name="email" type="email" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-cafe-coffee" htmlFor="message">Message</label>
              <textarea className={`mt-2 min-h-32 w-full rounded-xl border border-cafe-coffee/20 bg-cafe-cream px-4 py-3 text-cafe-ink ${focusRing}`} id="message" name="message" />
            </div>
            <button className={`rounded-full bg-cafe-coffee px-5 py-3 font-semibold text-cafe-cream hover:bg-cafe-terracotta ${focusRing}`} type="submit">Send message</button>
          </form>
        </section>
      </div>
    </div>
  )
}
