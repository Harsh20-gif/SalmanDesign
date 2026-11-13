import { motion } from 'framer-motion'
import { PROCESS_STEPS } from '../data/content'
import './Process.css'

export default function Process() {
  return (
    <section className="process-section section-padding blueprint-drift" id="process" aria-label="Our Work Process">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Our Methodology</span>
          <h2 className="section-title light">How We Build Your Dreams</h2>
          <p className="section-desc light">
            A structured, transparent 4-stage engineering lifecycle ensuring zero budget surprises and timely handover.
          </p>
        </div>

        <div className="process-timeline-wrap">
          <motion.div
            className="process-track-line"
            aria-hidden="true"
            initial={{ scaleX: 0, scaleY: 0 }}
            whileInView={{ scaleX: 1, scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          />

          <div className="process-grid" role="list">
            {PROCESS_STEPS.map((step, idx) => (
              <motion.div
                key={step.step}
                className="process-step-item"
                role="listitem"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: idx * 0.12 }}
              >
                <div className="process-number-badge" aria-hidden="true">
                  <span>{step.step}</span>
                </div>
                <h3 className="process-step-title">{step.title}</h3>
                <p className="process-step-desc">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
