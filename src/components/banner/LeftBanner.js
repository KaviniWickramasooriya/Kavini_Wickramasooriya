import React from "react";
import { useTypewriter } from "react-simple-typewriter";
// import {
//   FaLinkedinIn,
//   FaReact,
//   FaGithub,
//   FaHtml5,
//   FaJava,
// } from "react-icons/fa";
// import { SiFlutter } from "react-icons/si";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Full Stack Developer.", "Mobile App Developer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  return (
    <div className="w-full lg:w-1/2 flex flex-col gap-10 px-4 sm:px-6 lg:px-0">
      <div className="flex flex-col gap-4 text-center lg:text-left">
        <h3 className="text-lg font-normal text-gray-400">WELCOME TO MY PROFILE</h3>
        <h2 className="text-3xl sm:text-4xl md:text-5xl mt-2 font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Kavini Wickramasooriya</span>
        </h2>
        <h6 className="text-xl sm:text-2xl md:text-3xl mt-4 font-bold text-white">
          a <span>{text}</span>
        </h6>
        <p className="text-sm sm:text-base font-bodyFont mt-2 leading-relaxed text-gray-300">
          I'm an Undergraduate Student at SLIIT. I’m very passionate about the work that I do and aspire to work as a Software Engineer.
        </p>
      </div>

      {/* Buttons */}
      <div className="flex gap-6 justify-center md:justify-start mt-0">
        <a
          href="https://drive.google.com/file/d/1R2ThVkENx8aMDb6p9RMUlFLUF5wpVzXw/view?usp=sharing"
          rel="noopener noreferrer"
          className="px-6 py-2 border-2 border-designColor text-designColor rounded-md hover:bg-designColor hover:text-white transition"
        >
          Download Resume
        </a>
      </div>

      {/* <div className="flex flex-col md:flex-row gap-8 md:gap-0 justify-between items-center md:items-start">
        {/* Socials */}
        {/* <div>
          <h2 className="text-base uppercase font-titleFont mb-4 text-white text-center md:text-left">
            Find me in
          </h2>
          <div className="flex gap-4 justify-center md:justify-start">
            <a href="https://github.com/KaviniPramudika" target="_blank" rel="noopener noreferrer">
              <span className="bannerIcon">
                <FaGithub />
              </span>
            </a>
            <a href="https://www.linkedin.com/in/kavini-wickramasooriya-937a70179/" target="_blank" rel="noopener noreferrer">
              <span className="bannerIcon">
                <FaLinkedinIn />
              </span>
            </a>
          </div>
        </div>

        {/* Skills */}
        {/* <div className="mt-6 md:mt-0">
          <h2 className="text-base uppercase font-titleFont mb-4 text-white text-center md:text-left">
            Best Skill On
          </h2>
          <div className="flex gap-4 justify-center md:justify-start">
            <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer" aria-label="React">
              <span className="bannerIcon">
                <FaReact />
              </span>
            </a>
            <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" rel="noopener noreferrer" aria-label="HTML5">
              <span className="bannerIcon">
                <FaHtml5 />
              </span>
            </a>
            <a href="https://www.java.com/" target="_blank" rel="noopener noreferrer" aria-label="Java">
              <span className="bannerIcon">
                <FaJava />
              </span>
            </a>
            <a href="https://flutter.dev/" target="_blank" rel="noopener noreferrer" aria-label="Flutter">
              <span className="bannerIcon">
                <SiFlutter />
              </span>
            </a>
          </div> 
        </div>      
      </div>*/}
    </div>
  );
};

export default LeftBanner;