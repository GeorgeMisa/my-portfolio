
const contactInfo = [
  {
    title: "Email Address",
    value: "japmisa2000@gmail.com",
    link: "mailto:japmisa2000@gmail.com",
    icon: "email",
    color: "cyan",
    action: "Send an Email",
    external: false,
  },
  {
    title: "GitHub Profile",
    value: "github.com/GeorgeMisa",
    link: "https://github.com/GeorgeMisa",
    icon: "github",
    color: "purple",
    action: "View GitHub",
    external: true,
  },
  {
    title: "Phone Number",
    value: "09484894306",
    link: "tel:+639484894306",
    icon: "phone",
    color: "cyan",
    action: "Call Me",
    external: false,
  },
]

// Reusable contact icons
function ContactIcon({ type }) {
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

  if (type === "email") {
    return (
      <svg {...common}>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </svg>
    )
  }

  if (type === "phone") {
    return (
      <svg {...common}>
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3.09 5.18 2 2 0 0 1 5.08 3h3a2 2 0 0 1 2 1.72l.4 2.81a2 2 0 0 1-.57 1.72L8.1 11.06a16 16 0 0 0 4.84 4.84l1.81-1.81a2 2 0 0 1 1.72-.57l2.81.4A2 2 0 0 1 22 16.92Z" />
      </svg>
    )
  }

  return (
    <svg
      {...common}
      fill="currentColor"
      stroke="none"
    >
      <path d="M12 .8a11.2 11.2 0 0 0-3.54 21.83c.56.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.32-3.76-1.32-.5-1.28-1.23-1.62-1.23-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15.99 1.69 2.6 1.2 3.23.92.1-.72.39-1.2.71-1.48-2.48-.28-5.09-1.24-5.09-5.53 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.08 1.15a10.7 10.7 0 0 1 5.6 0c2.14-1.45 3.07-1.15 3.07-1.15.61 1.54.23 2.68.12 2.96.72.78 1.14 1.78 1.14 3 0 4.3-2.61 5.24-5.1 5.52.4.35.76 1.02.76 2.06v3.05c0 .3.2.65.77.54A11.2 11.2 0 0 0 12 .8Z" />
    </svg>
  )
}

function Contact() {
  return (
    <section
      id="contact"
      className="relative mx-auto max-w-6xl scroll-mt-24 px-5 py-20 md:px-6 md:py-24"
    >
      {/* Section Heading */}
      <div className="mb-12">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400 sm:text-sm">
          04 / Contact
        </p>

        <h2 className="text-4xl font-black tracking-tight text-white md:text-5xl">
          Let's{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Connect.
          </span>
        </h2>

        <div className="mt-5 h-1 w-24 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500" />

        <p className="mt-6 max-w-2xl leading-8 text-slate-400">
          Have a question, an opportunity, or an idea?
          Feel free to reach out and connect with me.
        </p>
      </div>

      {/* Main Contact Container */}
      <div className="relative isolate overflow-hidden rounded-3xl border border-cyan-400/20 bg-white/[0.03] p-5 backdrop-blur-xl sm:p-8 md:p-10">

        {/* Background Glow */}
        <div className="pointer-events-none absolute -right-24 -top-24 -z-10 h-72 w-72 rounded-full bg-purple-500/10 blur-[100px]" />

        <div className="pointer-events-none absolute -bottom-24 -left-24 -z-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-[100px]" />

        {/* Introduction */}
        <div className="mb-12 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-xs font-medium text-cyan-300 sm:text-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-cyan-400/40 motion-safe:animate-ping" />
              <span className="relative h-2.5 w-2.5 rounded-full bg-cyan-400" />
            </span>
            Open to Opportunities
          </div>

          <h3 className="mb-5 text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">
            Let's build something{" "}
            <span className="bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-transparent">
              amazing.
            </span>
          </h3>

          <p className="mx-auto max-w-2xl text-sm leading-8 text-slate-400 sm:text-base">
            I'm interested in collaborating on exciting projects,
            learning new technologies, and exploring opportunities
            in software development. I'd love to hear from you!
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid gap-5 md:grid-cols-3">
          {contactInfo.map((contact) => {
            const isCyan = contact.color === "cyan"

            return (
              <a
                key={contact.title}
                href={contact.link}
                target={contact.external ? "_blank" : undefined}
                rel={contact.external ? "noopener noreferrer" : undefined}
                className={`group relative flex min-w-0 flex-col rounded-2xl border bg-[#0b1023]/80 p-6 transition-all duration-300 hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4 ${
                  isCyan
                    ? "border-cyan-400/20 hover:border-cyan-400/60 hover:shadow-[0_0_30px_rgba(34,211,238,0.12)] focus-visible:outline-cyan-400"
                    : "border-purple-400/20 hover:border-purple-400/60 hover:shadow-[0_0_30px_rgba(168,85,247,0.12)] focus-visible:outline-purple-400"
                }`}
              >
                {/* Icon and Arrow */}
                <div className="mb-6 flex items-start justify-between gap-3">
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl border ${
                      isCyan
                        ? "border-cyan-400/30 bg-cyan-400/10 text-cyan-300"
                        : "border-purple-400/30 bg-purple-400/10 text-purple-300"
                    }`}
                  >
                    <ContactIcon type={contact.icon} />
                  </div>

                  <span className="text-lg text-slate-500 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                    ↗
                  </span>
                </div>

                {/* Contact Details */}
                <p className="mb-2 text-xs font-medium uppercase tracking-widest text-slate-500">
                  {contact.title}
                </p>

                <h4 className="break-all text-sm font-semibold text-white lg:text-base">
                  {contact.value}
                </h4>

                <div className="mt-auto pt-8">
                  <span
                    className={`inline-flex items-center gap-2 text-sm font-semibold ${
                      isCyan ? "text-cyan-300" : "text-purple-300"
                    }`}
                  >
                    {contact.action}
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </div>
              </a>
            )
          })}
        </div>

        {/* Bottom Call to Action */}
        <div className="mt-12 flex flex-col items-center gap-5 border-t border-white/10 pt-10 text-center">
          <p className="text-sm text-slate-400">
            Have an idea worth building? Let's talk.
          </p>

          <a
            href="mailto:japmisa2000@gmail.com"
            className="inline-flex min-h-12 items-center justify-center rounded-xl border border-cyan-300/50 bg-cyan-400 px-8 py-3 font-semibold text-[#050816] shadow-[0_0_25px_rgba(34,211,238,0.25)] transition duration-300 hover:-translate-y-1 hover:bg-cyan-300 hover:shadow-[0_0_40px_rgba(34,211,238,0.45)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-400"
          >
            Send Me an Email ↗
          </a>

          <p className="font-mono text-xs text-slate-500">
            {"// Let's create something meaningful."}
          </p>
        </div>
      </div>
    </section>
  )
}

export default Contact
