
import { useRef, useState } from 'react'
import { motion, useReducedMotion } from 'motion/react'

function SpotlightCard({
  children,
  accent = 'cyan',
  className = '',
}) {
  const cardRef = useRef(null)
  const reduceMotion = useReducedMotion()
  const [hovered, setHovered] = useState(false)
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
    rotateX: 0,
    rotateY: 0,
  })

  const isCyan = accent === 'cyan'

  const handleMouseMove = (event) => {
    if (reduceMotion || event.pointerType === 'touch') return

    const rect = cardRef.current?.getBoundingClientRect()
    if (!rect) return

    const x = event.clientX - rect.left
    const y = event.clientY - rect.top

    setPosition({
      x,
      y,
      rotateX: ((y / rect.height) - 0.5) * -5,
      rotateY: ((x / rect.width) - 0.5) * 5,
    })
  }

  const handleMouseLeave = () => {
    setHovered(false)
    setPosition({
      x: 0,
      y: 0,
      rotateX: 0,
      rotateY: 0,
    })
  }

  const glowColor = isCyan
    ? 'rgba(34,211,238,0.16)'
    : 'rgba(168,85,247,0.16)'

  return (
    <motion.div
      ref={cardRef}
      onPointerEnter={(event) => {
        if (event.pointerType !== 'touch') setHovered(true)
      }}
      onPointerMove={handleMouseMove}
      onPointerLeave={handleMouseLeave}
      animate={
        reduceMotion
          ? undefined
          : {
              rotateX: position.rotateX,
              rotateY: position.rotateY,
            }
      }
      transition={{
        type: 'spring',
        stiffness: 200,
        damping: 25,
      }}
      style={{
        transformPerspective: 1000,
      }}
      className={`group relative overflow-hidden rounded-2xl border bg-[#0b1023]/85 backdrop-blur-xl ${
        isCyan
          ? 'border-cyan-400/20 hover:border-cyan-400/60'
          : 'border-purple-400/20 hover:border-purple-400/60'
      } ${className}`}
    >
      {/* Interactive spotlight */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
        style={{
          opacity: hovered && !reduceMotion ? 1 : 0,
          background: `radial-gradient(350px circle at ${position.x}px ${position.y}px, ${glowColor}, transparent 70%)`,
        }}
      />

      {/* Card content */}
      <div className="relative z-10 h-full">
        {children}
      </div>
    </motion.div>
  )
}

export default SpotlightCard
