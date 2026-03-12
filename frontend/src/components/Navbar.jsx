import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import './Navbar.css'

const links = [
  { href: '#story', label: 'Story' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const navRef = useRef(null)

  useEffect(() => {
    gsap.from(navRef.current, { y: -80, opacity: 0, duration: 1, delay: 2.2, ease: 'power3.out' })
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const close = () => setMenuOpen(false)

  return (
    <>
      <nav ref={navRef} className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <a href="#" className="nav-logo">
          Jeevan<span className="dot">.</span>
        </a>
        <ul className="nav-links">
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} className="nav-link link-underline">{l.label}</a>
            </li>
          ))}
        </ul>
        <a href="mailto:Jeevanchavan7273@gmail.com" className="nav-cta btn btn-primary">
          <span>Hire Me</span>
        </a>
        <button className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(o => !o)} aria-label="Menu">
          <span /><span /><span />
        </button>
      </nav>

      {/* Mobile menu */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-inner">
          {links.map((l, i) => (
            <a key={l.href} href={l.href} className="mobile-link" onClick={close}
               style={{ transitionDelay: menuOpen ? `${i * 0.07 + 0.1}s` : '0s' }}>
              <span className="mobile-link-num">0{i+1}</span>
              {l.label}
            </a>
          ))}
          <a href="mailto:Jeevanchavan7273@gmail.com" className="mobile-email" onClick={close}
             style={{ transitionDelay: menuOpen ? '0.4s' : '0s' }}>
            Jeevanchavan7273@gmail.com
          </a>
        </div>
      </div>
    </>
  )
}
