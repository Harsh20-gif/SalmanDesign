import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  LuPhone,
  LuMail,
  LuMapPin,
  LuSend,
  LuCircleCheck,
  LuNavigation,
  LuMessageSquare,
} from 'react-icons/lu'
import {
  PHONE,
  PHONE_DISPLAY,
  EMAIL,
  WHATSAPP_NUMBER,
  ADDRESS,
  MAPS_URL,
  SERVICES,
} from '../data/content'
import './Contact.css'

const WA_DEFAULT_MSG = encodeURIComponent(
  'Hello Er. Salman! I visited your website and would like to consult on my upcoming project.'
)
const WA_DIRECT_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WA_DEFAULT_MSG}`

function validate(values) {
  const errors = {}
  if (!values.name.trim()) errors.name = 'Please enter your full name.'
  if (!values.phone.trim()) {
    errors.phone = 'Please provide a contact phone number.'
  } else if (!/^\+?[\d\s\-]{7,15}$/.test(values.phone)) {
    errors.phone = 'Please enter a valid phone number.'
  }
  if (!values.service) errors.service = 'Please select a service.'
  if (!values.message.trim()) errors.message = 'Please briefly describe your requirements.'
  return errors
}

export default function Contact() {
  const [fields, setFields] = useState({
    name: '',
    phone: '',
    service: '',
    message: '',
  })
  const [errors, setErrors] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFields((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev }
        delete next[name]
        return next
      })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = validate(fields)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setIsLoading(true)

    // Simulate asynchronous submission without contacting an external server
    setTimeout(() => {
      setIsLoading(false)
      setIsSuccess(true)
      setFields({ name: '', phone: '', service: '', message: '' })
    }, 850)
  }

  return (
    <section className="contact-section section-padding blueprint-drift" id="contact" aria-label="Contact Salman Design">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Initiate Consultation</span>
          <h2 className="section-title light">Let's Discuss Your Blueprint</h2>
          <p className="section-desc light">
            Connect directly with Er. M. Salman for site inspection, drawings, or an initial project estimate.
          </p>
        </div>

        <div className="contact-split-grid">
          {/* Left Column: Direct Info Card */}
          <motion.div
            className="contact-info-card"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <div>
              <h3 className="contact-info-heading">
                Reach Our Office Directly
              </h3>

              <div className="contact-details-list">
                {/* Phone */}
                <div className="contact-channel-item">
                  <div className="contact-icon-ring" aria-hidden="true">
                    <LuPhone />
                  </div>
                  <div>
                    <p className="contact-channel-label">Direct Phone</p>
                    <p className="contact-channel-value">
                      <a href={`tel:${PHONE}`}>{PHONE_DISPLAY}</a>
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="contact-channel-item">
                  <div className="contact-icon-ring" aria-hidden="true">
                    <LuMail />
                  </div>
                  <div>
                    <p className="contact-channel-label">Official Inquiries</p>
                    <p className="contact-channel-value">
                      <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                    </p>
                  </div>
                </div>

                {/* Address */}
                <div className="contact-channel-item">
                  <div className="contact-icon-ring" aria-hidden="true">
                    <LuMapPin />
                  </div>
                  <div>
                    <p className="contact-channel-label">Studio Address</p>
                    <p className="contact-channel-value">
                      {ADDRESS.line1}, {ADDRESS.line2},<br />
                      {ADDRESS.state} – {ADDRESS.pin}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="contact-direct-actions">
              <a
                href={WA_DIRECT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp-prominent"
                aria-label="Direct WhatsApp message"
              >
                <LuMessageSquare aria-hidden="true" />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-maps-action"
                aria-label="Open location in Google Maps"
              >
                <LuNavigation aria-hidden="true" />
                <span>Get Directions</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Glass Consultation Form */}
          <motion.div
            className="contact-glass-form-wrap"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            {isSuccess ? (
              <motion.div
                className="form-success-card"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <div className="success-icon-badge" aria-hidden="true">
                  <LuCircleCheck />
                </div>
                <h3 className="success-card-title">Inquiry Received!</h3>
                <p className="success-card-desc">
                  Thank you for reaching out. Er. M. Salman will review your requirements and respond within 24 hours.
                </p>
                <button
                  type="button"
                  className="btn-glass"
                  onClick={() => setIsSuccess(false)}
                >
                  Send Another Inquiry
                </button>
              </motion.div>
            ) : (
              <>
                <h3 className="form-header-title">Send a Project Brief</h3>
                <p className="form-header-sub">
                  Tell us about your plot location, requirements, or service needed.
                </p>

                <form className="glass-form-grid" onSubmit={handleSubmit} noValidate>
                  {/* Name */}
                  <div className="input-field-group">
                    <label htmlFor="name" className="input-field-label">
                      Your Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      className={`glass-input ${errors.name ? 'error' : ''}`}
                      placeholder="e.g. Ramesh Kumar"
                      value={fields.name}
                      onChange={handleChange}
                      autoComplete="name"
                      aria-describedby={errors.name ? 'name-err' : undefined}
                    />
                    {errors.name && (
                      <span id="name-err" className="form-field-error" role="alert">
                        {errors.name}
                      </span>
                    )}
                  </div>

                  {/* Phone */}
                  <div className="input-field-group">
                    <label htmlFor="phone" className="input-field-label">
                      Phone Number *
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      className={`glass-input ${errors.phone ? 'error' : ''}`}
                      placeholder="+91 98765 43210"
                      value={fields.phone}
                      onChange={handleChange}
                      autoComplete="tel"
                      inputMode="tel"
                      aria-describedby={errors.phone ? 'phone-err' : undefined}
                    />
                    {errors.phone && (
                      <span id="phone-err" className="form-field-error" role="alert">
                        {errors.phone}
                      </span>
                    )}
                  </div>

                  {/* Service Needed */}
                  <div className="input-field-group">
                    <label htmlFor="service" className="input-field-label">
                      Service of Interest *
                    </label>
                    <select
                      id="service"
                      name="service"
                      className={`glass-select ${errors.service ? 'error' : ''}`}
                      value={fields.service}
                      onChange={handleChange}
                      aria-describedby={errors.service ? 'service-err' : undefined}
                    >
                      <option value="">Select a service category...</option>
                      {SERVICES.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                    </select>
                    {errors.service && (
                      <span id="service-err" className="form-field-error" role="alert">
                        {errors.service}
                      </span>
                    )}
                  </div>

                  {/* Message */}
                  <div className="input-field-group">
                    <label htmlFor="message" className="input-field-label">
                      Project Details & Location *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className={`glass-textarea ${errors.message ? 'error' : ''}`}
                      placeholder="Plot dimensions, tentative construction schedule, or 3D view requirements..."
                      value={fields.message}
                      onChange={handleChange}
                      rows={4}
                      aria-describedby={errors.message ? 'message-err' : undefined}
                    />
                    {errors.message && (
                      <span id="message-err" className="form-field-error" role="alert">
                        {errors.message}
                      </span>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="btn-primary-shine glass-form-submit"
                    disabled={isLoading}
                    aria-label="Submit project consultation inquiry"
                  >
                    {isLoading ? (
                      <div className="btn-spinner" aria-hidden="true" />
                    ) : (
                      <>
                        <LuSend aria-hidden="true" />
                        <span>Submit Project Inquiry</span>
                      </>
                    )}
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
