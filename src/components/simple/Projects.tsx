import { PROJECTS, BUILD_PRINCIPLES } from "../../data/journey";
import { SectionTag } from "../ui";

export function SimpleProjects() {
  return (
    <>
      <section id="projects" className="relative scroll-mt-24 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="reveal mb-10 max-w-2xl">
            <SectionTag>Case studies</SectionTag>
            <h2 className="t-h2 mt-4">Three products, torn down honestly.</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-[var(--muted)]">
              Implementation, testing strategy, and delivery — with the outcomes that mattered.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {BUILD_PRINCIPLES.map((b) => (
              <span key={b.label} className="rounded-full border hairline bg-[var(--surface)] px-3.5 py-1.5 font-mono text-[11px] text-[var(--ink-soft)]">
                <span className="text-[var(--accent)]">{b.label}</span> · {b.detail}
              </span>
            ))}
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {PROJECTS.map((p) => (
              <article key={p.name} className="reveal reveal-d1 group flex flex-col rounded-2xl border hairline bg-[var(--surface)] p-6 card-shadow transition-transform hover:-translate-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--muted)]">{p.year}</span>
                  <span className="rounded-full border hairline px-2.5 py-0.5 font-mono text-[10px] text-[var(--accent)]">{p.domain}</span>
                </div>
                <h3 className="t-h3 mt-3">{p.name}</h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-[var(--ink-soft)] flex-1">{p.summary}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.stack.slice(0, 4).map((s) => (
                    <span key={s} className="rounded bg-[var(--surface-2)] px-2 py-0.5 font-mono text-[10.5px] text-[var(--muted)]">{s}</span>
                  ))}
                </div>
                <div className="mt-5 border-t hairline pt-4">
                  <dl className="space-y-2 text-[12px]">
                    <div className="grid grid-cols-[88px_1fr] gap-2">
                      <dt className="microlabel pt-0.5">Built</dt>
                      <dd className="text-[var(--ink-soft)]">{p.implementation}</dd>
                    </div>
                    <div className="grid grid-cols-[88px_1fr] gap-2">
                      <dt className="microlabel pt-0.5">Tests</dt>
                      <dd className="text-[var(--ink-soft)]">{p.testing}</dd>
                    </div>
                  </dl>
                </div>
                <div className="mt-4 grid grid-cols-3 gap-2">
                  {p.outcomes.map((o) => (
                    <div key={o.k} className="rounded-lg bg-[var(--accent-soft)] p-2.5 text-center">
                      <div className="font-display text-[15px] text-[var(--accent)]">{o.v}</div>
                      <div className="font-mono text-[9px] uppercase tracking-wide text-[var(--muted)]">{o.k}</div>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
