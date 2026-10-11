
import SpotlightCard from './SpotlightCard'

const focusAreas = [
  {
    number: '01',
    icon: '🌐',
    title: 'Web Development',
    description:
      'Building modern, responsive web applications with intuitive interfaces and reliable functionality.',
    accent: 'cyan',
    label: 'WEB.SYSTEMS',
    technologies: ['React', 'JavaScript', 'Node.js'],
  },
  {
    number: '02',
    icon: '📱',
    title: 'Mobile Applications',
    description:
      'Creating practical, accessible, and user-friendly mobile experiences.',
    accent: 'purple',
    label: 'MOBILE.SYSTEMS',
    technologies: ['SwiftUI', 'Kotlin', 'Android'],
  },
  {
    number: '03',
    icon: '💻',
    title: 'Software Engineering',
    description:
      'Solving real-world problems through structured thinking, clean code, and continuous learning.',
    accent: 'cyan',
    label: 'DEV.PROCESS',
    technologies: ['Git', 'MySQL', 'Problem Solving'],
  },
]

const identityDetails = [
  { label: 'FULL NAME', value: 'George Gregory D. Misa' },
  { label: 'DEGREE', value: 'BS Information Technology' },
  { label: 'SPECIALIZATION', value: 'Web & Mobile Application Development' },
  { label: 'CURRENT FOCUS', value: 'Full Stack Development' },
]

function About() {
  return (
    <section
      id="about"
      className="relative mx-auto max-w-6xl scroll-mt-24 px-5 py-20 md:px-6 md:py-24"
    >
      {/* Section System Label */}
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3 border-b border-cyan-400/15 pb-4 font-mono text-[10px] uppercase tracking-[0.2em]">
        <span className="text-cyan-400">
          DEV.PROFILE / 002
        </span>

        <span className="flex items-center gap-2 text-slate-500">
          <span className="cyber-status-dot" />
          Identity Verified
        </span>
      </div>

      {/* Section Heading */}
      <div className="mb-12">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400 sm:text-sm">
          01 / Introduction
        </p>

        <h2 className="text-4xl font-black tracking-tight text-white md:text-5xl">
          About{' '}
          <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Me.
          </span>
        </h2>

        <div className="mt-5 h-1 w-24 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500" />

        <p className="mt-6 max-w-2xl leading-8 text-slate-400">
          Discover my developer identity, academic background,
          and the technologies I enjoy working with.
        </p>
      </div>

      {/* Main Dashboard */}
      <div className="grid items-stretch gap-6 lg:grid-cols-5">

        {/* Developer Identity Card */}
        <div className="lg:col-span-3">
          <SpotlightCard
            accent="cyan"
            className="h-full rounded-3xl"
          >
            <div className="cyber-hud relative flex h-full flex-col overflow-hidden rounded-3xl p-6 sm:p-8">

              {/* Ambient Lighting */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cyan-500/10 blur-[90px]"
              />

              {/* Card Header */}
              <div className="relative mb-7 flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-5">
                <span className="rounded-lg border border-cyan-400/30 bg-cyan-400/10 px-3 py-2 font-mono text-xs text-cyan-300">
                  {'<developer_profile />'}
                </span>

                <span className="font-mono text-[10px] uppercase tracking-widest text-slate-500">
                  PROFILE_001
                </span>
              </div>

              {/* Profile Title */}
              <h3 className="relative mb-5 max-w-lg text-2xl font-bold leading-snug text-white sm:text-3xl">
                Building ideas into{' '}
                <span className="bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-transparent">
                  digital experiences.
                </span>
              </h3>

              <p className="relative mb-4 leading-8 text-slate-400">
                I'm{' '}
                <span className="font-semibold text-slate-200">
                  George Gregory D. Misa
                </span>
                , a Bachelor of Science in Information
                Technology student at Manuel S. Enverga
                University Foundation, specializing in
                Web and Mobile Application Development.
              </p>

              <p className="relative mb-7 leading-8 text-slate-400">
                I'm passionate about software development,
                creating responsive websites, building mobile
                applications, and continuously improving my
                programming skills through hands-on projects.
              </p>

              {/* Digital Identity Table */}
              <div className="relative overflow-hidden rounded-2xl border border-cyan-400/15 bg-[#050816]/55">
                <div className="flex items-center justify-between border-b border-cyan-400/15 bg-cyan-400/[0.05] px-4 py-3">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-cyan-300">
                    Identity Database
                  </span>

                  <span className="font-mono text-[10px] text-emerald-300">
                    ● VERIFIED
                  </span>
                </div>

                <dl className="divide-y divide-white/5">
                  {identityDetails.map((detail) => (
                    <div
                      key={detail.label}
                      className="grid gap-1 px-4 py-3 transition-colors duration-300 hover:bg-cyan-400/[0.04] sm:grid-cols-[140px_1fr] sm:gap-4"
                    >
                      <dt className="font-mono text-[10px] tracking-wider text-slate-500">
                        {detail.label}
                      </dt>

                      <dd className="break-words text-sm font-medium text-slate-200">
                        {detail.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              {/* Developer Status */}
              <div className="relative mt-auto flex flex-wrap items-center gap-3 pt-7">
                <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-xs font-medium text-cyan-300">
                  <span className="cyber-status-dot" />
                  Full Stack Developer
                </span>

                <span className="rounded-full border border-purple-400/20 bg-purple-400/5 px-4 py-2 text-xs font-medium text-purple-300">
                  Web & Mobile Developer
                </span>
              </div>
            </div>
          </SpotlightCard>
        </div>

        {/* Academic Information Card */}
        <div className="lg:col-span-2">
          <SpotlightCard
            accent="purple"
            className="h-full rounded-3xl"
          >
            <div className="cyber-hud relative flex h-full flex-col overflow-hidden rounded-3xl p-6 sm:p-8">

              {/* Ambient Glow */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-purple-500/10 blur-[90px]"
              />

              {/* Header */}
              <div className="relative mb-7 flex items-center justify-between">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-purple-400/30 bg-purple-400/10 text-3xl transition-all duration-300 group-hover:scale-110">
                  🎓
                </div>

                <span className="font-mono text-[10px] uppercase tracking-widest text-purple-300">
                  EDU.RECORD
                </span>
              </div>

              <p className="relative mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-purple-400">
                Academic Background
              </p>

              <h3 className="relative mb-4 text-2xl font-bold leading-snug text-white">
                BS Information Technology
              </h3>

              <p className="relative text-base leading-8 text-slate-400">
                Manuel S. Enverga University Foundation
              </p>

              {/* Academic Record */}
              <div className="relative mt-8 space-y-5 border-t border-white/10 pt-6">

                <div>
                  <p className="mb-2 font-mono text-[10px] uppercase tracking-widest text-slate-500">
                    Specialization
                  </p>

                  <p className="font-medium leading-7 text-cyan-300">
                    Web & Mobile Application Development
                  </p>
                </div>

                <div>
                  <p className="mb-2 font-mono text-[10px] uppercase tracking-widest text-slate-500">
                    Development Approach
                  </p>

                  <p className="text-sm leading-7 text-slate-300">
                    Learn. Build. Test. Improve.
                  </p>
                </div>
              </div>

              {/* Terminal Footer */}
              <div className="relative mt-auto pt-7">
                <div className="rounded-xl border border-purple-400/20 bg-purple-400/5 px-4 py-4">
                  <p className="mb-2 font-mono text-[10px] uppercase tracking-widest text-purple-300/70">
                    System Log
                  </p>

                  <p className="font-mono text-xs leading-6 text-purple-200">
                    {'> Learning. Building. Improving.'}
                  </p>

                  <span className="mt-3 inline-flex items-center gap-2 font-mono text-[10px] text-emerald-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    ACTIVE
                  </span>
                </div>
              </div>
            </div>
          </SpotlightCard>
        </div>
      </div>

      {/* Focus Areas */}
      <div className="mt-14">
        <div className="mb-7 flex flex-wrap items-center justify-between gap-3">
          <h3 className="text-lg font-bold text-white sm:text-xl">
            Areas of Interest
          </h3>

          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
            SPECIALIZATIONS / 03
          </span>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {focusAreas.map((area) => {
            const isCyan = area.accent === 'cyan'

            return (
              <SpotlightCard
                key={area.number}
                accent={area.accent}
                className="h-full rounded-2xl"
              >
                <div className="cyber-hud relative flex h-full flex-col overflow-hidden rounded-2xl p-6">

                  {/* Card Header */}
                  <div className="mb-5 flex items-center justify-between">
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-xl border text-2xl transition-all duration-300 group-hover:scale-110 ${
                        isCyan
                          ? 'border-cyan-400/30 bg-cyan-400/10'
                          : 'border-purple-400/30 bg-purple-400/10'
                      }`}
                    >
                      {area.icon}
                    </div>

                    <span className="font-mono text-xs text-slate-600">
                      / {area.number}
                    </span>
                  </div>

                  {/* System Label */}
                  <p
                    className={`mb-3 font-mono text-[10px] uppercase tracking-[0.2em] ${
                      isCyan
                        ? 'text-cyan-400'
                        : 'text-purple-400'
                    }`}
                  >
                    {area.label}
                  </p>

                  <h4 className="mb-3 text-lg font-bold text-white">
                    {area.title}
                  </h4>

                  <p className="flex-1 text-sm leading-7 text-slate-400">
                    {area.description}
                  </p>

                  {/* Technology Tags */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {area.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1.5 font-mono text-[10px] text-slate-300 transition-colors duration-300 hover:border-cyan-400/30 hover:text-cyan-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Bottom Accent */}
                  <div className="mt-6 h-px overflow-hidden bg-white/10">
                    <div
                      className={`h-full w-1/3 origin-left transition-transform duration-500 group-hover:scale-x-[3] ${
                        isCyan
                          ? 'bg-gradient-to-r from-cyan-400 to-transparent'
                          : 'bg-gradient-to-r from-purple-400 to-transparent'
                      }`}
                    />
                  </div>
                </div>
              </SpotlightCard>
            )
          })}
        </div>
      </div>

      {/* Closing Note */}
      <div className="mt-12 flex items-center justify-center gap-3 text-center">
        <span className="h-px w-8 bg-gradient-to-r from-transparent to-cyan-400" />

        <p className="font-mono text-xs tracking-wide text-slate-500">
          Turning curiosity into code.
        </p>

        <span className="h-px w-8 bg-gradient-to-l from-transparent to-purple-400" />
      </div>
    </section>
  )
}

export default About
