import React from 'react';
import ShinyText from './components/ShinyText';

const Header = () => {
  return (
    <header className="bg-transparent text-white px-6 py-4 flex gap-200 fixed top-2 z-3">
      <div className="text-4xl font-bold mb-4 font-mono"><ShinyText text="PORTFOLIO" disabled={false} speed={10} className='custom-class' /></div>
      <nav >
        <ul className="flex gap-8 text-xl font-mono">
          <li><a href="#home" className=" pb-1 relative inline-block text-cyan-300 transition-all duration-300 ease-in-out hover:text-emerald-400 hover:font-bold before:content-[''] before:absolute before:left-0 before:bottom-0 before:h-[4px] before:w-0 before:bg-emerald-400 before:transition-all before:duration-300 hover:before:w-full">Home</a></li>
          <li><a href="#about" className="pb-1 relative inline-block transition-all duration-300 ease-in-out hover:text-emerald-400 hover:font-bold before:content-[''] before:absolute before:left-0 before:bottom-0 before:h-[4px] before:w-0 before:bg-emerald-400 before:transition-all before:duration-300 hover:before:w-full">About</a></li>
          <li><a href="#skills" className="pb-1 relative inline-block transition-all duration-300 ease-in-out hover:text-emerald-400 hover:font-bold before:content-[''] before:absolute before:left-0 before:bottom-0 before:h-[4px] before:w-0 before:bg-emerald-400 before:transition-all before:duration-300 hover:before:w-full">Skills</a></li>
          <li><a href="#projects" className="pb-1 relative inline-block transition-all duration-300 ease-in-out hover:text-emerald-400 hover:font-bold before:content-[''] before:absolute before:left-0 before:bottom-0 before:h-[4px] before:w-0 before:bg-emerald-400 before:transition-all before:duration-300 hover:before:w-full">Projects</a></li>
          <li><a href="#contact" className="pb-1 relative inline-block transition-all duration-300 ease-in-out hover:text-emerald-400 hover:font-bold before:content-[''] before:absolute before:left-0 before:bottom-0 before:h-[4px] before:w-0 before:bg-emerald-400 before:transition-all before:duration-300 hover:before:w-full">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
