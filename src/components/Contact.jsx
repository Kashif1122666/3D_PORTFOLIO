import { useState,useRef } from "react"
import { motion } from "framer-motion"
import emailjs from "@emailjs/browser"
import { styles } from "../styles"
import { EarthCanvas } from "./canvas"
import  { SectionWrapper } from "../hoc"
import { slideIn } from "../utils/motion"

function Contact() {
  
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const handleChange = (e) =>{};
  const handleSubmit = (e) =>{};

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden  justify-center items-center">
           <motion.div  variants={slideIn('left', 'tween', 0.2, 1)}  className="flex-[0.75] bg-[#0a102c] p-8 rounded-2xl w-full max-w-md" >
                <p className={`${styles.sectionSubText} text-center`}>Get in touch </p>
                <h3 className={`${styles.sectionHeadText} text-center mb-6`}>Contact. </h3>
                <form 
  ref={formRef} 
  onSubmit={handleSubmit} 
  className="mt-12 flex flex-col gap-6 px-4"  // Added px-4 for inner padding
>
  {/* Name Input */}
  <label className="flex flex-col">
    <span className="text-white font-medium mb-2">Your Name</span>  {/* Reduced mb-4 to mb-2 */}
    <input 
      type="text"
      name="name"
      value={form.name}
      placeholder="What's Your Name?"
      className="bg-[#151030] py-3 px-4 placeholder:text-gray-500 text-white rounded-lg border border-[#915eff]/50 focus:border-[#915eff] transition-all"  // Added border styling
    />
  </label>

  {/* Email Input */}
  <label className="flex flex-col">
    <span className="text-white font-medium mb-2">Your Email</span>
    <input 
      type="email"
      name="email"
      value={form.email}
      placeholder="What's Your Email?"
      className="bg-[#151030] py-3 px-4 placeholder:text-gray-500 text-white rounded-lg border border-[#915eff]/50 focus:border-[#915eff] transition-all"
    />
  </label>

  {/* Message Textarea */}
  <label className="flex flex-col">
    <span className="text-white font-medium mb-2">Your Message</span>
    <textarea
      rows="5"  // Reduced from 7
      name="message"
      value={form.message}
      placeholder="What do you want to say?"
      className="bg-[#151030] py-3 px-4 placeholder:text-gray-500 text-white rounded-lg border border-[#915eff]/50 focus:border-[#915eff] transition-all resize-none"  // Added resize-none
    />
  </label>

  {/* Submit Button */}
  <button 
    type="submit"
    className="bg-gradient-to-r from-[#915eff] to-[#804dee] py-3 px-6 text-white font-bold rounded-lg hover:opacity-90 transition-all mt-2 w-full"  // Improved button styling
  >
    {loading ? 'Sending...' : 'Send'}
  </button>
</form>
           </motion.div>
           <motion.div variants={slideIn('right' , 'tween' , 0.2, 1)} className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
                <EarthCanvas/>
           </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "Contact");