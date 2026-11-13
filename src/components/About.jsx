import { useRef } from 'react'
import { motion } from 'framer-motion'
import {
  LuUserCheck,
  LuShieldCheck,
  LuClock,
  LuFileSpreadsheet,
  LuCircleCheck,
  LuSparkles,
} from 'react-icons/lu'
import { ABOUT, COMPANY } from '../data/content'
import './About.css'

export default function About() {
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
    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg)`
  }

  const handleMouseLeave = () => {
    if (!cardRef.current) return
    cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)'
  }

  const promiseIcons = [
    <LuShieldCheck key="p1" aria-hidden="true" />,
    <LuFileSpreadsheet key="p2" aria-hidden="true" />,
    <LuClock key="p3" aria-hidden="true" />,
  ]

  return (
    <section className="about section-padding" id="about" aria-label="About Us">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-eyebrow">About Our Studio</span>
          <h2 className="section-title">
            Excellence in Civil Engineering & Design
          </h2>
          <p className="section-desc">
            Bridging technical structural integrity with state-of-the-art architectural aesthetics in Nehtaur and across Uttar Pradesh.
          </p>
        </div>

        <div className="about-grid">
          {/* Left Column: 3D Tilt Identity Card */}
          <motion.div
            className="about-card-wrapper"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              ref={cardRef}
              className="about-id-card"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <div className="about-watermark" aria-hidden="true">
                CE
              </div>

              <div className="about-avatar-ring" aria-hidden="true">
                <LuUserCheck />
              </div>

              <h3 className="about-id-name">{COMPANY.owner}</h3>
              <p className="about-id-title">{COMPANY.qualification}</p>

              <div className="about-id-badges">
                <div className="about-badge-item">
                  <LuCircleCheck className="about-badge-icon" />
                  <span>Licensed Civil Engineering Professional</span>
                </div>
                <div className="about-badge-item">
                  <LuCircleCheck className="about-badge-icon" />
                  <span>Structural, BOQ & 3D Visualization Authority</span>
                </div>
                <div className="about-badge-item">
                  <LuCircleCheck className="about-badge-icon" />
                  <span>10+ Years of Field & Design Experience</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bio & Engineer's Promise */}
          <motion.div
            className="about-text-col"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="about-bio-text">{ABOUT.bio}</p>

            <div className="about-mission-box">
              <p className="about-mission-text">"{ABOUT.mission}"</p>
            </div>

            {/* Engineer's Promise Card */}
            <div className="promise-card">
              <h4 className="promise-title">
                <LuSparkles className="promise-title-icon" aria-hidden="true" />
                <span>The Engineer's Promise</span>
              </h4>

              <div className="promise-grid">
                {ABOUT.highlights.map((h, i) => (
                  <div key={h.label} className="promise-item">
                    <div className="promise-icon-wrap">{promiseIcons[i]}</div>
                    <div>
                      <h5 className="promise-label">{h.label}</h5>
                      <p className="promise-desc">{h.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
