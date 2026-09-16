import { ArrowUpRight } from "lucide-react";
import { GITHUB_URL, GITHUB_STATS } from "../../data/journey";
import { Stats, GithubIcon } from "../ui";

/** The "GitHub lab" scene: repositories + experiments. */
export function ImmersiveOutro() {
  return (
    <section id="github" className="relative scroll-mt-24 min-h-screen flex items-center justify-center px-5 py-24">
      <div className="max-w-3xl text-center">
        <div className="reveal">
          <span className="microlabel">GitHub lab</span>
          <h2 className="t-h2 mt-4">A shelf of battle-tested experiments.</h2>
          <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-[var(--muted)]">
            Open-source tools I built to solve real production problems — typed AI pipelines,
            multi-tenant starters, and the boring infra glue.
          </p>
          <div className="mx-auto mt-10 max-w-2xl">
            <Stats stats={GITHUB_STATS} />
          </div>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2.5 rounded-full border hairline px-6 py-3.5 text-[14px] font-medium text-[var(--ink)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            <GithubIcon /> Browse repositories
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
