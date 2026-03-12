import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { PERSONAL } from '../data/portfolio'
import './Hero.css'

export default function Hero({ loaded }) {
  const heroRef = useRef(null)

  useEffect(() => {
    if (!loaded) return
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.1 })
      tl.from('.hero-eyebrow', { opacity: 0, x: -24, duration: 0.7, ease: 'power3.out' })
        .from('.hero-line', { y: '105%', duration: 1.1, ease: 'power4.out', stagger: 0.12 }, '-=0.3')
        .from('.hero-sub', { opacity: 0, y: 24, duration: 0.8, ease: 'power3.out' }, '-=0.5')
        .from('.hero-actions', { opacity: 0, y: 20, duration: 0.7, ease: 'power3.out' }, '-=0.5')
        .from('.hero-scroll-cue', { opacity: 0, duration: 0.6 }, '-=0.2')
        .from('.hero-meta-item', { opacity: 0, y: 10, duration: 0.5, stagger: 0.1 }, '-=0.6')

      // Parallax orbs
      gsap.to('.hero-orb-1', {
        y: -120, ease: 'none',
        scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: 1 }
      })
      gsap.to('.hero-orb-2', {
        y: -80, ease: 'none',
        scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: 1.5 }
      })
    }, heroRef)
    return () => ctx.revert()
  }, [loaded])

  return (
    <section id="hero" className="hero section" ref={heroRef}>
      {/* Ambient orbs */}
      <div className="hero-orb-1 orb orb-orange" />
      <div className="hero-orb-2 orb orb-tan" />

      {/* Grid lines */}
      <div className="hero-grid-lines" aria-hidden>
        {[...Array(5)].map((_, i) => <div key={i} className="hgl" />)}
      </div>

      <div className="hero-inner">
        <div className="hero-content">
          <div className="hero-eyebrow">
            <span className="hero-status-dot" />
            <span>Available for opportunities</span>
          </div>

          <h1 className="hero-title">
            <span className="hero-line-wrap"><span className="hero-line">Building</span></span>
            <span className="hero-line-wrap"><span className="hero-line">the <em>web</em> that</span></span>
            <span className="hero-line-wrap"><span className="hero-line">matters<span className="hero-dot">.</span></span></span>
          </h1>

          <p className="hero-sub">
            I'm <strong>Jeevan Vijay Chavan</strong> — a Full Stack MERN Developer crafting intelligent, 
            scalable web applications from backend architecture to pixel-perfect UIs.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              <span>See My Work</span>
              <span className="btn-arrow">↓</span>
            </a>
            <a href="#story" className="btn btn-outline">
              <span>Read My Story</span>
            </a>
          </div>
        </div>

        {/* Right meta column */}
        <div className="hero-meta">
          <div className="hero-meta-item">
            <span className="meta-label">Role</span>
            <span className="meta-value">Full Stack Developer</span>
          </div>
          <div className="hero-meta-item">
            <span className="meta-label">Stack</span>
            <span className="meta-value">MERN · JWT · Redis</span>
          </div>
          <div className="hero-meta-item">
            <span className="meta-label">Certified</span>
            <span className="meta-value">Azure AZ-900</span>
          </div>
          <div className="hero-meta-item">
            <span className="meta-label">DSA</span>
            <span className="meta-value meta-orange">170+ Problems</span>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="hero-scroll-cue">
        <span className="scroll-label">Scroll to explore</span>
        <div className="scroll-track"><div className="scroll-thumb" /></div>
      </div>

      {/* Bottom bar */}
      <div className="hero-bottom-bar">
        <span>{PERSONAL.email}</span>
        <span className="hero-year">© 2025</span>
      </div>
    </section>
  )
}
