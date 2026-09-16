import { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { Palette as PaletteIcon, FileTerminal } from "lucide-react";
import type { Hotspot as HotspotData, Stat } from "../data/journey";
import { Mode } from "../hooks/hooks";

export const HOTSPOT_TONE: Record<string, { label: string; cls: string }> = {
  metric: { label: "metric", cls: "text-[var(--accent)] border-[var(--accent)]/30" },
  architecture: { label: "architecture", cls: "text-[var(--accent-2)] border-[var(--accent-2)]/30" },
  tradeoff: { label: "trade-off", cls: "text-[var(--accent-warm)] border-[var(--accent-warm)]/30" },
};

export function HotspotCard({ h }: { h: HotspotData }) {
  const tone = HOTSPOT_TONE[h.category];
  const Icon = h.icon;
  return (
    <div className="rounded-2xl border hairline bg-[var(--surface)] p-5 card-shadow">
      <div className="flex items-center justify-between gap-3">
        <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] ${tone.cls}`}>
          <span className="h-1.5 w-1.5 rounded-full bg-current" /> {tone.label}
        </span>
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--surface-2)]">
          <Icon className="h-4 w-4 text-[var(--muted)]" />
        </span>
      </div>
      <h4 className="mt-3 font-display text-[16px] font-medium text-[var(--ink)]">{h.title}</h4>
      <p className="mt-1.5 text-[13.5px] leading-relaxed text-[var(--ink-soft)]">{h.body}</p>
      {h.meta && <p className="mt-2 font-mono text-[10.5px] text-[var(--muted)]">{h.meta}</p>}
    </div>
  );
}

export function Stats({ stats, accent }: { stats: Stat[]; accent?: boolean }) {
  return (
    <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border hairline bg-[var(--line)] sm:grid-cols-4">
      {stats.map((s) => (
        <div key={s.k} className="bg-[var(--surface)] p-4 md:p-5">
          <div className={`t-stat ${accent ? "text-[var(--accent)]" : ""}`}>{s.v}</div>
          <div className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.1em] text-[var(--muted)] leading-snug">
            {s.k}
          </div>
        </div>
      ))}
    </div>
  );
}

export function SectionTag({ children }: { children: ReactNode }) {
  return <span className="microlabel inline-flex items-center gap-2">{children}</span>;
}

export function ModeToggle({
  mode,
  onChange,
  disabled,
}: {
  mode: Mode;
  onChange: (m: Mode) => void;
  disabled?: boolean;
}) {
  return (
    <div className="seg" role="group" aria-label="Viewing mode">
      <button
        aria-pressed={mode === "immersive"}
        disabled={disabled || mode === "immersive"}
        onClick={() => onChange("immersive")}
        title={disabled ? "Immersive mode requires a desktop browser with WebGL" : "Immersive 3D mode"}
      >
        <PaletteIcon className="mr-1.5 inline -mt-0.5 h-3 w-3" /> Immersive
      </button>
      <button
        aria-pressed={mode === "simple"}
        disabled={mode === "simple"}
        onClick={() => onChange("simple")}
        title="Simple editorial mode"
      >
        <FileTerminal className="mr-1.5 inline -mt-0.5 h-3 w-3" /> Simple
      </button>
    </div>
  );
}

export function ArrowUpRightIcon({ className = "h-3.5 w-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M7 17 17 7" />
      <path d="M7 7h10v10" />
    </svg>
  );
}

export function LinkedinIcon({ className = "h-3.5 w-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  );
}

export function GithubIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-2.15c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.83 1.18 3.09 0 4.41-2.7 5.38-5.27 5.66.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

export function ArrowRightIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

export function IconWrap({ icon: Icon }: { icon: LucideIcon }) {
  return (
    <span className="flex h-9 w-9 items-center justify-center rounded-lg border hairline bg-[var(--surface-2)]">
      <Icon className="h-4 w-4 text-[var(--accent)]" />
    </span>
  );
}
