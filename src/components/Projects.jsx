import { useState, useEffect, useCallback } from 'react'
import { FaMapMarkerAlt, FaTimes } from 'react-icons/fa'
import { PROJECTS, PROJECT_FILTERS } from '../data/content'
import './Projects.css'

/* Modal component */
function ProjectModal({ project, onClose }) {
  useEffect(() => {
    // Close on ESC
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div
      className="modal-overlay"
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      <div className="modal-box">
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          <FaTimes aria-hidden="true" />
        </button>
        <img
          src={project.img}
          alt={project.title}
          className="modal-img"
          loading="lazy"
        />
        <div className="modal-content">
          <span className="modal-category">{project.category}</span>
          <h3 className="modal-title">{project.title}</h3>
          <p className="modal-location">
            <FaMapMarkerAlt aria-hidden="true" /> {project.location}
          </p>
          <p className="modal-desc">{project.desc}</p>
          <div className="modal-tags">
            {project.tags.map((t) => (
              <span key={t} className="modal-tag">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const [active, setActive] = useState('All')
  const [selected, setSelected] = useState(null)

  const filtered = active === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === active)

  const openModal = useCallback((p) => setSelected(p), [])
  const closeModal = useCallback(() => setSelected(null), [])

  return (
    <section className="projects section-padding" id="projects">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Our Work</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-desc">
            A selection of residential, commercial, and interior projects we have delivered.
          </p>
        </div>

        {/* Filter bar */}
        <div className="filter-bar" role="group" aria-label="Project filters">
          {PROJECT_FILTERS.map((f) => (
            <button
              key={f}
              className={`filter-btn ${active === f ? 'active' : ''}`}
              onClick={() => setActive(f)}
              aria-pressed={active === f}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="projects-grid">
          {filtered.map((p, i) => (
            <article
              key={p.id}
              className="project-card reveal"
              style={{ transitionDelay: `${i * 0.07}s` }}
              onClick={() => openModal(p)}
              onKeyDown={(e) => { if (e.key === 'Enter') openModal(p) }}
              tabIndex={0}
              role="button"
              aria-label={`View ${p.title}`}
            >
              <div className="project-img-wrap">
                <img
                  src={p.img}
                  alt={p.title}
                  className="project-img"
                  loading="lazy"
                />
                <span className="project-category-badge">{p.category}</span>
              </div>
              <div className="project-info">
                <h3 className="project-title">{p.title}</h3>
                <p className="project-location">
                  <FaMapMarkerAlt aria-hidden="true" /> {p.location}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>

      {selected && <ProjectModal project={selected} onClose={closeModal} />}
    </section>
  )
}

