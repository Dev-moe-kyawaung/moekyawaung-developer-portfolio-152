import { ArrowDown } from "lucide-react";
import { NAME, ROLE, INTRO_STATS } from "../../data/journey";
import { Stats } from "../ui";

/** Intro panel overlaid on the 3D welcome scene. */
export function ImmersiveIntro() {
  return (
    <section id="top" className="relative flex min-h-screen items-center justify-center px-5">
      <div className="max-w-4xl text-center">
        <div className="reveal in flex items-center justify-center gap-3">
          <span className="pulse-dot inline-block h-2 w-2 rounded-full bg-[var(--accent)]" aria-hidden="true" />
          <span className="microlabel">Available for senior / staff roles · Q4 2026</span>
        </div>
        <h1 className="t-display mt-8">
          {NAME.split(" ")[0]}{" "}
          <span className="serif-em">{NAME.split(" ").slice(1).join(" ")}</span>
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-[17px] leading-relaxed text-[var(--ink-soft)]">
          {ROLE}. I take ambitious products from discovery to scale — through four scenes you can scroll.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#discover"
            className="group inline-flex items-center gap-2 rounded-full bg-[var(--ink)] px-6 py-3.5 text-[14px] font-medium text-[var(--bg)] transition-transform hover:-translate-y-0.5"
          >
            Begin the journey
            <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
          </a>
          <span className="font-mono text-[11px] text-[var(--muted)]">scroll to explore ↓</span>
        </div>
        <div className="mx-auto mt-14 max-w-2xl">
          <Stats stats={INTRO_STATS} accent />
        </div>
      </div>
    </section>
  );
}
