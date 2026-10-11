
import { useEffect, useState } from 'react'

function CursorGlow() {
  const [position, setPosition] = useState({
    x: -500,
    y: -500,
  })

  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine)')
    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    )

    if (!finePointer.matches || reducedMotion.matches) return

    const handleMove = (event) => {
      setPosition({
        x: event.clientX,
        y: event.clientY,
      })
      setVisible(true)
    }

    const handleLeave = () => {
      setVisible(false)
    }

    window.addEventListener('pointermove', handleMove)
    document.addEventListener('pointerleave', handleLeave)

    return () => {
      window.removeEventListener('pointermove', handleMove)
      document.removeEventListener('pointerleave', handleLeave)
    }
  }, [])

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-30 overflow-hidden"
    >
      {/* Cyan Cursor Glow */}
      <div
        className="absolute h-[360px] w-[360px] rounded-full bg-cyan-400/10 blur-[85px] transition-opacity duration-300"
        style={{
          left: position.x,
          top: position.y,
          transform: 'translate(-50%, -50%)',
          opacity: visible ? 1 : 0,
        }}
      />

      {/* Purple Cursor Glow */}
      <div
        className="absolute h-[220px] w-[220px] rounded-full bg-purple-500/10 blur-[70px] transition-opacity duration-300"
        style={{
          left: position.x + 65,
          top: position.y + 40,
          transform: 'translate(-50%, -50%)',
          opacity: visible ? 1 : 0,
        }}
      />
    </div>
  )
}

export default CursorGlow
