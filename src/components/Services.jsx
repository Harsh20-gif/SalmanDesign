import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import {
  LuBuilding2,
  LuArmchair,
  LuBox,
  LuHardHat,
  LuCompass,
  LuCalculator,
  LuArrowRight,
  LuRotateCw,
} from 'react-icons/lu'
import { SERVICES } from '../data/content'
import './Services.css'

const ICON_MAP = {
  FaBuilding: <LuBuilding2 aria-hidden="true" />,
  MdChair: <LuArmchair aria-hidden="true" />,
  MdViewInAr: <LuBox aria-hidden="true" />,
  FaHardHat: <LuHardHat aria-hidden="true" />,
  FaDraftingCompass: <LuCompass aria-hidden="true" />,
  FaCalculator: <LuCalculator aria-hidden="true" />,
}

function ServiceCard({ svc, index }) {
  const [flipped, setFlipped] = useState(false)
  const cardRef = useRef(null)

  const handleMouseMove = (e) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    cardRef.current.style.setProperty('--spotlight-x', `${x}px`)
    cardRef.current.style.setProperty('--spotlight-y', `${y}px`)
  }

  const toggleFlip = () => {
    setFlipped((prev) => !prev)
  }

  const handleConsultClick = (e) => {
    e.stopPropagation()
    const contactSection = document.querySelector('#contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.div
      ref={cardRef}
      className={`service-flip-card ${flipped ? 'flipped' : ''}`}
      onMouseMove={handleMouseMove}
      onClick={toggleFlip}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      role="button"
      tabIndex={0}
      aria-label={`${svc.title} service. Click or tap to flip for details.`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          toggleFlip()
        }
      }}
    >
      <div className="service-flip-inner">
        {/* Front Face */}
        <div className="flip-front">
          <div>
            <div className="service-icon-box">
              {ICON_MAP[svc.iconName] || <LuBuilding2 />}
            </div>
            <h3 className="service-card-title">{svc.title}</h3>
          </div>

          <div className="flip-hint-tag">
            <LuRotateCw aria-hidden="true" />
            <span className="desktop-hint">Hover / Tap to view details</span>
            <span className="mobile-hint">Tap for details</span>
          </div>
        </div>

        {/* Back Face */}
        <div className="flip-back">
          <div>
            <div className="flip-back-title">
              <span>{svc.title}</span>
              <LuRotateCw aria-hidden="true" style={{ fontSize: '1rem' }} />
            </div>
            <p className="flip-back-desc">{svc.desc}</p>
          </div>

          <button
            type="button"
            className="flip-back-action"
            onClick={handleConsultClick}
            aria-label={`Inquire about ${svc.title}`}
          >
            <span>Inquire Now</span>
            <LuArrowRight aria-hidden="true" />
          </button>
        </div>
      </div>
    </motion.div>
  )
}

export default function Services() {
  return (
    <section className="services-section section-padding blueprint-drift" id="services" aria-label="Services Offered">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Comprehensive Expertise</span>
          <h2 className="section-title light">Our Core Engineering Services</h2>
          <p className="section-desc light">
            End-to-end turnkey solutions from architectural blueprints and 3D views to on-site civil execution and cost estimation.
          </p>
        </div>

        <div className="services-grid">
          {SERVICES.map((svc, i) => (
            <ServiceCard key={svc.id} svc={svc} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
