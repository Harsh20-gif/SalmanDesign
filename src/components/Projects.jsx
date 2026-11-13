import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { LuMapPin, LuX, LuArrowUpRight, LuMessageSquare } from 'react-icons/lu'
import { PROJECTS, PROJECT_FILTERS, WHATSAPP_NUMBER } from '../data/content'
import './Projects.css'

function ProjectDetailModal({ project, onClose }) {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  const waMessage = encodeURIComponent(
    `Hello Er. Salman! I saw your project "${project.title}" (${project.location}) on your website and would like to consult with you for a similar project.`
  )
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${waMessage}`

  return (
    <motion.div
      className="project-modal-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
    >
      <motion.div
        className="project-modal-dialog"
        initial={{ opacity: 0, scale: 0.92, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 20 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        <button
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close project modal"
        >
          <LuX aria-hidden="true" />
        </button>

        <img
          src={project.img}
          alt={project.title}
          className="modal-hero-img"
          loading="lazy"
        />

        <div className="modal-body">
          <span className="modal-pill">{project.category}</span>
          <h3 className="modal-title">{project.title}</h3>
          <p className="modal-location">
            <LuMapPin aria-hidden="true" />
            <span>{project.location}</span>
          </p>

          <p className="modal-desc">{project.desc}</p>

          <div className="modal-tags">
            {project.tags.map((tag) => (
              <span key={tag} className="modal-tag-chip">
                {tag}
              </span>
            ))}
          </div>

          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="modal-inquire-btn"
            aria-label={`Inquire about ${project.title} on WhatsApp`}
          >
            <LuMessageSquare aria-hidden="true" />
            <span>Inquire About Similar Project</span>
          </a>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [selectedProject, setSelectedProject] = useState(null)

  const filtered = activeFilter === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeFilter)

  const openModal = useCallback((p) => setSelectedProject(p), [])
  const closeModal = useCallback(() => setSelectedProject(null), [])

  return (
    <section className="projects-section section-padding" id="projects" aria-label="Portfolio Projects">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Portfolio Showcase</span>
          <h2 className="section-title">Selected Architectural & Civil Works</h2>
          <p className="section-desc">
            Explore our curated selection of residential duplexes, commercial complexes, luxury interiors, and 3D architectural renders.
          </p>
        </div>

        {/* Filter Pills with Animated Active Indicator */}
        <div className="projects-filter-bar" role="tablist" aria-label="Filter projects by category">
          {PROJECT_FILTERS.map((f) => {
            const isActive = activeFilter === f
            return (
              <button
                key={f}
                className={`filter-pill-btn ${isActive ? 'active' : ''}`}
                onClick={() => setActiveFilter(f)}
                role="tab"
                aria-selected={isActive}
              >
                {isActive && (
                  <motion.div
                    layoutId="activePill"
                    className="active-pill-bg"
                    transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                  />
                )}
                <span>{f}</span>
              </button>
            )
          })}
        </div>

        {/* Masonry Grid */}
        <motion.div className="projects-grid" layout>
          <AnimatePresence>
            {filtered.map((p) => (
              <motion.article
                key={p.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="project-card"
                onClick={() => openModal(p)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') openModal(p)
                }}
                tabIndex={0}
                role="button"
                aria-label={`View project details for ${p.title}`}
              >
                <div className="project-img-wrapper">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="project-card-img"
                    loading="lazy"
                  />
                  <span className="project-category-tag">{p.category}</span>

                  <div className="project-card-overlay">
                    <h3 className="project-overlay-title">{p.title}</h3>
                    <div className="project-overlay-meta">
                      <span className="project-overlay-location">
                        <LuMapPin aria-hidden="true" />
                        <span>{p.location}</span>
                      </span>
                      <div className="project-overlay-arrow" aria-hidden="true">
                        <LuArrowUpRight />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectDetailModal project={selectedProject} onClose={closeModal} />
        )}
      </AnimatePresence>
    </section>
  )
}
