import { useRef } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import './Story.css'

const timeline = [
  { year: '2023', label: 'The Journey Begins', desc: 'Enrolled in Computer Science & IT. Wrote my first real line of Node.js.' },
  { year: '2024', label: 'Building Real Things', desc: 'VibeSync, SnapSphere, ThinkBoard — MERN projects that live and breathe.' },
  { year: '2025', label: 'Azure Certified', desc: 'Microsoft Azure AZ-900 certified. 170+ DSA problems. Still building.' },
]

export default function Story() {
  const ref = useScrollReveal()

  return (
    <section id="story" className="story section" ref={ref}>
      <div className="story-orb orb orb-orange" />

      <div className="story-top reveal-left">
        <div className="section-label">Chapter 01</div>
        <h2 className="section-title">
          A developer who<br />
          builds things that<br />
          <em>actually</em> work<span className="accent">.</span>
        </h2>
      </div>

      <div className="story-body">
        <div className="story-text-col">
          <p className="story-para reveal">
            I didn't wait to graduate to start building. From day one, 
            I was writing backends, designing APIs, and shipping full-stack applications —
            because <strong>real learning happens when real code runs</strong>.
          </p>
          <p className="story-para reveal">
            My work lives at the intersection of backend precision and clean frontend experience.
            I architect systems with <strong>Node.js + Express</strong>, design data models in <strong>MongoDB</strong>,
            build reactive UIs in <strong>React</strong>, and lock everything down with <strong>JWT + Redis</strong>.
          </p>
          <p className="story-para reveal">
            I'm also a <strong>Microsoft Azure AZ-900</strong> certified cloud practitioner 
            and a consistent DSA problem solver with <strong>170+ problems</strong> solved —
            because great engineers don't just ship, they <em>think</em>.
          </p>

          <div className="story-quote reveal">
            <span className="quote-mark">"</span>
            <blockquote>
              I don't just write code. I engineer systems that solve problems nobody else thought to solve.
            </blockquote>
          </div>
        </div>

        {/* Timeline */}
        <div className="story-timeline stagger-parent">
          {timeline.map((item, i) => (
            <div key={i} className="timeline-item stagger-child reveal">
              <div className="tl-year">{item.year}</div>
              <div className="tl-content">
                <div className="tl-connector" />
                <div className="tl-label">{item.label}</div>
                <div className="tl-desc">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stat row */}
      <div className="story-stats stagger-parent">
        {[
          { num: '3', unit: '+', label: 'MERN Projects Shipped' },
          { num: '170', unit: '+', label: 'DSA Problems Solved' },
          { num: '1', unit: 'Cert', label: 'Azure AZ-900 Certified' },
          { num: '∞', unit: '', label: 'Drive to Keep Building' },
        ].map((s, i) => (
          <div key={i} className="stat-card stagger-child">
            <div className="stat-num">{s.num}<span className="stat-unit">{s.unit}</span></div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
