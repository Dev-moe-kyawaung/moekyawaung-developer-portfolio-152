import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Group, MathUtils } from "three";

/** Intro — a calm orbital welcome: core, rings, and floating nodes. */
export function IntroScene({ color = "#5eead4" }: { color?: string }) {
  const group = useRef<Group>(null);
  useFrame(({ pointer }) => {
    if (!group.current) return;
    group.current.rotation.y = MathUtils.lerp(group.current.rotation.y, pointer.x * 0.6, 0.06);
    group.current.rotation.x = MathUtils.lerp(group.current.rotation.x, -pointer.y * 0.25, 0.06);
  });

  const nodes: [number, number, number][] = [
    [1.9, 0.4, 0], [-1.6, -0.6, 0.5], [0.6, 1.7, -0.4], [-0.4, -1.8, 0.2], [2.3, -0.7, -0.8],
  ];
  return (
    <group ref={group}>
      <mesh>
        <dodecahedronGeometry args={[0.85, 0]} />
        <meshStandardMaterial color="#181d28" emissive={color} emissiveIntensity={0.5} roughness={0.2} metalness={0.6} flatShading />
      </mesh>
      <mesh rotation={[Math.PI / 2.4, 0, 0]}>
        <torusGeometry args={[1.55, 0.02, 8, 80]} />
        <meshBasicMaterial color={color} transparent opacity={0.55} />
      </mesh>
      <mesh rotation={[Math.PI / 1.7, 0.5, 0]}>
        <torusGeometry args={[2.0, 0.012, 8, 80]} />
        <meshBasicMaterial color={color} transparent opacity={0.3} />
      </mesh>
      {nodes.map((p, i) => (
        <mesh key={i} position={p}>
          <sphereGeometry args={[0.11, 12, 12]} />
          <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.8} roughness={0.3} />
        </mesh>
      ))}
    </group>
  );
}
