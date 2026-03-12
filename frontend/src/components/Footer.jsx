import './Footer.css'
import { PERSONAL } from '../data/portfolio'

const marqueeItems = [
  'MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT', 'Redis',
  'Azure AZ-900', 'MediaPipe', 'REST APIs', 'MERN Stack',
  'MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT', 'Redis',
  'Azure AZ-900', 'MediaPipe', 'REST APIs', 'MERN Stack',
]

export default function Footer() {
  return (
    <footer className="footer">
      {/* Marquee */}
      <div className="marquee-wrapper">
        <div className="marquee-track">
          {marqueeItems.map((item, i) => (
            <span key={i} className="marquee-item">{item}</span>
          ))}
        </div>
      </div>

      <div className="footer-inner">
        <div className="footer-left">
          <div className="footer-logo">
            Jeevan<span className="footer-dot">.</span>
          </div>
          <p className="footer-tagline">Full Stack MERN Developer</p>
        </div>

        <div className="footer-center">
          <div className="footer-nav">
            <a href="#story">Story</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#achievements">Achievements</a>
            <a href="#contact">Contact</a>
          </div>
        </div>

        <div className="footer-right">
          <a href={`mailto:${PERSONAL.email}`} className="footer-email link-underline">
            {PERSONAL.email}
          </a>
          <div className="footer-socials">
            <a href={PERSONAL.github} target="_blank" rel="noreferrer">GitHub</a>
            <a href={PERSONAL.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2025 Jeevan Vijay Chavan. All rights reserved.</span>
        <span className="footer-stack">Built with React · Express · MongoDB · Node.js</span>
      </div>
    </footer>
  )
}
