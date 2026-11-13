import { useEffect, useRef } from 'react'

/**
 * useScrollReveal – Attaches IntersectionObserver to add .visible class
 * to elements that have the .reveal class when they enter the viewport.
 */
export function useScrollReveal(rootMargin = '0px 0px -60px 0px') {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    if (!els.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { rootMargin }
    )

    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [rootMargin])
}

/**
 * useCounter – Counts up from 0 to target when visible.
 */
export function useCounter(target, duration = 1800) {
  const ref = useRef(null)
  const countRef = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0
          const step = target / (duration / 16)
          const run = () => {
            start = Math.min(start + step, target)
            if (el) el.textContent = Math.round(start)
            if (start < target) countRef.current = requestAnimationFrame(run)
          }
          countRef.current = requestAnimationFrame(run)
          observer.disconnect()
        }
      },
      { threshold: 0.5 }
    )

    observer.observe(el)
    return () => {
      observer.disconnect()
      if (countRef.current) cancelAnimationFrame(countRef.current)
    }
  }, [target, duration])

  return ref
}

