import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  size: number
  speedY: number
  speedX: number
  opacity: number
  pulse: number
  pulseSpeed: number
  drift: number
}

function createParticle(w: number, h: number, randomY = false): Particle {
  return {
    x: Math.random() * w,
    y: randomY ? Math.random() * h : h + Math.random() * 100,
    size: Math.random() * 2.5 + 0.5,
    speedY: -(Math.random() * 0.4 + 0.15),
    speedX: (Math.random() - 0.5) * 0.3,
    opacity: Math.random() * 0.5 + 0.1,
    pulse: Math.random() * Math.PI * 2,
    pulseSpeed: Math.random() * 0.02 + 0.005,
    drift: Math.random() * 0.005 + 0.002,
  }
}

export function EmberStormBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const count = 60
    const dpr = window.devicePixelRatio || 1
    let particles: Particle[] = []
    let animId = 0

    function resize() {
      canvas!.width = window.innerWidth * dpr
      canvas!.height = window.innerHeight * dpr
      canvas!.style.width = window.innerWidth + 'px'
      canvas!.style.height = window.innerHeight + 'px'
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    function init() {
      resize()
      particles = []
      for (let i = 0; i < count; i++) {
        particles.push(createParticle(window.innerWidth, window.innerHeight, true))
      }
    }

    function draw() {
      const w = window.innerWidth
      const h = window.innerHeight
      ctx!.clearRect(0, 0, w, h)

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        p.y += p.speedY
        p.x += p.speedX + Math.sin(p.pulse) * p.drift
        p.pulse += p.pulseSpeed

        const flicker = 0.6 + 0.4 * Math.sin(p.pulse)
        const alpha = p.opacity * flicker

        ctx!.beginPath()
        ctx!.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx!.fillStyle = `rgba(212, 148, 58, ${alpha})`
        ctx!.fill()

        if (p.size > 1.2) {
          ctx!.beginPath()
          ctx!.arc(p.x, p.y, p.size * 3, 0, Math.PI * 2)
          ctx!.fillStyle = `rgba(212, 148, 58, ${alpha * 0.08})`
          ctx!.fill()
        }

        if (p.y < -20 || p.x < -20 || p.x > w + 20) {
          particles[i] = createParticle(w, h)
        }
      }

      animId = requestAnimationFrame(draw)
    }

    init()
    draw()
    window.addEventListener('resize', resize)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="ember-bg"
      style={{
        position: 'fixed',
        inset: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  )
}
