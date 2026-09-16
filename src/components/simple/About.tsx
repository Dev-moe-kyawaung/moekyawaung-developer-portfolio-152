import { LEADERSHIP } from "../../data/journey";
import { SectionTag, IconWrap } from "../ui";

export function SimpleAbout() {
  return (
    <section id="about" className="relative scroll-mt-24 py-16 md:py-24 bg-[var(--bg-soft)]/60 border-y hairline">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div className="reveal">
            <SectionTag>About</SectionTag>
            <h2 className="t-h2 mt-4 leading-[1.15]">Quiet systems, loud results.</h2>
            <p className="mt-6 text-[15px] leading-relaxed text-[var(--ink-soft)]">
              Ten years across fintech, analytics, and AI product teams taught me that the best
              engineering is invisible — it just works, fast, for every user. I lead by writing
              the scary thing down and turning guesswork into decisions.
            </p>
          </div>
          <div>
            {LEADERSHIP.map((l, i) => (
              <div key={l.index} className={`reveal reveal-d${i + 1} flex gap-4 border-t hairline py-7 first:border-t-0 last:border-b`}>
                <IconWrap icon={l.icon} />
                <div>
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-[11px] text-[var(--muted)]">{l.index}</span>
                    <h3 className="font-display text-[19px] font-medium text-[var(--ink)]">{l.title}</h3>
                  </div>
                  <p className="mt-2 max-w-lg text-[14px] leading-relaxed text-[var(--ink-soft)]">{l.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
