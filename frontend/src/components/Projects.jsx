import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { fetchProjects } from '../utils/api'
import { PROJECTS } from '../data/portfolio'
import './Projects.css'

function ProjectCard({ project, index }) {
  const cardRef = useRef(null)

  const handleMouseEnter = () => {
    gsap.to(cardRef.current.querySelector('.project-card-inner'), {
      y: -6, duration: 0.4, ease: 'power3.out'
    })
  }
  const handleMouseLeave = () => {
    gsap.to(cardRef.current.querySelector('.project-card-inner'), {
      y: 0, duration: 0.5, ease: 'power3.out'
    })
  }

  return (
    <div className="project-card reveal-scale" ref={cardRef}
         onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="project-card-inner">
        <div className="project-card-top">
          <div className="project-card-meta">
            <span className="project-index">0{index + 1}</span>
            <span className="project-category">{project.category}</span>
          </div>
          <a href={project.github} target="_blank" rel="noreferrer" className="project-link-arrow">
            ↗
          </a>
        </div>

        <div className="project-card-body">
          <h3 className="project-title">{project.title}</h3>
          <p className="project-subtitle">{project.subtitle}</p>
          <p className="project-description">{project.description}</p>
        </div>

        <div className="project-card-bottom">
          <div className="project-highlights">
            {project.highlights?.slice(0, 2).map((h, i) => (
              <div key={i} className="highlight-item">
                <span className="highlight-dot" />
                {h}
              </div>
            ))}
          </div>
          <div className="project-tech-stack">
            {project.tech.slice(0, 4).map((t, i) => (
              <span key={i} className="tech-chip">{t}</span>
            ))}
            {project.tech.length > 4 && (
              <span className="tech-chip tech-more">+{project.tech.length - 4}</span>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const [projects, setProjects] = useState(PROJECTS)
  const ref = useScrollReveal([projects])

  useEffect(() => {
    fetchProjects().then(setProjects).catch(() => {})
  }, [])

  return (
    <section id="projects" className="projects-section section" ref={ref}>
      <div className="projects-orb orb orb-orange" />

      <div className="projects-header">
        <div className="reveal-left">
          <div className="section-label">Chapter 03</div>
          <h2 className="section-title">
            Projects that<br />
            <em>tell the story.</em>
          </h2>
        </div>
        <p className="projects-intro reveal-right">
          Every project below is a chapter in the story — a real engineering problem, 
          a chosen stack, a shipped solution. Not tutorials. Not clones. 
          <strong> Original work.</strong>
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} />
        ))}
      </div>

      <div className="projects-cta reveal">
        <a href="https://github.com/JeevanVijayChavan" target="_blank" rel="noreferrer"
           className="btn btn-outline">
          <span>View All on GitHub</span>
          <span>↗</span>
        </a>
      </div>
    </section>
  )
}
