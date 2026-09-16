import { useEffect, useState } from "react";

export type Theme = "light" | "dark";
export type Mode = "immersive" | "simple";

function readTheme(): Theme {
  if (typeof document === "undefined") return "dark";
  return document.documentElement.classList.contains("light") ? "light" : "dark";
}

/** Dark-first theme (this brief leans immersive/night). Persisted + system-aware. */
export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => readTheme());
  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    document.documentElement.classList.toggle("light", next === "light");
    try {
      localStorage.setItem("mk-theme", next);
    } catch {
      /* private mode */
    }
    setTheme(next);
  };
  return { theme, toggle };
}

export function readMode(): Mode {
  try {
    const s = localStorage.getItem("mk-mode");
    if (s === "immersive" || s === "simple") return s;
  } catch {
    /* ignore */
  }
  return "immersive";
}

/** Persisted "Immersive vs Simple" switch. */
export function useMode() {
  const [mode, setMode] = useState<Mode>(() => readMode());
  const set = (m: Mode) => {
    setMode(m);
    try {
      localStorage.setItem("mk-mode", m);
    } catch {
      /* ignore */
    }
  };
  return { mode, setMode: set };
}

export type DeviceProfile = { canImmersive: boolean; isTouch: boolean; prefersReducedMotion: boolean };

/** Single source of truth for whether WebGL should be allowed. */
export function useDeviceProfile(): DeviceProfile {
  const [profile, setProfile] = useState<DeviceProfile>(() => detect());
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const coarse = window.matchMedia("(pointer: coarse)");
    const update = () => setProfile(detect());
    reduced.addEventListener("change", update);
    coarse.addEventListener("change", update);
    window.addEventListener("resize", update);
    return () => {
      reduced.removeEventListener("change", update);
      coarse.removeEventListener("change", update);
      window.removeEventListener("resize", update);
    };
  }, []);
  return profile;

  function detect(): DeviceProfile {
    if (typeof window === "undefined")
      return { canImmersive: false, isTouch: false, prefersReducedMotion: false };
    const fine = window.matchMedia("(pointer: fine)").matches;
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const wide = window.innerWidth >= 900;
    const cores = (navigator.hardwareConcurrency ?? 8) >= 4;
    const hasGL = webglAvailable();
    return {
      canImmersive: fine && !coarse && wide && !reduced && cores && hasGL,
      isTouch: coarse && !fine,
      prefersReducedMotion: reduced,
    };
  }
}

function webglAvailable(): boolean {
  try {
    const c = document.createElement("canvas");
    return !!(c.getContext("webgl2") || c.getContext("webgl"));
  } catch {
    return false;
  }
}

/** True when the document is visible and the page is not scrolled far away (for WebGL pauses). */
export function useVisibility() {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const onVis = () => setVisible(!document.hidden);
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);
  return visible;
}

/** Observes .reveal elements and adds .in when they enter the viewport. */
export function useReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal:not(.in)"));
    if (!els.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}
