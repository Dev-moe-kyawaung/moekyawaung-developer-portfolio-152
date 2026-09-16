import { REPOS, GITHUB_STATS, GITHUB_URL } from "../../data/journey";
import { SectionTag, Stats, GithubIcon, ArrowUpRightIcon } from "../ui";

export function SimpleGithub() {
  return (
    <section id="github" className="relative scroll-mt-24 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="reveal mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <SectionTag>GitHub lab</SectionTag>
            <h2 className="t-h2 mt-4">Open-source experiments.</h2>
          </div>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex w-fit items-center gap-2.5 rounded-full border hairline px-5 py-3 text-[13.5px] font-medium text-[var(--ink)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            <GithubIcon />
            github.com/moekyawaung
            <ArrowUpRightIcon className="h-3.5 w-3.5" />
          </a>
        </div>
        <div className="reveal mb-8">
          <Stats stats={GITHUB_STATS} />
        </div>
        <div className="grid gap-px overflow-hidden rounded-2xl border hairline bg-[var(--line)] sm:grid-cols-2 lg:grid-cols-3">
          {REPOS.map((r, i) => (
            <a
              key={r.name}
              href={`${GITHUB_URL}/${r.name}`}
              target="_blank"
              rel="noreferrer"
              className={`reveal reveal-d${(i % 3) + 1} group flex flex-col bg-[var(--surface)] p-6 transition-colors hover:bg-[var(--accent-soft)]`}
            >
              <div className="flex items-center justify-between gap-2">
                <span className="font-mono text-[13px] font-medium text-[var(--ink)] group-hover:text-[var(--accent)]">{r.name}</span>
                <ArrowUpRightIcon className="h-3.5 w-3.5 text-[var(--muted)] opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
              <span className="mt-2 w-fit rounded-full bg-[var(--surface-2)] px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.1em] text-[var(--accent-2)]">{r.tag}</span>
              <p className="mt-3 flex-1 text-[13.5px] leading-relaxed text-[var(--muted)]">{r.desc}</p>
              <div className="mt-5 flex items-center gap-4 font-mono text-[11px] text-[var(--muted)]">
                <span className="inline-flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full" style={{ background: r.color }} /> {r.lang}
                </span>
                <span>★ {r.stars.toLocaleString()}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
