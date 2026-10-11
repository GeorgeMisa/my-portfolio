
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

  // Animation settings shared by the sections
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
      ease: "easeOut",
    },
  }

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#050816] text-white">

      {/* Futuristic Background */}
      <div className="pointer-events-none absolute left-[-180px] top-20 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="pointer-events-none absolute right-[-180px] top-[500px] h-[450px] w-[450px] rounded-full bg-purple-600/10 blur-[120px]" />

      <div className="relative z-10">

        {/* Navigation */}
        <Navbar />

        {/* Hero */}
        <Hero />

        {/* About Animation */}
        <motion.div {...reveal}>
          <About />
        </motion.div>

        {/* Skills Animation */}
        <motion.div {...reveal}>
          <Skills />
        </motion.div>

        {/* Projects Animation */}
        <motion.div {...reveal}>
          <Projects />
        </motion.div>

        {/* Contact Animation */}
        <motion.div {...reveal}>
          <Contact />
        </motion.div>

        {/* Footer */}
        <Footer />

      </div>
    </div>
  )
}

export default App
