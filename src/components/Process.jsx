import { PROCESS_STEPS } from '../data/content'
import './Process.css'

export default function Process() {
  return (
    <section className="process section-padding blueprint-bg" id="process">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Our Workflow</span>
          <h2 className="section-title" style={{ color: 'var(--white)' }}>How We Work</h2>
          <p className="section-desc" style={{ color: 'rgba(255,255,255,.65)' }}>
            A transparent, milestone-driven process from first call to final handover.
          </p>
        </div>

        <div className="timeline" role="list">
          {PROCESS_STEPS.map((step, i) => (
            <div
              key={step.step}
              className="timeline-item reveal"
              style={{ transitionDelay: `${i * 0.12}s` }}
              role="listitem"
            >
              <div className="timeline-dot" aria-hidden="true">{step.step}</div>
              <h3 className="timeline-title">{step.title}</h3>
              <p className="timeline-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

