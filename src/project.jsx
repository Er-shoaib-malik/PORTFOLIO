import React from 'react';

const Project = () => {
  return (
    <div className="text-white px-6 py-10 max-w-6xl mx-auto " id="projects">

      <div className='flex flex-col place-items-center mb-10'>
        <div className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-20 w-50 border-none rounded-2xl text-4xl grid place-items-center mb-2'><p className="bg-gray-900 h-18 w-48 border-2 rounded-xl border-transparent grid place-items-center font-bold">Projects</p></div>
      
        <p className="text-gray-400 mt-2">A showcase of my personal and academic work</p>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        {[
          {
            title: 'Amazon Clone',
            desc: 'Developed Amazon frontend using HTML and CSS.',
          },
          {
            title: 'Scientific Calculator',
            desc: 'Built using HTML, CSS, and JavaScript with advanced functions.',
          },
          {
            title: 'Mini Games',
            desc: 'Created Rock Paper Scissors and Tic Tac Toe using JS.',
          },
        ].map((proj, i) => (
          <div
            key={i}
            className="backdrop-blur-md bg-white/5 p-6 rounded-xl border border-white/10 shadow-lg transition hover:scale-[1.02] duration-300"
          >
            <h3 className="text-xl font-semibold text-cyan-300 mb-2">{proj.title}</h3>
            <p className="text-sm text-gray-300">{proj.desc}</p>
          </div>
        ))}
      </div>

      <div className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-xl transition">
        <h2 className="text-3xl font-bold mb-2 text-purple-400">Minor Project</h2>
        <h3 className="text-2xl font-semibold mb-4 text-white">Outpass Automation System</h3>
        <p className="text-gray-300 text-sm mb-6 leading-relaxed">
          A web-based automation system to digitize and streamline student outpass approvals, reduce paperwork, and facilitate seamless real-time communication between students, wardens, and security personnel.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
          <div>
            <h4 className="font-semibold text-pink-400 mb-1">Frontend</h4>
            <ul className="list-disc list-inside text-gray-300">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-pink-400 mb-1">Backend</h4>
            <ul className="list-disc list-inside text-gray-300">
              <li>PHP</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-pink-400 mb-1">Database</h4>
            <ul className="list-disc list-inside text-gray-300">
              <li>MySQL</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
