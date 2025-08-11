import React, { useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import type { Mesh } from "three";
import * as THREE from "three";
import { Box } from "@mui/material";

const SpinningLogoBoxMesh: React.FC<{ scale?: number }> = () => {
  const mesh = useRef<Mesh>(null!);
  const texture = useLoader(
    THREE.TextureLoader,
    "/donnelly-tech-solutions.png"
  );

  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.x += 0.01;
      mesh.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={mesh} scale={1.8} castShadow receiveShadow>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial map={texture} emissiveIntensity={0.3} />
    </mesh>
  );
};

const SpinningLogoBox: React.FC = () => {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 420,
        aspectRatio: "1 / 1", // keeps it square
        margin: "0 auto 20px",
        p: 2,
        borderRadius: 2,
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        boxShadow: 3,
      }}
    >
      <Canvas
        style={{
          width: "100%",
          maxWidth: 400,
          aspectRatio: "1 / 1",
          margin: "0 auto",
        }}
        shadows
        camera={{ position: [5, 5, 5], fov: 50 }}
      >
        <ambientLight intensity={0.3} />
        <directionalLight
          position={[5, 10, 5]}
          intensity={1}
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
        <SpinningLogoBoxMesh />
        {/* Plane to catch shadow */}
        <mesh
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, -1.1, 0]}
          receiveShadow
        >
          <planeGeometry args={[10, 10]} />
          <shadowMaterial opacity={0.3} />
        </mesh>

        <OrbitControls enableZoom={false} />
      </Canvas>
    </Box>
  );
};

export default SpinningLogoBox;
