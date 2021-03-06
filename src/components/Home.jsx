import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import Typewriter from 'typewriter-effect';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      
      {/* Comtainer */}
      <div className='max-w-[1020px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600'>Hi there, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6] pb-2'>Georgio Feghali</h1>
        <div className='flex items-center text-3xl sm:text-7xl font-bold text-[#8892b0]'>
          <h2>I'm a&nbsp;</h2>
          <Typewriter
              options={{
              strings: ["Software Engineer.", "Full Stack Developer.", "UI/UX Designer.", "Data Scientist."],
              autoStart: true,
              loop: true,}}
          />
        </div>
        
        <p className='text-gray-300 py-4'>Welcome to my website, I am a process-oriented computer engineering student, 
          lifelong learner, and adventurer with a professional background in computer software engineering. 
          Motivated by the opportunity that the tech industry provides to positively impact the life of an individual, 
          and the world as a whole.
        </p>
        <div>
          <button className='text-white border-2 py-3 px-6 my-2 flex items-center group hover:border-pink-600 hover:bg-pink-600'>
            View Work
            <span className='group-hover:rotate-90 group-hover:ml-2 duration-300'>
            <HiArrowNarrowRight className='ml-3'/>
            </span>
          </button>
        </div>
      </div>

    </div>
  )
}

export default Home