import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Story from './components/Story'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Footer from './components/Footer'

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  const [loaded, setLoaded] = useState(false)
  const cursorRef = useRef(null)
  const ringRef = useRef(null)
  const loaderRef = useRef(null)
  const mx = useRef(0), my = useRef(0)
  const rx = useRef(0), ry = useRef(0)
  const raf = useRef(null)

  // ── Cursor ──
  useEffect(() => {
    const move = (e) => { mx.current = e.clientX; my.current = e.clientY }
    document.addEventListener('mousemove', move)

    const animate = () => {
      if (!cursorRef.current || !ringRef.current) return
      cursorRef.current.style.left = mx.current + 'px'
      cursorRef.current.style.top = my.current + 'px'
      rx.current += (mx.current - rx.current) * 0.1
      ry.current += (my.current - ry.current) * 0.1
      ringRef.current.style.left = rx.current + 'px'
      ringRef.current.style.top = ry.current + 'px'
      raf.current = requestAnimationFrame(animate)
    }
    animate()

    const addHover = () => document.body.classList.add('cursor-hover')
    const removeHover = () => document.body.classList.remove('cursor-hover')
    document.querySelectorAll('a, button, [data-cursor]').forEach(el => {
      el.addEventListener('mouseenter', addHover)
      el.addEventListener('mouseleave', removeHover)
    })

    return () => {
      document.removeEventListener('mousemove', move)
      cancelAnimationFrame(raf.current)
    }
  }, [loaded])

  // ── Loader ──
  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(loaderRef.current, {
          yPercent: -100, duration: 0.9, ease: 'power4.inOut',
          onComplete: () => {
            if (loaderRef.current) loaderRef.current.style.display = 'none'
            setLoaded(true)
          }
        })
      }
    })

    tl.to('.loader-name span', { y: 0, duration: 0.8, ease: 'power4.out', stagger: 0.06 })
      .to('.loader-progress-fill', { left: '0%', duration: 1.1, ease: 'power2.inOut' }, '-=0.3')
      .to('.loader-sub', { opacity: 1, duration: 0.4 }, '-=0.4')
      .to({}, { duration: 0.5 })
  }, [])

  return (
    <>
      {/* Loader */}
      <div id="loader" ref={loaderRef}>
        <div className="loader-name">
          {'Jeevan.'.split('').map((ch, i) => (
            <span key={i} style={{ display: 'inline-block' }}>{ch === ' ' ? '\u00A0' : ch}</span>
          ))}
        </div>
        <div className="loader-progress-track">
          <div className="loader-progress-fill" />
        </div>
        <div className="loader-sub" style={{ opacity: 0 }}>Full Stack Developer</div>
      </div>

      {/* Cursor */}
      <div id="cursor" ref={cursorRef} />
      <div id="cursor-ring" ref={ringRef} />

      {/* App */}
      <Navbar />
      <main>
        <Hero loaded={loaded} />
        <Story />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
