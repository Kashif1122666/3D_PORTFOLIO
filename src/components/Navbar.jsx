import React ,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom'
import { styles } from '../styles'
import { navLinks } from '../constants'
import { logo,menu,close } from '../assets'
function Navbar() {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  return (
    <nav className={`   sm:px-16 px-6 w-full flex items-center  py-5 fixed top-0 z-20 bg-[#050816] my-20`}>
          <div className='w-full flex justify-around items-center max-w-7xl mx-auto'>
             <Link to='/' className='flex items-center gap-2' onClick={() => {
              setActive('') 
              window.scrollTo(0, 0)
            }
              }>
              <img src={logo} alt='logo' className='w-9 h-9 object-contain' />
              <p className='text-white text-[18px] font-bold cursor-pointer '>Kashif &nbsp;<span className=''>Zaman</span></p> 
             </Link>
             <ul className='list-none hidden sm:flex flex-row gap-10'>
               {
                navLinks.map((link)=> (
                  <li key={link.id}
                  onClick={()=> setActive(link.title)}
                  className={`${
                    active === link.title ? 'text-white' : 'text-gray-400'
                  } hover:text-white text-[18px] font-medium cursor-pointer`}
                  >
                    <a href={`#${link.id}`}>{link.title}</a>
                   </li>
                )
               )}
             </ul>
             <div className='sm:hidden flex flex-1 justify-end items-center'>
              <img src={toggle ? close : menu } alt='menu' className='w-[28px] h-[28px] object-contain cursor-pointer'
              onClick={() => setToggle(!toggle)}
              />
              <div className={`${!toggle ? 'hidden' : 'flex'} p-4 bg-[linear-gradient(to_right,#434343,#000000)] absolute top-20 right-0 mx-4 my-2 min-w-[200px] rounded-xl`}>
              <ul className='list-none flex justify-end items-start flex-col gap-4 w-full'>
  {navLinks.map((link) => (
    <li 
      key={link.id}
      onClick={() => {
        setActive(link.title);
        setToggle(!toggle);
      }}
      className={`${
        active === link.title ? 'text-white' : 'text-gray-400'
      }font-poppins font-medium cursor-pointer text-[16px]`} 
    >
      <a href={`#${link.id}`}>{link.title}</a>
    </li>
  ))}
</ul>
              </div>
              
             </div>
          </div>
    </nav>
  )
}

export default Navbar