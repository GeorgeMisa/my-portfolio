
import { useEffect, useRef, useState } from 'react'

const navLinks = [
  { name: 'Home', href: '#home', id: 'home' },
  { name: 'About', href: '#about', id: 'about' },
  { name: 'Skills', href: '#skills', id: 'skills' },
  { name: 'Projects', href: '#projects', id: 'projects' },
  { name: 'Contact', href: '#contact', id: 'contact' },
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [scrolled, setScrolled] = useState(false)

  const menuButtonRef = useRef(null)

  // Detect active section and scroll position
  useEffect(() => {
    let frameId = null

    const updateNavigation = () => {
      const scrollPosition = window.scrollY + 180
      let currentSection = 'home'

      navLinks.forEach((link) => {
        const section = document.getElementById(link.id)

        if (section) {
          const sectionTop =
            section.getBoundingClientRect().top +
            window.scrollY

          if (sectionTop <= scrollPosition) {
            currentSection = link.id
          }
        }
      })

      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 10

      if (atBottom) {
        currentSection = 'contact'
      }

      setActiveSection(currentSection)
      setScrolled(window.scrollY > 20)
      frameId = null
    }

    const onScroll = () => {
      if (frameId === null) {
        frameId = window.requestAnimationFrame(
          updateNavigation
        )
      }
    }

    updateNavigation()

    window.addEventListener('scroll', onScroll, {
      passive: true,
    })
    window.addEventListener('resize', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)

      if (frameId !== null) {
        window.cancelAnimationFrame(frameId)
      }
    }
  }, [])

  // Escape key closes mobile navigation
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape' && menuOpen) {
        setMenuOpen(false)
        menuButtonRef.current?.focus()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [menuOpen])

  // Close menu when viewport becomes desktop-sized
  useEffect(() => {
    const media = window.matchMedia('(min-width: 1024px)')

    const handleChange = (event) => {
      if (event.matches) {
        setMenuOpen(false)
      }
    }

    media.addEventListener('change', handleChange)

    return () => {
      media.removeEventListener('change', handleChange)
    }
  }, [])

  const handleNavigation = (id) => {
    setActiveSection(id)
    setMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 px-4 pt-4">
      <nav
        aria-label="Main navigation"
        className={`cyber-glass cyber-gradient-border relative mx-auto max-w-6xl overflow-hidden rounded-2xl px-4 py-3 transition-all duration-300 sm:px-5 lg:px-6 ${
          scrolled
            ? 'shadow-[0_12px_45px_rgba(0,0,0,0.4)]'
            : 'shadow-[0_0_35px_rgba(34,211,238,0.05)]'
        }`}
      >
        {/* Top illumination */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-14 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent"
        />

        <div className="relative flex items-center justify-between gap-4">

          {/* Logo */}
          <a
            href="#home"
            onClick={() => handleNavigation('home')}
            aria-label="George Misa — Back to home"
            className="group inline-flex shrink-0 items-center gap-1 rounded-md font-mono text-lg font-black tracking-wider text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-400 sm:text-xl"
          >
            <span className="text-cyan-400 transition-transform duration-300 group-hover:-translate-x-1">
              {'<'}
            </span>

            <span className="cyber-text-glow">
              GEORGE
            </span>

            <span className="text-purple-400">/</span>

            <span className="text-cyan-400 transition-transform duration-300 group-hover:translate-x-1">
              {'>'}
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link, index) => {
              const isActive = activeSection === link.id

              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => handleNavigation(link.id)}
                  aria-current={
                    isActive ? 'location' : undefined
                  }
                  className={`group relative flex items-center gap-2 rounded-xl px-3 py-2.5 text-sm transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400 ${
                    isActive
                      ? 'bg-cyan-400/10 text-cyan-300'
                      : 'text-slate-400 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <span
                    className={`font-mono text-[10px] ${
                      isActive
                        ? 'text-cyan-400'
                        : 'text-slate-600 group-hover:text-purple-400'
                    }`}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <span className="font-medium">
                    {link.name}
                  </span>

                  <span
                    aria-hidden="true"
                    className={`absolute bottom-0 left-1/2 h-0.5 -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300 ${
                      isActive
                        ? 'w-8 opacity-100'
                        : 'w-0 opacity-0'
                    }`}
                  />
                </a>
              )
            })}
          </div>

          {/* Desktop Status + GitHub */}
          <div className="hidden items-center gap-3 lg:flex">
            <span className="hidden items-center gap-2 xl:inline-flex">
              <span className="cyber-status-dot" />

              <span className="font-mono text-[10px] uppercase tracking-widest text-cyan-300">
                Online
              </span>
            </span>

            <a
              href="https://github.com/GeorgeMisa"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-4 py-2.5 text-sm font-semibold text-cyan-300 transition-all duration-300 hover:border-cyan-400/60 hover:bg-cyan-400/15 hover:shadow-[0_0_25px_rgba(34,211,238,0.12)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
            >
              GitHub

              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              >
                ↗
              </span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            ref={menuButtonRef}
            type="button"
            aria-label={
              menuOpen
                ? 'Close navigation menu'
                : 'Open navigation menu'
            }
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 transition-all duration-300 hover:border-cyan-400/60 hover:bg-cyan-400/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400 lg:hidden"
          >
            {menuOpen ? (
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          id="mobile-navigation"
          aria-hidden={!menuOpen}
          inert={!menuOpen}
          className={`grid transition-all duration-300 ease-in-out motion-reduce:transition-none lg:hidden ${
            menuOpen
              ? 'grid-rows-[1fr] opacity-100'
              : 'grid-rows-[0fr] opacity-0'
          }`}
        >
          <div className="overflow-hidden">
            <div className="mt-5 flex flex-col gap-2 border-t border-cyan-400/15 pt-5">

              <p className="mb-2 px-3 font-mono text-[10px] uppercase tracking-[0.3em] text-slate-500">
                System Navigation / 05
              </p>

              {navLinks.map((link, index) => {
                const isActive = activeSection === link.id

                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={() => handleNavigation(link.id)}
                    aria-current={
                      isActive ? 'location' : undefined
                    }
                    tabIndex={menuOpen ? 0 : -1}
                    className={`flex items-center gap-4 rounded-xl border px-4 py-3 text-sm font-medium transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400 ${
                      isActive
                        ? 'border-cyan-400/25 bg-cyan-400/10 text-cyan-300'
                        : 'border-transparent text-slate-300 hover:border-white/10 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <span className="font-mono text-xs text-purple-400">
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    <span className="flex-1">
                      {link.name}
                    </span>

                    {isActive && (
                      <span
                        aria-hidden="true"
                        className="cyber-status-dot"
                      />
                    )}
                  </a>
                )
              })}

              <a
                href="https://github.com/GeorgeMisa"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                tabIndex={menuOpen ? 0 : -1}
                className="mt-2 rounded-xl border border-purple-400/30 bg-purple-400/10 px-4 py-3 text-center text-sm font-semibold text-purple-300 transition-all duration-300 hover:border-purple-400/60 hover:bg-purple-400/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-400"
              >
                Visit My GitHub ↗
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
