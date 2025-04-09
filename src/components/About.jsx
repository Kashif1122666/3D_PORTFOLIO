import React from 'react'
import { Tilt } from 'react-tilt'
import { motion }  from 'framer-motion'
import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'
const ServiceCard = ({index,title,icon}) => {
  return(
       <Tilt className='w-full sm:w-[45%] md:w-[40%] lg:w-[40%]'>
        <motion.div variants={fadeIn("right","spring", 0.5 * index, 0.75)} className=' w-full bg-gradient-to-r from-[#081031] to-[#020b33] p-[1px] rounded-[20px] border border-[#46bda7] shadow-card'>
                <div options={{
                  max: 45,
                  scale: 1,
                  speed: 450,
                }} className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'> 
                      <img src={icon} alt="title"  className='w-16 h-16 object-contain'/>
                <h3 className='text-white text-[20px] font-bold text-center'> {title} </h3>
                </div>
        </motion.div>

       </Tilt>
    )
};
function About() {
  return (
    <>
     <section className="  mt-11">
  <motion.div>
    <p className={styles.sectionSubText}>Introduction</p>
    <h2 className={styles.sectionHeadText}>Overview.</h2>
  </motion.div>
</section>
      <motion.p variants={fadeIn("","",0.1,1)} className="mt-4 text-gray-500 text-[17px] max-w-3xl leading-[30px]">
         I'm a skilled software developer with experience in JavaScript , and expertise in frameworks like React, Node.js, and Express.js. I have a strong foundation in web development, including HTML, CSS, and responsive design. I'm passionate about creating user-friendly applications and continuously learning new technologies to enhance my skills.
          I'm  a quick learner and collaborate effectively with teams to deliver high-quality software solutions. I have a strong foundation in computer science principles and a passion for problem-solving. I'm excited to contribute my skills to innovative projects and make a positive impact in the tech industry.         
      </motion.p>
      <div className=' flex flex-wrap justify-center gap-10 '>
            {services.map((service, index) => (
                <ServiceCard key={service.title} index={index} {...service } />
            ))}
      </div>
    </>
  )
}

export default SectionWrapper(About,"about");