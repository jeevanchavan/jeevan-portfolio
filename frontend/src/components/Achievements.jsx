import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useScrollReveal } from '../hooks/useScrollReveal'
import './Achievements.css'

gsap.registerPlugin(ScrollTrigger)

function CountUp({ end, decimals = 0 }) {
  const numRef = useRef(null)

  useEffect(() => {
    const obj = { val: 0 }
    ScrollTrigger.create({
      trigger: numRef.current,
      start: 'top 80%',
      once: true,
      onEnter: () => {
        gsap.to(obj, {
          val: parseFloat(end),
          duration: 2,
          ease: 'power2.out',
          onUpdate: () => {
            if (numRef.current) {
              numRef.current.textContent = decimals
                ? obj.val.toFixed(decimals)
                : Math.round(obj.val)
            }
          }
        })
      }
    })
  }, [end, decimals])

  return <span ref={numRef}>0</span>
}

export default function Achievements() {
  const ref = useScrollReveal()

  return (
    <section id="achievements" className="ach-section section" ref={ref}>
      <div className="ach-bg-text" aria-hidden>ACHIEVED</div>

      <div className="ach-header reveal-left">
        <div className="section-label">Chapter 04</div>
        <h2 className="section-title">
          Recognition<br />
          <em>earned,</em> not given.
        </h2>
      </div>

      <div className="ach-grid">
        <div className="ach-card ach-large reveal-scale">
          <div className="ach-card-tag">Cloud · Microsoft</div>
          <div className="ach-card-icon">☁</div>
          <h3 className="ach-title">Azure AZ-900</h3>
          <p className="ach-desc">
            Certified in Microsoft Azure Fundamentals. Demonstrates mastery of cloud concepts,
            core Azure services, security, privacy, and pricing models.
          </p>
          <div className="ach-badge">Verified Certificate</div>
        </div>

        <div className="ach-card reveal-scale">
          <div className="ach-card-tag">Full Stack · MERN</div>
          <div className="ach-stat-num">
            <CountUp end={10} />
            <span className="ach-stat-plus">+</span>
          </div>
          <h3 className="ach-title">Technologies Mastered</h3>
          <p className="ach-desc">
            From React and Node.js to MongoDB, Redis, JWT, MediaPipe and ImageKit — each technology shipped inside a real, working application.
          </p>
        </div>
      </div>
    </section>
  )
}