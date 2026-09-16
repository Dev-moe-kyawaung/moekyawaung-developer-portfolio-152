import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Group, MathUtils } from "three";

/** Build — a tower of code blocks assembling and rotating. */
export function BuildScene({ color = "#fbbf24" }: { color?: string }) {
  const group = useRef<Group>(null);
  useFrame(({ clock, pointer }) => {
    if (!group.current) return;
    const t = clock.elapsedTime;
    group.current.rotation.y = MathUtils.lerp(group.current.rotation.y, 0.3 + pointer.x * 0.5, 0.06);
    group.current.position.y = Math.sin(t * 0.5) * 0.12;
  });

  const cols = [-1.4, 0, 1.4];
  const rows = [1.0, 0.3, -0.4, -1.1];
  return (
    <group ref={group}>
      {rows.map((y, r) =>
        cols.map((x, c) => (
          <mesh key={`${r}-${c}`} position={[x, y, 0]} castShadow>
            <boxGeometry args={[1.2, 0.55, 0.4]} />
            <meshStandardMaterial
              color={r % 2 === 0 ? "#2a3040" : "#20242f"}
              emissive={color}
              emissiveIntensity={c === 1 ? 0.5 : 0.15}
              roughness={0.5}
              metalness={0.4}
            />
          </mesh>
        ))
      )}
      {/* glowing data stream */}
      <mesh position={[0, -1.4, 0.6]}>
        <boxGeometry args={[3.6, 0.08, 0.08]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={1.2} />
      </mesh>
    </group>
  );
}
