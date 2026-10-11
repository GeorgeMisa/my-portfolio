
const skillCategories = [
  {
    number: "01",
    title: "Frontend Development",
    subtitle: "Building modern web interfaces",
    icon: "web",
    color: "cyan",
    skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
  },
  {
    number: "02",
    title: "Backend & Database",
    subtitle: "Working with servers and data",
    icon: "server",
    color: "purple",
    skills: ["Node.js", "MySQL"],
  },
  {
    number: "03",
    title: "Mobile Development",
    subtitle: "Creating mobile experiences",
    icon: "mobile",
    color: "cyan",
    skills: ["Kotlin", "SwiftUI"],
  },
  {
    number: "04",
    title: "Developer Tools",
    subtitle: "Tools for building and collaboration",
    icon: "tools",
    color: "purple",
    skills: ["Git", "GitHub", "VS Code", "Android Studio"],
  },
]

// Reusable SVG icons
function CategoryIcon({ type }) {
  const common = {
    width: 26,
    height: 26,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  }

  if (type === "web") {
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18" />
        <path d="M12 3a15 15 0 0 1 0 18" />
        <path d="M12 3a15 15 0 0 0 0 18" />
      </svg>
    )
  }

  if (type === "server") {
    return (
      <svg {...common}>
        <rect x="3" y="3" width="18" height="8" rx="2" />
        <rect x="3" y="13" width="18" height="8" rx="2" />
        <path d="M7 7h.01M7 17h.01M11 7h7M11 17h7" />
      </svg>
    )
  }

  if (type === "mobile") {
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
  return (
    <section
      id="skills"
      className="relative mx-auto max-w-6xl scroll-mt-24 px-5 py-20 md:px-6 md:py-24"
    >
      {/* Section Heading */}
      <div className="mb-12">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400 sm:text-sm">
          02 / Technologies
        </p>

        <h2 className="text-4xl font-black tracking-tight text-white md:text-5xl">
          Technical{" "}
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

      {/* Skills Grid */}
      <div className="grid gap-6 md:grid-cols-2">
        {skillCategories.map((category) => {
          const isCyan = category.color === "cyan"

          return (
            <article
              key={category.number}
              className={`group relative overflow-hidden rounded-3xl border bg-white/[0.03] p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 sm:p-8 ${
                isCyan
                  ? "border-cyan-400/20 hover:border-cyan-400/50 hover:shadow-[0_0_35px_rgba(34,211,238,0.10)]"
                  : "border-purple-400/20 hover:border-purple-400/50 hover:shadow-[0_0_35px_rgba(168,85,247,0.10)]"
              }`}
            >
              {/* Background Glow */}
              <div
                className={`pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full blur-[90px] ${
                  isCyan ? "bg-cyan-500/10" : "bg-purple-500/10"
                }`}
              />

              <div className="relative z-10">
                {/* Card Header */}
                <div className="mb-7 flex items-start justify-between gap-4">
                  <div
                    className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border ${
                      isCyan
                        ? "border-cyan-400/30 bg-cyan-400/10 text-cyan-300"
                        : "border-purple-400/30 bg-purple-400/10 text-purple-300"
                    }`}
                  >
                    <CategoryIcon type={category.icon} />
                  </div>

                  <span className="font-mono text-xs text-slate-500">
                    / {category.number}
                  </span>
                </div>

                {/* Category Details */}
                <h3 className="mb-2 text-xl font-bold text-white sm:text-2xl">
                  {category.title}
                </h3>

                <p className="mb-6 text-sm text-slate-400">
                  {category.subtitle}
                </p>

                {/* Divider */}
                <div
                  className={`mb-6 h-px bg-gradient-to-r to-transparent ${
                    isCyan
                      ? "from-cyan-400/30"
                      : "from-purple-400/30"
                  }`}
                />

                {/* Skill Badges */}
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`rounded-xl border bg-[#0b1023]/80 px-4 py-2.5 text-sm font-medium text-slate-300 transition-all duration-300 hover:-translate-y-0.5 ${
                        isCyan
                          ? "border-cyan-400/15 hover:border-cyan-400/50 hover:bg-cyan-400/10 hover:text-cyan-300"
                          : "border-purple-400/15 hover:border-purple-400/50 hover:bg-purple-400/10 hover:text-purple-300"
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          )
        })}
      </div>

      {/* Bottom Note */}
      <div className="mt-10 flex items-center justify-center gap-3 text-center">
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
