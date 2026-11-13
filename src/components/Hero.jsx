import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { FaPhone, FaHardHat, FaChevronDown } from 'react-icons/fa'
import { HERO, PHONE } from '../data/content'
import './Hero.css'

/* Stagger animation variants */
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18 } },
}

const itemVariants = {
  hidden:   { opacity: 0, y: 32 },
  visible:  { opacity: 1, y: 0, transition: { duration: .6, ease: [.25,.8,.25,1] } },
}

export default function Hero() {
  const handleScroll = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero blueprint-bg" id="home" aria-label="Hero">
      <div className="container hero-inner">
        {/* Text */}
        <motion.div
          className="hero-text"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="hero-badge" variants={itemVariants}>
            <FaHardHat aria-hidden="true" />
            Civil Engineering & Design
          </motion.div>

          <motion.h1 className="hero-headline" variants={itemVariants}>
            {HERO.headline.split('\n').map((line, i) =>
              i === 0
                ? <span key={i}>{line}<br /></span>
                : <span key={i} className="highlight">{line}</span>
            )}
          </motion.h1>

          <motion.p className="hero-subtext" variants={itemVariants}>
            {HERO.subtext}
          </motion.p>

          <motion.div className="hero-actions" variants={itemVariants}>
            <button
              className="hero-cta-primary"
              onClick={() => handleScroll('#projects')}
              aria-label="View our projects"
            >
              {HERO.cta1.label}
            </button>
            <a
              href={HERO.cta2.href}
              className="hero-cta-secondary"
              aria-label="Call us now"
            >
              <FaPhone aria-hidden="true" />
              {HERO.cta2.label}
            </a>
          </motion.div>
        </motion.div>

        {/* 3D Building Visual */}
        <div className="hero-visual" aria-hidden="true">
          <div className="building-scene">
            <div className="crane"><div className="crane-hook" /></div>
            {[180, 240, 200, 160, 220].map((h, i) => (
              <div key={i} className="building-block" style={{ height: h }}>
                <div className="building-side" />
              </div>
            ))}
            <div className="hero-ground" />
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="hero-scroll-hint" aria-hidden="true">
        <span>Scroll</span>
        <FaChevronDown />
      </div>
    </section>
  )
}

