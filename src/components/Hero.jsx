
import { motion, useReducedMotion } from 'motion/react'

const developerInfo = [
  { key: 'name', value: '"George Gregory D. Misa"', comma: true },
  { key: 'role', value: '"Full Stack Developer"', comma: true },
  { key: 'status', value: '"Always Learning"', comma: true },
  { key: 'passion', value: '"Building useful software"', comma: false },
]

const techBadges = ['React', 'Node.js', 'SwiftUI', 'Kotlin']

function Hero() {
  const reduceMotion = useReducedMotion()

  const entrance = (delay = 0) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 25 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: reduceMotion ? 0 : 0.65,
      delay: reduceMotion ? 0 : delay,
      ease: 'easeOut',
    },
  })

  return (
    <main
      id="home"
      className="relative isolate mx-auto flex min-h-[85vh] max-w-6xl scroll-mt-24 flex-col items-center justify-center overflow-hidden px-5 pb-16 pt-20 text-center sm:px-6 md:pb-24 md:pt-24"
    >
      {/* Ambient Lighting */}
      <div className="pointer-events-none absolute left-1/2 top-24 -z-10 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="pointer-events-none absolute -right-28 top-1/3 -z-10 h-80 w-80 rounded-full bg-purple-500/10 blur-[110px]" />

      {/* HUD Header */}
      <motion.div
        {...entrance(0.05)}
        className="mb-9 flex w-full max-w-4xl flex-wrap items-center justify-between gap-3 border-b border-cyan-400/15 pb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500"
      >
        <span className="text-cyan-400">
          SYS.PROFILE / 001
        </span>

        <span className="flex items-center gap-2 text-emerald-300">
          <span className="cyber-status-dot" />
          System Online
        </span>
      </motion.div>

      {/* Availability */}
      <motion.div
        {...entrance(0.1)}
        className="mb-7 inline-flex items-center gap-3 rounded-full border border-cyan-400/30 bg-cyan-400/[0.07] px-5 py-2.5 text-xs font-semibold text-cyan-300 backdrop-blur-md sm:text-sm"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full rounded-full bg-cyan-400/40 motion-safe:animate-ping" />
          <span className="relative h-2.5 w-2.5 rounded-full bg-cyan-400" />
        </span>

        Open for opportunities
      </motion.div>

      {/* Introduction */}
      <motion.p
        {...entrance(0.15)}
        className="mb-6 font-mono text-xs uppercase tracking-[0.35em] text-slate-400 sm:text-sm"
      >
        Hello World, I'm
      </motion.p>

      {/* Holographic Profile */}
      <motion.div
        {...entrance(0.2)}
        className="relative mx-auto mb-12 flex h-48 w-48 items-center justify-center sm:h-56 sm:w-56"
      >
        {/* Breathing Glow */}
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute -inset-10 rounded-full bg-gradient-to-r from-cyan-500/25 via-purple-500/30 to-blue-500/25 blur-3xl"
          animate={
            reduceMotion
              ? undefined
              : {
                  opacity: [0.35, 0.8, 0.35],
                  scale: [0.95, 1.15, 0.95],
                }
          }
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Rotating Outer Ring */}
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute -inset-7 rounded-full border border-dashed border-cyan-400/35"
          animate={reduceMotion ? undefined : { rotate: 360 }}
          transition={{
            duration: 32,
            repeat: Infinity,
            ease: 'linear',
          }}
        />

        {/* Orbit Ring */}
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute -inset-4 rounded-full border border-purple-400/30"
          animate={reduceMotion ? undefined : { rotate: -360 }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <span className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-purple-400 shadow-[0_0_15px_#c084fc]" />
        </motion.div>

        {/* Holographic Corner Markers */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -inset-10"
        >
          <span className="absolute left-0 top-0 h-5 w-5 border-l-2 border-t-2 border-cyan-400/60" />
          <span className="absolute right-0 top-0 h-5 w-5 border-r-2 border-t-2 border-purple-400/60" />
          <span className="absolute bottom-0 left-0 h-5 w-5 border-b-2 border-l-2 border-purple-400/60" />
          <span className="absolute bottom-0 right-0 h-5 w-5 border-b-2 border-r-2 border-cyan-400/60" />
        </div>

        {/* Image Border */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-300 via-blue-500 to-purple-500 p-[4px] shadow-[0_0_40px_rgba(34,211,238,0.3)]">
          <div className="h-full w-full rounded-full bg-[#050816]" />
        </div>

        {/* Profile Picture + Scanner */}
        <div className="relative z-10 h-[calc(100%-12px)] w-[calc(100%-12px)] overflow-hidden rounded-full">
          <img
            src="/profile.webp"
            alt="George Gregory D. Misa"
            fetchPriority="high"
            className="h-full w-full object-cover object-center"
          />

          {/* Animated Scanning Beam */}
          {!reduceMotion && (
            <motion.div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 h-8 bg-gradient-to-b from-transparent via-cyan-300/20 to-transparent"
              animate={{ top: ['-20%', '110%'] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatDelay: 2,
                ease: 'linear',
              }}
            />
          )}

          {/* Image Overlay */}
          <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-t from-[#050816]/35 via-transparent to-cyan-400/5" />
        </div>

        {/* Floating Developer Badge */}
        <motion.div
          className="absolute -bottom-6 left-1/2 z-20 -translate-x-1/2 whitespace-nowrap rounded-full border border-cyan-400/40 bg-[#0b1023]/95 px-4 py-2 text-xs font-semibold text-cyan-300 shadow-[0_0_25px_rgba(34,211,238,0.25)] backdrop-blur-xl"
          animate={
            reduceMotion ? undefined : { y: [0, -5, 0] }
          }
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <span className="mr-2 inline-block h-2 w-2 rounded-full bg-emerald-400" />
          Full Stack Developer
        </motion.div>
      </motion.div>

      {/* Identity Verification */}
      <motion.p
        {...entrance(0.25)}
        className="mb-5 font-mono text-[10px] uppercase tracking-[0.35em] text-cyan-400/80"
      >
        [ Identity Verified / Developer Profile ]
      </motion.p>

      {/* Developer Name */}
      <motion.h1
        {...entrance(0.3)}
        className="cyber-text-glow max-w-5xl bg-gradient-to-r from-white via-cyan-300 to-purple-400 bg-clip-text text-4xl font-black leading-[1.15] tracking-tight text-transparent sm:text-5xl md:text-6xl lg:text-7xl"
      >
        George Gregory D. Misa
      </motion.h1>

      {/* Developer Role */}
      <motion.h2
        {...entrance(0.4)}
        className="mt-7 max-w-4xl text-lg font-semibold tracking-tight text-slate-100 sm:text-xl md:text-2xl lg:text-3xl"
      >
        Full Stack Developer
        <span className="mx-2 text-cyan-400">|</span>
        Web & Mobile Application Developer
      </motion.h2>

      {/* Description */}
      <motion.p
        {...entrance(0.5)}
        className="mt-6 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-8 md:text-lg"
      >
        I'm a BSIT student passionate about building modern
        websites, mobile applications, and practical software
        solutions. I turn ideas into functional, user-friendly
        digital experiences.
      </motion.p>

      {/* Tech Badges */}
      <motion.div
        {...entrance(0.55)}
        className="mt-7 flex flex-wrap items-center justify-center gap-2"
      >
        {techBadges.map((tech) => (
          <span
            key={tech}
            className="rounded-lg border border-cyan-400/15 bg-[#0b1023]/70 px-3 py-2 font-mono text-[11px] text-slate-300 backdrop-blur-md transition-colors duration-300 hover:border-cyan-400/40 hover:text-cyan-300"
          >
            {tech}
          </span>
        ))}
      </motion.div>

      {/* CTA Buttons */}
      <motion.div
        {...entrance(0.6)}
        className="mt-9 flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row"
      >
        <a
          href="#projects"
          className="inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-xl border border-cyan-300/50 bg-cyan-400 px-7 py-3 font-semibold text-[#050816] shadow-[0_0_25px_rgba(34,211,238,0.25)] transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-300 hover:shadow-[0_0_40px_rgba(34,211,238,0.4)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-400 motion-reduce:hover:translate-y-0 sm:w-auto"
        >
          Explore Projects
          <span aria-hidden="true">↗</span>
        </a>

        <a
          href="#contact"
          className="inline-flex min-h-12 w-full items-center justify-center rounded-xl border border-purple-400/40 bg-purple-400/5 px-7 py-3 font-semibold text-purple-200 transition-all duration-300 hover:-translate-y-1 hover:border-purple-300 hover:bg-purple-400/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple-400 motion-reduce:hover:translate-y-0 sm:w-auto"
        >
          Contact Me
        </a>
      </motion.div>

      {/* Developer Terminal */}
      <motion.div
        {...entrance(0.7)}
        className="group relative mt-14 w-full max-w-xl"
      >
        <div className="pointer-events-none absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-500/15 via-blue-500/10 to-purple-500/15 opacity-60 blur-xl transition-opacity duration-500 group-hover:opacity-100" />

        <div className="cyber-hud relative overflow-hidden rounded-2xl border border-cyan-400/25 bg-[#0b1023]/95 text-left shadow-[0_20px_70px_rgba(0,0,0,0.35)] backdrop-blur-xl transition-colors duration-300 hover:border-cyan-400/50">

          {/* Terminal Header */}
          <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.03] px-4 py-3 sm:px-5">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-400" />

              <span className="ml-3 text-[11px] text-slate-400 sm:text-xs">
                developer-profile.js
              </span>
            </div>

            <span className="rounded-md border border-emerald-400/20 bg-emerald-400/10 px-2 py-1 text-[10px] font-medium text-emerald-300">
              JavaScript
            </span>
          </div>

          {/* Terminal Content */}
          <div className="overflow-x-auto px-4 py-5 font-mono text-[11px] leading-7 sm:px-6 sm:text-sm">
            <div className="min-w-max">
              <div className="flex">
                <span className="mr-5 w-5 shrink-0 text-right text-slate-600">
                  01
                </span>

                <span>
                  <span className="text-purple-400">const</span>{' '}
                  <span className="text-cyan-300">developer</span>{' '}
                  <span className="text-white">= {'{'}</span>
                </span>
              </div>

              {developerInfo.map((item, index) => (
                <div key={item.key} className="flex">
                  <span className="mr-5 w-5 shrink-0 text-right text-slate-600">
                    {String(index + 2).padStart(2, '0')}
                  </span>

                  <div className="pl-4">
                    <span className="text-slate-300">
                      {item.key}:
                    </span>{' '}

                    <span className="text-emerald-300">
                      {item.value}
                    </span>

                    {item.comma && (
                      <span className="text-slate-400">,</span>
                    )}
                  </div>
                </div>
              ))}

              <div className="flex">
                <span className="mr-5 w-5 shrink-0 text-right text-slate-600">
                  06
                </span>

                <span className="text-white">{'}'}</span>
              </div>

              <div className="mt-4 flex">
                <span className="mr-5 w-5 shrink-0 text-right text-slate-600">
                  07
                </span>

                <span className="text-cyan-300">
                  &gt; Ready to build something amazing
                  <span className="ml-1 inline-block h-4 w-1.5 translate-y-0.5 bg-cyan-400 align-middle motion-safe:animate-pulse" />
                </span>
              </div>
            </div>
          </div>

          {/* Terminal Status */}
          <div className="flex items-center justify-between border-t border-white/10 bg-white/[0.02] px-4 py-2.5 font-mono text-[10px] text-slate-500 sm:px-5">
            <span>portfolio / developer</span>

            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Ready to create
            </span>
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.a
        {...entrance(0.8)}
        href="#about"
        className="mt-14 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.25em] text-slate-500 transition-colors hover:text-cyan-300 sm:text-xs"
      >
        <span className="h-px w-8 bg-gradient-to-r from-transparent to-cyan-400 sm:w-10" />
        Scroll to explore
        <span className="h-px w-8 bg-gradient-to-l from-transparent to-purple-400 sm:w-10" />
      </motion.a>
    </main>
  )
}

export default Hero
