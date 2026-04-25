import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html, OrbitControls, RoundedBox, Text, useTexture } from "@react-three/drei";
import { ChevronLeft, ChevronRight, RotateCw } from "lucide-react";

const projects = [
  {
    title: "Cult Eyewear",
    tag: "E-commerce / Brand",
    image: "/portfolio/mocks/cult.png",
    color: "#a855f7",
    device: "macbook",
  },
  {
    title: "Verana Health",
    tag: "Healthcare Product UI",
    image: "/portfolio/mocks/verana.png",
    color: "#22d3ee",
    device: "macbook",
  },
  {
    title: "Core5 Learning",
    tag: "Education Platform",
    image: "/portfolio/mocks/core5.png",
    color: "#ec4899",
    device: "macbook",
  },
  {
    title: "First Help Financial",
    tag: "Mobile App UI",
    image: "/portfolio/mocks/firsthlp.png",
    color: "#3b82f6",
    device: "iphone",
  },
  {
    title: "My Little Pony",
    tag: "Interactive Kids Site",
    image: "/portfolio/mocks/MLP.png",
    color: "#f59e0b",
    device: "iphone",
  },
] as const;

type Project = (typeof projects)[number];

function MacBookFrame({ project }: { project: Project }) {
  const texture = useTexture(project.image);

  return (
    <group>
      {/* laptop screen shell */}
      <RoundedBox args={[2.65, 1.62, 0.12]} radius={0.08} smoothness={10}>
        <meshStandardMaterial color="#111827" roughness={0.32} metalness={0.45} />
      </RoundedBox>

      {/* screen bezel */}
      <RoundedBox args={[2.48, 1.43, 0.04]} radius={0.045} smoothness={8} position={[0, 0.04, 0.075]}>
        <meshStandardMaterial color="#050509" roughness={0.25} metalness={0.2} />
      </RoundedBox>

      {/* screenshot */}
      <mesh position={[0, 0.04, 0.1]}>
        <planeGeometry args={[2.34, 1.26]} />
        <meshBasicMaterial map={texture} toneMapped={false} />
      </mesh>

      {/* camera dot */}
      <mesh position={[0, 0.77, 0.13]}>
        <circleGeometry args={[0.025, 24]} />
        <meshStandardMaterial color="#1f2937" roughness={0.2} metalness={0.4} />
      </mesh>

      {/* laptop base */}
      <RoundedBox args={[2.9, 0.14, 0.85]} radius={0.045} smoothness={8} position={[0, -0.92, -0.2]} rotation={[0.18, 0, 0]}>
        <meshStandardMaterial color="#2b2b3f" roughness={0.26} metalness={0.72} />
      </RoundedBox>

      {/* trackpad */}
      <RoundedBox args={[0.65, 0.025, 0.28]} radius={0.025} smoothness={6} position={[0, -0.87, 0.08]} rotation={[0.18, 0, 0]}>
        <meshStandardMaterial color="#3f3f57" roughness={0.3} metalness={0.6} />
      </RoundedBox>
    </group>
  );
}

function IPhoneFrame({ project }: { project: Project }) {
  const texture = useTexture(project.image);

  return (
    <group>
      {/* phone body */}
      <RoundedBox args={[0.9, 1.85, 0.14]} radius={0.16} smoothness={14}>
        <meshStandardMaterial color="#111827" roughness={0.22} metalness={0.7} />
      </RoundedBox>

      {/* glass face */}
      <RoundedBox args={[0.8, 1.68, 0.04]} radius={0.12} smoothness={12} position={[0, 0, 0.09]}>
        <meshStandardMaterial color="#030712" roughness={0.1} metalness={0.2} />
      </RoundedBox>

      {/* screenshot */}
      <mesh position={[0, -0.02, 0.12]}>
        <planeGeometry args={[0.72, 1.48]} />
        <meshBasicMaterial map={texture} toneMapped={false} />
      </mesh>

      {/* notch */}
      <RoundedBox args={[0.34, 0.065, 0.035]} radius={0.03} smoothness={8} position={[0, 0.78, 0.145]}>
        <meshStandardMaterial color="#020617" roughness={0.18} metalness={0.35} />
      </RoundedBox>
    </group>
  );
}

function ProjectCard({
  project,
  index,
  active,
  total,
  onSelect,
}: {
  project: Project;
  index: number;
  active: number;
  total: number;
  onSelect: () => void;
}) {
  const cardRef = useRef<any>(null);

  const angle = (index / total) * Math.PI * 2;
  const radius = 3.25;
  const isActive = index === active;
  const scale = project.device === "iphone" ? 0.86 : 0.92;

  useFrame((state) => {
    if (!cardRef.current) return;

    const rotationOffset = active * -((Math.PI * 2) / total);
    const currentAngle = angle + rotationOffset;

    const targetX = Math.sin(currentAngle) * radius;
    const targetZ = Math.cos(currentAngle) * radius;

    cardRef.current.position.x += (targetX - cardRef.current.position.x) * 0.08;
    cardRef.current.position.z += (targetZ - cardRef.current.position.z) * 0.08;
    cardRef.current.position.y = Math.sin(state.clock.elapsedTime + index) * 0.05;

    cardRef.current.rotation.y +=
      (Math.atan2(targetX, targetZ) - cardRef.current.rotation.y) * 0.08;

    const targetScale = isActive ? scale * 1.12 : scale * 0.92;
    cardRef.current.scale.x += (targetScale - cardRef.current.scale.x) * 0.08;
    cardRef.current.scale.y += (targetScale - cardRef.current.scale.y) * 0.08;
    cardRef.current.scale.z += (targetScale - cardRef.current.scale.z) * 0.08;
  });

  return (
    <group ref={cardRef} onClick={onSelect}>
      <pointLight color={project.color} intensity={isActive ? 1.4 : 0.35} distance={2.3} position={[0, 0.3, 0.9]} />

      {project.device === "iphone" ? (
        <IPhoneFrame project={project} />
      ) : (
        <MacBookFrame project={project} />
      )}

      <Text
        position={[0, project.device === "iphone" ? -1.2 : -1.2, 0.28]}
        fontSize={0.105}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
        maxWidth={2.4}
      >
        {project.title}
      </Text>
    </group>
  );
}

function Scene({
  active,
  setActive,
}: {
  active: number;
  setActive: (value: number) => void;
}) {
  const groupRef = useRef<any>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.22) * 0.04;
  });

  return (
    <>
      <ambientLight intensity={1.35} />
      <pointLight position={[2, 4, 5]} intensity={3.2} />
      <pointLight position={[-4, -2, -2]} intensity={1.5} color="#22d3ee" />

      <group ref={groupRef} rotation={[0.06, 0, 0]}>
        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            project={project}
            index={index}
            active={active}
            total={projects.length}
            onSelect={() => setActive(index)}
          />
        ))}
      </group>

      {/* glowing stage */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.12, 0]}>
        <circleGeometry args={[3.55, 128]} />
        <meshStandardMaterial color="#11112a" transparent opacity={0.55} />
      </mesh>

      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.1, 0]}>
        <ringGeometry args={[3.05, 3.08, 128]} />
        <meshBasicMaterial color="#a855f7" transparent opacity={0.65} />
      </mesh>

      <Html position={[0, 1.72, 0]} center>
        <div className="rounded-full border border-cyan-300/30 bg-white/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.3em] text-cyan-100 backdrop-blur-md">
          Drag to rotate
        </div>
      </Html>

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        minPolarAngle={1.1}
        maxPolarAngle={1.8}
      />
    </>
  );
}

export default function WebGLPortfolioHero() {
  const [active, setActive] = useState(0);
  const [isPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % projects.length);
    }, 4500);

    return () => window.clearInterval(timer);
  }, [isPaused]);

  const next = () => {
    setActive((current) => (current + 1) % projects.length);
  };

  const prev = () => {
    setActive((current) => (current - 1 + projects.length) % projects.length);
  };

  const activeProject = projects[active];

  return (
    <div className="relative h-full min-h-[560px] w-full overflow-visible bg-transparent">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(34,211,238,0.2),transparent_34%),radial-gradient(circle_at_75%_20%,rgba(168,85,247,0.24),transparent_30%)]" />

      <Canvas camera={{ position: [0, 1.18, 6.35], fov: 45 }} className="relative z-10">
        <Suspense fallback={null}>
          <Scene active={active} setActive={setActive} />
        </Suspense>
      </Canvas>

      <div className="pointer-events-none absolute left-6 top-6 z-20">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-white/40">
          Featured Work
        </p>
        <h3 className="mt-2 text-2xl font-bold text-white">{activeProject.title}</h3>
        <p className="text-sm text-cyan-200">{activeProject.tag}</p>
      </div>

      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3 rounded-full border border-white/10 bg-black/35 p-2 backdrop-blur-xl">
        <button onClick={prev} className="rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20" aria-label="Previous project">
          <ChevronLeft className="h-5 w-5" />
        </button>

        <button onClick={next} className="rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 p-3 text-white transition hover:scale-105" aria-label="Rotate projects">
          <RotateCw className="h-5 w-5" />
        </button>

        <button onClick={next} className="rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20" aria-label="Next project">
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      <div className="pointer-events-none absolute bottom-24 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {projects.map((project, index) => (
          <span
            key={project.title}
            className={`h-2 rounded-full transition-all ${
              index === active ? "w-8 bg-violet-400" : "w-2 bg-white/25"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
