import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Group } from "three";

/** Scale — an expanding grid of nodes radiating from a reliable core. */
export function ScaleScene({ color = "#5eead4" }: { color?: string }) {
  const group = useRef<Group>(null);
  useFrame(({ clock }) => {
    if (!group.current) return;
    const t = clock.elapsedTime;
    group.current.rotation.y = t * 0.15;
    group.current.scale.setScalar(1 + Math.sin(t * 0.3) * 0.05);
  });

  const ring1: [number, number, number][] = [
    [1.4, 0, 0], [0, 1.4, 0], [-1.4, 0, 0], [0, -1.4, 0],
  ];
  const ring2: [number, number, number][] = [
    [2.1, 0.2, 0.4], [-2.1, -0.2, -0.4], [0.4, 0.2, 2.1], [-0.4, -0.2, -2.1],
    [0.3, 2.0, 0.2], [-0.3, -2.0, -0.2],
  ];

  return (
    <group ref={group}>
      <mesh>
        <octahedronGeometry args={[0.6, 0]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.8} roughness={0.2} />
      </mesh>
      {ring1.map((p, i) => (
        <mesh key={`r1-${i}`} position={p}>
          <sphereGeometry args={[0.16, 16, 16]} />
          <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.9} roughness={0.2} />
        </mesh>
      ))}
      {ring2.map((p, i) => (
        <mesh key={`r2-${i}`} position={p}>
          <sphereGeometry args={[0.12, 12, 12]} />
          <meshStandardMaterial color="#9aa2b1" emissive={color} emissiveIntensity={0.3} roughness={0.5} />
        </mesh>
      ))}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2.1, 0.015, 8, 64]} />
        <meshBasicMaterial color={color} transparent opacity={0.4} />
      </mesh>
    </group>
  );
}
