import { useEffect } from 'react'
import Lenis from 'lenis'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Stats from './components/Stats'
import Services from './components/Services'
import Projects from './components/Projects'
import Process from './components/Process'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingButtons from './components/FloatingButtons'
import { useScrollReveal } from './hooks/useScrollReveal'

export default function App() {
  // ── Lenis smooth scroll ──────────────────────────────────
  useEffect(() => {
    // Respect prefers-reduced-motion
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) return

    const lenis = new Lenis({
      duration: 1.2,
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

  // ── Scroll-reveal for .reveal elements ──────────────────
  useScrollReveal()

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Stats />
        <Services />
        <Projects />
        <Process />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  )
}

