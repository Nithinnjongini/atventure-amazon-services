import { useEffect, useState } from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { contactDetails, navigation, siteIdentity } from '../data/siteContent'

export function Layout() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname])

  return (
    <div className="app-shell">
      <header className="site-header">
        <NavLink className="brandmark" to="/" onClick={() => setMenuOpen(false)}>
          <span className="brandmark__eyebrow">Atventure</span>
          <span className="brandmark__title">Amazon Services</span>
        </NavLink>

        <button
          type="button"
          className="menu-toggle"
          onClick={() => setMenuOpen((current) => !current)}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
        >
          Menu
        </button>

        <nav className={`site-nav ${menuOpen ? 'is-open' : ''}`}>
          {navigation.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => (isActive ? 'is-active' : '')}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
          <NavLink className="button button--solid" to="/contact" onClick={() => setMenuOpen(false)}>
            Talk With Us
          </NavLink>
        </nav>
      </header>

      <AnimatePresence mode="wait">
        <Outlet key={location.pathname} />
      </AnimatePresence>

      <footer className="site-footer">
        <div className="footer-col">
          <p className="eyebrow">{siteIdentity.eyebrow}</p>
          <h3>{siteIdentity.name}</h3>
          <p>{siteIdentity.statement}</p>
        </div>
        <div className="footer-col">
          <p className="footer-label">Office</p>
          <p>{contactDetails.address}</p>
          <a href={contactDetails.directionsUrl} target="_blank" rel="noreferrer">
            Get Directions
          </a>
        </div>
        <div className="footer-col">
          <p className="footer-label">Contact</p>
          <a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a>
        </div>
        <div className="footer-bottom">
          <NavLink to="/privacy">Privacy Policy</NavLink>
          <span className="footer-bottom__sep">·</span>
          <span>© {new Date().getFullYear()} {siteIdentity.name}</span>
        </div>
      </footer>
    </div>
  )
}
