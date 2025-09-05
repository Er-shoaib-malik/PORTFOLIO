import React from 'react'
import ScrambledText from './components/ScrambledText'
import ScrollVelocity from './components/ScrollVelocity'
import { div } from 'three/tsl'

const about = () => {
  return (
  <div>

      <div id="about" className='scroll-smooth ml-40 pt-15 text-white mr-35 mt-50 text-4xl text-center grid place-items-center'>
        <div className='bg-gradient-to-r from-orange-400 to-emerald-400 h-20 w-50 border-none rounded-full text-4xl grid place-items-center mb-20'><p className="bg-gray-900 h-18 w-48 border-2 rounded-full border-transparent grid place-items-center font-bold">About Me</p></div>
        
      <div>
    
    <div className='border-1 border-white/10 h-120 w-300 border-none rounded-2xl text-4xl grid place-items-center mb-20'>
      <p className="backdrop-blur-md bg-white/5 h-118 p-5 w-298 border-2 rounded-xl border-transparent grid place-items-center font-normal">    
        <div className='flex text-emerald-400 text-4xl/14 font-light'>
        <div className='text-6xl font-semibold text-cyan-400'>I'm</div>
        <ScrambledText>
        from Muzaffarnagar Uttar Pradesh
     and I am currently pursuing Bachelor of Technology in Computer Science Engineering at Jaypee University of Technology.
      I am passionate about leveraging technology to solve complex problems and 
      I am dedicated to continuously enhancing my skills and knowledge in this dynamic field .
    Right now learning full stack development and Data structure and algorithms..
    </ScrambledText >
        </div></p>
        
      </div>
      </div>
      

    </div>
  </div>
  )
}

export default about
