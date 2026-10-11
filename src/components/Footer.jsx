
function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative mt-16 border-t border-cyan-400/20 bg-[#070b1b]">

      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 mx-auto h-40 max-w-xl rounded-full bg-purple-500/10 blur-[100px]" />

      <div className="relative mx-auto max-w-6xl px-6 py-10">

        {/* Top Footer */}
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">

          {/* Branding */}
          <div className="text-center md:text-left">
            <a
              href="#home"
              className="text-2xl font-black tracking-wider text-white"
            >
              <span className="text-cyan-400">{"<"}</span>
              GEORGE
              <span className="text-purple-400">/</span>
              <span className="text-cyan-400">{">"}</span>
            </a>

            <p className="mt-3 text-sm text-slate-400">
              Web & Mobile Application Developer
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-5 text-sm text-slate-400">
            <a href="#about" className="transition hover:text-cyan-400">
              About
            </a>

            <a href="#skills" className="transition hover:text-cyan-400">
              Skills
            </a>

            <a href="#projects" className="transition hover:text-cyan-400">
              Projects
            </a>

            <a href="#contact" className="transition hover:text-cyan-400">
              Contact
            </a>
          </div>

          {/* Back to Top */}
          <a
            href="#home"
            className="rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-5 py-3 text-sm font-medium text-cyan-300 transition duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(34,211,238,0.2)]"
          >
            ↑ Back to Top
          </a>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />

        {/* Bottom Footer */}
        <div className="flex flex-col items-center justify-between gap-4 text-center text-sm text-slate-500 md:flex-row">

          <p>
            © {year} George Gregory D. Misa.
            All rights reserved.
          </p>

          <a
            href="https://github.com/GeorgeMisa"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-purple-300"
          >
            GitHub ↗
          </a>
        </div>

      </div>
    </footer>
  )
}

export default Footer
