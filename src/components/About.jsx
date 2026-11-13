import { FaUserTie, FaStar, FaEye, FaClock } from 'react-icons/fa'
import { ABOUT, COMPANY } from '../data/content'
import './About.css'

const ICONS = [<FaStar aria-hidden="true" />, <FaEye aria-hidden="true" />, <FaClock aria-hidden="true" />]

export default function About() {
  return (
    <section className="about section-padding" id="about">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Who We Are</span>
          <h2 className="section-title">Meet the Expert Behind Every Project</h2>
        </div>

        <div className="about-grid">
          {/* Profile card */}
          <div className="about-card reveal">
            <div className="about-card-header">
              <div className="about-avatar" aria-hidden="true">
                <FaUserTie />
              </div>
              <div>
                <h3 className="about-name">{COMPANY.owner}</h3>
                <p className="about-qual">{COMPANY.qualification}</p>
              </div>
            </div>
            <div className="about-card-body">
              <p className="about-bio">{ABOUT.bio}</p>
              <p className="about-mission">{ABOUT.mission}</p>
            </div>
          </div>

          {/* Highlights */}
          <div className="about-content">
            <h2 className="about-heading reveal">
              Why Clients Choose<br />
              <span style={{ color: 'var(--accent)' }}>Salman Design?</span>
            </h2>
            <div className="highlights-grid">
              {ABOUT.highlights.map((h, i) => (
                <div key={h.label} className="highlight-card reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
                  <div className="highlight-icon-wrap">{ICONS[i]}</div>
                  <div>
                    <p className="highlight-label">{h.label}</p>
                    <p className="highlight-desc">{h.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

