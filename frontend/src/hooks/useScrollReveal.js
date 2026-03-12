import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useScrollReveal(deps = []) {
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Standard reveal (up)
      gsap.utils.toArray('.reveal').forEach(el => {
        gsap.to(el, {
          opacity: 1, y: 0, duration: 1, ease: 'power3.out',
          scrollTrigger: {
            trigger: el, start: 'top 88%',
            toggleActions: 'play none none none'
          }
        })
      })

      // Reveal from left
      gsap.utils.toArray('.reveal-left').forEach(el => {
        gsap.to(el, {
          opacity: 1, x: 0, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' }
        })
      })

      // Reveal from right
      gsap.utils.toArray('.reveal-right').forEach(el => {
        gsap.to(el, {
          opacity: 1, x: 0, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' }
        })
      })

      // Scale reveal
      gsap.utils.toArray('.reveal-scale').forEach((el, i) => {
        gsap.to(el, {
          opacity: 1, scale: 1, duration: 0.8, ease: 'power3.out',
          delay: i * 0.08,
          scrollTrigger: { trigger: el, start: 'top 90%', toggleActions: 'play none none none' }
        })
      })

      // Fade only
      gsap.utils.toArray('.reveal-fade').forEach(el => {
        gsap.to(el, {
          opacity: 1, duration: 1.2, ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' }
        })
      })

      // Stagger children
      gsap.utils.toArray('.stagger-parent').forEach(parent => {
        const children = parent.querySelectorAll('.stagger-child')
        gsap.to(children, {
          opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
          stagger: 0.12,
          scrollTrigger: { trigger: parent, start: 'top 85%', toggleActions: 'play none none none' }
        })
      })

    }, ref)

    return () => ctx.revert()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)

  return ref
}
