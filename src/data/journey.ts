import type { LucideIcon } from "lucide-react";
import {
  Search, Users, GitCommit,
  Share2, ShieldCheck, Database,
  TestTube, Rocket,
  Activity, BarChart3, LineChart, TrendingDown, Radar,
  FlaskConical, Star, Heart,
} from "lucide-react";

export const NAME = "Moe Kyaw Aung";
export const ROLE = "Senior Full-Stack Engineer · AI-enabled SaaS";
export const EMAIL = "hello@moekyawaung.dev";
export const GITHUB_URL = "https://github.com/moekyawaung";
export const LINKEDIN_URL = "https://www.linkedin.com/in/moekyawaung";
export const CALENDAR_URL = "https://cal.moekyawaung.dev";

export type Stat = { v: string; k: string };
export type Hotspot = {
  id: string;
  label: string;
  icon: LucideIcon;
  category: "metric" | "architecture" | "tradeoff";
  title: string;
  body: string;
  meta?: string;
};
export type Stage = {
  id: string;
  num: string;
  name: string;
  headline: string;
  intro: string;
  capabilities: string[];
  hotspots: Hotspot[];
};

export const STAGES: Stage[] = [
  {
    id: "discover",
    num: "02",
    name: "Discover",
    headline: "From ambiguity to a validated bet.",
    intro:
      "I turn fuzzy requirements into a small, testable slice of product — pairing with research and design instead of building in the dark.",
    capabilities: ["Opportunity mapping", "Prototype before architecture", "User-research pairing", "Success metrics first"],
    hotspots: [
      { id: "disc-metric", label: "Time-to-signal", icon: BarChart3, category: "metric", title: "6 weeks → 2 weeks", body: "Average time from ambiguous ask to a validated prototype on a real user flow.", meta: "across 5 discovery engagements" },
      { id: "disc-arch", label: "Requirements triage", icon: Search, category: "architecture", title: "Assumption → experiment table", body: "Every requirement is scored by risk and evidence. The highest-risk assumption drives the first spike — not the loudest stakeholder.", meta: "framework reused on 9 products" },
      { id: "disc-trade", label: "Research trade-off", icon: Users, category: "tradeoff", title: "We ship a wedge, not a survey", body: "Full research budgets are rare early on. Trade-off: recruit 5 users for a clickable prototype instead of a 40-person study — enough signal to invest or kill.", meta: "2 products killed cheaply before over-building" },
    ],
  },
  {
    id: "design",
    num: "03",
    name: "Design",
    headline: "Systems that survive the second feature.",
    intro:
      "Data models, APIs, and security decided up front — with diagrams tight enough to fit a whiteboard and deep enough to survive review.",
    capabilities: ["System design & diagrams", "Data modeling", "API contracts", "Auth / RBAC", "Security & scalability", "Cost-aware infra"],
    hotspots: [
      { id: "des-metric", label: "P99 latency", icon: Activity, category: "metric", title: "p99 < 120ms", body: "Bounded at the API edge with caching and connection pooling, before the first user onboards.", meta: "measured in production" },
      { id: "des-arch", label: "Multi-tenant model", icon: Database, category: "architecture", title: "Row-level tenancy", body: "Postgres + row-level security for tenant isolation, with a typed repository layer so a second tenant never sees a neighbor's row.", meta: "Next.js API + Postgres + Prisma" },
      { id: "des-trade", label: "Auth trade-off", icon: ShieldCheck, category: "tradeoff", title: "Boring auth, deliberately", body: "Trade-off: session cookies over stateless JWT. Slightly less 'scalable' on paper, far fewer footguns — CSRF, revocation, and logout are solved by the platform.", meta: "security review passed" },
      { id: "des-trade2", label: "Real-time scope", icon: Share2, category: "tradeoff", title: "WebSockets vs polling", body: "A chat feature wanted WebSockets; the product only needed near-real-time. Polling with backoff shipped in half the time and removed a whole class of reconnect bugs.", meta: "revisited when scale demanded" },
    ],
  },
  {
    id: "build",
    num: "04",
    name: "Build",
    headline: "Three products, torn down honestly.",
    intro:
      "Working case studies with the implementation details, test strategy, and delivery execution — including the things I'd do differently.",
    capabilities: ["TypeScript end-to-end", "RSC + streaming", "Test pyramid", "CI quality gates", "Trunk-based delivery"],
    hotspots: [
      { id: "bld-metric", label: "Ship cadence", icon: Rocket, category: "metric", title: "12 deploys / week", body: "Trunk-based development with feature flags and preview environments — releasing on demand without release trains.", meta: "sustained for 18 months" },
      { id: "bld-arch", label: "AI pipeline", icon: FlaskConical, category: "architecture", title: "LLM-in-the-loop pipeline", body: "A retrieval-augmented generation pipeline with a typed prompt/data contract. Model calls are cached and fall back to rules when the answer is already known.", meta: "token cost −63% via caching + routing" },
      { id: "bld-trade", label: "Testing trade-off", icon: TestTube, category: "tradeoff", title: "Practical over total", body: "Trade-off: not 100% coverage. Unit-test the domain, integration-test the API, and E2E the ten journeys that pay the bills — the rest stays fast and cheap.", meta: "Vitest + Playwright, ~84% core coverage" },
    ],
  },
  {
    id: "scale",
    num: "05",
    name: "Scale",
    headline: "Reliability is a feature users feel.",
    intro:
      "Observability, cost, and performance become product. The work here is quiet — until it isn't — so I make the quiet parts loud in dashboards.",
    capabilities: ["SLOs & alerting", "Distributed tracing", "Cost observability", "Perf budgets", "Capacity planning"],
    hotspots: [
      { id: "scl-metric", label: "Availability", icon: BarChart3, category: "metric", title: "99.97% uptime", body: "Across four SaaS products over 12 months, against an SLO of 99.95% — with meaningful alerts instead of page-fatigue.", meta: "12-month rolling" },
      { id: "scl-metric2", label: "Infra cost", icon: TrendingDown, category: "metric", title: "−38% infra spend", body: "Rightsizing, spot capacity in staging, and query tuning — without reducing feature velocity or reliability.", meta: "same MAU growth period" },
      { id: "scl-arch", label: "Observability stack", icon: Radar, category: "architecture", title: "Traces → logs → metrics", body: "OpenTelemetry traces join logs and metrics by trace-id, so a slow report is searchable in one query, not three tabs and a prayer.", meta: "OTel + Grafana + Sentry" },
      { id: "scl-trade", label: "Cost-latency trade", icon: LineChart, category: "tradeoff", title: "Cache more, invalidate smarter", body: "Trade-off: aggressive caching risks stale data. Solution: cache by tenant + versioned keys with explicit invalidation on write — freshness we can prove, not promise.", meta: "p99 for reads stayed < 120ms" },
    ],
  },
];

export const INTRO_STATS: Stat[] = [
  { v: "10+", k: "yrs full-stack" },
  { v: "30+", k: "shipped products" },
  { v: "4", k: "AI SaaS in prod" },
  { v: "99.9%", k: "avg availability" },
];

export const GITHUB_STATS: Stat[] = [
  { v: "2.4k", k: "stars" },
  { v: "48", k: "repositories" },
  { v: "1.6k", k: "contributions / yr" },
  { v: "120+", k: "PRs merged / yr" },
];

export const REPOS = [
  { name: "llm-pipe", desc: "Typed RAG pipeline for Next.js — caching, provider routing, and fallbacks baked in.", lang: "TypeScript", color: "#3178c6", stars: 812, tag: "AI", featured: true },
  { name: "tenant-kit", desc: "Multi-tenant SaaS starter with row-level security, RBAC, and API keys out of the box.", lang: "TypeScript", color: "#3178c6", stars: 645, tag: "SaaS", featured: true },
  { name: "prompt-registry", desc: "Versioned prompt and eval harness for LLM products — diff prompts like code.", lang: "TypeScript", color: "#3178c6", stars: 533, tag: "AI", featured: true },
  { name: "edge-metrics", desc: "Tiny OTel-friendly metrics helper for serverless — no agent, no vendor lock-in.", lang: "Go", color: "#00add8", stars: 421, tag: "Observability", featured: false },
  { name: "feature-flag-ui", desc: "Self-hosted flag manager with typed SDKs and a clean audit trail.", lang: "TypeScript", color: "#3178c6", stars: 298, tag: "DX", featured: false },
  { name: "saas-budget-copilot", desc: "CLI that reads cloud spend and suggests right-sizing — my own cost-anxiety, productized.", lang: "Python", color: "#3572A5", stars: 214, tag: "FinOps", featured: false },
];

export type Project = {
  name: string; domain: string; year: string; summary: string; stack: string[];
  problem: string; implementation: string; testing: string; delivery: string;
  outcomes: Stat[];
};
export const PROJECTS: Project[] = [
  {
    name: "Atlas", domain: "AI support copilot", year: "2025",
    summary: "An AI support copilot that drafts replies from a company's own docs — no model training, all retrieval.",
    stack: ["Next.js 15", "RSC", "tRPC", "Postgres + pgvector", "Prisma"],
    problem: "Support teams drowning in repeated tickets; managers wanted 'a chatbot', which was the wrong tool for a nuanced, regulated domain.",
    implementation: "Built a RAG pipeline: chunked and embedded the knowledge base, typed the prompt contract, and routed simple intents to deterministic answers with an LLM only for genuinely novel cases.",
    testing: "Eval harness for retrieval quality (nDCG on a golden set) in CI, plus Playwright E2E for the ten core journeys — answer quality regressions are caught before merge.",
    delivery: "Shipped an internal pilot in 5 weeks, then GA at 14 weeks. The 'wrong tool' framing saved two months of failed chatbot work.",
    outcomes: [{ v: "−62%", k: "time-to-first-reply" }, { v: "91%", k: "answer confidence" }, { v: "4wk", k: "from idea to pilot" }],
  },
  {
    name: "Canvas", domain: "collaborative planning", year: "2024",
    summary: "A real-time planning surface for distributed product teams, with offline-first sync.",
    stack: ["Next.js 14", "WebSocket", "Redis", "Postgres", "React Query"],
    problem: "Planning docs were documents, not tools — teams duplicated work across three apps and lost edits on flaky connections.",
    implementation: "CRDT-style last-write-wins fields with a server log for reconciliation; presence via a single multiplexed WebSocket; optimistic UI with typed conflict states.",
    testing: "Property-based tests for the sync merge logic (fast-check), load tests at 5k concurrent cursors, and visual regression on the canvas renderer.",
    delivery: "Rolled out to 400 paid teams behind a flag; cut over with zero downtime using a dual-write migration.",
    outcomes: [{ v: "0", k: "lost edits post-launch" }, { v: "5k", k: "concurrent users" }, { v: "+11%", k: "activation (7-day)" }],
  },
  {
    name: "Ledgerline", domain: "fintech onboarding", year: "2023",
    summary: "A calm 4-step onboarding that quietly moved 61% drop-off to an 18% lift in completion.",
    stack: ["React", "TypeScript", "Next.js API", "Postgres", "WorkOS"],
    problem: "A single-page form felt like a wall; errors were cryptic; keyboard and screen-reader users hit dead ends at step two.",
    implementation: "Typed step machine with explicit transitions, server-driven dynamic schema, and per-step validation with pre-flight server hints.",
    testing: "Vitest for the step/field-state machine, Playwright with axe in CI, VoiceOver and NVDA manual passes on every release.",
    delivery: "A/B-tested against the legacy form; rolled out globally behind flags in three weeks.",
    outcomes: [{ v: "+18%", k: "completion rate" }, { v: "−41%", k: "support tickets" }, { v: "98", k: "Lighthouse perf" }],
  },
];

export const LEADERSHIP = [
  { index: "01", title: "Leadership", desc: "I lead by writing the scary thing down. Architecture decision records, runbooks, and honest retro notes — so the team can move without ping-ponging decisions.", icon: GitCommit },
  { index: "02", title: "Mentoring", desc: "Nine engineers have grown a level with my pairing and review. I treat code review as teaching and PR feedback as a draft, not a verdict.", icon: Heart },
  { index: "03", title: "Values", desc: "Shipped and calm beats clever and late. I optimize for the user's time, the team's focus, and the thing we can measure — in that order.", icon: Star },
];

export const BUILD_PRINCIPLES = [
  { label: "TypeScript", detail: "end-to-end" },
  { label: "Test pyramid", detail: "unit → integration → E2E" },
  { label: "CI gates", detail: "lint · types · tests · budgets" },
  { label: "Trunk-based", detail: "flags + preview envs" },
];

export const NAV = [
  { label: "Discover", href: "#discover" },
  { label: "Design", href: "#design" },
  { label: "Build", href: "#build" },
  { label: "Scale", href: "#scale" },
  { label: "GitHub", href: "#github" },
  { label: "About", href: "#about" },
];
