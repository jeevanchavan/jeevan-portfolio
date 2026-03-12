import { useState, useRef } from 'react'
import { gsap } from 'gsap'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { submitContact } from '../utils/api'
import { PERSONAL } from '../data/portfolio'
import './Contact.css'

const LINKS = [
  { label: 'Email', value: PERSONAL.email, href: `mailto:${PERSONAL.email}` },
  { label: 'GitHub', value: 'github.com/JeevanVijayChavan', href: PERSONAL.github },
  { label: 'LinkedIn', value: 'linkedin.com/in/jeevanchavan', href: PERSONAL.linkedin },
  { label: 'Phone', value: PERSONAL.phone, href: `tel:${PERSONAL.phone}` },
]

export default function Contact() {
  const ref = useScrollReveal()
  const formRef = useRef(null)
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')
    try {
      await submitContact(form)
      setStatus('success')
      setForm({ name: '', email: '', subject: '', message: '' })
      gsap.from('.success-msg', { opacity: 0, y: 20, duration: 0.5, ease: 'power3.out' })
    } catch (err) {
      setStatus('error')
      setErrorMsg(
        err.response?.data?.error ||
        err.response?.data?.errors?.[0]?.msg ||
        'Something went wrong. Please try again.'
      )
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  return (
    <section id="contact" className="contact-section section" ref={ref}>
      <div className="contact-orb orb orb-orange" />

      <div className="contact-grid">
        {/* Left */}
        <div className="contact-left">
          <div className="section-label reveal">Chapter 05</div>
          <h2 className="section-title contact-headline reveal">
            Let's build<br />
            <em>something</em><br />
            remarkable.
          </h2>
          <p className="contact-sub reveal">
            Open to internships, collaborations, and full-time opportunities. 
            Have an interesting project? I'd love to be part of it.
          </p>

          <div className="contact-links reveal">
            {LINKS.map((link, i) => (
              <a key={i} href={link.href} target={link.href.startsWith('http') ? '_blank' : undefined}
                 rel="noreferrer" className="contact-link">
                <div className="cl-info">
                  <span className="cl-label">{link.label}</span>
                  <span className="cl-value">{link.value}</span>
                </div>
                <span className="cl-arrow">↗</span>
              </a>
            ))}
          </div>
        </div>

        {/* Right — Form */}
        <div className="contact-right reveal-right">
          {status === 'success' ? (
            <div className="success-msg">
              <div className="success-icon">✓</div>
              <h3>Message sent!</h3>
              <p>Thanks for reaching out. I'll get back to you soon.</p>
              <button className="btn btn-outline" onClick={() => setStatus('idle')} style={{marginTop:'1.5rem'}}>
                <span>Send Another</span>
              </button>
            </div>
          ) : (
            <form ref={formRef} onSubmit={handleSubmit} className="contact-form" noValidate>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input id="name" name="name" type="text" placeholder="Rahul Sharma"
                    value={form.name} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input id="email" name="email" type="email" placeholder="rahul@example.com"
                    value={form.email} onChange={handleChange} required />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input id="subject" name="subject" type="text" placeholder="Internship Opportunity / Collaboration"
                  value={form.subject} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows={6}
                  placeholder="Tell me about the project or opportunity..."
                  value={form.message} onChange={handleChange} required />
              </div>

              {status === 'error' && (
                <div className="form-error">{errorMsg}</div>
              )}

              <button type="submit" className="btn btn-primary form-submit"
                disabled={status === 'loading'}>
                <span>{status === 'loading' ? 'Sending...' : 'Send Message'}</span>
                {status !== 'loading' && <span>→</span>}
                {status === 'loading' && <span className="spinner" />}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
