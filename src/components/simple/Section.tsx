import { ReactNode } from "react";
import type { Stage } from "../../data/journey";
import { HotspotCard, SectionTag } from "../ui";

export function StagePanel({ stage, immersive }: { stage: Stage; immersive?: boolean }) {
  return (
    <section
      id={stage.id}
      data-index={Number(stage.num) - 1}
      className={`journey-stage relative scroll-mt-24 ${immersive ? "flex min-h-[92vh] items-center py-24" : "py-14 md:py-20"}`}
    >
      <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
        <div className={`reveal grid gap-8 lg:grid-cols-[0.85fr_1.15fr] ${immersive ? "items-center" : ""}`}>
          <div>
            <SectionTag>
              <span className="text-[var(--accent)]">{stage.num}</span>
              {stage.name}
            </SectionTag>
            <h2 className="t-h2 mt-4">{stage.headline}</h2>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-[var(--ink-soft)]">
              {stage.intro}
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {stage.capabilities.map((c) => (
                <li key={c} className="rounded-full border hairline px-3 py-1 font-mono text-[11px] text-[var(--muted)]">
                  {c}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {stage.hotspots.map((h, i) => (
              <div key={h.id} className={`reveal reveal-d${i + 1}`}>
                <HotspotCard h={h} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Divider({ children }: { children?: ReactNode }) {
  return (
    <div className="mx-auto max-w-6xl px-5 md:px-8">
      <div className="gradient-rule reveal" />
      {children && <div className="py-4">{children}</div>}
    </div>
  );
}
