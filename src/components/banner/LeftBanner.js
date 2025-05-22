import React from "react";
import { useTypewriter } from "react-simple-typewriter";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Full Stack Developer.", "Mobile App Developer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  return (
    <div className="w-full lg:w-1/2 flex flex-col gap-8 px-4 sm:px-2">
      <div className="flex flex-col gap-4 text-center lg:text-left">
        <h3 className="text-base sm:text-lg font-normal text-gray-400">
          WELCOME TO MY PROFILE
        </h3>
        <h2 className="text-l sm:text-xl md:text-2xl lg:text-3xl font-semibold text-white leading-tight">
          Hi, I'm
          <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-designColor capitalize block">
            Kavini Wickramasooriya
          </span>
        </h2>
        <h6 className="text-lg sm:text-xl md:text-2xl font-semibold text-white">
          a <span>{text}</span>
        </h6>
        <p className="text-sm sm:text-base font-bodyFont leading-relaxed text-gray-300 mt-2">
          I'm an Undergraduate Student at SLIIT. I’m very passionate about the
          work that I do and aspire to work as a Software Engineer.
        </p>
      </div>

      <div className="flex justify-center lg:justify-start">
        <a
          href="https://drive.google.com/file/d/1R2ThVkENx8aMDb6p9RMUlFLUF5wpVzXw/view?usp=sharing"
          rel="noopener noreferrer"
          className="px-6 py-2 border-2 border-designColor text-designColor rounded-md hover:bg-designColor hover:text-white transition"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default LeftBanner;