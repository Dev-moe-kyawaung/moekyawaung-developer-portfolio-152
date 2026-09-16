import { lazy, Suspense, useEffect, useState } from "react";
import { useTheme, useMode, useDeviceProfile, useVisibility, useReveal } from "./hooks/hooks";
import { Header } from "./components/simple/Header";
import { SimpleIntro } from "./components/simple/Intro";
import { StagePanel } from "./components/simple/Section";
import { SimpleProjects } from "./components/simple/Projects";
import { SimpleGithub } from "./components/simple/Github";
import { SimpleAbout } from "./components/simple/About";
import { SimpleContact } from "./components/simple/Contact";
import { ImmersiveIntro } from "./components/immersive/ImmersiveIntro";
import { ImmersiveOutro } from "./components/immersive/ImmersiveOutro";
import { ModeToggle } from "./components/ui";
import { STAGES } from "./data/journey";

// The WebGL surface is heavy — load it only when needed, inside a Suspense boundary.
const StageCanvas = lazy(() => import("./scenes/StageCanvas"));

export default function App() {
  const { theme, toggle } = useTheme();
  const { mode, setMode } = useMode();
  const profile = useDeviceProfile();
  const visible = useVisibility();
  useReveal();

  // Immersive is only possible on a capable desktop with WebGL; otherwise force simple.
  const immersiveActive = mode === "immersive" && profile.canImmersive;

  // The active "scene" index (0..4) drives the camera in immersive mode.
  const [sceneIndex, setSceneIndex] = useState(0);

  // If the device stops supporting immersive (resize / GL loss), snap back to simple.
  useEffect(() => {
    if (mode === "immersive" && !profile.canImmersive) setMode("simple");
  }, [mode, profile.canImmersive, setMode]);

  // Restore scroll after switching modes (the layout height changes dramatically).
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
    setSceneIndex(0);
  }, [immersiveActive]);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-[var(--ink)] focus:px-4 focus:py-2 focus:text-[13px] focus:font-medium focus:text-[var(--bg)]"
      >
        Skip to content
      </a>

      <Header theme={theme} onToggleTheme={toggle} />

      {/* Mode switch — always available */}
      <div className="fixed right-5 top-16 z-40 md:top-[72px]">
        <ModeToggle mode={mode} onChange={setMode} disabled={!profile.canImmersive} />
      </div>

      {/* Immersive WebGL layer, lazily mounted only when active */}
      {immersiveActive && (
        <Suspense fallback={<CanvasFallback />}>
          <StageCanvas index={sceneIndex} visible={visible} />
        </Suspense>
      )}

      <main id="main" className="relative z-10">
        {immersiveActive ? (
          <>
            <ImmersiveIntro />
            {/* One observer updates sceneIndex as panels cross the viewport center */}
            <JourneyLoopsticks onIndex={setSceneIndex} count={STAGES.length} />
            {STAGES.map((stage) => (
              <StagePanel key={stage.id} stage={stage} immersive />
            ))}
            <ImmersiveOutro />
          </>
        ) : (
          <>
            <SimpleIntro />
            {STAGES.map((stage) => (
              <StagePanel key={stage.id} stage={stage} />
            ))}
            <SimpleProjects />
            <SimpleGithub />
            <SimpleAbout />
            <SimpleContact />
          </>
        )}
      </main>
    </div>
  );
}

/**
 * Lightweight scroll observer: tells the 3D camera which stage is centered.
 * Runs regardless of GSAP, so the scene tracks keyboard + touch scrolling too.
 */
function JourneyLoopsticks({ onIndex, count }: { onIndex: (i: number) => void; count: number }) {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".journey-stage, #top, #discover, #design, #build, #scale"));
    const targets = els.length ? els : [document.body];
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const idx = Number((e.target as HTMLElement).dataset.index ?? 0);
          if (e.target.id === "top") onIndex(0);
          else if (e.target.id === "discover") onIndex(1);
          else if (e.target.id === "design") onIndex(2);
          else if (e.target.id === "build") onIndex(3);
          else if (e.target.id === "scale") onIndex(4);
          else if (idx) onIndex(idx);
        });
      },
      { threshold: 0.55 }
    );
    targets.forEach((t) => io.observe(t));
    return () => io.disconnect();
  }, [count, onIndex]);
  return null;
}

function CanvasFallback() {
  return (
    <div className="fixed inset-0 z-0 flex items-center justify-center bg-grid">
      <span className="font-mono text-sm text-[var(--muted)]">loading 3D scenes…</span>
    </div>
  );
}
