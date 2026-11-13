import { useState } from 'react'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaCheckCircle, FaPaperPlane, FaDirections } from 'react-icons/fa'
import {
  PHONE, PHONE_DISPLAY, EMAIL, WHATSAPP_NUMBER,
  ADDRESS, MAPS_URL, SERVICES,
} from '../data/content'
import './Contact.css'

/* Build the WhatsApp pre-filled message */
const WA_MSG = encodeURIComponent(
  `Hello! I found your website and I am interested in your civil engineering services. Please contact me.`
)
const WA_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WA_MSG}`

/* Form validation */
function validate(fields) {
  const errors = {}
  if (!fields.name.trim()) errors.name = 'Name is required.'
  if (!fields.phone.trim()) errors.phone = 'Phone number is required.'
  else if (!/^\+?[\d\s\-]{7,15}$/.test(fields.phone)) errors.phone = 'Enter a valid phone number.'
  if (!fields.service) errors.service = 'Please select a service.'
  if (!fields.message.trim()) errors.message = 'Message cannot be empty.'
  return errors
}

export default function Contact() {
  const [fields, setFields] = useState({ name: '', phone: '', service: '', message: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFields((f) => ({ ...f, [name]: value }))
    // Clear error on change
    if (errors[name]) setErrors((er) => { const n = { ...er }; delete n[name]; return n })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate(fields)
    if (Object.keys(errs).length) { setErrors(errs); return }
    setLoading(true)
    // Simulate async (no server)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
      setFields({ name: '', phone: '', service: '', message: '' })
    }, 900)
  }

  return (
    <section className="contact section-padding" id="contact">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Get In Touch</span>
          <h2 className="section-title">Start Your Project Today</h2>
          <p className="section-desc">Fill in the form or reach out directly — we respond within 24 hours.</p>
        </div>

        <div className="contact-grid">
          {/* Info panel */}
          <div className="contact-info reveal">
            <h3 className="contact-info-title">
              Let's Build Something<br />
              <span style={{ color: 'var(--accent)' }}>Amazing Together</span>
            </h3>

            <div className="contact-items">
              <div className="contact-item">
                <div className="contact-item-icon"><FaPhone aria-hidden="true" /></div>
                <div>
                  <p className="contact-item-label">Call / WhatsApp</p>
                  <p className="contact-item-value">
                    <a href={`tel:${PHONE}`}>{PHONE_DISPLAY}</a>
                  </p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-item-icon"><FaEnvelope aria-hidden="true" /></div>
                <div>
                  <p className="contact-item-label">Email</p>
                  <p className="contact-item-value">
                    <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                  </p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-item-icon"><FaMapMarkerAlt aria-hidden="true" /></div>
                <div>
                  <p className="contact-item-label">Office Address</p>
                  <p className="contact-item-value">
                    {ADDRESS.line1},<br />
                    {ADDRESS.line2},<br />
                    {ADDRESS.state} – {ADDRESS.pin}
                  </p>
                </div>
              </div>
            </div>

            <div className="contact-actions">
              <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn-whatsapp" aria-label="Chat on WhatsApp">
                <FaWhatsapp aria-hidden="true" /> WhatsApp
              </a>
              <a href={`tel:${PHONE}`} className="btn-call" aria-label="Call us now">
                <FaPhone aria-hidden="true" /> Call Now
              </a>
              <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="btn-maps" aria-label="Open in Google Maps">
                <FaDirections aria-hidden="true" /> Get Directions
              </a>
            </div>
          </div>

          {/* Contact form */}
          <div className="contact-form-wrap reveal" style={{ transitionDelay: '.12s' }}>
            <h3 className="contact-form-title">Send Us a Message</h3>

            {submitted ? (
              <div className="form-success" role="alert">
                <FaCheckCircle aria-hidden="true" />
                Thank you! We'll contact you shortly.
              </div>
            ) : (
              <form className="form" onSubmit={handleSubmit} noValidate aria-label="Contact form">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Your Name *</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className={`form-input ${errors.name ? 'error' : ''}`}
                    placeholder="Ramesh Kumar"
                    value={fields.name}
                    onChange={handleChange}
                    autoComplete="name"
                    aria-describedby={errors.name ? 'name-err' : undefined}
                  />
                  {errors.name && <span id="name-err" className="form-error" role="alert">{errors.name}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="phone" className="form-label">Phone Number *</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className={`form-input ${errors.phone ? 'error' : ''}`}
                    placeholder="+91 98765 43210"
                    value={fields.phone}
                    onChange={handleChange}
                    autoComplete="tel"
                    inputMode="tel"
                    aria-describedby={errors.phone ? 'phone-err' : undefined}
                  />
                  {errors.phone && <span id="phone-err" className="form-error" role="alert">{errors.phone}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="service" className="form-label">Service Needed *</label>
                  <select
                    id="service"
                    name="service"
                    className={`form-select ${errors.service ? 'error' : ''}`}
                    value={fields.service}
                    onChange={handleChange}
                    aria-describedby={errors.service ? 'service-err' : undefined}
                  >
                    <option value="">Select a service…</option>
                    {SERVICES.map((s) => (
                      <option key={s.id} value={s.title}>{s.title}</option>
                    ))}
                  </select>
                  {errors.service && <span id="service-err" className="form-error" role="alert">{errors.service}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    className={`form-textarea ${errors.message ? 'error' : ''}`}
                    placeholder="Tell us about your project — size, location, budget range, timeline…"
                    value={fields.message}
                    onChange={handleChange}
                    rows={4}
                    aria-describedby={errors.message ? 'message-err' : undefined}
                  />
                  {errors.message && <span id="message-err" className="form-error" role="alert">{errors.message}</span>}
                </div>

                <button type="submit" className="form-submit" disabled={loading}>
                  {loading ? 'Sending…' : <><FaPaperPlane aria-hidden="true" /> Send Message</>}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

