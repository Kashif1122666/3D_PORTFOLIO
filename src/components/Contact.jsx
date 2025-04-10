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
  const handleChange = (e) =>{
    const { name, value } = e.target;
    
    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleSubmit = (e) =>{
    e.preventDefault();
    setLoading(true); 
    emailjs.send(
      'service_zby025k',
      'template_vroagbw',
      {
        from_name: form.name,
        to_name: "Kashif",
        from_email: form.email,
        to_email: 'kashif1122666@gmail.com',
        message: form.message,

      },
      'w08CNGAmlZmbTrIuA'
    ).then(()=>{
      setLoading(false);
      alert("Thank you. I will get back to you as soon as possible.");
      setForm({
        name: "",
        email: "",
        message: "",
      });
    }, (error) => {
      setLoading(false);
      console.log(error);
      alert("Ahh, something went wrong. Please try again.");
      
    })
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden  justify-center items-center">
           <motion.div  variants={slideIn('left', 'tween', 0.2, 1)}  className="flex-[0.75] bg-[#0a102c] p-8 rounded-2xl w-full max-w-md" >
                <p className={`${styles.sectionSubText} text-center`}>Get in touch </p>
                <h3 className={`${styles.sectionHeadText} text-center mb-6`}>Contact. </h3>
                <form 
  ref={formRef} 
  onSubmit={handleSubmit} 
  className="mt-12 flex flex-col gap-6 px-4"  
>
  <label className="flex flex-col">
    <span className="text-white font-medium mb-2">Your Name</span> 
    <input 
      onChange={handleChange}
      type="text"
      name="name"
      value={form.name}
      placeholder="What's Your Name?"
      className="bg-[#151030] py-3 px-4 placeholder:text-gray-500 text-white rounded-lg border border-[#915eff]/50 focus:border-[#915eff] transition-all"  // Added border styling
    />
  </label>

  <label className="flex flex-col">
    <span className="text-white font-medium mb-2">Your Email</span>
    <input 
  onChange={handleChange}
  type="email"
  name="email"
  value={form.email}
  placeholder="What's Your Email?"
  className="bg-[#151030] py-3 px-4 placeholder:text-gray-500 text-white rounded-lg border border-[#915eff]/50 focus:border-[#915eff] transition-all"
/>
  </label>

  <label className="flex flex-col">
    <span className="text-white font-medium mb-2">Your Message</span>
    <textarea
    onChange={handleChange}
      rows="5"  
      name="message"
      value={form.message}
      placeholder="What do you want to say?"
      className="bg-[#151030] py-7 px-7 placeholder:text-gray-500 text-white rounded-lg border border-[#915eff]/50 focus:border-[#915eff] transition-all resize-none"  // Added resize-none
    />
  </label>

  <button 
    type="submit"
    className="bg-gradient-to-r from-[#915eff] to-[#804dee] py-3 px-6 text-white font-bold rounded-lg hover:opacity-90 transition-all mt-2 w-full"  // Improved button styling
  >
    {loading ? 'Sending...' : 'Send'}
  </button>
</form>
           </motion.div>
           <motion.div variants={slideIn('right' , 'tween' , 0.2, 1)} className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px] ">
                <EarthCanvas/>
           </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact");