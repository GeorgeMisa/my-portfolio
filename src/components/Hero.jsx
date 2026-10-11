
import { motion, useReducedMotion } from 'motion/react'

function Hero() {
  const reduceMotion = useReducedMotion()

  const entrance = (delay = 0) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: reduceMotion ? 0 : 0.65,
      delay: reduceMotion ? 0 : delay,
      ease: "easeOut",
    },
  })

  return (
    <main
      id="home"
      className="relative isolate mx-auto flex min-h-[75vh] max-w-6xl flex-col items-center justify-center overflow-hidden px-5 py-16 text-center md:min-h-[85vh] md:py-24"
    >
      {/* Ambient Background Glow */}
      <div className="pointer-events-none absolute -left-32 top-20 -z-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-[100px]" />

      <div className="pointer-events-none absolute -right-32 bottom-10 -z-10 h-80 w-80 rounded-full bg-purple-500/10 blur-[110px]" />

      {/* Availability Badge */}
      <motion.div
        {...entrance(0.05)}
        className="mb-8 inline-flex items-center gap-3 rounded-full border border-cyan-400/30 bg-cyan-400/[0.06] px-5 py-2.5 text-xs font-semibold tracking-wide text-cyan-300 shadow-[0_0_25px_rgba(34,211,238,0.07)] sm:text-sm"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full rounded-full bg-cyan-400/40 motion-safe:animate-ping" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan-400" />
        </span>
        Aspiring Software Engineer
      </motion.div>

      {/* Introduction */}
      <motion.p
        {...entrance(0.15)}
        className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-slate-400 sm:text-sm"
      >
        Hello World, I'm
      </motion.p>

      {/* Main Name */}
      <motion.h1
        {...entrance(0.25)}
        className="max-w-5xl bg-gradient-to-r from-white via-cyan-300 to-purple-400 bg-clip-text text-4xl font-black leading-[1.15] tracking-tight text-transparent sm:text-5xl md:text-7xl"
      >
        George Gregory D. Misa
      </motion.h1>

      {/* Developer Role */}
      <motion.h2
        {...entrance(0.35)}
        className="mt-7 text-lg font-semibold tracking-tight text-slate-100 sm:text-xl md:text-3xl"
      >
        Web & Mobile Application Developer
      </motion.h2>

      {/* Description */}
      <motion.p
        {...entrance(0.45)}
        className="mt-6 max-w-2xl text-sm leading-8 text-slate-400 sm:text-base md:text-lg"
      >
        I'm a BSIT student passionate about building modern
        websites, mobile applications, and practical software
        solutions. I transform ideas into functional,
        user-friendly digital experiences.
      </motion.p>

      {/* Action Buttons */}
      <motion.div
        {...entrance(0.55)}
        className="mt-10 flex flex-wrap items-center justify-center gap-4"
      >
        <a
          href="#projects"
          className="inline-flex min-h-12 items-center justify-center rounded-xl border border-cyan-300/50 bg-cyan-400 px-7 py-3 font-semibold text-[#050816] shadow-[0_0_25px_rgba(34,211,238,0.25)] transition duration-300 hover:-translate-y-1 hover:bg-cyan-300 hover:shadow-[0_0_40px_rgba(34,211,238,0.45)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-400"
        >
          Explore Projects ↗
        </a>

        <a
          href="#contact"
          className="inline-flex min-h-12 items-center justify-center rounded-xl border border-purple-400/40 bg-purple-400/5 px-7 py-3 font-semibold text-purple-200 transition duration-300 hover:-translate-y-1 hover:border-purple-300 hover:bg-purple-400/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple-400"
        >
          Contact Me
        </a>
      </motion.div>

      {/* Developer Terminal Card */}
      <motion.div
        {...entrance(0.65)}
        className="mt-14 w-full max-w-xl overflow-hidden rounded-2xl border border-cyan-400/20 bg-[#0b1023]/85 text-left shadow-[0_15px_60px_rgba(0,0,0,0.25)] backdrop-blur-xl"
      >
        <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.03] px-5 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-400" />

          <span className="ml-3 text-xs text-slate-400">
            developer-profile.js
          </span>
        </div>

        <div className="overflow-x-auto p-5 font-mono text-xs leading-7 sm:text-sm">
          <p>
            <span className="text-purple-400">const</span>{" "}
            <span className="text-cyan-300">developer</span>{" "}
            <span className="text-white">= {"{"}</span>
          </p>

          <p className="pl-5">
            <span className="text-slate-300">name:</span>{" "}
            <span className="text-green-300">
              "George Gregory D. Misa"
            </span>,
          </p>

          <p className="pl-5">
            <span className="text-slate-300">focus:</span>{" "}
            <span className="text-green-300">
              "Web & Mobile Development"
            </span>,
          </p>

          <p className="pl-5">
            <span className="text-slate-300">passion:</span>{" "}
            <span className="text-green-300">
              "Building useful software"
            </span>
          </p>

          <p className="text-white">{"}"}</p>

          <p className="mt-3 text-cyan-300">
            &gt; Ready to build something amazing_
          </p>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        {...entrance(0.8)}
        className="mt-14 flex items-center gap-3 text-[10px] uppercase tracking-[0.25em] text-slate-500 sm:text-xs"
      >
        <span className="h-px w-8 bg-gradient-to-r from-transparent to-cyan-400 sm:w-10" />
        Scroll to explore
        <span className="h-px w-8 bg-gradient-to-l from-transparent to-purple-400 sm:w-10" />
      </motion.div>
    </main>
  )
}

export default Hero
