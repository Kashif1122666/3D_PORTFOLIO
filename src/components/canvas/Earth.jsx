import React, { Suspense, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader.jsx";

const Earth = () => {
  const earth = useGLTF("/planet/scene.gltf");


  
  const { scene, nodes, materials } = useGLTF('/planet/scene.gltf');
  console.log('Earth Model:', scene);

  return (
    <primitive object={earth.scene} 
    scale={window.innerWidth >= 1280 ? 3.5 : 2.5} 
    position-y={0} 
    rotation-y={0} />
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
      className="w-full h-full min-h-[300px] xl:min-h-[500px]"
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
