import React from 'react'
import {FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaSwift} from 'react-icons/fa'
import {SiCplusplus, SiJulia} from 'react-icons/si'

const Skills = () => {
  return (
    <div name="skills" className='w-full h-screen bg-[#0a192f] text-gray-300'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl inline font-bold border-b-4 border-b-pink-600'>Skills</p>
                <p className='py-4'>// These are the tools and technologies I've worked with.</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 gap-y-16'>
                <div className='flex flex-col text-center mx-auto hover:scale-125 duration-300'>
                    <FaHtml5 size={120} style={{fill:'#E34F26'}}/>
                    <p>HTML</p>
                </div>

                <div className='flex flex-col text-center mx-auto hover:scale-125 duration-300'>
                    <FaCss3Alt size={120} style={{fill:'#1572B6'}}/>
                    <p>CSS</p>
                </div>

                <div className='flex flex-col text-center mx-auto hover:scale-125 duration-300'>
                    <FaJs size={120} style={{fill:'#F7DF1E'}}/>
                    <p>JavaScript</p>
                </div>

                <div className='flex flex-col text-center mx-auto hover:scale-125 duration-300'>
                    <FaReact size={120} style={{fill:'#61DAFB'}}/>
                    <p>React</p>
                </div>

                <div className='flex flex-col text-center mx-auto hover:scale-125 duration-300'>
                    <SiCplusplus size={110} style={{color:'#00599C'}}/>
                    <p className='pt-2'>C++</p>
                </div>

                <div className='flex flex-col text-center mx-auto hover:scale-125 duration-300'>
                    <FaPython size={120} style={{fill:'#3776AB'}}/>
                    <p>Python</p>
                </div>

                <div className='flex flex-col text-center mx-auto hover:scale-125 duration-300'>
                    <FaSwift size={120} style={{fill:'#F05138'}}/>
                    <p>Swift</p>
                </div>

                <div className='flex flex-col text-center mx-auto hover:scale-125 duration-300'>
                    <SiJulia size={110} style={{fill:'#9558B2'}}/>
                    <p className='pt-2'>Julia</p>
                </div>

            </div>

        </div>
    </div>
  )
}

export default Skills