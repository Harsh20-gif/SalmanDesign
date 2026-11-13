import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { STATS } from '../data/content'
import './Stats.css'

function CounterItem({ value, suffix, label }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  useEffect(() => {
    if (!isInView) return

    let start = 0
    const duration = 1800 // ms
    const stepTime = 20
    const totalSteps = duration / stepTime
    const increment = value / totalSteps

    const timer = setInterval(() => {
      start += increment
      if (start >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.round(start))
      }
    }, stepTime)

    return () => clearInterval(timer)
  }, [isInView, value])

  return (
    <div ref={ref} className="stat-box">
      <div className="stat-number-wrap">
        <span>{count}</span>
        <span className="stat-suffix">{suffix}</span>
      </div>
      <p className="stat-label">{label}</p>
    </div>
  )
}

export default function Stats() {
  return (
    <section className="stats-strip" aria-label="Company Statistics">
      <div className="stats-glow-line" aria-hidden="true" />
      <div className="stats-glow-line-bottom" aria-hidden="true" />

      <div className="container">
        <motion.div
          className="stats-grid"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {STATS.map((s) => (
            <CounterItem key={s.label} {...s} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
