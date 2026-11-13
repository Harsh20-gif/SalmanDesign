import { motion } from 'framer-motion'
import { LuAward, LuBox, LuClock, LuPhone, LuHardHat } from 'react-icons/lu'
import { HERO, PHONE } from '../data/content'
import './Hero.css'

const SKYLINE_DATA = [
  { w: 32, h: 45, win: 2 },
  { w: 46, h: 72, win: 4 },
  { w: 38, h: 56, win: 3 },
  { w: 54, h: 88, win: 5 },
  { w: 42, h: 62, win: 3 },
  { w: 48, h: 78, win: 4 },
  { w: 36, h: 52, win: 2 },
  { w: 58, h: 84, win: 5 },
  { w: 40, h: 68, win: 3 },
  { w: 50, h: 75, win: 4 },
]

export default function Hero() {
  const words = [
    { text: 'Building', isGradient: false },
    { text: 'Your', isGradient: false },
    { text: 'Dreams', isGradient: true },
    { text: 'with', isGradient: false },
    { text: 'Precision', isGradient: false },
    { text: '&', isGradient: false },
    { text: 'Trust', isGradient: false },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.09, delayChildren: 0.15 },
    },
  }

  const wordVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
    },
  }

  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero blueprint-drift" id="home" aria-label="Hero Section">
      {/* Background Soft Glows */}
      <div className="hero-glow-1" aria-hidden="true" />
      <div className="hero-glow-2" aria-hidden="true" />

      <div className="container hero-inner">
        {/* Left Column: Headline & Action */}
        <div className="hero-content">
          <motion.div
            className="hero-tag"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <LuHardHat className="hero-tag-icon" aria-hidden="true" />
            <span>Er. M. Salman • B.Tech (Civil)</span>
          </motion.div>

          <motion.h1
            className="hero-headline"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {words.map((w, idx) => (
              <motion.span
                key={idx}
                variants={wordVariants}
                style={{ display: 'inline-block', marginRight: '0.28em' }}
                className={w.isGradient ? 'gradient-text' : ''}
              >
                {w.text}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            className="hero-subtext"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.65 }}
          >
            {HERO.subtext}
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.65 }}
          >
            <button
              className="btn-primary-shine"
              onClick={() => scrollTo('#projects')}
              aria-label="View our completed projects"
            >
              <span>{HERO.cta1.label}</span>
            </button>
            <a
              href={`tel:${PHONE}`}
              className="btn-glass"
              aria-label="Call Salman Design now"
            >
              <LuPhone aria-hidden="true" />
              <span>{HERO.cta2.label}</span>
            </a>
          </motion.div>
        </div>

        {/* Right Column: 3D Isometric Rotating Building & Floating Badges */}
        <div className="hero-visual-col" aria-hidden="true">
          {/* Floating badges */}
          <div className="floating-badge badge-1">
            <LuAward className="badge-icon" />
            <span>10+ Years Experience</span>
          </div>

          <div className="floating-badge badge-2">
            <LuBox className="badge-icon" />
            <span>3D Visualization</span>
          </div>

          <div className="floating-badge badge-3">
            <LuClock className="badge-icon" />
            <span>On-Time Delivery</span>
          </div>

          {/* 3D Isometric Tower */}
          <div className="iso-scene">
            <div className="building-tower">
              {/* Floor 1 */}
              <div className="iso-slab slab-1">
                <div className="slab-top" />
                <div className="slab-front">
                  <div className="iso-window" />
                  <div className="iso-window" />
                  <div className="iso-window" />
                </div>
                <div className="slab-side">
                  <div className="iso-window" />
                  <div className="iso-window" />
                </div>
              </div>

              {/* Floor 2 */}
              <div className="iso-slab slab-2">
                <div className="slab-top" />
                <div className="slab-front">
                  <div className="iso-window" />
                  <div className="iso-window" />
                  <div className="iso-window" />
                </div>
                <div className="slab-side">
                  <div className="iso-window" />
                  <div className="iso-window" />
                </div>
              </div>

              {/* Floor 3 */}
              <div className="iso-slab slab-3">
                <div className="slab-top" />
                <div className="slab-front">
                  <div className="iso-window" />
                  <div className="iso-window" />
                  <div className="iso-window" />
                </div>
                <div className="slab-side">
                  <div className="iso-window" />
                  <div className="iso-window" />
                </div>
              </div>

              {/* Floor 4 */}
              <div className="iso-slab slab-4">
                <div className="slab-top" />
                <div className="slab-front">
                  <div className="iso-window" />
                  <div className="iso-window" />
                </div>
                <div className="slab-side">
                  <div className="iso-window" />
                </div>
              </div>

              {/* Roof Deck */}
              <div className="iso-slab slab-roof">
                <div className="slab-top">
                  <div className="roof-deck">H</div>
                  <div className="roof-spire" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Skyline at Bottom */}
      <div className="hero-skyline" aria-hidden="true">
        {SKYLINE_DATA.map((b, i) => (
          <div
            key={i}
            className="skyline-building"
            style={{ width: `${b.w}px`, height: `${b.h}px` }}
          >
            {Array.from({ length: b.win }).map((_, wi) => (
              <div
                key={wi}
                className="skyline-win"
                style={{ animationDelay: `${(i * 0.4 + wi * 0.3).toFixed(1)}s` }}
              />
            ))}
          </div>
        ))}
      </div>

      {/* Bouncing Mouse Scroll Indicator */}
      <div
        className="scroll-indicator"
        onClick={() => scrollTo('#about')}
        role="button"
        tabIndex={0}
        aria-label="Scroll down to About section"
      >
        <div className="mouse-pill" aria-hidden="true">
          <div className="mouse-wheel" />
        </div>
        <span>Scroll</span>
      </div>
    </section>
  )
}
