import React,{Suspense} from 'react'
import { Canvas } from '@react-three/fiber'
import { Decal,Float , OrbitControls,Preload,useTexture } from '@react-three/drei'
import CanvasLoader from '../Loader.jsx'
function Ball(props) {
  const [decal] = useTexture([props.imgUrl]);
  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.5]} />
      <mesh castShadow receiveShadow scale={2.75} >
         <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="white"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          map={decal}
          flatShading
        /> 
      </mesh>
    </Float>
  )
}

const BallCanvas = ({icon}) => {
      return(
<Canvas
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls
          enableZoom={false}
        />
        <Ball imgUrl={icon}/>
      </Suspense>
    </Canvas>
      )
};
export default BallCanvas;
