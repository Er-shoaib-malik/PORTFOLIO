import React, { useState, useEffect } from 'react';

const Skills = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // All skills data with progress levels
  const skillsData = [
    { name: "HTML", image: "/html.png", progress: 95, color: "from-orange-500 to-red-500" },
    { name: "CSS", image: "/css.png", progress: 80, color: "from-blue-500 to-blue-600" },
    { name: "JavaScript", image: "/js.png", progress: 75, color: "from-yellow-400 to-yellow-600" },
    { name: "React", image: "/react.svg", progress: 80, color: "from-cyan-400 to-blue-500" },
    { name: "Tailwind", image: "/tailwind.svg", progress: 88, color: "from-teal-400 to-blue-500" },
    { name: "Node.js", image: "/node.png", progress: 75, color: "from-green-500 to-green-600" },
    { name: "Express", image: "/ex.svg", progress: 70, color: "from-gray-600 to-gray-800" },
    { name: "C", image: "/c.png", progress: 85, color: "from-blue-600 to-purple-600" },
    { name: "C++", image: "/cpp.svg", progress: 85, color: "from-blue-500 to-indigo-600" },
    { name: "Python", image: "/python.png", progress: 60, color: "from-yellow-500 to-blue-500" },
    { name: "SQL", image: "/sql.png", progress: 82, color: "from-orange-500 to-red-600" },
    { name: "PHP", image: "/php.png", progress: 65, color: "from-purple-500 to-indigo-600" }
  ];

  // Auto-cycle through skills
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % skillsData.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [skillsData.length]);

  const currentSkill = skillsData[currentIndex];

  return (
    <div className='grid place-items-center mt-50 p-10 mb-20' id="skills">
      {/* Header */}
      <div className='bg-gradient-to-r from-orange-400 to-emerald-400 h-20 w-50 border-none rounded-full text-4xl grid place-items-center mb-20'>
        <p className="bg-gray-900 h-18 w-48 border-2 rounded-full border-transparent grid place-items-center font-bold text-white">
          SKILLS
        </p>
      </div>

      {/* Split Screen Layout */}
      <div className="w-full max-w-7xl mx-auto h-96 flex gap-8">
        
        {/* Left Half - Animated Logo Display */}
        <div className="w-1/2 border border-white/10 rounded-2xl backdrop-blur-md bg-white/5 p-8 relative overflow-hidden">
          <div className="h-full flex flex-col justify-center items-center relative">
            {/* Background floating logos */}
            <div className="absolute inset-0 overflow-hidden opacity-10">
              {skillsData.map((skill, index) => (
                <div
                  key={index}
                  className="absolute animate-pulse"
                  style={{
                    left: `${(index * 37) % 80}%`,
                    top: `${(index * 23) % 70}%`,
                    animationDelay: `${index * 0.5}s`,
                    animationDuration: '4s'
                  }}
                >
                  <img 
                    src={skill.image} 
                    alt={skill.name}
                    className="h-12 w-12 opacity-30"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </div>
              ))}
            </div>

            {/* Main animated logo */}
            <div className="relative z-10 text-center">
              <div className="relative mb-6">
                {/* Animated rings around logo */}
                <div className="absolute inset-0 animate-spin" style={{ animationDuration: '8s' }}>
                  <div className={`w-40 h-40 border-2 border-dashed bg-gradient-to-r ${currentSkill.color} rounded-full opacity-20`}></div>
                </div>
                <div className="absolute inset-2 animate-spin" style={{ animationDuration: '6s', animationDirection: 'reverse' }}>
                  <div className="w-36 h-36 border border-dotted border-white/30 rounded-full"></div>
                </div>
                
                {/* Main logo */}
                <div className="relative z-10 w-40 h-40 flex items-center justify-center">
                  <img 
                    src={currentSkill.image} 
                    alt={currentSkill.name}
                    className="h-24 w-24 object-contain transition-all duration-500 hover:scale-110 animate-pulse"
                    style={{ animationDuration: '2s' }}
                    onError={(e) => {
                      e.target.src = `https://via.placeholder.com/96x96/666/fff?text=${currentSkill.name.charAt(0)}`;
                    }}
                  />
                </div>
              </div>

              {/* Skill name with glow effect */}
              <h3 className={`text-3xl font-bold font-mono text-transparent bg-clip-text bg-gradient-to-r ${currentSkill.color} mb-4 animate-pulse`}>
                {currentSkill.name}
              </h3>

              {/* Floating particles */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 bg-white/20 rounded-full animate-bounce"
                    style={{
                      left: `${20 + (i * 15)}%`,
                      top: `${30 + (i * 10)}%`,
                      animationDelay: `${i * 0.3}s`,
                      animationDuration: '3s'
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Skill indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {skillsData.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentIndex === index ? 'bg-white scale-150' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right Half - Progress Bars */}
        <div className="w-1/2 border border-white/10 rounded-2xl backdrop-blur-md bg-white/5 p-8 overflow-y-auto">
          <h2 className="text-white text-2xl mb-6 font-bold font-mono text-center">
            PROFICIENCY LEVELS
          </h2>
          
          <div className="space-y-4">
            {skillsData.map((skill, index) => (
              <div 
                key={index}
                className={`p-4 rounded-xl transition-all duration-500 ${
                  currentIndex === index 
                    ? 'bg-white/15 scale-105 shadow-lg border border-white/20' 
                    : 'bg-white/5 hover:bg-white/10'
                }`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <img 
                    src={skill.image} 
                    alt={skill.name}
                    className={`h-8 w-8 object-contain transition-all duration-300 ${
                      currentIndex === index ? 'scale-110' : ''
                    }`}
                    onError={(e) => {
                      e.target.src = `https://via.placeholder.com/32x32/666/fff?text=${skill.name.charAt(0)}`;
                    }}
                  />
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <h3 className={`font-semibold font-mono transition-colors duration-300 ${
                        currentIndex === index ? 'text-white text-lg' : 'text-gray-300'
                      }`}>
                        {skill.name}
                      </h3>
                      <span className={`text-sm font-medium transition-colors duration-300 ${
                        currentIndex === index ? 'text-white' : 'text-gray-400'
                      }`}>
                        {skill.progress}%
                      </span>
                    </div>
                    
                    {/* Progress bar */}
                    <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out ${
                          currentIndex === index ? 'animate-pulse' : ''
                        }`}
                        style={{ 
                          width: `${skill.progress}%`,
                          animationDuration: currentIndex === index ? '1s' : 'none'
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default Skills;
