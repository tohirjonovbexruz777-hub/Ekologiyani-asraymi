import { Canvas, type ThreeEvent, useFrame } from "@react-three/fiber";
import { Environment, Float, Lightformer, OrbitControls } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { Button } from "@/components/ui/button";

type Kind = "tree" | "pine" | "flower" | "rock" | "bush" | "lake" | "mushroom" | "butterfly" | "deer";

type Item = { id: number; kind: Kind; x: number; z: number; rot: number; scale: number };

export const palette: { kind: Kind; label: string; icon: string }[] = [
  { kind: "tree", label: "Daraxt", icon: "🌳" },
  { kind: "pine", label: "Qarag‘ay", icon: "🌲" },
  { kind: "flower", label: "Gul", icon: "🌷" },
  { kind: "bush", label: "Buta", icon: "🌿" },
  { kind: "rock", label: "Tosh", icon: "🪨" },
  { kind: "lake", label: "Ko‘lcha", icon: "💧" },
  { kind: "mushroom", label: "Qo‘ziqorin", icon: "🍄" },
  { kind: "butterfly", label: "Kapalak", icon: "🦋" },
  { kind: "deer", label: "Bug‘u", icon: "🦌" },
];

const STORAGE_KEY = "ekologiya-3d-bog";

function Tree() {
  return (
    <group>
      <mesh position-y={1} castShadow><cylinderGeometry args={[0.2, 0.28, 2, 9]} /><meshStandardMaterial color="#7a4e2d" roughness={0.9} /></mesh>
      <mesh position-y={2.4} castShadow><icosahedronGeometry args={[1.05, 1]} /><meshStandardMaterial color="#48a85b" roughness={0.85} /></mesh>
      <mesh position={[0.5, 2.1, 0.2]} castShadow><icosahedronGeometry args={[0.7, 1]} /><meshStandardMaterial color="#79c84a" roughness={0.85} /></mesh>
    </group>
  );
}

function Pine() {
  return (
    <group>
      <mesh position-y={0.55} castShadow><cylinderGeometry args={[0.14, 0.2, 1.1, 8]} /><meshStandardMaterial color="#6b4526" roughness={0.9} /></mesh>
      <mesh position-y={1.6} castShadow><coneGeometry args={[1, 1.6, 8]} /><meshStandardMaterial color="#2f8b52" roughness={0.85} /></mesh>
      <mesh position-y={2.5} castShadow><coneGeometry args={[0.7, 1.3, 8]} /><meshStandardMaterial color="#3aa05e" roughness={0.85} /></mesh>
    </group>
  );
}

function Flower() {
  return (
    <group>
      <mesh position-y={0.3}><cylinderGeometry args={[0.04, 0.05, 0.6, 6]} /><meshStandardMaterial color="#3f8f4a" /></mesh>
      <mesh position-y={0.68}><sphereGeometry args={[0.2, 12, 10]} /><meshStandardMaterial color="#ff6b8a" roughness={0.6} /></mesh>
      <mesh position-y={0.68} scale={[1.5, 0.25, 1.5]}><sphereGeometry args={[0.2, 12, 10]} /><meshStandardMaterial color="#ffd24a" /></mesh>
    </group>
  );
}

function Bush() {
  return (
    <group>
      <mesh position-y={0.4} castShadow><icosahedronGeometry args={[0.55, 1]} /><meshStandardMaterial color="#4fae5c" roughness={0.9} /></mesh>
      <mesh position={[0.4, 0.3, 0.2]} castShadow><icosahedronGeometry args={[0.35, 1]} /><meshStandardMaterial color="#6cc457" roughness={0.9} /></mesh>
    </group>
  );
}

function Rock() {
  return <mesh position-y={0.3} castShadow><dodecahedronGeometry args={[0.5, 0]} /><meshStandardMaterial color="#9aa0a6" roughness={1} /></mesh>;
}

function Lake() {
  return (
    <group>
      <mesh position-y={0.04} rotation-x={-Math.PI / 2}><circleGeometry args={[1.6, 40]} /><meshStandardMaterial color="#39a9db" roughness={0.25} metalness={0.1} /></mesh>
      <mesh position-y={0.02} rotation-x={-Math.PI / 2}><ringGeometry args={[1.6, 1.85, 40]} /><meshStandardMaterial color="#c9b483" roughness={0.95} /></mesh>
    </group>
  );
}

function Mushroom() {
  return (
    <group>
      <mesh position-y={0.2}><cylinderGeometry args={[0.09, 0.12, 0.4, 8]} /><meshStandardMaterial color="#f2e8d5" /></mesh>
      <mesh position-y={0.45} castShadow><sphereGeometry args={[0.26, 14, 10, 0, Math.PI * 2, 0, Math.PI / 2]} /><meshStandardMaterial color="#e04b4b" /></mesh>
    </group>
  );
}

function Butterfly() {
  const ref = useRef<THREE.Group>(null);
  useFrame(({ clock }) => {
    if (ref.current) ref.current.rotation.z = Math.sin(clock.elapsedTime * 6) * 0.5;
  });
  return (
    <Float speed={2} floatIntensity={0.8} rotationIntensity={0.4}>
      <group ref={ref} position-y={1.5} scale={0.6}>
        <mesh rotation={[0, 0.4, 0.35]}><sphereGeometry args={[0.34, 12, 8]} /><meshStandardMaterial color="#ffca3a" /></mesh>
        <mesh rotation={[0, -0.4, -0.35]}><sphereGeometry args={[0.34, 12, 8]} /><meshStandardMaterial color="#ff6b6b" /></mesh>
        <mesh scale={[0.12, 0.45, 0.12]}><sphereGeometry args={[1, 10, 8]} /><meshStandardMaterial color="#25312a" /></mesh>
      </group>
    </Float>
  );
}

function Deer() {
  return (
    <group scale={0.9}>
      <mesh position-y={0.75} scale={[1, 0.62, 0.55]} castShadow><sphereGeometry args={[0.6, 16, 12]} /><meshStandardMaterial color="#b6763f" roughness={0.85} /></mesh>
      <mesh position={[0.5, 1.15, 0]} castShadow><sphereGeometry args={[0.26, 14, 10]} /><meshStandardMaterial color="#c98a4f" /></mesh>
      <mesh position={[0.58, 1.45, 0.1]} rotation-z={0.4}><cylinderGeometry args={[0.03, 0.03, 0.45, 6]} /><meshStandardMaterial color="#6b4526" /></mesh>
      <mesh position={[0.58, 1.45, -0.1]} rotation-z={-0.4}><cylinderGeometry args={[0.03, 0.03, 0.45, 6]} /><meshStandardMaterial color="#6b4526" /></mesh>
      {([[0.35, 0.25], [0.35, -0.25], [-0.35, 0.25], [-0.35, -0.25]] as Array<[number, number]>).map(([x, z], i) => (
        <mesh key={i} position={[x, 0.24, z]}><cylinderGeometry args={[0.07, 0.07, 0.5, 6]} /><meshStandardMaterial color="#8a5a30" /></mesh>
      ))}
    </group>
  );
}

function Shape({ kind }: { kind: Kind }) {
  if (kind === "tree") return <Tree />;
  if (kind === "pine") return <Pine />;
  if (kind === "flower") return <Flower />;
  if (kind === "bush") return <Bush />;
  if (kind === "rock") return <Rock />;
  if (kind === "lake") return <Lake />;
  if (kind === "mushroom") return <Mushroom />;
  if (kind === "butterfly") return <Butterfly />;
  return <Deer />;
}

function World({ items, onGround, onPick }: { items: Item[]; onGround: (x: number, z: number) => void; onPick: (id: number) => void }) {
  return (
    <>
      <color attach="background" args={["#9bdcf4"]} />
      <fog attach="fog" args={["#9bdcf4", 22, 46]} />
      <hemisphereLight args={["#d8f4ff", "#547840", 1.1]} />
      <directionalLight position={[9, 13, 7]} intensity={2.1} castShadow shadow-mapSize-width={1024} shadow-mapSize-height={1024} />
      <Environment>
        <Lightformer intensity={2} position={[0, 8, 2]} scale={[12, 12, 1]} />
        <Lightformer intensity={1} color="#9de0b3" position={[-6, 2, -2]} rotation-y={Math.PI / 2} scale={[10, 5, 1]} />
      </Environment>
      <mesh
        rotation-x={-Math.PI / 2}
        receiveShadow
        onPointerDown={(event: ThreeEvent<PointerEvent>) => {
          event.stopPropagation();
          onGround(event.point.x, event.point.z);
        }}
      >
        <circleGeometry args={[15, 64]} />
        <meshStandardMaterial color="#79bf59" roughness={0.95} />
      </mesh>
      <mesh rotation-x={-Math.PI / 2} position-y={-0.02}><circleGeometry args={[15.6, 64]} /><meshStandardMaterial color="#5d9a45" /></mesh>
      {items.map((item) => (
        <group
          key={item.id}
          position={[item.x, 0, item.z]}
          rotation-y={item.rot}
          scale={item.scale}
          onPointerDown={(event: ThreeEvent<PointerEvent>) => {
            event.stopPropagation();
            onPick(item.id);
          }}
        >
          <Shape kind={item.kind} />
        </group>
      ))}
      <OrbitControls enablePan={false} minDistance={8} maxDistance={26} minPolarAngle={0.5} maxPolarAngle={1.35} />
    </>
  );
}

export function NatureBuilder() {
  const [items, setItems] = useState<Item[]>([]);
  const [kind, setKind] = useState<Kind>("tree");
  const [erasing, setErasing] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const nextId = useRef(1);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const saved = JSON.parse(raw) as Item[];
        setItems(saved);
        nextId.current = saved.reduce((max, item) => Math.max(max, item.id), 0) + 1;
      }
    } catch {
      /* saqlangan bog‘ o‘qilmadi */
    }
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (loaded) window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items, loaded]);

  function addItem(x: number, z: number) {
    if (erasing) return;
    setItems((prev) => [
      ...prev,
      { id: nextId.current++, kind, x, z, rot: Math.random() * Math.PI * 2, scale: 0.85 + Math.random() * 0.4 },
    ]);
  }

  function pick(id: number) {
    if (erasing) setItems((prev) => prev.filter((item) => item.id !== id));
  }

  return (
    <div className="grid gap-4">
      <div className="builder-bar">
        {palette.map((option) => (
          <button
            key={option.kind}
            type="button"
            onClick={() => { setKind(option.kind); setErasing(false); }}
            className={`builder-chip ${kind === option.kind && !erasing ? "builder-chip-active" : ""}`}
            aria-pressed={kind === option.kind && !erasing}
          >
            <span aria-hidden="true">{option.icon}</span>{option.label}
          </button>
        ))}
        <button type="button" onClick={() => setErasing((value) => !value)} className={`builder-chip ${erasing ? "builder-chip-danger" : ""}`} aria-pressed={erasing}>
          <span aria-hidden="true">🧽</span>O‘chirish
        </button>
      </div>
      <div className="h-[480px] w-full overflow-hidden rounded-lg border border-border bg-sky shadow-nature sm:h-[600px]">
        <Canvas shadows dpr={[1, 1.5]} camera={{ position: [10, 9, 12], fov: 48 }}>
          <World items={items} onGround={addItem} onPick={pick} />
        </Canvas>
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <p className="mr-auto text-sm font-bold text-muted-foreground">
          {erasing ? "O‘chirish rejimi: obyektni bosing." : "Yer ustini bosing — tanlangan obyekt qo‘shiladi."} · Obyektlar: {items.length}
        </p>
        <Button variant="outline" onClick={() => setItems((prev) => prev.slice(0, -1))} disabled={items.length === 0}>Oxirgisini olib tashlash</Button>
        <Button variant="destructive" onClick={() => setItems([])} disabled={items.length === 0}>Hammasini tozalash</Button>
      </div>
    </div>
  );
}
