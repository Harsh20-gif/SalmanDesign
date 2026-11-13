import { useEffect } from 'react'
import { motion, useScroll } from 'framer-motion'
import Lenis from 'lenis'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import About from './components/About'
import Stats from './components/Stats'
import Services from './components/Services'
import Projects from './components/Projects'
import Process from './components/Process'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingActions from './components/FloatingActions'

export default function App() {
  const { scrollYProgress } = useScroll()

  // ── Lenis Smooth Scrolling ──────────────────────────────
  useEffect(() => {
    const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (isReduced) return

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    return () => lenis.destroy()
  }, [])

  return (
    <>
      {/* Top Scroll Progress Indicator */}
      <motion.div
        className="scroll-progress-bar"
        style={{ scaleX: scrollYProgress }}
        aria-hidden="true"
      />

      {/* Navigation */}
      <Navbar />

      <main>
        {/* Hero with 3D isometric tower & drifting blueprint */}
        <Hero />

        {/* Infinite Service Marquee Strip */}
        <Marquee />

        {/* About Er. M. Salman & Engineer's Promise */}
        <About />

        {/* Key Metrics & Animated Counter Strip */}
        <Stats />

        {/* Core Services with 3D Flip & Cursor Spotlight */}
        <Services />

        {/* Selected Projects Portfolio with Layout Filter & Lightbox */}
        <Projects />

        {/* 4-Step Engineering Methodology Timeline */}
        <Process />

        {/* Swipeable Client Endorsement Carousel */}
        <Testimonials />

        {/* Consultation Inquiry & Studio Location */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Mobile Dock */}
      <FloatingActions />
    </>
  )
}
