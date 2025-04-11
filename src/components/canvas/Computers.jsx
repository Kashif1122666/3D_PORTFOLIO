import { Suspense, use } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'
import  CanvasLoader  from '../Loader.jsx'
import { useEffect, useState } from 'react'

function Computers({isMobile}) {
  const computer = useGLTF('/desktop_pc/scene.gltf');

  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)'); // Mobile aswell as Tablet
    setIsMobileOrTablet(mediaQuery.matches);
    
    const handleMediaQueryChange = (event) => {
      setIsMobileOrTablet(event.matches);
    };
    
    mediaQuery.addEventListener('change', handleMediaQueryChange);
    
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  
  const computerPosition = isMobileOrTablet ? [0, -4.15, -1.5] : [0, -3.5, -1.5];
const computerScale = isMobileOrTablet ? [0.5, 0.5, 0.5] : [0.8, 0.8, 0.8];
  const spotLightPosition = isMobile ? [-15, 30, 10] : [-20, 50, 10];

  

  return (
    <mesh>
     <hemisphereLight intensity={0.15} groundColor="black" />
<spotLight
  position={[-20, 50, 10]}
  angle={0.12}
  penumbra={1}
  intensity={1}
  castShadow
  shadow-mapSize={1024}
/>
<pointLight intensity={1} />

      <spotLight
        position={spotLightPosition}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
    <primitive object={computer.scene} scale={computerScale} position={computerPosition} />

    </mesh>
  )
}


export default function ComputersCanvas() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
        setIsMobile(mediaQuery.matches);
        const handleMediaQueryChange = (event)=>{
               setIsMobile(event.matches);
        }
        mediaQuery.addEventListener('change', handleMediaQueryChange);
        return () => {
           mediaQuery.removeEventListener('change',handleMediaQueryChange)
        }
  },[]);
  const cameraPosition = isMobile ? [10, 3, 4] : [20, 3, 5];
const cameraFov = isMobile ? 35 : 25;
  return (
    <Canvas
    frameloop="always"
    shadows
    dpr={[1, 2]}
    camera={{ position: cameraPosition, fov: cameraFov }}
    gl={{ preserveDrawingBuffer: true }}
  >

<Suspense fallback={<CanvasLoader />}>

      <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />



        <Computers  isMobile={isMobile}/>
      </Suspense>
    </Canvas>
  )
}