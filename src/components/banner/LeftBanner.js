import React from "react";
import { useTypewriter, /*Cursor*/ } from "react-simple-typewriter";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaReact,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiNextdotjs } from "react-icons/si";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Full Stack Developer.", "Mobile App Developer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h3 className=" text-lg font-normal">WELCOME TO MY PROFILE</h3>
        <h2 className="text-5xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Kavini Wickramasooriya</span>
        </h2>
        <h6 className="text-3xl font-bold text-white">
          a <span>{text}</span>
          {/*<Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />*/}
        </h6>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          I'm a Undergraduate Student at SLIIT. I’m very passionate about the work that I do and aspire to work as a Software Engineer.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <a href="https://github.com/KaviniPramudika" target="blank">
              <span className="bannerIcon">
                <FaGithub />
              </span>
            </a>
            <a href="https://www.linkedin.com/in/kavini-wickramasooriya-937a70179/" target="blank">
              <span className="bannerIcon">
                <FaLinkedinIn />
              </span>
            </a>
            <a href="https://www.facebook.com/kavini.pramudika/" target="blank">
              <span className="bannerIcon">
                <FaFacebookF />
              </span>
            </a>
            <a href="https://www.instagram.com/kavini_pramudika/" target="blank">
              <span className="bannerIcon">
                <FaInstagram />
              </span>
            </a>
          </div>
        </div>
        <div><br/>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiNextdotjs />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
            <span className="bannerIcon">
              <SiFigma />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBanner;
