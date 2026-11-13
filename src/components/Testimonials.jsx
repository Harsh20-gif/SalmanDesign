import { useState, useRef, useEffect, useCallback } from 'react'
import { FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { TESTIMONIALS } from '../data/content'
import './Testimonials.css'

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const trackRef = useRef(null)
  const touchStartX = useRef(null)
  const total = TESTIMONIALS.length

  const goTo = useCallback((i) => {
    setIndex((i + total) % total)
  }, [total])

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(() => goTo(index + 1), 5000)
    return () => clearInterval(timer)
  }, [index, goTo])

  // Touch swipe
  const onTouchStart = (e) => { touchStartX.current = e.touches[0].clientX }
  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return
    const diff = touchStartX.current - e.changedTouches[0].clientX
    if (Math.abs(diff) > 40) goTo(index + (diff > 0 ? 1 : -1))
    touchStartX.current = null
  }

  return (
    <section className="testimonials section-padding" id="testimonials">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Client Reviews</span>
          <h2 className="section-title">What Our Clients Say</h2>
        </div>

        <div
          className="testimonials-carousel"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          aria-label="Testimonials carousel"
          role="region"
        >
          <div
            ref={trackRef}
            className="testimonials-track"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="testimonial-slide">
                <div className="testimonial-card">
                  <span className="testimonial-quote" aria-hidden="true">"</span>
                  <div className="testimonial-stars" aria-label={`${t.rating} out of 5 stars`}>
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <FaStar key={i} aria-hidden="true" />
                    ))}
                  </div>
                  <p className="testimonial-text">"{t.text}"</p>
                  <div className="testimonial-author">
                    <div className="testimonial-avatar" aria-hidden="true">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <p className="testimonial-name">{t.name}</p>
                      <p className="testimonial-location">{t.location}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="carousel-controls">
          <button
            className="carousel-btn"
            onClick={() => goTo(index - 1)}
            aria-label="Previous testimonial"
          >
            <FaChevronLeft aria-hidden="true" />
          </button>

          <div className="carousel-dots" role="tablist" aria-label="Testimonial slides">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                className={`carousel-dot ${i === index ? 'active' : ''}`}
                onClick={() => goTo(i)}
                role="tab"
                aria-selected={i === index}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>

          <button
            className="carousel-btn"
            onClick={() => goTo(index + 1)}
            aria-label="Next testimonial"
          >
            <FaChevronRight aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  )
}

