import {
  LuCompass,
  LuPhone,
  LuMail,
  LuMapPin,
  LuChevronRight,
  LuArrowUp,
} from 'react-icons/lu'
import {
  COMPANY,
  PHONE_DISPLAY,
  PHONE,
  EMAIL,
  ADDRESS,
  SERVICES,
} from '../data/content'
import './Footer.css'

const FOOTER_LINKS = [
  { label: 'Home Overview', href: '#home' },
  { label: 'About Studio', href: '#about' },
  { label: 'Core Services', href: '#services' },
  { label: 'Featured Portfolio', href: '#projects' },
  { label: 'How We Work', href: '#process' },
  { label: 'Client Feedback', href: '#testimonials' },
  { label: 'Contact Us', href: '#contact' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="footer-wrap" role="contentinfo">
      <div className="container">
        {/* Giant Architectural Brand Wordmark */}
        <div className="footer-wordmark-wrap" aria-hidden="true">
          <span className="footer-wordmark">Salman Design</span>
        </div>

        <div className="footer-main-grid">
          {/* Brand & Qualification */}
          <div className="footer-col-brand">
            <h3 className="footer-brand-title">
              <LuCompass aria-hidden="true" />
              <span>{COMPANY.name}</span>
            </h3>
            <p className="footer-brand-tagline">
              {COMPANY.tagline} — Professional civil engineering consultancy, turnkey architectural design, and photorealistic 3D visualization.
            </p>
            <p style={{ fontSize: '0.85rem', color: 'var(--accent)' }}>
              Head Engineer: {COMPANY.owner}, {COMPANY.qualification}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="footer-col-heading">Navigation</h4>
            <ul className="footer-link-list">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="footer-nav-link"
                    onClick={(e) => {
                      e.preventDefault()
                      scrollTo(link.href)
                    }}
                  >
                    <LuChevronRight aria-hidden="true" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="footer-col-heading">Our Practices</h4>
            <ul className="footer-link-list">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <a
                    href="#services"
                    className="footer-nav-link"
                    onClick={(e) => {
                      e.preventDefault()
                      scrollTo('#services')
                    }}
                  >
                    <LuChevronRight aria-hidden="true" />
                    <span>{s.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="footer-col-heading">Studio Office</h4>
            <div className="footer-contact-info-list">
              <div className="footer-contact-row">
                <LuPhone aria-hidden="true" />
                <a href={`tel:${PHONE}`}>{PHONE_DISPLAY}</a>
              </div>
              <div className="footer-contact-row">
                <LuMail aria-hidden="true" />
                <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              </div>
              <div className="footer-contact-row">
                <LuMapPin aria-hidden="true" />
                <span>
                  {ADDRESS.line1},<br />
                  {ADDRESS.line2},<br />
                  {ADDRESS.state} – {ADDRESS.pin}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <p className="footer-copyright-text">
            © {currentYear} {COMPANY.name}. All rights reserved.
          </p>

          <button
            type="button"
            className="footer-back-to-top"
            onClick={() => scrollTo('#home')}
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <LuArrowUp aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  )
}
