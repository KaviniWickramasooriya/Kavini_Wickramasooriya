import React from "react";
import { FaGithub, FaLinkedinIn, FaReact, FaHtml5, FaJava } from "react-icons/fa";
import { SiFlutter } from "react-icons/si";

const About = () => {
  return (
    <section
      id="about"
      className="w-full py-20 border-b-[1px] border-b-black px-4 sm:px-2 lg:px-8 font-titleFont"
    >
      <div className="max-w-6xl mx-auto">
        {/* Headings */}
        <div className="text-center mb-10">
          <h3 className="text-lg text-gray-400 mb-2 animate-pulse">~ MY INTRO ~</h3>
          <h2 className="text-4xl md:text-5xl font-bold text-white">About Me</h2>
          <p className="text-sm text-gray-500 mt-2 italic">Turning passion into performance</p>
        </div>

        {/* Intro Paragraph */}
        <div className="text-gray-300 text-base sm:text-lg leading-relaxed mb-12 text-justify">
          <p>
            A highly motivated graduate with a strong academic background in Software Engineering and Physical Science,
            specialising in Mathematics, Physics, and Computer Science, complemented by ongoing professional studies in
            <span className="text-designColor font-medium"> Accountancy</span> and{" "}
            <span className="text-designColor font-medium">Banking & Finance</span>. I am passionate about applying
            technology, data analysis, finance, and business insights to support organisational growth and innovation.
          </p>
          <p className="mt-4">
            I am currently pursuing my{" "}
            <span className="text-designColor font-medium">BSc (Hons) in Software Engineering</span> at{" "}
            <span className="text-designColor font-medium">SLIIT</span>, alongside a{" "}
            <span className="text-designColor font-medium">BSc in Applied Science</span> at the{" "}
            <span className="text-designColor font-medium">University of Sri Jayewardenepura</span>. With experience in
            full-stack system development, business analysis, and data-driven decision-making, I thrive in dynamic and
            fast-paced professional environments.
          </p>
        </div>

        {/* Contact Info */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-semibold text-white mb-2">Contact Me</h3>
          <div className="text-gray-400 flex flex-col gap-2">
            
              <a href="tel:+94705320812"
              className="text-lightText hover:text-designColor transition-colors"
            >
              📞 +94 70 532 0812
            </a>
            
              <a href="mailto:kaviniwickramasooriya@gmail.com"
              className="text-lightText hover:text-designColor transition-colors"
            >
              ✉️ kaviniwickramasooriya@gmail.com
            </a>
            <p className="text-lightText">📍 No. 373, Galle Road, Payagala North</p>
          </div>
        </div>

        {/* Social + Skills Section */}
        <div className="flex flex-col md:flex-row gap-12 justify-center items-center text-center">
          {/* Socials */}
          <div>
            <h2 className="text-base uppercase font-titleFont mb-4 text-white">
              Find me in
            </h2>
            <div className="flex gap-4 justify-center">
              
                <a href="https://github.com/KaviniPramudika"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <span className="bannerIcon">
                  <FaGithub />
                </span>
              </a>
              
                <a href="https://www.linkedin.com/in/kavini-wickramasooriya-937a70179/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <span className="bannerIcon">
                  <FaLinkedinIn />
                </span>
              </a>
            </div>
          </div>

          {/* Skills */}
          <div>
            <h2 className="text-base uppercase font-titleFont mb-4 text-white">
              Best Skill On
            </h2>
            <div className="flex gap-4 justify-center">
              
                <a href="https://reactjs.org/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="React"
              >
                <span className="bannerIcon">
                  <FaReact />
                </span>
              </a>
              
                <a href="https://developer.mozilla.org/en-US/docs/Web/HTML"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="HTML5"
              >
                <span className="bannerIcon">
                  <FaHtml5 />
                </span>
              </a>
              
                <a href="https://www.java.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Java"
              >
                <span className="bannerIcon">
                  <FaJava />
                </span>
              </a>
              
                <a href="https://flutter.dev/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Flutter"
              >
                <span className="bannerIcon">
                  <SiFlutter />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;