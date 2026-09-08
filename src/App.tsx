import { useState, useRef, useEffect, type ReactNode } from 'react'
import { EmberStormBackground } from './components/EmberStormBackground'
import { ChatModal } from './components/ChatModal'

function Reveal({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('rv-in')
          observer.disconnect()
        }
      },
      { threshold: 0 },
    )
    requestAnimationFrame(() => observer.observe(el))
    return () => observer.disconnect()
  }, [])
  return (
    <div ref={ref} className={`rv ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}

function App() {
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(false)
  const [chatOpen, setChatOpen] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  async function handleSubmit() {
    const email = inputRef.current?.value.trim() ?? ''
    if (!email || !email.includes('@')) {
      setError(true)
      inputRef.current?.classList.add('shake')
      setTimeout(() => {
        setError(false)
        inputRef.current?.classList.remove('shake')
      }, 600)
      return
    }
    try {
      const form = new URLSearchParams()
      form.set('email', email)
      form.set('sent_from_orchid', 'true')
      form.set('double_opt', 'false')
      form.set('auto_login_enabled', 'true')
      await fetch('https://thequietfight.beehiiv.com/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: form.toString(),
        mode: 'no-cors',
      })
      setSubmitted(true)
    } catch {
      setError(true)
      setTimeout(() => setError(false), 1500)
    }
  }

  return (
    <>
      {chatOpen && <ChatModal onClose={() => setChatOpen(false)} />}
      <EmberStormBackground />
      <div className="grain" aria-hidden="true" />
      <div className="vignette" aria-hidden="true" />

      <div className="page">
        <div className="card">
          {/* Shimmering coin */}
          <Reveal className="coin-anchor">
            <div className="coin">
              <div className="coin-face">
                <span className="coin-letter">C</span>
                <div className="coin-specular" />
              </div>
              <div className="coin-rim" />
            </div>
          </Reveal>

          {/* Identity */}
          <Reveal delay={200}>
            <h1 className="title">Advocate Not Adversary</h1>
          </Reveal>

          <Reveal delay={320}>
            <p className="tagline golden-shine">Autism dad. Still learning.</p>
          </Reveal>

          {/* Bio */}
          <Reveal delay={440}>
            <p className="bio">
              When my son Jared was diagnosed, I didn't understand autism. I thought
              I'd failed him. I hadn't — I just had a lot to unlearn. This is what
              I've learned so far.
            </p>
          </Reveal>

          {/* CTAs */}
          <Reveal delay={560} className="links-full">
            <div className="links">
              <button
                type="button"
                className="cta cta-primary"
                onClick={() => setChatOpen(true)}
              >
                <span className="cta-shimmer" aria-hidden="true" />
                <span className="cta-content">
                  <span className="cta-icon">💬</span>
                  Talk to Chris — Free AI Autism Dad
                </span>
              </button>
              <a
                href="https://www.tiktok.com/@advocatenotadvers"
                className="cta cta-ghost"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="cta-content">
                  <span className="cta-icon">▶</span>
                  Follow on TikTok
                </span>
              </a>
            </div>
          </Reveal>

          {/* Newsletter — 3 free downloads */}
          <Reveal delay={620}>
            <div className="email-section">
              {submitted ? (
                <div className="downloads">
                  <p className="downloads-heading">You're in. Welcome to The Quiet Fight.</p>
                  <a
                    href="/advocate-not-adversary/downloads/5-Things-I-Wish-Someone-Told-Me.html"
                    className="download-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    📖 5 Things I Wish Someone Told Me
                  </a>
                  <a
                    href="/advocate-not-adversary/downloads/Does-This-Sound-Like-Your-Kid.pdf"
                    className="download-link"
                    download
                  >
                    📋 AuDHD Signs Checklist
                  </a>
                  <a
                    href="/advocate-not-adversary/downloads/Paycheck-Reality-Check.pdf"
                    className="download-link"
                    download
                  >
                    💰 Autism-Family Paycheck Reality Check
                  </a>
                  <a
                    href="/advocate-not-adversary/downloads/iep-fight-kit-free-excerpt.html"
                    className="download-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    📄 IEP Fight Kit — Free Excerpt
                  </a>
                  <p className="downloads-note">Print them. Use them. They're yours. Real talk from a dad still figuring it out — landing in your inbox soon.</p>
                </div>
              ) : (
                <>
                  <p className="email-label">Join The Quiet Fight — one story, one takeaway, from a dad still learning. Plus four free resources when you sign up.</p>
                  <div className="email-form">
                    <input
                      ref={inputRef}
                      type="email"
                      placeholder="Your email"
                      autoComplete="email"
                      className={error ? 'input-error' : ''}
                      onKeyDown={(e) => { if (e.key === 'Enter') handleSubmit() }}
                    />
                    <button type="button" onClick={handleSubmit}>Join the fight</button>
                  </div>
                </>
              )}
            </div>
          </Reveal>

          {/* Etsy product links */}
          <Reveal delay={700}>
            <p className="product-intro">
              Financial stability is part of advocacy. Autism parenting can bring expenses and income pressures families never planned for — from appointments and transportation to missed work and support services. These tools help you understand where your money is going and regain some control without shame.
            </p>
          </Reveal>

          <Reveal delay={760} className="links-full">
            <div className="links">
              <a
                href="https://www.etsy.com/shop/SteadyRootsShop?section_id=60013881"
                className="cta cta-ghost"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="cta-content">
                  <span className="cta-icon">🧩</span>
                  AuDHD Planner Bundle — Steady Days
                </span>
              </a>
              <a
                href="https://www.etsy.com/shop/SteadyRootsShop?section_id=60013941"
                className="cta cta-ghost"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="cta-content">
                  <span className="cta-icon">💰</span>
                  Steady Ledger — Financial Tools for Overwhelmed Families
                </span>
              </a>
              <a
                href="https://www.etsy.com/listing/4563397685/iep-meeting-prep-toolkit-special"
                className="cta cta-ghost"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="cta-content">
                  <span className="cta-icon">📋</span>
                  The IEP Fight Kit — $17
                </span>
              </a>
            </div>
          </Reveal>

          <Reveal delay={820}>
            <div className="divider" />
          </Reveal>

          {/* Pillar quotes */}
          <Reveal delay={900}>
            <div className="pillars">
              <p className="golden-shine">"I am with you."</p>
              <p className="golden-shine">"Be their advocate, not their adversary."</p>
            </div>
          </Reveal>
        </div>
      </div>
    </>
  )
}

export default App
