import { NavLink } from 'react-router-dom'
import { business } from '../data/business'

const footerLinks = [
  { label: 'Home', to: '/' },
  { label: 'Menu', to: '/menu' },
  { label: 'About', to: '/about' },
  { label: 'Visit Us', to: '/visit' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-cafe-coffee/10 bg-cafe-coffee text-cafe-cream">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <h2 className="text-lg font-semibold">{business.name}</h2>
          <p className="mt-3 max-w-sm text-sm leading-6 text-cafe-cream/80">
            {business.name} is a {business.type.toLowerCase()} in {business.location}, serving coffee, breakfast, light meals, pastries, desserts, and beverages in a relaxed setting.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-cafe-cream/70">Visit us</h2>
          <address className="mt-3 space-y-1 text-sm not-italic text-cafe-cream/80">
            {business.address.map((line) => <div key={line}>{line}</div>)}
            <a className="block underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-cafe-terracotta" href={`tel:${business.phone}`}>{business.phone}</a>
            <a className="block underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-cafe-terracotta" href={`mailto:${business.email}`}>{business.email}</a>
          </address>
        </div>

        <nav aria-label="Footer navigation">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-cafe-cream/70">Explore</h2>
          <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
            {footerLinks.map((item) => (
              <li key={item.to}>
                <NavLink className="underline-offset-4 hover:text-cafe-terracotta hover:underline focus-visible:outline-2 focus-visible:outline-cafe-terracotta" to={item.to} end={item.to === '/'}>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  )
}
