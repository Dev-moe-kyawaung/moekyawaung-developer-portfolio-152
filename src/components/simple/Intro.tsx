import { ArrowDown, MapPin } from "lucide-react";
import { NAME, ROLE, INTRO_STATS } from "../../data/journey";
import { Stats } from "../ui";

export function SimpleIntro() {
  return (
    <section id="top" className="relative pt-36 md:pt-44 pb-10 md:pb-16">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="reveal flex items-center gap-3">
          <span className="pulse-dot inline-block h-2 w-2 rounded-full bg-[var(--accent)]" aria-hidden="true" />
          <span className="microlabel">Available for senior / staff roles · Q4 2026</span>
        </div>
        <h1 className="reveal reveal-d1 t-display mt-8 max-w-5xl">
          {NAME.split(" ")[0]}{" "}
          <span className="serif-em">{NAME.split(" ").slice(1).join(" ")}</span>
          <span className="mt-4 block text-[0.46em] font-sans font-normal tracking-normal text-[var(--muted)]">
            {ROLE}
          </span>
        </h1>
        <p className="reveal reveal-d2 mt-8 max-w-2xl text-[17px] leading-relaxed text-[var(--ink-soft)]">
          I design and build AI-enabled SaaS end to end — from ambiguous requirements to systems
          that scale. This is the engineering journey: <span className="text-[var(--accent)]">discover, design, build, scale.</span>
        </p>
        <div className="reveal reveal-d3 mt-9 flex flex-wrap items-center gap-3">
          <a
            href="#discover"
            className="group inline-flex items-center gap-2 rounded-full bg-[var(--ink)] px-6 py-3.5 text-[14px] font-medium text-[var(--bg)] transition-transform hover:-translate-y-0.5"
          >
            Start the journey
            <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
          </a>
          <a
            href="#github"
            className="inline-flex items-center gap-2 rounded-full border hairline px-6 py-3.5 text-[14px] font-medium text-[var(--ink)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            GitHub lab
          </a>
        </div>
        <div className="reveal reveal-d3 mt-10 flex items-center gap-6 font-mono text-[11.5px] text-[var(--muted)]">
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5" /> Yangon, MM · GMT+6:30
          </span>
          <span className="hidden sm:inline">remote, worldwide</span>
        </div>
        <div className="reveal reveal-d3 mt-12">
          <Stats stats={INTRO_STATS} accent />
        </div>
      </div>
    </section>
  );
}
