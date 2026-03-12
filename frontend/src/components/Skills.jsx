import { useState, useEffect } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { fetchSkills } from '../utils/api'
import { SKILLS } from '../data/portfolio'
import './Skills.css'

export default function Skills() {
  const [skills, setSkills] = useState(SKILLS)
  const ref = useScrollReveal([skills])

  useEffect(() => {
    fetchSkills().then(setSkills).catch(() => {}) // fallback to static
  }, [])

  const groups = Object.values(skills)

  return (
    <section id="skills" className="skills-section section" ref={ref}>
      <div className="skills-header">
        <div className="reveal-left">
          <div className="section-label">Chapter 02</div>
          <h2 className="section-title">
            The tools I<br />wield <em>every day.</em>
          </h2>
        </div>
        <p className="skills-intro reveal-right">
          Focused on the MERN ecosystem — from database schema design to pixel-perfect React interfaces. 
          Every tool below has shipped in a real project.
        </p>
      </div>

      <div className="skills-grid stagger-parent">
        {groups.map((group, i) => (
          <div key={i} className="skill-group stagger-child">
            <div className="skill-group-label">{group.label}</div>
            <div className="skill-tags">
              {group.items.map((item, j) => (
                <span key={j} className={`skill-pill ${j === 0 ? 'pill-primary' : ''}`}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* MERN visual */}
      <div className="mern-showcase reveal">
        {['M', 'E', 'R', 'N'].map((letter, i) => {
          const labels = ['MongoDB', 'Express.js', 'React.js', 'Node.js']
          const descs = ['NoSQL Database', 'Backend Framework', 'Frontend Library', 'Runtime Environment']
          return (
            <div key={i} className="mern-card">
              <div className="mern-letter">{letter}</div>
              <div className="mern-name">{labels[i]}</div>
              <div className="mern-desc">{descs[i]}</div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
