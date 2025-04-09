import { Html,useProgress } from "@react-three/drei"

function Loader() {
  const {progress} = useProgress();
  return (
    <Html>
  <span 
    className="inline-block w-4 h-4 rounded-full animate-[mulShdSpin_1.1s_infinite_ease]"
    style={{
      fontSize: '10px',
      position: 'relative',
      textIndent: '-9999em',
      transform: 'translateZ(0)'
    }}
  />
  <p style={{fontSize:14 , color:'#f1f1f1',fontWeight:'800',marginTop:40}}>{progress.toFixed(2)}%</p>
</Html>
  )
}

export default Loader;