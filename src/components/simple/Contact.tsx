import { Mail, CalendarClock } from "lucide-react";
import { EMAIL, LINKEDIN_URL, CALENDAR_URL, GITHUB_URL, NAV } from "../../data/journey";
import { LinkedinIcon, GithubIcon, ArrowUpRightIcon } from "../ui";

const CHANNELS = [
  { label: "Email", value: EMAIL, href: `mailto:${EMAIL}`, icon: Mail, external: false },
  { label: "LinkedIn", value: "in/moekyawaung", href: LINKEDIN_URL, icon: LinkedinIcon, external: true },
  { label: "GitHub", value: "moekyawaung", href: GITHUB_URL, icon: GithubIcon, external: true },
  { label: "Calendar", value: "Book 30 minutes", href: CALENDAR_URL, icon: CalendarClock, external: true },
];

export function SimpleContact() {
  return (
    <section id="contact" className="relative scroll-mt-24 pt-16 md:pt-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="reveal rounded-3xl border hairline bg-[var(--surface)] card-shadow px-6 py-14 md:px-14 md:py-16 relative overflow-hidden">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-32 right-[-8%] h-80 w-80 rounded-full opacity-50 blur-3xl"
            style={{ background: "radial-gradient(circle, var(--accent-soft), transparent 70%)" }}
          />
          <div className="relative">
            <div className="flex items-center gap-3">
              <span className="pulse-dot inline-block h-2 w-2 rounded-full bg-[var(--accent)]" />
              <span className="microlabel">Hiring · Q4 2026</span>
            </div>
            <h2 className="t-h2 mt-6 max-w-2xl">Let&apos;s build an AI product users trust.</h2>
            <p className="mt-5 max-w-xl text-[15.5px] leading-relaxed text-[var(--ink-soft)]">
              I&apos;m open to senior and staff full-stack roles, and to a small number of
              product engagements — from AI-enabled SaaS builds to performance and reliability
              rescue. Tell me what you&apos;re building.
            </p>
            <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {CHANNELS.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  {...(c.external ? { target: "_blank", rel: "noreferrer" } : {})}
                  className="group flex items-center justify-between gap-3 rounded-2xl border hairline bg-[var(--bg)]/60 p-5 transition-all hover:-translate-y-0.5 hover:border-[var(--accent)]"
                >
                  <span className="min-w-0">
                    <span className="microlabel flex items-center gap-1.5">
                      <c.icon className="h-3.5 w-3.5 text-[var(--accent)]" /> {c.label}
                    </span>
                    <span className="mt-1.5 block truncate text-[14px] font-medium text-[var(--ink)]">{c.value}</span>
                  </span>
                  <ArrowUpRightIcon className="h-4 w-4 shrink-0 text-[var(--muted)] group-hover:text-[var(--accent)]" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <footer className="mt-16 md:mt-20">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-t hairline py-8">
            <div>
              <span className="font-display text-[15px] font-semibold text-[var(--ink)]">Moe Kyaw Aung</span>
              <p className="mt-1 font-mono text-[11px] text-[var(--muted)]">© 2026 · Yangon, MM · AI-enabled SaaS</p>
            </div>
            <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2">
              {NAV.map((n) => (
                <a key={n.href} href={n.href} className="text-[13px] font-medium text-[var(--muted)] transition-colors hover:text-[var(--ink)]">
                  {n.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </footer>
    </section>
  );
}
