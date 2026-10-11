
import SpotlightCard from './SpotlightCard'

// All technologies are managed here.
// Add new skills to the relevant category.
const skillCategories = [
  {
    number: '01',
    code: 'FRONTEND.SYSTEM',
    title: 'Frontend Development',
    subtitle: 'Building modern web interfaces',
    icon: 'web',
    color: 'cyan',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS'],
  },
  {
    number: '02',
    code: 'BACKEND.SYSTEM',
    title: 'Backend & Database',
    subtitle: 'Working with servers and data',
    icon: 'server',
    color: 'purple',
    skills: ['Node.js', 'MySQL'],
  },
  {
    number: '03',
    code: 'MOBILE.SYSTEM',
    title: 'Mobile Development',
    subtitle: 'Creating mobile experiences',
    icon: 'mobile',
    color: 'cyan',
    skills: ['Kotlin', 'SwiftUI'],
  },
  {
    number: '04',
    code: 'DEV.TOOLKIT',
    title: 'Developer Tools',
    subtitle: 'Tools for building and collaboration',
    icon: 'tools',
    color: 'purple',
    skills: ['Git', 'GitHub', 'VS Code', 'Android Studio'],
  },
]

// Reusable category icons
function CategoryIcon({ type }) {
  const common = {
    width: 28,
    height: 28,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
  }

  if (type === 'web') {
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18" />
        <path d="M12 3a15 15 0 0 1 0 18" />
        <path d="M12 3a15 15 0 0 0 0 18" />
      </svg>
    )
  }

  if (type === 'server') {
    return (
      <svg {...common}>
        <rect x="3" y="3" width="18" height="8" rx="2" />
        <rect x="3" y="13" width="18" height="8" rx="2" />
        <path d="M7 7h.01M7 17h.01M11 7h7M11 17h7" />
      </svg>
    )
  }

  if (type === 'mobile') {
    return (
      <svg {...common}>
        <rect x="6" y="2" width="12" height="20" rx="2" />
        <path d="M10 18h4" />
      </svg>
    )
  }

  return (
    <svg {...common}>
      <path d="M4 7h16M4 12h16M4 17h16" />
      <circle cx="7" cy="7" r="2" fill="currentColor" stroke="none" />
      <circle cx="16" cy="12" r="2" fill="currentColor" stroke="none" />
      <circle cx="10" cy="17" r="2" fill="currentColor" stroke="none" />
    </svg>
  )
}

function Skills() {
  const totalTechnologies = skillCategories.reduce(
    (total, category) => total + category.skills.length,
    0
  )

  return (
    <section
      id="skills"
      className="relative mx-auto max-w-6xl scroll-mt-24 px-5 py-20 md:px-6 md:py-24"
    >
      {/* System Header */}
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3 border-b border-cyan-400/15 pb-4 font-mono text-[10px] uppercase tracking-[0.2em]">
        <span className="text-cyan-400">
          TECH.MATRIX / 003
        </span>

        <span className="flex items-center gap-2 text-emerald-300">
          <span className="cyber-status-dot" />
          System Active
        </span>
      </div>

      {/* Section Heading */}
      <div className="mb-12">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400 sm:text-sm">
          02 / Technologies
        </p>

        <h2 className="text-4xl font-black tracking-tight text-white md:text-5xl">
          Technical{' '}
          <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Skills.
          </span>
        </h2>

        <div className="mt-5 h-1 w-24 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500" />

        <p className="mt-6 max-w-2xl leading-8 text-slate-400">
          Technologies and development tools I use while
          learning, building, and improving my web and
          mobile application projects.
        </p>
      </div>

      {/* Matrix Overview */}
      <div className="mb-8 grid gap-4 sm:grid-cols-2">
        <div className="cyber-glass cyber-hud rounded-2xl p-5">
          <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
            Technology Categories
          </p>

          <p className="text-3xl font-black text-cyan-300">
            {String(skillCategories.length).padStart(2, '0')}
          </p>
        </div>

        <div className="cyber-glass cyber-hud rounded-2xl p-5">
          <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
            Listed Technologies & Tools
          </p>

          <p className="text-3xl font-black text-purple-300">
            {String(totalTechnologies).padStart(2, '0')}
          </p>
        </div>
      </div>

      {/* Interactive Technology Matrix */}
      <div className="grid gap-6 md:grid-cols-2">
        {skillCategories.map((category) => {
          const isCyan = category.color === 'cyan'

          return (
            <SpotlightCard
              key={category.number}
              accent={category.color}
              className="h-full rounded-3xl"
            >
              <div className="cyber-hud relative flex h-full flex-col overflow-hidden rounded-3xl p-6 sm:p-8">

                {/* Ambient Glow */}
                <div
                  aria-hidden="true"
                  className={`pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full blur-[90px] ${
                    isCyan
                      ? 'bg-cyan-500/10'
                      : 'bg-purple-500/10'
                  }`}
                />

                {/* Card System Header */}
                <div className="relative mb-7 flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-5">
                  <span
                    className={`font-mono text-[10px] uppercase tracking-[0.2em] ${
                      isCyan
                        ? 'text-cyan-300'
                        : 'text-purple-300'
                    }`}
                  >
                    {category.code}
                  </span>

                  <span className="font-mono text-[10px] text-slate-500">
                    MODULE / {category.number}
                  </span>
                </div>

                {/* Icon */}
                <div className="relative mb-6 flex items-center justify-between">
                  <div
                    className={`flex h-16 w-16 items-center justify-center rounded-2xl border transition-all duration-300 motion-safe:group-hover:scale-105 ${
                      isCyan
                        ? 'border-cyan-400/30 bg-cyan-400/10 text-cyan-300 group-hover:border-cyan-400/60 group-hover:shadow-[0_0_25px_rgba(34,211,238,0.2)]'
                        : 'border-purple-400/30 bg-purple-400/10 text-purple-300 group-hover:border-purple-400/60 group-hover:shadow-[0_0_25px_rgba(168,85,247,0.2)]'
                    }`}
                  >
                    <CategoryIcon type={category.icon} />
                  </div>

                  <span
                    className={`rounded-full border px-3 py-1.5 font-mono text-[10px] ${
                      isCyan
                        ? 'border-cyan-400/20 bg-cyan-400/5 text-cyan-300'
                        : 'border-purple-400/20 bg-purple-400/5 text-purple-300'
                    }`}
                  >
                    {category.skills.length} ITEMS
                  </span>
                </div>

                {/* Category Details */}
                <h3 className="relative mb-2 text-xl font-bold text-white sm:text-2xl">
                  {category.title}
                </h3>

                <p className="relative mb-6 text-sm text-slate-400">
                  {category.subtitle}
                </p>

                {/* Animated Divider */}
                <div className="relative mb-6 h-px overflow-hidden bg-white/10">
                  <div
                    className={`h-full w-1/3 origin-left transition-transform duration-500 motion-safe:group-hover:scale-x-[3] ${
                      isCyan
                        ? 'bg-gradient-to-r from-cyan-400 to-transparent'
                        : 'bg-gradient-to-r from-purple-400 to-transparent'
                    }`}
                  />
                </div>

                {/* Technology Chips */}
                <div className="relative flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`inline-flex items-center gap-2 rounded-xl border bg-[#0b1023]/80 px-3.5 py-2.5 text-sm font-medium text-slate-300 transition-all duration-300 motion-safe:hover:-translate-y-1 ${
                        isCyan
                          ? 'border-cyan-400/15 hover:border-cyan-400/60 hover:bg-cyan-400/10 hover:text-cyan-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.12)]'
                          : 'border-purple-400/15 hover:border-purple-400/60 hover:bg-purple-400/10 hover:text-purple-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.12)]'
                      }`}
                    >
                      <span
                        aria-hidden="true"
                        className={`h-1.5 w-1.5 shrink-0 rounded-full ${
                          isCyan
                            ? 'bg-cyan-400'
                            : 'bg-purple-400'
                        }`}
                      />

                      {skill}
                    </span>
                  ))}
                </div>

                {/* Card Footer */}
                <div className="relative mt-auto pt-8">
                  <div className="flex items-center justify-between border-t border-white/10 pt-4">
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
                      Technology Stack
                    </span>

                    <span
                      className={`inline-flex items-center gap-2 font-mono text-[10px] ${
                        isCyan
                          ? 'text-cyan-300'
                          : 'text-purple-300'
                      }`}
                    >
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${
                          isCyan
                            ? 'bg-cyan-400'
                            : 'bg-purple-400'
                        }`}
                      />
                      LOADED
                    </span>
                  </div>
                </div>
              </div>
            </SpotlightCard>
          )
        })}
      </div>

      {/* Bottom System Note */}
      <div className="mt-12 flex flex-wrap items-center justify-center gap-3 text-center">
        <span className="h-px w-8 bg-gradient-to-r from-transparent to-cyan-400" />

        <p className="font-mono text-xs tracking-wide text-slate-500">
          Always learning. Always building.
        </p>

        <span className="h-px w-8 bg-gradient-to-l from-transparent to-purple-400" />
      </div>
    </section>
  )
}

export default Skills
