import React from 'react';
import { div } from 'three/tsl';

const Skills = () => {
  return (
    <div className='grid place-items-center mt-50 p-10'id="skills">
        <div className='bg-gradient-to-r from-orange-400 to-emerald-400 h-20 w-50 border-none rounded-full text-4xl grid place-items-center mb-20'><p className="bg-gray-900 h-18 w-48 border-2 rounded-full border-transparent grid place-items-center font-bold text-white">SKILLS</p></div>

        <div
        
        className="grid grid-cols-2 gap-10 px-10 py-16 w-full max-w-6xl mx-auto"
        >

        <div className="col-span-2 border-1 border-white/10 rounded-2xl grid place-items-center p-6  backdrop-blur-md bg-white/5">
            <p className="text-white text-2xl mb-4 font-bold font-mono">WEB TECHNOLOGIES / FRAMEWORKS</p>
            <div className="flex flex-wrap gap-4 items-center">
            <img src="/html.png" alt="HTML" className="h-20 hover:scale-110 transition-all duration-250 transition-transform-linear" />
            <img src="/css.png" alt="CSS" className="h-20 hover:scale-110 transition-all duration-250 transition-transform-linear" />
            <img src="/js.png" alt="JS" className="h-20 hover:scale-110 transition-all duration-250 transition-transform-linear" />
            <img src="/react.svg" alt="React" className="h-20 hover:scale-110 transition-all duration-250 transition-transform-linear" />
            <img src="/tailwind.svg" alt="Tailwind" className="h-20 hover:scale-110 transition-all duration-250 transition-transform-linear" />            
            <img src="/node.png" alt="Tailwind" className="h-20 hover:scale-110 transition-all duration-250 transition-transform-linear" />
            <img src="/ex.svg" alt="Tailwind" className="h-20 hover:scale-110 transition-all duration-250 transition-transform-linear" />            
            </div>
        </div>


        <div className="border-1 p-6 border-white/10 rounded-2xl grid place-items-center  backdrop-blur-md bg-white/5">
            <p className="text-white text-2xl mb-4 font-bold font-mono">
            PROGRAMMING LANGUAGES
            </p>
            <div className="flex gap-4 items-center">
            <img src="/c.png" alt="C" className="h-20 hover:scale-110 transition-all duration-250 transition-transform-linear" />
            <img src="/python.png" alt="Python" className="h-20 hover:scale-110 transition-all duration-250 transition-transform-linear" />
            </div>
        </div>

        {/* Bottom right: Other */}
        <div className="border-1 p-6 border-white/10 rounded-2xl grid place-items-center backdrop-blur-md bg-white/5">
            <p className="text-white text-2xl mb-4 font-bold font-mono">OTHER</p>
            <div className="flex gap-4 items-center">
            <img src="/sql.png" alt="SQL" className="h-20 hover:scale-110 transition-all duration-250 transition-transform-linear" />
            <img src="/php.png" alt="PHP" className="h-20 hover:scale-110 transition-all duration-250 transition-transform-linear" />
            </div>
        </div>
        </div>

    </div>
  );
};

export default Skills;
