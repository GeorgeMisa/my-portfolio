
const quickLinks = [
  { number: '01', label: 'Home', href: '#home' },
  { number: '02', label: 'About', href: '#about' },
  { number: '03', label: 'Skills', href: '#skills' },
  { number: '04', label: 'Projects', href: '#projects' },
  { number: '05', label: 'Contact', href: '#contact' },
]

function SocialIcon({ type }) {
  if (type === 'github') {
    return (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M9 19c-4.3 1.4-4.3-2.5-6-3" />
        <path d="M15 22v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 19 4.77 5.07 5.07 0 0 0 18.91 1S17.73.65 15 2.48a13.38 13.38 0 0 0-7 0C5.27.65 4.09 1 4.09 1A5.07 5.07 0 0 0 4 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 8 18.13V22" />
      </svg>
    )
  }

  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  )
}

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative mt-16 overflow-hidden border-t border-cyan-400/20 bg-[#070b1b]">
      {/* Background Glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-28 left-1/4 h-72 w-72 rounded-full bg-cyan-500/10 blur-[100px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-28 right-1/4 h-72 w-72 rounded-full bg-purple-500/10 blur-[100px]"
      />

      {/* Top Neon Accent */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-cyan-400/60 to-purple-400/40" />

      <div className="relative mx-auto max-w-6xl px-5 py-12 md:px-6 md:py-14">

        {/* System Header */}
        <div className="mb-10 flex flex-wrap items-center justify-between gap-3 border-b border-cyan-400/15 pb-5 font-mono text-[10px] uppercase tracking-[0.2em]">
          <span className="text-cyan-400">
            SYSTEM.FOOTER / 006
          </span>

          <span className="flex items-center gap-2 text-emerald-300">
            <span className="cyber-status-dot" />
            Portfolio Interface Ready
          </span>
        </div>

        {/* Main Footer Layout */}
        <div className="grid gap-10 md:grid-cols-3 md:gap-8">

          {/* Developer Branding */}
          <div className="text-center md:text-left">
            <a
              href="#home"
              aria-label="George Misa - Back to home"
              className="inline-flex items-center text-2xl font-black tracking-wider text-white transition-all duration-300 hover:drop-shadow-[0_0_12px_rgba(34,211,238,0.5)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-400"
            >
              <span className="text-cyan-400">{'<'}</span>
              GEORGE
              <span className="text-purple-400">/</span>
              <span className="text-cyan-400">{'>'}</span>
            </a>

            <p className="mx-auto mt-4 max-w-xs text-sm leading-7 text-slate-400 md:mx-0">
              Full Stack Developer focused on building
              modern web and mobile applications.
            </p>

            {/* Terminal Profile */}
            <div className="mx-auto mt-6 max-w-xs rounded-xl border border-cyan-400/15 bg-[#050816]/80 p-4 text-left font-mono text-xs md:mx-0">
              <p className="mb-2 text-slate-500">
                developer@portfolio:~$
              </p>

              <p className="text-cyan-300">
                {'> '}Dev
              </p>

              <p className="mt-1 text-slate-300">
                George Gregory D. Misa
              </p>

              <p className="mt-3 text-purple-300">
                {'> '}status
              </p>

              <p className="mt-1 flex items-center gap-2 text-emerald-300">
                <span className="cyber-status-dot" />
                Open to Opportunities
              </p>
            </div>
          </div>

          {/* Quick Navigation */}
          <nav
            aria-label="Footer navigation"
            className="text-center"
          >
            <h3 className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-white">
              Quick Navigation
            </h3>

            <div className="flex flex-wrap justify-center gap-x-6 gap-y-4 md:flex-col md:items-center md:gap-3">
              {quickLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="group inline-flex items-center gap-2 text-sm text-slate-400 transition-colors duration-300 hover:text-cyan-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-400"
                >
                  <span className="font-mono text-[10px] text-cyan-400/60 transition-colors duration-300 group-hover:text-cyan-300">
                    {link.number} /
                  </span>

                  {link.label}
                </a>
              ))}
            </div>
          </nav>

          {/* Connect Section */}
          <div className="text-center md:text-right">
            <h3 className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-white">
              Let's Connect
            </h3>

            <p className="mb-5 text-sm leading-7 text-slate-400">
              Have a project or opportunity in mind?
              Feel free to reach out.
            </p>

            {/* Social Icons */}
            <div className="flex justify-center gap-3 md:justify-end">
              <a
                href="https://github.com/GeorgeMisa"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit George Misa's GitHub profile"
                title="GitHub"
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-purple-400/25 bg-purple-400/10 text-purple-300 transition-all duration-300 motion-safe:hover:-translate-y-1 hover:border-purple-400/60 hover:bg-purple-400/20 hover:shadow-[0_0_25px_rgba(168,85,247,0.2)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple-400"
              >
                <SocialIcon type="github" />
              </a>

              <a
                href="mailto:japmisa2000@gmail.com"
                aria-label="Send George Misa an email"
                title="Email"
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-cyan-400/25 bg-cyan-400/10 text-cyan-300 transition-all duration-300 motion-safe:hover:-translate-y-1 hover:border-cyan-400/60 hover:bg-cyan-400/20 hover:shadow-[0_0_25px_rgba(34,211,238,0.2)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-400"
              >
                <SocialIcon type="email" />
              </a>
            </div>

            {/* Back to Top */}
            <a
              href="#home"
              className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-5 py-3 text-sm font-medium text-cyan-300 transition-all duration-300 motion-safe:hover:-translate-y-1 hover:border-cyan-400/70 hover:shadow-[0_0_25px_rgba(34,211,238,0.2)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-400"
            >
              <span aria-hidden="true">↑</span>
              Back to Top
            </a>
          </div>
        </div>

        {/* Neon Gradient Divider */}
        <div className="my-10 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-purple-400/40" />

        {/* Bottom Footer */}
        <div className="flex flex-col items-center justify-between gap-4 text-center text-xs text-slate-500 sm:text-sm md:flex-row">
          <p>
            © {year} George Gregory D. Misa. All rights reserved.
          </p>

          <p className="font-mono text-xs text-slate-500">
            {'<Built with passion & code />'}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
