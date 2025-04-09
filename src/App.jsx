import { BrowserRouter } from "react-router-dom"
 import {About,Contact,Experience,Feedbacks,Hero,Navbar,Tech,Works,StarsCanvas} from './components'
const App =()=> {
  return (
    <BrowserRouter >
        <div className=" z-2 bg-[#050816]">
       <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center mb-28">
        <Navbar/>
        <Hero/>
       </div >       
          <div className=" flex flex-col justify-center items-center relative z-20 -mt-20" >
          <About/>
          <Experience/>
          <Tech/>
          <Works/>
          <Feedbacks/>
          </div>
          <div className="relative z-0">
            <Contact/>
            <StarsCanvas/>
          </div>
        </div>
    </BrowserRouter>
  )
} 

export default App
