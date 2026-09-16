import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Group, MathUtils } from "three";

/** Design — stacked, rotating data layers (database cylinders) with a shield core. */
export function DesignScene({ color = "#a5b4fc" }: { color?: string }) {
  const group = useRef<Group>(null);
  const layerGroup = useRef<Group>(null);
  useFrame(({ clock, pointer }) => {
    const t = clock.elapsedTime;
    if (group.current) group.current.rotation.y = MathUtils.lerp(group.current.rotation.y, pointer.x * 0.4, 0.05);
    if (layerGroup.current) layerGroup.current.rotation.y = t * 0.25;
  });

  const layers = [0.9, 1.6, 2.3];
  return (
    <group ref={group}>
      <group ref={layerGroup}>
        {layers.map((y, i) => (
          <mesh key={i} position={[0, y - 1.15, 0]}>
            <cylinderGeometry args={[1.25 - i * 0.22, 1.25 - i * 0.22, 0.5, 32]} />
            <meshStandardMaterial color="#1c2130" emissive={color} emissiveIntensity={0.12 + i * 0.1} roughness={0.4} metalness={0.5} />
          </mesh>
        ))}
        {/* shield core */}
        <mesh position={[0, 0.4, 0]} rotation={[0, Math.PI / 4, 0]}>
          <coneGeometry args={[0.5, 1.2, 4]} />
          <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.8} roughness={0.2} />
        </mesh>
      </group>
    </group>
  );
}
