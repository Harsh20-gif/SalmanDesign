import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { LuCompass, LuPhone, LuArrowUpRight } from 'react-icons/lu'
import { COMPANY, PHONE } from '../data/content'
import './Navbar.css'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const handleNavClick = (href) => {
    setMenuOpen(false)
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <header className={`navbar ${scrolled ? 'scrolled' : 'top'}`} role="banner">
        <div className="container navbar-inner">
          {/* Logo with architect badge */}
          <a
            href="#home"
            className="nav-logo"
            onClick={(e) => {
              e.preventDefault()
              handleNavClick('#home')
            }}
            aria-label="Salman Design & Consultant"
          >
            <div className="nav-logo-badge" aria-hidden="true">
              <LuCompass />
            </div>
            <div className="nav-logo-text">
              <span className="nav-logo-title">{COMPANY.name}</span>
              <span className="nav-logo-sub">{COMPANY.tagline}</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="nav-links" aria-label="Main Navigation">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-link"
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(link.href)
                }}
              >
                {link.label}
              </a>
            ))}
            <a href={`tel:${PHONE}`} className="nav-cta" aria-label="Call Salman Design">
              <LuPhone aria-hidden="true" />
              <span>Call Now</span>
            </a>
          </nav>

          {/* Hamburger Button */}
          <button
            className={`hamburger ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? 'Close Menu' : 'Open Menu'}
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* Fullscreen Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-overlay"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <nav className="mobile-nav-list" aria-label="Mobile Navigation">
              {NAV_LINKS.map((link, idx) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className="mobile-nav-item"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 * idx, duration: 0.4 }}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(link.href)
                  }}
                >
                  <span>{link.label}</span>
                </motion.a>
              ))}
            </nav>

            <motion.div
              className="mobile-bottom-info"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.4 }}
            >
              <a href={`tel:${PHONE}`} className="mobile-cta-btn" aria-label="Call Now">
                <LuPhone aria-hidden="true" />
                <span>Call +91 98374 18514</span>
              </a>
              <p className="mobile-address-hint">Nehtaur (Bijnor), Uttar Pradesh</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
