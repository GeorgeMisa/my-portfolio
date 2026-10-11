
import { motion, useScroll, useReducedMotion } from 'motion/react'

function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 right-0 top-0 z-[100] h-[3px] origin-left bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 shadow-[0_0_14px_rgba(34,211,238,0.75)]"
      style={{
        scaleX: scrollYProgress,
        ...(reduceMotion ? { boxShadow: 'none' } : {}),
      }}
    />
  )
}

export default ScrollProgress
