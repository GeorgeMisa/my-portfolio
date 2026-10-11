
import CyberBackground from './components/Cyberbackground'
import CursorGlow from './components/CursorGlow'
import ScrollProgress from './components/ScrollProgress'

import { motion, useReducedMotion } from 'motion/react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const reduceMotion = useReducedMotion()

  // Shared section scroll animations
  const reveal = {
    initial: reduceMotion
      ? { opacity: 1, y: 0 }
      : { opacity: 0, y: 35 },

    whileInView: { opacity: 1, y: 0 },

    viewport: {
      once: true,
      amount: 0.1,
    },

    transition: {
      duration: reduceMotion ? 0 : 0.65,
      ease: 'easeOut',
    },
  }

  return (
    <div className="relative isolate min-h-screen overflow-x-hidden bg-[#050816] text-white">

      {/* Animated Cyber Background */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <CyberBackground />
      </div>

      {/* Ambient Cyan Glow */}
      <div className="pointer-events-none fixed -left-40 top-20 z-0 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[120px]" />

      {/* Ambient Purple Glow */}
      <div className="pointer-events-none fixed -right-40 top-1/2 z-0 h-[450px] w-[450px] rounded-full bg-purple-600/10 blur-[120px]" />

      {/* Main Portfolio Content */}
      <div className="relative z-10">

        <Navbar />

        <Hero />

        <motion.div {...reveal}>
          <About />
        </motion.div>

        <motion.div {...reveal}>
          <Skills />
        </motion.div>

        <motion.div {...reveal}>
          <Projects />
        </motion.div>

        <motion.div {...reveal}>
          <Contact />
        </motion.div>

        <motion.div {...reveal}>
          <Footer />
        </motion.div>

      </div>

      {/* Cursor Glow - Above Website Content */}
      <CursorGlow />

      {/* Scroll Progress */}
      <ScrollProgress />

    </div>
  )
}

export default App
