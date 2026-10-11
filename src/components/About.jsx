
const focusAreas = [
  {
    number: "01",
    icon: "🌐",
    title: "Web Development",
    description: "Building modern, responsive web applications.",
    accent: "cyan",
  },
  {
    number: "02",
    icon: "📱",
    title: "Mobile Applications",
    description: "Creating practical and user-friendly mobile experiences.",
    accent: "purple",
  },
  {
    number: "03",
    icon: "💻",
    title: "Software Engineering",
    description: "Solving problems through clean and functional code.",
    accent: "cyan",
  },
]

function About() {
  return (
    <section
      id="about"
      className="relative mx-auto max-w-6xl scroll-mt-24 px-5 py-20 md:px-6 md:py-24"
    >
      {/* Section Heading */}
      <div className="mb-12">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400 sm:text-sm">
          01 / Introduction
        </p>

        <h2 className="text-4xl font-black tracking-tight text-white md:text-5xl">
          About{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Me.
          </span>
        </h2>

        <div className="mt-5 h-1 w-24 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500" />
      </div>

      {/* Main About Layout */}
      <div className="grid gap-6 lg:grid-cols-5">
        {/* Developer Profile Card */}
        <article className="group relative overflow-hidden rounded-3xl border border-cyan-400/20 bg-white/[0.03] p-6 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/50 hover:shadow-[0_0_35px_rgba(34,211,238,0.1)] sm:p-8 lg:col-span-3">
          {/* Background Glow */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cyan-500/10 blur-[90px]" />

          <div className="relative z-10">
            {/* Card Header */}
            <div className="mb-8 flex items-center justify-between gap-3 border-b border-white/10 pb-5">
              <span className="rounded-lg border border-cyan-400/30 bg-cyan-400/10 px-3 py-2 font-mono text-xs text-cyan-300 sm:text-sm">
                {"<developer_profile />"}
              </span>

              <span className="font-mono text-xs text-slate-500">
                ABOUT_01
              </span>
            </div>

            {/* Main Introduction */}
            <h3 className="mb-6 max-w-lg text-2xl font-bold leading-snug text-white sm:text-3xl">
              Building ideas into{" "}
              <span className="bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-transparent">
                digital experiences.
              </span>
            </h3>

            <p className="mb-5 leading-8 text-slate-400">
              I'm{" "}
              <span className="font-semibold text-slate-200">
                George Gregory D. Misa
              </span>
              , a Bachelor of Science in Information Technology
              student at Manuel S. Enverga University Foundation,
              specializing in Web and Mobile Application Development.
            </p>

            <p className="leading-8 text-slate-400">
              I'm passionate about software development, creating
              responsive websites, building mobile applications,
              and continuously improving my programming skills
              through hands-on projects.
            </p>

            {/* Developer Status */}
            <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-white/10 pt-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-xs font-medium text-cyan-300">
                <span className="h-2 w-2 rounded-full bg-cyan-400" />
                Aspiring Software Engineer
              </span>

              <span className="rounded-full border border-purple-400/20 bg-purple-400/5 px-4 py-2 text-xs font-medium text-purple-300">
                Web & Mobile Developer
              </span>
            </div>
          </div>
        </article>

        {/* Education Card */}
        <article className="group relative overflow-hidden rounded-3xl border border-purple-400/20 bg-white/[0.03] p-6 backdrop-blur-xl transition-all duration-300 hover:border-purple-400/50 hover:shadow-[0_0_35px_rgba(168,85,247,0.1)] sm:p-8 lg:col-span-2">
          {/* Background Glow */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-purple-500/10 blur-[90px]" />

          <div className="relative z-10">
            {/* Education Icon */}
            <div className="mb-7 flex h-16 w-16 items-center justify-center rounded-2xl border border-purple-400/30 bg-purple-400/10 text-3xl">
              🎓
            </div>

            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-purple-400">
              Academic Background
            </p>

            <h3 className="mb-4 text-2xl font-bold leading-snug text-white">
              BS Information Technology
            </h3>

            <p className="text-base leading-8 text-slate-400">
              Manuel S. Enverga University Foundation
            </p>

            <div className="mt-8 border-t border-white/10 pt-6">
              <p className="mb-2 text-xs uppercase tracking-widest text-slate-500">
                Specialization
              </p>

              <p className="font-medium leading-7 text-cyan-300">
                Web & Mobile Application Development
              </p>
            </div>

            <div className="mt-6 rounded-xl border border-purple-400/20 bg-purple-400/5 px-4 py-3">
              <p className="font-mono text-xs text-purple-300">
                {"// Learning. Building. Improving."}
              </p>
            </div>
          </div>
        </article>
      </div>

      {/* Focus Areas */}
      <div className="mt-12">
        <div className="mb-6 flex items-center gap-4">
          <h3 className="text-lg font-bold text-white sm:text-xl">
            Areas of Interest
          </h3>

          <div className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent" />
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {focusAreas.map((area) => {
            const isCyan = area.accent === "cyan"

            return (
              <article
                key={area.number}
                className={`group relative rounded-2xl border bg-white/[0.025] p-6 transition-all duration-300 hover:-translate-y-1 ${
                  isCyan
                    ? "border-cyan-400/20 hover:border-cyan-400/50 hover:shadow-[0_0_30px_rgba(34,211,238,0.08)]"
                    : "border-purple-400/20 hover:border-purple-400/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.08)]"
                }`}
              >
                <div className="mb-5 flex items-center justify-between">
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-xl border text-2xl ${
                      isCyan
                        ? "border-cyan-400/30 bg-cyan-400/10"
                        : "border-purple-400/30 bg-purple-400/10"
                    }`}
                  >
                    {area.icon}
                  </div>

                  <span className="font-mono text-xs text-slate-600">
                    / {area.number}
                  </span>
                </div>

                <h4 className="mb-2 text-lg font-bold text-white">
                  {area.title}
                </h4>

                <p className="text-sm leading-7 text-slate-400">
                  {area.description}
                </p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default About
