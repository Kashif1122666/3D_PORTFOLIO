import { Suspense, use } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'
import  CanvasLoader  from '../Loader.jsx'
import { useEffect, useState } from 'react'

function Computers({isMobile}) {
  const computer = useGLTF('/desktop_pc/scene.gltf')
  

  const computerPosition = isMobile ? [0, -4.15, -1.5] : [0, -3.75, -1.5];
  const computerScale = isMobile ? 0.7 : 0.75;
  const spotLightPosition = isMobile ? [-15, 30, 10] : [-20, 50, 10];

  return (
    <mesh>
      <hemisphereLight intensity={0.5} groundColor="black" />
      <spotLight
        position={spotLightPosition}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive 
        object={computer.scene}
        position={computerPosition}
        scale={computerScale}
      />
    </mesh>
  )
}

export default function ComputersCanvas() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
       const mediaQuery = window.matchMedia('(max-width: 500px)');
        setIsMobile(mediaQuery.matches);
        const handleMediaQueryChange = (event)=>{
               setIsMobile(event.matches);
        }
        mediaQuery.addEventListener('change', handleMediaQueryChange);
        return () => {
           mediaQuery.removeEventListener('change',handleMediaQueryChange)
        }
  },[]);
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={CanvasLoader}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers  isMobile={isMobile}/>
      </Suspense>
    </Canvas>
  )
}