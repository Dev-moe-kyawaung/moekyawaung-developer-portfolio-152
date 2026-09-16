import { Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { MathUtils } from "three";
import { IntroScene } from "./IntroScene";
import { DiscoverScene } from "./DiscoverScene";
import { DesignScene } from "./DesignScene";
import { BuildScene } from "./BuildScene";
import { ScaleScene } from "./ScaleScene";
import { STAGE_COLORS } from "./sceneProps";

/**
 * Camera rig: gently eases toward the active stage index.
 * Scenes sit at fixed world positions; the camera does the journey,
 * smoothing with a damped lerp so ScrollTrigger feels cinematic.
 */
function CameraRig({ index, visible }: { index: number; visible: boolean }) {
  useFrame(({ camera }, delta) => {
    if (!visible) return;
    const x = index * 2.4;
    const target = { x, y: 1.5 + Math.sin(x * 0.4) * 0.08, z: 4.6 };
    camera.position.x = MathUtils.damp(camera.position.x, target.x, 3.2, delta);
    camera.position.y = MathUtils.damp(camera.position.y, target.y, 3.2, delta);
    camera.position.z = MathUtils.damp(camera.position.z, target.z, 3.2, delta);
    camera.lookAt(x, 0.3, 0);
  });
  return null;
}

/**
 * A single WebGL surface holding all journey scenes. Text is never rendered
 * in WebGL — DOM panels overlay it, staying crisp and accessible. Off-screen
 * (demand frameloop + visibility handling) pauses rendering.
 */
export default function StageCanvas({ index, visible }: { index: number; visible: boolean }) {
  return (
    <Canvas
      camera={{ position: [0, 1.5, 4.6], fov: 42 }}
      dpr={[1, 1.5]}
      frameloop={visible ? "always" : "never"}
      gl={{ antialias: true, powerPreference: "high-performance", alpha: true }}
      style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none" }}
      fallback={<TextFallback index={index} />}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.45} />
        <directionalLight position={[4, 6, 4]} intensity={0.9} />
        <pointLight position={[0, 1, 4]} intensity={14} color="#8fd0ff" />
        <CameraRig index={index} visible={visible} />
        <IntroScene color={STAGE_COLORS.intro} />
        <DiscoverScene color={STAGE_COLORS.discover} />
        <DesignScene color={STAGE_COLORS.design} />
        <BuildScene color={STAGE_COLORS.build} />
        <ScaleScene color={STAGE_COLORS.scale} />
      </Suspense>
    </Canvas>
  );
}

/** Accessible static fallback when WebGL is unavailable. */
function TextFallback({ index }: { index: number }) {
  const labels = ["Welcome", "Discover", "Design", "Build", "Scale"];
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <span className="font-mono text-sm text-[var(--muted)]">3D scene · {labels[index] ?? "—"}</span>
    </div>
  );
}
