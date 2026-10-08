import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { business } from '../data/business'

import logoImage from '../assets/my-cafe-logo.png'

const navigation = [
  { label: 'Home', to: '/' },
  { label: 'Menu', to: '/menu' },
  { label: 'About', to: '/about' },
  { label: 'Visit Us', to: '/visit' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' },
]

function linkClasses({ isActive }: { isActive: boolean }) {
  return `rounded-full px-3 py-2 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cafe-terracotta ${
    isActive
      ? 'bg-cafe-coffee text-cafe-cream'
      : 'text-cafe-coffee hover:bg-cafe-cream hover:text-cafe-terracotta'
  }`
}

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="border-b border-cafe-coffee/10 bg-cafe-cream">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-4">
        <NavLink
          className="rounded-sm text-2xl font-semibold tracking-tight text-cafe-coffee focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cafe-terracotta flex items-center"
          to="/"
          onClick={() => setIsMenuOpen(false)}
        >
          <img src={logoImage} alt="" className='w-20 h-20'/>
          {business.name}
        </NavLink>

        <button
          aria-controls="mobile-navigation"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          className="rounded-md p-2 text-cafe-coffee focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cafe-terracotta md:hidden"
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span aria-hidden="true" className="text-xl">{isMenuOpen ? '×' : '☰'}</span>
        </button>

        <nav aria-label="Main navigation" className="hidden md:block" id="site-navigation">
          <ul className="flex items-center gap-1">
            {navigation.map((item) => (
              <li key={item.to}>
                <NavLink className={linkClasses} to={item.to} end={item.to === '/'}>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {isMenuOpen && (
        <nav aria-label="Mobile navigation" className="border-t border-cafe-coffee/10 px-4 py-3 md:hidden" id="mobile-navigation">
          <ul className="mx-auto flex max-w-6xl flex-col gap-1 sm:px-2">
            {navigation.map((item) => (
              <li key={item.to}>
                <NavLink
                  className={linkClasses}
                  to={item.to}
                  end={item.to === '/'}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
