import { useRef } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";

function Scene() {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const mesh = meshRef.current;
    const material = mesh?.material as THREE.ShaderMaterial | undefined;

    if (!mesh || !material?.uniforms?.uTime) return;

    mesh.rotation.z = state.clock.elapsedTime * 0.04;
    material.uniforms.uTime.value = state.clock.elapsedTime;
  });

  return (
    <mesh ref={meshRef} scale={[3, 3, 1]}>
      <planeGeometry args={[2, 2, 64, 64]} />
      <shaderMaterial
        transparent
        uniforms={{
          uTime: { value: 0 },
        }}
        vertexShader={`
          varying vec2 vUv;
          uniform float uTime;

          void main() {
            vUv = uv;
            vec3 pos = position;

            float wave1 = sin((pos.x * 3.0) + uTime * 0.4) * 0.03;
            float wave2 = cos((pos.y * 4.0) - uTime * 0.35) * 0.03;

            pos.z += wave1 + wave2;

            gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
          }
        `}
        fragmentShader={`
          varying vec2 vUv;
          uniform float uTime;

          void main() {
            vec2 uv = vUv;

            float drift =
              sin(uv.x * 8.0 + uTime * 0.25) * 0.04 +
              cos(uv.y * 10.0 - uTime * 0.2) * 0.04;

            vec3 deep = vec3(0.02, 0.05, 0.12);
            vec3 blue = vec3(0.10, 0.22, 0.52);
            vec3 violet = vec3(0.33, 0.18, 0.55);
            vec3 teal = vec3(0.06, 0.40, 0.38);

            float g1 = smoothstep(0.0, 1.0, uv.x + drift);
            float g2 = smoothstep(0.15, 0.95, uv.y - drift);

            vec3 color = mix(deep, blue, g1);
            color = mix(color, violet, g2 * 0.55);
            color = mix(color, teal, sin(uTime * 0.18 + uv.x * 6.0) * 0.08 + 0.12);

            float vignette = 1.0 - smoothstep(0.2, 0.95, distance(uv, vec2(0.5)));
            color *= 0.75 + vignette * 0.35;

            gl_FragColor = vec4(color, 0.42);
          }
        `}
      />
    </mesh>
  );
}

export default function WebGLBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 opacity-100">
      <Canvas camera={{ position: [0, 0, 1] }} dpr={[1, 1.5]}>
        <Scene />
      </Canvas>
    </div>
  );
}