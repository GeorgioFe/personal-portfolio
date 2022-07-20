import React, {useState} from 'react'
import {FaBars, FaTimes, FaLinkedin, FaGithub, FaEnvelope} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'

const NavBar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
      <div className='text-3xl text-pink-600 font-bold font-[Raleway] cursor-pointer'>
        &lt;GeorgioFe/&gt;
      </div>

      {/* menu */}
      <ul className='hidden md:flex'>
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Work</li>
        <li>Contact Me</li>
      </ul>

      {/* hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars/> : <FaTimes/>}
      </div>

      {/* Mobile menu */}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
        <li className='py-6 text-4xl'>Home</li>
        <li className='py-6 text-4xl'>About</li>
        <li className='py-6 text-4xl'>Skills</li>
        <li className='py-6 text-4xl'>Work</li>
        <li className='py-6 text-4xl'>Contact Me</li>
      </ul>

      {/* Social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] bg-[#0A66C2] hover:ml-[-10px] duration-300'>
          <a className='flex justify-between items-center w-full text-gray-300' href='https://www.linkedin.com/in/georgio-feghali/'>
            LinkedIn <FaLinkedin size={30}/>
          </a>
        </li>
        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] bg-[#181717] hover:ml-[-10px] duration-300'>
          <a className='flex justify-between items-center w-full text-gray-300' href='https://github.com/GeorgioFe'>
            Github <FaGithub size={30}/>
          </a>
        </li>
        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] bg-pink-600 hover:ml-[-10px] duration-300'>
          <a className='flex justify-between items-center w-full text-gray-300' href='mailto: giorgiofeghali2002@icloud.com'>
            Email <FaEnvelope size={30}/>
          </a>
        </li>
        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] bg-orange-600 hover:ml-[-10px] duration-300'>
          <a className='flex justify-between items-center w-full text-gray-300' href='../assets/Georgio Feghali - CV.pdf' target='_tab'>
            Resume <BsFillPersonLinesFill size={30}/>
          </a>
        </li>
      </div>

    </div>
  )
}

export default NavBar
