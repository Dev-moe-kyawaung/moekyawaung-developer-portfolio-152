import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Group } from "three";

/** Discover — a constellation of question-marked nodes resolving into a bright core. */
export function DiscoverScene({ color = "#5eead4" }: { color?: string }) {
  const group = useRef<Group>(null);
  useFrame(({ clock }) => {
    if (!group.current) return;
    const t = clock.elapsedTime;
    group.current.rotation.y = Math.sin(t * 0.18) * 0.6;
    group.current.position.y = Math.sin(t * 0.4) * 0.08;
  });

  const points: [number, number, number][] = [
    [1.6, 0.6, 0.4], [-1.7, 0.9, -0.6], [0.8, -0.9, 0.8], [-1.1, -0.5, 0.9],
    [0.2, 1.1, -0.5], [1.9, -0.4, -0.6], [-1.9, 0.1, 0.3], [0.4, 0.2, 1.4],
    [-0.4, -1.1, -0.7], [1.2, 0.9, -0.9],
  ];

  return (
    <group ref={group}>
      {/* core */}
      <mesh>
        <icosahedronGeometry args={[0.55, 1]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.7} roughness={0.25} flatShading />
      </mesh>
      {/* orbiting nodes */}
      {points.map((p, i) => (
        <mesh key={i} position={p}>
          <boxGeometry args={[0.14, 0.14, 0.14]} />
          <meshStandardMaterial color="#888" emissive={color} emissiveIntensity={0.15 + (i % 3) * 0.12} roughness={0.6} />
        </mesh>
      ))}
      {/* connective lines via small boxes */}
      {points.map((p, i) => {
        const mid: [number, number, number] = [p[0] / 2, p[1] / 2, p[2] / 2];
        return (
          <mesh key={`l${i}`} position={mid} rotation={[0, 0, i * 0.7]}>
            <boxGeometry args={[0.02, 0.02, Math.hypot(p[0], p[1], p[2])]} />
            <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.4} transparent opacity={0.5} />
          </mesh>
        );
      })}
    </group>
  );
}
