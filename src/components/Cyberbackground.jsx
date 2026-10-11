
import { useEffect, useRef } from 'react'

function CyberBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    let particles = []
    let animationId
    let width = 0
    let height = 0

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      const dpr = Math.min(window.devicePixelRatio || 1, 2)

      width = rect.width
      height = rect.height

      canvas.width = Math.round(width * dpr)
      canvas.height = Math.round(height * dpr)

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      const count = Math.min(
        85,
        Math.max(25, Math.floor((width * height) / 14000))
      )

      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        radius: Math.random() * 1.7 + 0.7,
        cyan: Math.random() > 0.55,
      }))
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height)

      // Glowing particles
      particles.forEach((p) => {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = p.cyan
          ? 'rgba(34,211,238,0.9)'
          : 'rgba(192,100,255,0.9)'
        ctx.shadowBlur = 13
        ctx.shadowColor = p.cyan ? '#22d3ee' : '#a855f7'
        ctx.fill()
      })

      ctx.shadowBlur = 0

      // Interconnected neon lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i]
          const b = particles[j]

          const dx = a.x - b.x
          const dy = a.y - b.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 145) {
            const opacity = (1 - distance / 145) * 0.4

            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.strokeStyle = `rgba(168,85,247,${opacity})`
            ctx.lineWidth = 0.7
            ctx.stroke()
          }
        }
      }

      if (!reduceMotion) {
        particles.forEach((p) => {
          p.x += p.vx
          p.y += p.vy

          if (p.x < 0 || p.x > width) p.vx *= -1
          if (p.y < 0 || p.y > height) p.vy *= -1
        })

        animationId = requestAnimationFrame(draw)
      }
    }

    const observer = new ResizeObserver(() => {
      resize()
      if (reduceMotion) draw()
    })

    observer.observe(canvas)
    resize()
    draw()

    return () => {
      cancelAnimationFrame(animationId)
      observer.disconnect()
    }
  }, [])

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      {/* Purple ambient glow */}
      <div className="absolute left-[20%] top-[10%] h-[450px] w-[450px] rounded-full bg-purple-600/20 blur-[110px]" />

      {/* Cyan ambient glow */}
      <div className="absolute bottom-[5%] right-[5%] h-[400px] w-[400px] rounded-full bg-cyan-500/15 blur-[110px]" />

      {/* Animated network */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full opacity-90"
      />
    </div>
  )
}

export default CyberBackground
