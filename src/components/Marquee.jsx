import './Marquee.css'

const MARQUEE_ITEMS = [
  'Architectural Design',
  'Interior Design',
  '3D Visualization',
  'Civil Construction',
  'Site Engineering',
  'Cost Estimation & BOQ',
  'Structural Planning',
  'Turnkey Projects',
]

export default function Marquee() {
  return (
    <div className="marquee-section" aria-hidden="true">
      <div className="marquee-track">
        <div className="marquee-content">
          {MARQUEE_ITEMS.map((item, idx) => (
            <span key={`m1-${idx}`} className="marquee-item">
              <span className="marquee-dot" />
              <span className={idx % 2 === 1 ? 'marquee-highlight' : ''}>{item}</span>
            </span>
          ))}
        </div>
        <div className="marquee-content">
          {MARQUEE_ITEMS.map((item, idx) => (
            <span key={`m2-${idx}`} className="marquee-item">
              <span className="marquee-dot" />
              <span className={idx % 2 === 1 ? 'marquee-highlight' : ''}>{item}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
