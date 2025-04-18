import React from 'react'
import Tilt from 'react-parallax-tilt';
import { motion }  from 'framer-motion'
import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'
const ServiceCard = ({index,title,icon}) => {
  return(
    <Tilt className='w-full sm:w-[90%] md:w-[45%] lg:w-[30%]'>

        <motion.div variants={fadeIn("right","spring", 0.5 * index, 0.75)} className=' w-full bg-gradient-to-r from-[#081031] to-[#020b33] p-[1px] rounded-[20px] border border-[#46bda7] shadow-card'>
                <div options={{
                  max: 45,
                  scale: 1,
                  speed: 450,
                }} className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'> 
                      <img src={icon} alt="title"  className='w-16 h-16 object-contain'/>
                      <h3 className='text-white text-[18px] sm:text-[20px] font-bold text-center'>{title}</h3>

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
      I'm a skilled MERN Stack Developer with experience in JavaScript, MongoDB, Express.js, React.js, and Node.js. I have a strong foundation in web development, including HTML, CSS, and responsive design, and I'm passionate about building scalable, user-friendly applications.

I'm a quick learner who collaborates effectively with teams to deliver high-performance software solutions. With a solid grasp of computer science principles and a problem-solving mindset, I thrive on turning ideas into efficient, real-world applications. I'm always expanding my skillset to stay ahead in the tech industry and contribute to impactful projects.       
      </motion.p>
      <div className='flex flex-wrap justify-center items-center gap-10 px-5'>

            {services.map((service, index) => (
                <ServiceCard key={service.title} index={index} {...service } />
            ))}
      </div>
    </>
  )
}

export default SectionWrapper(About,"about");