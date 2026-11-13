import { useCounter } from '../hooks/useScrollReveal'
import { STATS } from '../data/content'
import './Stats.css'

function StatCounter({ value, suffix, label }) {
  const ref = useCounter(value)
  return (
    <div className="stat-item">
      <div className="stat-number">
        <span ref={ref} aria-label={`${value}${suffix}`}>0</span>
        <span className="stat-suffix" aria-hidden="true">{suffix}</span>
      </div>
      <p className="stat-label">{label}</p>
    </div>
  )
}

export default function Stats() {
  return (
    <section className="stats" aria-label="Company statistics">
      <div className="container">
        <div className="stats-grid">
          {STATS.map((s) => (
            <StatCounter key={s.label} {...s} />
          ))}
        </div>
      </div>
    </section>
  )
}

