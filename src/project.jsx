import React, { useState, useEffect } from "react";
import { FaGithub, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Project = () => {
  const projects = [
    {
      title: "Amazon Clone",
      desc: "Developed Amazon frontend using HTML and CSS.",
      github: "https://github.com/Er-shoaib-malik/mini-games/tree/main/amazonclone",
    },
    {
      title: "Scientific Calculator",
      desc: "Built using HTML, CSS, and JavaScript with advanced functions.",
      github: "https://github.com/Er-shoaib-malik/mini-games/tree/main/calc",
    },
    {
      title: "Mini Games",
      desc: "Created Rock Paper Scissors and Tic Tac Toe using JS.",
      github: "https://github.com/Er-shoaib-malik/mini-games/tree/main/tictactoe",
    },
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + projects.length) % projects.length);
  };

  // Auto-slide every 4 seconds
  useEffect(() => {
    const timer = setInterval(nextSlide, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-white px-6 py-10 max-w-6xl mx-auto" id="projects">
      {/* Section Header */}
      <div className="flex flex-col place-items-center mb-6">
        <div className="bg-gradient-to-r from-orange-400 to-emerald-400 h-20 w-50 rounded-full text-4xl grid place-items-center mb-1.5">
          <p className="bg-gray-900 h-18 w-48 border-2 rounded-full border-transparent grid place-items-center font-bold">
            Projects
          </p>
        </div>
        <p className="text-gray-400 mt-1.5">
          A showcase of my personal and academic work
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-7">
        {/* Minor Project */}
        <div className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-xl">

          <h3 className="text-2xl font-semibold mb-4 text-white">
            Outpass Automation System
          </h3>
          <p className="text-gray-300 text-sm mb-6 leading-relaxed">
            A web-based automation system to digitize and streamline student
            outpass approvals, reduce paperwork, and facilitate seamless
            real-time communication between students, wardens, and security
            personnel.
          </p>
          <a
            href="https://github.com/Er-shoaib-malik/hostel"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition mb-4"
          >
            <FaGithub className="text-2xl" /> View Code
          </a>

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

        {/* Major Project */}
        <div className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-xl">

  <h3 className="text-2xl font-semibold mb-4 text-white">
    Real-Time React Chat App
  </h3>
  <p className="text-gray-300 text-sm mb-6 leading-relaxed">
    A real-time chat application built using the MERN stack and WebSocket 
    (Socket.io) for instant messaging. Features include user authentication, 
    private chats, and responsive UI with Tailwind CSS.
  </p>

  <a
    href="https://github.com/your-username/react-chat-app"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition mb-4"
  >
    <FaGithub className="text-2xl" /> View Code
  </a>

  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
    <div>
      <h4 className="font-semibold text-pink-400 mb-1">Frontend</h4>
      <ul className="list-disc list-inside text-gray-300">
        <li>React</li>
        <li>Tailwind CSS</li>
        <li>Context API / Redux</li>
      </ul>
    </div>
    <div>
      <h4 className="font-semibold text-pink-400 mb-1">Backend</h4>
      <ul className="list-disc list-inside text-gray-300">
        <li>Node.js</li>
        <li>Express</li>
        <li>Socket.io</li>
      </ul>
    </div>
    <div>
      <h4 className="font-semibold text-pink-400 mb-1">Database</h4>
      <ul className="list-disc list-inside text-gray-300">
        <li>MongoDB</li>
      </ul>
    </div>
  </div>
</div>

      </div>

      {/* Project Slider */}
      <div className="relative flex items-center justify-center mb-20">
        {/* Prev Button */}
        <button
          onClick={prevSlide}
          className="absolute left-0 bg-white/10 p-3 rounded-full hover:bg-white/20 transition"
        >
          <FaChevronLeft className="text-xl text-white" />
        </button>

        {/* Project Card */}
        <div className="backdrop-blur-md bg-white/5 p-6 rounded-xl border border-white/10 shadow-lg w-80 sm:w-[28rem] text-center transition duration-500">
          <h3 className="text-xl font-semibold text-cyan-300 mb-2">
            {projects[current].title}
          </h3>
          <p className="text-sm text-gray-300 mb-4">{projects[current].desc}</p>
          <a
            href={projects[current].github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition"
          >
            <FaGithub className="text-2xl" /> View Code
          </a>
        </div>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="absolute right-0 bg-white/10 p-3 rounded-full hover:bg-white/20 transition"
        >
          <FaChevronRight className="text-xl text-white" />
        </button>
      </div>

      {/* Side-by-side Blocks */}
      
    </div>
  );
};

export default Project;
