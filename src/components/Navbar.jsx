
import { useState } from 'react'

// Navigation links
const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]

function Navbar() {
  // Controls mobile menu
  const [menuOpen, setMenuOpen] = useState(false)

  // Close menu when a link is clicked
  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 px-4 pt-4">

      <nav className="mx-auto max-w-6xl rounded-2xl border border-cyan-400/20 bg-[#0b1023]/90 px-5 py-4 shadow-[0_0_30px_rgba(34,211,238,0.08)] backdrop-blur-xl md:px-6">

        <div className="flex items-center justify-between gap-4">

          {/* Developer Logo */}
          <a
            href="#home"
            onClick={closeMenu}
            className="text-xl font-black tracking-wider text-white"
          >
            <span className="text-cyan-400">{"<"}</span>
            GEORGE
            <span className="text-purple-400">/</span>
            <span className="text-cyan-400">{">"}</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-300 transition duration-300 hover:text-cyan-400"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop GitHub Button */}
          <a
            href="https://github.com/GeorgeMisa"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-xl border border-cyan-400/40 bg-cyan-400/5 px-5 py-2 text-sm font-medium text-cyan-300 transition duration-300 hover:border-cyan-400 hover:bg-cyan-400/10 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] lg:inline-flex"
          >
            GitHub ↗
          </a>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 transition hover:border-cyan-400 hover:bg-cyan-400/20 lg:hidden"
          >
            {menuOpen ? (
              // Close Icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            ) : (
              // Hamburger Icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          id="mobile-navigation"
          className={`grid transition-all duration-300 ease-in-out lg:hidden ${
            menuOpen
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <div className="mt-5 flex flex-col gap-2 border-t border-white/10 pt-5">

              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={closeMenu}
                  tabIndex={menuOpen ? 0 : -1}
                  className="rounded-lg px-4 py-3 text-sm font-medium text-slate-300 transition hover:bg-cyan-400/10 hover:text-cyan-300"
                >
                  {link.name}
                </a>
              ))}

              {/* Mobile GitHub Link */}
              <a
                href="https://github.com/GeorgeMisa"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                tabIndex={menuOpen ? 0 : -1}
                className="mt-2 rounded-xl border border-purple-400/30 bg-purple-400/10 px-4 py-3 text-center text-sm font-semibold text-purple-300 transition hover:bg-purple-400/20"
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
