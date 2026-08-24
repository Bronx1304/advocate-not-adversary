import { useState, useRef, useEffect, type ReactNode } from 'react'
import { EmberStormBackground } from './components/EmberStormBackground'

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
      { threshold: 0.1 },
    )
    observer.observe(el)
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
      await fetch('https://formspree.io/f/mjybznyv', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      setSubmitted(true)
    } catch {
      setError(true)
      setTimeout(() => setError(false), 1500)
    }
  }

  return (
    <>
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
              <a
                href="https://chatgpt.com/g/g-6a8ab3434b6c8191961f1ba3d54f12d6-chris-advocate-not-adversary"
                className="cta cta-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="cta-shimmer" aria-hidden="true" />
                <span className="cta-content">
                  <span className="cta-icon">💬</span>
                  Talk to Chris — Free AI Autism Dad
                </span>
              </a>
              <a
                href="https://www.tiktok.com/@advocatenotadversary"
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

          {/* Email capture */}
          <Reveal delay={660}>
            <div className="email-section">
              <p className="email-label">Free guide — 5 things I wish someone told me</p>
              {submitted ? (
                <p className="email-success">Check your inbox. ✓</p>
              ) : (
                <div className="email-form">
                  <input
                    ref={inputRef}
                    type="email"
                    placeholder="Your email"
                    autoComplete="email"
                    className={error ? 'input-error' : ''}
                    onKeyDown={(e) => { if (e.key === 'Enter') handleSubmit() }}
                  />
                  <button type="button" onClick={handleSubmit}>Send it</button>
                </div>
              )}
            </div>
          </Reveal>

          <Reveal delay={760}>
            <div className="divider" />
          </Reveal>

          {/* Pillar quotes */}
          <Reveal delay={840}>
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
