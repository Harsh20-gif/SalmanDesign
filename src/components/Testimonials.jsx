import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { LuStar, LuQuote, LuChevronLeft, LuChevronRight } from 'react-icons/lu'
import { TESTIMONIALS } from '../data/content'
import './Testimonials.css'

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(1)
  const total = TESTIMONIALS.length

  const paginate = useCallback(
    (newDirection) => {
      setDirection(newDirection)
      setIndex((prev) => (prev + newDirection + total) % total)
    },
    [total]
  )

  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1)
    }, 6500)
    return () => clearInterval(timer)
  }, [paginate])

  const current = TESTIMONIALS[index]

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 80 : -80,
      opacity: 0,
      scale: 0.96,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
    },
    exit: (dir) => ({
      x: dir > 0 ? -80 : 80,
      opacity: 0,
      scale: 0.96,
      transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
    }),
  }

  const handleDragEnd = (_, info) => {
    if (info.offset.x < -40) {
      paginate(1)
    } else if (info.offset.x > 40) {
      paginate(-1)
    }
  }

  return (
    <section className="testimonials-section section-padding" id="testimonials" aria-label="Client Testimonials">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Client Endorsements</span>
          <h2 className="section-title">What Our Clients Build With Us</h2>
          <p className="section-desc">
            Real feedback from homeowners, showroom proprietors, and commercial developers across Bijnor district.
          </p>
        </div>

        <div className="testimonials-carousel-wrap">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={current.id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={handleDragEnd}
              className="testimonial-active-card"
            >
              <LuQuote className="testimonial-quote-icon" aria-hidden="true" />

              <div className="testimonial-stars" aria-label={`${current.rating} out of 5 stars`}>
                {Array.from({ length: current.rating }).map((_, i) => (
                  <LuStar key={i} fill="currentColor" aria-hidden="true" />
                ))}
              </div>

              <p className="testimonial-quote-text">"{current.text}"</p>

              <div className="testimonial-author-row">
                <div className="testimonial-avatar" aria-hidden="true">
                  {current.name.charAt(0)}
                </div>
                <div>
                  <h3 className="testimonial-author-name">{current.name}</h3>
                  <p className="testimonial-author-loc">{current.location}, UP</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Carousel Controls */}
          <div className="testimonial-controls">
            <button
              className="carousel-nav-btn"
              onClick={() => paginate(-1)}
              aria-label="Previous testimonial"
            >
              <LuChevronLeft aria-hidden="true" />
            </button>

            <div className="carousel-dots-list" role="tablist" aria-label="Testimonial slides">
              {TESTIMONIALS.map((t, idx) => (
                <button
                  key={t.id}
                  className={`carousel-dot-btn ${idx === index ? 'active' : ''}`}
                  onClick={() => {
                    setDirection(idx > index ? 1 : -1)
                    setIndex(idx)
                  }}
                  role="tab"
                  aria-selected={idx === index}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              className="carousel-nav-btn"
              onClick={() => paginate(1)}
              aria-label="Next testimonial"
            >
              <LuChevronRight aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
