import * as THREE from "three";

/** Scene constants and helpers shared by the journey scenes. */

export const STAGE_POSITIONS: Record<string, [number, number, number]> = {
  intro: [0, 0, 0],
  discover: [8, 0, 0],
  design: [16, 0, 0],
  build: [24, 0, 0],
  scale: [32, 0, 0],
  github: [40, 0, 0],
};

// Per-stage accent color (teal / indigo / amber rotation).
export const STAGE_COLORS: Record<string, string> = {
  intro: "#5eead4",
  discover: "#5eead4",
  design: "#a5b4fc",
  build: "#fbbf24",
  scale: "#5eead4",
  github: "#a5b4fc",
};

export function hex(c: string) {
  return new THREE.Color(c);
}

/** Small deterministic pseudo-random for building stable procedural deco. */
export function seeded(seed: number) {
  let s = seed % 2147483647;
  if (s <= 0) s += 2147483646;
  return () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}
