import { BrowserRouter } from "react-router-dom"
 import {About,Contact,Experience,Feedbacks,Hero,Navbar,Tech,Works,StarsCanvas} from './components'
const App =()=> {
  return (
    <BrowserRouter >
        <div className=" z-2 bg-[#050816] gap-20">
       <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center mb-28 gap-20">
        <Navbar/>
        <Hero/>
       </div >       
          <div className=" flex flex-col justify-center items-center relative z-20 -mt-20 gap-20" >
          <div className="flex flex-col justify-center items-center  gap-40">
          <About/>
          <Experience/>
          </div>
          <Tech/>
          <Works/>
          {/* <Feedbacks/> */}
          <div className="relative z-0">
            <Contact/>
            <StarsCanvas/>
          </div>
          </div>
        </div>
    </BrowserRouter>
  )
} 

export default App
