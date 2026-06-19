import React, { useMemo, useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import type { Mesh } from "three";
import * as THREE from "three";
import { Box } from "@mui/material";

type FaceConfig = {
  title: string;
  subtitle: string;
  accent: string;
  variant: "default" | "angular" | "react";
};

const CORE_TECH = [
  { name: ".NET / C#", accent: "#512bd4", icon: "dot" as const },
  { name: "Nest.js", accent: "#e0234e", icon: "dot" as const },
  { name: "Angular", accent: "#dd0031", icon: "angular" as const },
  { name: "React", accent: "#61dafb", icon: "dot" as const },
] as const;

const SIDE_FACES: FaceConfig[] = [
  { title: ".NET", subtitle: "C# Development", accent: "#512bd4", variant: "default" },
  { title: "Nest.js", subtitle: "Full Stack API", accent: "#e0234e", variant: "default" },
  { title: "Angular", subtitle: "Enterprise UI", accent: "#dd0031", variant: "angular" },
  { title: "React", subtitle: "Modern Frontend", accent: "#61dafb", variant: "react" },
];

const FACE_INDEX = {
  right: 0,
  left: 1,
  top: 2,
  bottom: 3,
  front: 4,
  back: 5,
} as const;

const CUBE_SCALE = 2.0;

function drawAngularIcon(ctx: CanvasRenderingContext2D, cx: number, cy: number, size: number) {
  const h = size;

  ctx.fillStyle = "#dd0031";
  ctx.beginPath();
  ctx.moveTo(cx, cy - h * 0.52);
  ctx.lineTo(cx + h * 0.48, cy - h * 0.17);
  ctx.lineTo(cx + h * 0.39, cy + h * 0.48);
  ctx.lineTo(cx, cy + h * 0.28);
  ctx.lineTo(cx - h * 0.39, cy + h * 0.48);
  ctx.lineTo(cx - h * 0.48, cy - h * 0.17);
  ctx.closePath();
  ctx.fill();

  ctx.fillStyle = "#ffffff";
  ctx.beginPath();
  ctx.moveTo(cx, cy - h * 0.22);
  ctx.lineTo(cx + h * 0.17, cy + h * 0.22);
  ctx.lineTo(cx + h * 0.08, cy + h * 0.22);
  ctx.lineTo(cx + h * 0.05, cy + h * 0.1);
  ctx.lineTo(cx - h * 0.05, cy + h * 0.1);
  ctx.lineTo(cx - h * 0.08, cy + h * 0.22);
  ctx.lineTo(cx - h * 0.17, cy + h * 0.22);
  ctx.closePath();
  ctx.fill();

  ctx.fillStyle = "#dd0031";
  ctx.fillRect(cx - h * 0.11, cy + h * 0.04, h * 0.22, h * 0.06);
}

function drawAngularMark(ctx: CanvasRenderingContext2D, cx: number, cy: number) {
  drawAngularIcon(ctx, cx, cy, 100);
}

function drawReactMark(ctx: CanvasRenderingContext2D, cx: number, cy: number) {
  ctx.strokeStyle = "#61dafb";
  ctx.lineWidth = 3;
  const radii = [0, Math.PI / 3, (2 * Math.PI) / 3];
  radii.forEach((angle) => {
    ctx.beginPath();
    ctx.ellipse(cx, cy, 52, 20, angle, 0, Math.PI * 2);
    ctx.stroke();
  });
  ctx.fillStyle = "#61dafb";
  ctx.beginPath();
  ctx.arc(cx, cy, 8, 0, Math.PI * 2);
  ctx.fill();
}

function fillBackground(ctx: CanvasRenderingContext2D) {
  const bg = ctx.createLinearGradient(0, 0, 512, 512);
  bg.addColorStop(0, "#0f1a2e");
  bg.addColorStop(1, "#050816");
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, 512, 512);
}

function createTechOverviewTexture(): THREE.CanvasTexture {
  const canvas = document.createElement("canvas");
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext("2d");
  if (!ctx) {
    throw new Error("Canvas 2D context unavailable");
  }

  fillBackground(ctx);

  ctx.fillStyle = "#00d2c8";
  ctx.fillRect(0, 0, 512, 6);

  ctx.fillStyle = "#ffffff";
  ctx.font = "bold 46px Inter, system-ui, sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("Core Stack", 256, 78);

  ctx.fillStyle = "#94a3b8";
  ctx.font = "500 24px Inter, system-ui, sans-serif";
  ctx.fillText("Full Stack Development", 256, 118);

  ctx.strokeStyle = "rgba(255, 255, 255, 0.12)";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(72, 142);
  ctx.lineTo(440, 142);
  ctx.stroke();

  const startY = 192;
  const rowHeight = 66;

  CORE_TECH.forEach((tech, index) => {
    const y = startY + index * rowHeight;

    ctx.fillStyle = `${tech.accent}28`;
    ctx.beginPath();
    ctx.roundRect(72, y - 24, 368, 48, 10);
    ctx.fill();

    ctx.strokeStyle = `${tech.accent}55`;
    ctx.lineWidth = 1.5;
    ctx.stroke();

    if (tech.icon === "angular") {
      drawAngularIcon(ctx, 104, y, 22);
    } else {
      ctx.fillStyle = tech.accent;
      ctx.beginPath();
      ctx.arc(104, y, 7, 0, Math.PI * 2);
      ctx.fill();
    }

    ctx.fillStyle = "#ffffff";
    ctx.font = "600 30px Inter, system-ui, sans-serif";
    ctx.textAlign = "left";
    ctx.fillText(tech.name, 126, y + 1);
  });

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.needsUpdate = true;
  return texture;
}

function createLabelTexture({ title, subtitle, accent, variant }: FaceConfig): THREE.CanvasTexture {
  const canvas = document.createElement("canvas");
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext("2d");
  if (!ctx) {
    throw new Error("Canvas 2D context unavailable");
  }

  fillBackground(ctx);

  ctx.fillStyle = accent;
  ctx.fillRect(0, 0, 512, 6);

  if (variant === "angular") {
    drawAngularMark(ctx, 256, 175);
  } else if (variant === "react") {
    drawReactMark(ctx, 256, 175);
  } else {
    ctx.strokeStyle = accent;
    ctx.lineWidth = 3;
    ctx.strokeRect(48, 48, 416, 416);
  }

  const titleY = variant === "default" ? 250 : 310;
  ctx.fillStyle = "#ffffff";
  ctx.font = "bold 58px Inter, system-ui, sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(title, 256, titleY);

  ctx.fillStyle = accent;
  ctx.font = "500 32px Inter, system-ui, sans-serif";
  ctx.fillText(subtitle, 256, titleY + 58);

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.needsUpdate = true;
  return texture;
}

function makeMaterial(map: THREE.Texture, accent: string): THREE.MeshStandardMaterial {
  return new THREE.MeshStandardMaterial({
    map,
    emissive: new THREE.Color(accent),
    emissiveIntensity: 0.12,
    metalness: 0.15,
    roughness: 0.55,
  });
}

const SpinningLogoBoxMesh: React.FC = () => {
  const mesh = useRef<Mesh>(null!);
  const logoTexture = useLoader(THREE.TextureLoader, "/donnelly-tech-solutions.png");

  const materials = useMemo(() => {
    logoTexture.colorSpace = THREE.SRGBColorSpace;

    const mats = new Array<THREE.MeshStandardMaterial>(6);
    mats[FACE_INDEX.right] = makeMaterial(createLabelTexture(SIDE_FACES[0]), SIDE_FACES[0].accent);
    mats[FACE_INDEX.left] = makeMaterial(createLabelTexture(SIDE_FACES[1]), SIDE_FACES[1].accent);
    mats[FACE_INDEX.top] = makeMaterial(logoTexture, "#00d2c8");
    mats[FACE_INDEX.bottom] = makeMaterial(createLabelTexture(SIDE_FACES[2]), SIDE_FACES[2].accent);
    mats[FACE_INDEX.front] = makeMaterial(createTechOverviewTexture(), "#00d2c8");
    mats[FACE_INDEX.back] = makeMaterial(createLabelTexture(SIDE_FACES[3]), SIDE_FACES[3].accent);
    return mats;
  }, [logoTexture]);

  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.x += 0.008;
      mesh.current.rotation.y += 0.012;
    }
  });

  return (
    <mesh ref={mesh} scale={CUBE_SCALE} castShadow receiveShadow material={materials}>
      <boxGeometry args={[2, 2, 2]} />
    </mesh>
  );
};

const SpinningLogoBox: React.FC = () => {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 480,
        aspectRatio: "1 / 1",
        margin: "0 auto",
        p: 1,
        borderRadius: 2,
        backgroundColor: "rgba(255, 255, 255, 0.06)",
        boxShadow: 3,
      }}
    >
      <Canvas
        style={{
          width: "100%",
          height: "100%",
        }}
        shadows
        camera={{ position: [4.5, 4.5, 4.5], fov: 45 }}
      >
        <ambientLight intensity={0.65} />
        <directionalLight
          position={[5, 10, 5]}
          intensity={1.4}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-near={0.5}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        <pointLight position={[-4, 4, 4]} intensity={0.6} color="#00d2c8" />
        <pointLight position={[4, -2, 3]} intensity={0.4} color="#a855f7" />
        <SpinningLogoBoxMesh />
        <mesh
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, -(CUBE_SCALE + 0.05), 0]}
          receiveShadow
        >
          <planeGeometry args={[10, 10]} />
          <shadowMaterial opacity={0.25} />
        </mesh>
        <OrbitControls enableZoom={false} />
      </Canvas>
    </Box>
  );
};

export default SpinningLogoBox;
