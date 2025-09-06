import React from "react";
import TypingText from "./components/TypingText";
import { Github, Linkedin, Mail, ExternalLink, Sparkles, ArrowRight, Rocket, Download, Code2, Cpu, Palette, Layers } from "lucide-react";
import { motion } from "framer-motion";

const Landing = () => {
  return (
    <div className="flex flex-row ml-40 pt-40 gap-30" id="home">
      <div className="text-white flex flex-col justify-center font-medium font-serif space-y-2 mr-10 mt-10 w-120">
        <p className="text-3xl">Hello, its Me</p>
        <TypingText text="SHHOAIB MALIK" speed={80} />
        <div>
          <p className="text-2xl">And I'm a</p>
          <p className="text-2xl text-emerald-500 font-semibold">
            Software Developer
          </p>
        </div>
        <p>Pursuing Bachelor's Of Technology From</p>
        <p>Jaypee University Of Information Technology</p>
        


        <div className="flex mt-5 gap-2.5">
          <a
            href="#"
            className="h-11 w-11 border-2 border-emerald-400 rounded-full grid place-content-center text-white transition-all duration-300 hover:shadow-lg"
            style={{
              transition: "box-shadow 0.2s ease-in-out",
              boxShadow: "none",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow =
                "inset 0 0 10px cyan, 0 0 15px cyan";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <img src="/fb.png" alt="" className="h-8 " />
          </a>
          <a
            href="https://github.com/Er-shoaib-malik"
            className="h-11 w-11 border-2 border-emerald-400 rounded-full grid place-content-center text-white transition-all duration-300 hover:shadow-lg"
            style={{
              transition: "box-shadow 0.2s ease-in-out",
              boxShadow: "none",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow =
                "inset 0 0 10px cyan, 0 0 15px cyan";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <img src="/git.svg" alt="" className="h-8" />
          </a>
          <a
            href="https://www.linkedin.com/in/shoaib-malik-7583682ba"
            className="h-11 w-11 border-2 border-emerald-400 rounded-full grid place-content-center text-white transition-all duration-300 hover:shadow-lg"
            style={{
              transition: "box-shadow 0.2s ease-in-out",
              boxShadow: "none",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow =
                "inset 0 0 10px cyan, 0 0 15px cyan";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <img src="/in.png" alt="" className="h-7" />
          </a>
          <a
            href="#"
            className="h-11 w-11 border-2 border-emerald-400 rounded-full grid place-content-center text-white transition-all duration-300 hover:shadow-lg"
            style={{
              transition: "box-shadow 0.2s ease-in-out",
              boxShadow: "none",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow =
                "inset 0 0 10px cyan, 0 0 15px cyan";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <img src="/x.svg" alt="" className="h-7" />
          </a>
          <a
            href="https://www.instagram.com/shoaibmal_.k?igsh=MWsyZ25mMGZteGY1bg=="
            className="h-11 w-11 border-2 border-emerald-400 rounded-full grid place-content-center text-white transition-all duration-300 hover:shadow-lg"
            style={{
              transition: "box-shadow 0.2s ease-in-out",
              boxShadow: "none",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow =
                "inset 0 0 10px cyan, 0 0 15px cyan";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <img src="/insta.svg" alt="" className="h-8" />
          </a>
        </div>

        {/* <a
          href="#about"
          className=" scroll-smooth border-3 animate-bounce
     border-emerald-400 rounded-full h-16 w-16 mt-20 flex text-center place-items-center pl-2.5 text-cyan-300"
          style={{
            boxShadow: "inset 0 0 10px cyan, 0 0 15px cyan",
          }}
        >
          <img src="/arrow.png" alt="" className="h-10" />
        </a> */}

      
        <div className="pt-4 pb-2">
          <a 
            href="/resume.pdf" 
            download 
            className="px-4 py-2 bg-gradient-to-r from-orange-400 to-emerald-400 border-none text-black  text-xl rounded-full shadow flex max-w-35 hover: text-white"
          >
            Resume <Download className="ml-2 h-6 w-5" />
          </a>
        </div>

      </div>

      

      <motion.div
        initial={{ x: 200, y: -200, scale: 0 }}
        animate={{ x: 0, y: 0, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="relative h-96 w-96 ml-40  rounded-full shadow-[0_0_25px_gray]"
      >
        <img
          src="/myimage.jpg"
          alt="Shoaib Malik"
          className="h-full w-full object-cover rounded-full border-none hover:scale-105 transition-transform duration-500"
        />
      </motion.div>
    </div>
  );
};

export default Landing;
