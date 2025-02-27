"use client"
import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Preload, useGLTF } from "@react-three/drei"
import { CanvasLoader } from "./canvas-loader"
const Computer = () => {
  const computer = useGLTF("/desktop_pc/scene.gltf")
  return (
    <mesh>
      <ambientLight intensity={1} />
      <hemisphereLight intensity={0.5} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight
        position={[-20, 500, 10]}
        angle={0.12}
        penumbra={1}
        intense={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={computer.scene}
        scale={0.75}
        position={[0, -1, -0.4]}
        rotation={[-0.01, -0.9, -0.15]}
      />
    </mesh>
  )
}

export const ComputerCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computer />
      </Suspense>

      <Preload all />
    </Canvas>
  )
}
