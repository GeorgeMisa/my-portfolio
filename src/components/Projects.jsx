
import { useState } from 'react'
import SpotlightCard from './SpotlightCard'
import { projects } from '../data/projects'

const filters = [
  'All Projects',
  'Web Application',
  'Mobile Application',
]

function ProjectIcon({ type }) {
  if (type === 'plant') {
    return (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 22V12" />
        <path d="M12 16C5 16 3 11 3 5c6 0 9 3 9 9" />
        <path d="M12 14c0-6 3-9 9-9 0 6-2 11-9 11" />
      </svg>
    )
  }

  if (type === 'lock') {
    return (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="5" y="10" width="14" height="11" rx="2" />
        <path d="M8 10V7a4 4 0 0 1 8 0v3" />
        <circle cx="12" cy="15" r="1" />
        <path d="M12 16v2" />
      </svg>
    )
  }

  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="m8 10-3 2 3 2M16 10l3 2-3 2M13 8l-2 8" />
    </svg>
  )
}

function Projects() {
  const [activeFilter, setActiveFilter] = useState('All Projects')

  const visibleProjects = projects.filter((project) => {
    return (
      activeFilter === 'All Projects' ||
      project.category === activeFilter
    )
  })

  return (
    <section
      id="projects"
      className="relative mx-auto max-w-6xl scroll-mt-24 px-5 py-20 md:px-6 md:py-24"
    >
      {/* Section Heading */}
      <div className="mb-10">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400 sm:text-sm">
          03 / Portfolio
        </p>

        <h2 className="text-4xl font-black tracking-tight text-white md:text-5xl">
          Featured{' '}
          <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Projects.
          </span>
        </h2>

        <div className="mt-5 h-1 w-24 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500" />

        <p className="mt-6 max-w-2xl leading-8 text-slate-400">
          A collection of projects where I apply my skills
          in web development, mobile applications, and
          practical software solutions.
        </p>
      </div>

      {/* Category Filters */}
      <div
        className="mb-9 flex flex-wrap gap-3"
        role="group"
        aria-label="Filter projects by category"
      >
        {filters.map((filter) => {
          const isActive = activeFilter === filter

          return (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              aria-pressed={isActive}
              className={`rounded-xl border px-4 py-2.5 text-sm font-medium transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400 ${
                isActive
                  ? 'border-cyan-400/50 bg-cyan-400/15 text-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.1)]'
                  : 'border-white/10 bg-white/5 text-slate-400 hover:border-cyan-400/30 hover:text-white'
              }`}
            >
              {filter}
            </button>
          )
        })}
      </div>

      {/* Project Cards */}
      <div className="grid gap-7 lg:grid-cols-2">
        {visibleProjects.map((project) => {
          const isCyan = project.accent === 'cyan'
          const projectNumber = String(
            projects.findIndex((item) => item.id === project.id) + 1
          ).padStart(2, '0')

          return (
            <SpotlightCard
              key={project.id}
              accent={project.accent}
              className="flex h-full flex-col rounded-3xl transition-shadow duration-300 hover:shadow-[0_0_40px_rgba(34,211,238,0.12)]"
            >
              {/* Project Preview */}
              <div
                className={`relative isolate flex min-h-64 flex-col justify-between overflow-hidden border-b p-6 sm:p-8 ${
                  isCyan
                    ? 'border-cyan-400/15 bg-gradient-to-br from-cyan-950/70 via-[#0b1023] to-blue-950/60'
                    : 'border-purple-400/15 bg-gradient-to-br from-purple-950/70 via-[#0b1023] to-indigo-950/60'
                }`}
              >
                {/* Optional Screenshot */}
                {project.image && (
                  <img
                    src={project.image}
                    alt={`${project.title} application screenshot`}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 -z-10 h-full w-full object-cover opacity-30"
                  />
                )}

                {/* Background Grid */}
                <div className="pointer-events-none absolute inset-0 -z-10 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:30px_30px]" />

                {/* Background Glow */}
                <div
                  className={`pointer-events-none absolute -right-12 -top-12 -z-10 h-52 w-52 rounded-full blur-[80px] ${
                    isCyan
                      ? 'bg-cyan-400/20'
                      : 'bg-purple-400/20'
                  }`}
                />

                {/* Preview Header */}
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span
                    className={`rounded-full border px-3 py-1.5 font-mono text-[10px] tracking-widest ${
                      isCyan
                        ? 'border-cyan-400/30 bg-cyan-400/10 text-cyan-300'
                        : 'border-purple-400/30 bg-purple-400/10 text-purple-300'
                    }`}
                  >
                    {project.label}
                  </span>

                  <span className="font-mono text-xs text-slate-400">
                    PROJECT / {projectNumber}
                  </span>
                </div>

                {/* Preview Center */}
                <div className="flex flex-col items-center justify-center gap-4 py-6 text-center">
                  <div
                    className={`flex h-20 w-20 items-center justify-center rounded-2xl border shadow-lg transition-transform duration-300 group-hover:scale-110 ${
                      isCyan
                        ? 'border-cyan-400/40 bg-cyan-400/10 text-cyan-300'
                        : 'border-purple-400/40 bg-purple-400/10 text-purple-300'
                    }`}
                  >
                    <ProjectIcon type={project.icon} />
                  </div>

                  <h3 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
                    {project.title}
                  </h3>

                  <p className="text-sm text-slate-300">
                    {project.preview}
                  </p>
                </div>

                {/* Preview Bottom */}
                <div className="flex items-center justify-between gap-3 border-t border-white/10 pt-4">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-slate-400">
                    Developer Portfolio
                  </span>

                  <span
                    className={`text-right text-xs font-semibold ${
                      isCyan
                        ? 'text-cyan-300'
                        : 'text-purple-300'
                    }`}
                  >
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Details */}
              <div className="flex flex-1 flex-col p-6 sm:p-8">
                <p
                  className={`mb-3 text-xs font-semibold uppercase tracking-[0.2em] ${
                    isCyan
                      ? 'text-cyan-400'
                      : 'text-purple-400'
                  }`}
                >
                  {project.category}
                </p>

                <h4 className="mb-4 text-2xl font-bold text-white">
                  {project.title}
                </h4>

                <p className="mb-7 flex-1 leading-8 text-slate-400">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-7 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`rounded-lg border px-3 py-2 text-xs font-medium text-slate-300 transition-all duration-300 ${
                        isCyan
                          ? 'border-cyan-400/15 bg-cyan-400/5 hover:border-cyan-400/40 hover:text-cyan-300'
                          : 'border-purple-400/15 bg-purple-400/5 hover:border-purple-400/40 hover:text-purple-300'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex flex-wrap items-center gap-5 border-t border-white/10 pt-5">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-sm font-semibold transition-opacity hover:opacity-75 ${
                        isCyan
                          ? 'text-cyan-300'
                          : 'text-purple-300'
                      }`}
                    >
                      Source Code ↗
                    </a>
                  )}

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-white transition-colors hover:text-cyan-300"
                    >
                      Live Demo ↗
                    </a>
                  )}

                  {!project.github && !project.demo && (
                    <p className="font-mono text-xs text-slate-500">
                      {'// Project links coming soon'}
                    </p>
                  )}
                </div>
              </div>
            </SpotlightCard>
          )
        })}
      </div>

      {/* Empty Filter State */}
      {visibleProjects.length === 0 && (
        <div className="rounded-2xl border border-white/10 bg-white/5 px-6 py-12 text-center">
          <p className="text-slate-400">
            No projects available in this category yet.
          </p>
        </div>
      )}

      {/* Bottom Note */}
      <p className="mt-10 text-center font-mono text-xs text-slate-500">
        {'// More projects will be added as I continue building'}
      </p>
    </section>
  )
}

export default Projects
