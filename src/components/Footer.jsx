import {
  FaHardHat, FaPhone, FaEnvelope, FaMapMarkerAlt,
  FaChevronRight, FaChevronUp,
} from 'react-icons/fa'
import { COMPANY, PHONE_DISPLAY, PHONE, EMAIL, ADDRESS, SERVICES } from '../data/content'
import './Footer.css'

const NAV_LINKS = [
  { label: 'Home',         href: '#home' },
  { label: 'About Us',    href: '#about' },
  { label: 'Services',    href: '#services' },
  { label: 'Projects',    href: '#projects' },
  { label: 'How We Work', href: '#process' },
  { label: 'Contact',     href: '#contact' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-logo">
              <FaHardHat className="footer-logo-icon" aria-hidden="true" />
              {COMPANY.name}
            </div>
            <p className="footer-tagline">
              {COMPANY.tagline} — Expert civil engineering, architectural design,
              and 3D visualization services in Nehtaur, Bijnor, UP.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="footer-col-title">Quick Links</h3>
            <ul className="footer-links">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="footer-link"
                    onClick={(e) => { e.preventDefault(); scrollTo(l.href) }}
                  >
                    <FaChevronRight aria-hidden="true" />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="footer-col-title">Services</h3>
            <ul className="footer-links">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <a
                    href="#services"
                    className="footer-link"
                    onClick={(e) => { e.preventDefault(); scrollTo('#services') }}
                  >
                    <FaChevronRight aria-hidden="true" />
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="footer-col-title">Contact Info</h3>
            <div className="footer-contact-item">
              <FaPhone className="footer-contact-icon" aria-hidden="true" />
              <a href={`tel:${PHONE}`}>{PHONE_DISPLAY}</a>
            </div>
            <div className="footer-contact-item">
              <FaEnvelope className="footer-contact-icon" aria-hidden="true" />
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </div>
            <div className="footer-contact-item">
              <FaMapMarkerAlt className="footer-contact-icon" aria-hidden="true" />
              <span>
                {ADDRESS.line1},<br />
                {ADDRESS.line2},<br />
                {ADDRESS.state} – {ADDRESS.pin}
              </span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {year} {COMPANY.name}. All rights reserved.
          </p>
          <button
            className="back-to-top"
            onClick={() => scrollTo('#home')}
            aria-label="Back to top"
          >
            <FaChevronUp aria-hidden="true" /> Back to Top
          </button>
        </div>
      </div>
    </footer>
  )
}

