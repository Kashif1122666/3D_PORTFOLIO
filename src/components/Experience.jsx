import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import { motion } from "framer-motion"
import 'react-vertical-timeline-component/style.min.css'
import { styles } from "../styles"
import { experiences } from "../constants"
import { SectionWrapper } from "../hoc"
import { textVariant } from "../utils/motion"
import { div } from "three/src/nodes/TSL.js" 
import { backend } from "../assets"


const ExperienceCard = ({ experience }) => (
     <VerticalTimelineElement contentStyle={{background: '#1d1836', color: '#fff'}} contentArrowStyle={{borderRight: '7px solid #232631'}}  iconStyle={{background: experience.iconBg}} icon={ 
          <div className="flex justify-center items-center w-full h-full">
            <img src={backend} alt="icon" className="w-[60%] h-[60%] object-contain" />
          </div> }>

          <div>
            <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
          {/* <p className="text-gray-500 text-[16px] font-semibold " style={{margin:0}}></p> */}
          </div>
          <ul className="mt-5 list-disc ml-5 space-y-2">
             {
              experience.points.map((point, index) => (
                <li key={`experience-point-${index}`} className="text-[14px] pl-1 tracking-wider text-white">
                      {point}
                </li>
                ))
             }
          </ul>


     </VerticalTimelineElement>
    );
function Experience() {
  return (
    <>
    <motion.div variants={textVariant(0.1)}>
      <p className={styles.sectionSubText}>What I have done so far</p>
      <h2 className={styles.sectionHeadText}>Work Experience.</h2>
    </motion.div>
    <div className="mt-20 flex flex-col">
            <VerticalTimeline>
              {
                experiences.map((experience, index) => (
                  <ExperienceCard key={index} experience={experience}/>
              ))}
            </VerticalTimeline>
    </div>
    </>
  )
}

export default SectionWrapper(Experience, "work");