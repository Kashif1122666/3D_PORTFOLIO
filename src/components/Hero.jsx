import { motion } from "framer-motion"
import { styles } from "../styles"
import { ComputersCanvas } from "./canvas"
import { section } from "framer-motion/client"
import herobg from '../../src/assets/herobg.png'
function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[600px]  sm:min-h-[700px] mx-auto bg-[url('../../src/assets/herobg.png')] bg-cover bg-center bg-no-repeat mt-[80px]">
   
    <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 z-10`}>
      <div className=" flex  relative gap-4 left-[50px] sm:left-[120px] md:left-[200px]">
        <div className="flex flex-col items-center">
          <div className="w-5 h-5 rounded-full bg-[#915eff] absolute top-0 z-10" />
          <div className="w-1 sm:h-80 h-40 bg-gradient-to-t from-[#804dee] to-transparent mt-5" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <br className="sm:hidden block" /> <span className="text-[#915eff]">Kashif</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white`}> I develop full stack <br className="sm:hidden block" /> web and mobile apps</p>
        </div>
      </div>
    </div>
  
    <div className="absolute inset-0 top-[150px] z-0 flex justify-center items-center">
      <ComputersCanvas />
    </div>
  
    <div className="xs:bottom-10 items-center absolute bottom-10 w-full flex justify-center z-10">
      <a href="#about">
        <div className="w-[35px] h-[64px] rounded-3xl border-4 border-[#6B7280] flex justify-center items-start p-2 mb-10">
          <motion.div
            animate={{
              y: [0, 24, 0]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: 'loop'
            }}
            className="w-3 h-3 rounded-full bg-[#915eff] mb-1"
          />
        </div>
      </a>
    </div>
  </section>
  
  )
}

export default Hero