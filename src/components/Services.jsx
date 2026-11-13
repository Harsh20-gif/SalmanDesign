import { useRef } from 'react'
import {
  FaBuilding, FaHardHat, FaDraftingCompass, FaCalculator,
} from 'react-icons/fa'
import { MdChair, MdViewInAr } from 'react-icons/md'
import { SERVICES } from '../data/content'
import './Services.css'

/* Map icon names from content.js to actual components */
const ICON_MAP = {
  FaBuilding:        <FaBuilding aria-hidden="true" />,
  MdChair:           <MdChair aria-hidden="true" />,
  MdViewInAr:        <MdViewInAr aria-hidden="true" />,
  FaHardHat:         <FaHardHat aria-hidden="true" />,
  FaDraftingCompass: <FaDraftingCompass aria-hidden="true" />,
  FaCalculator:      <FaCalculator aria-hidden="true" />,
}

function ServiceCard({ svc, index, icon }) {
  const cardRef = useRef(null)

  const handleMouseMove = (e) => {
    if (!cardRef.current) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = ((centerY - y) / centerY) * 10
    const rotateY = ((x - centerX) / centerX) * 10
    cardRef.current.style.transform = `perspective(800px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-8px)`
  }

  const handleMouseLeave = () => {
    if (!cardRef.current) return
    cardRef.current.style.transform = ''
  }

  return (
    <article
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="service-card reveal"
      style={{ transitionDelay: `${index * 0.08}s` }}
      aria-label={svc.title}
    >
      <div className="service-icon-wrap">
        {icon}
      </div>
      <h3 className="service-title">{svc.title}</h3>
      <p className="service-desc">{svc.desc}</p>
    </article>
  )
}

export default function Services() {
  return (
    <section className="services section-padding blueprint-bg" id="services">
      <div className="container">
        <div className="section-header">
          <span className="section-label">What We Offer</span>
          <h2 className="section-title">Our Expert Services</h2>
          <p className="section-desc">
            From concept to completion — we handle every stage of your project with precision.
          </p>
        </div>

        <div className="services-grid">
          {SERVICES.map((svc, i) => (
            <ServiceCard
              key={svc.id}
              svc={svc}
              index={i}
              icon={ICON_MAP[svc.iconName]}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
