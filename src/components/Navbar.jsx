import { useState, useEffect } from 'react'
import { FaHardHat, FaPhone } from 'react-icons/fa'
import { COMPANY, PHONE } from '../data/content'
import './Navbar.css'

const NAV_LINKS = [
  { label: 'Home',      href: '#home' },
  { label: 'About',     href: '#about' },
  { label: 'Services',  href: '#services' },
  { label: 'Projects',  href: '#projects' },
  { label: 'Contact',   href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menu on ESC key
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setMenuOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const handleNavClick = (href) => {
    setMenuOpen(false)
    // Smooth-scroll manually in case Lenis isn't active yet
    const target = document.querySelector(href)
    if (target) target.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <header className={`navbar ${scrolled ? 'scrolled' : 'top'}`} role="banner">
        <div className="container navbar-inner">
          {/* Logo */}
          <a href="#home" className="nav-logo" aria-label="Salman Design Home">
            <FaHardHat className="nav-logo-icon" aria-hidden="true" />
            <div className="nav-logo-text">
              {COMPANY.name}
              <span>{COMPANY.tagline}</span>
            </div>
          </a>

          {/* Desktop links */}
          <nav className="nav-links" aria-label="Main navigation">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="nav-link"
                onClick={(e) => { e.preventDefault(); handleNavClick(l.href) }}
              >
                {l.label}
              </a>
            ))}
            <a href={`tel:${PHONE}`} className="nav-cta" aria-label="Call us now">
              <FaPhone aria-hidden="true" /> Call Now
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            className={`hamburger ${menuOpen ? 'open' : ''}`}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span /><span /><span />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <nav
        className={`mobile-menu ${menuOpen ? 'open' : ''}`}
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
      >
        {NAV_LINKS.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="mobile-nav-link"
            tabIndex={menuOpen ? 0 : -1}
            onClick={(e) => { e.preventDefault(); handleNavClick(l.href) }}
          >
            {l.label}
          </a>
        ))}
        <a
          href={`tel:${PHONE}`}
          className="mobile-cta"
          tabIndex={menuOpen ? 0 : -1}
          aria-label="Call us now"
        >
          <FaPhone aria-hidden="true" /> Call Now
        </a>
      </nav>
    </>
  )
}

