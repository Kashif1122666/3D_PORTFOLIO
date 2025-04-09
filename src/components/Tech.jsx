import { BallCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { technologies } from "../constants"
import { div } from "framer-motion/client";
function Tech() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
          {
            technologies.map((technology) => (
              <div className="w-28 h-28 " key={technology.name}>
                <BallCanvas icon={technology.icon} />
               
              </div>
            ))
          }
    </div>
  )
}

export default SectionWrapper(Tech, "");