import React from "react";
import { FaGithub, FaLinkedinIn, FaReact, FaHtml5, FaJava } from "react-icons/fa";
import { SiFlutter } from "react-icons/si";

const About = () => {
  return (
    <section
      id="about"
      className="w-full py-20 border-b-[1px] border-b-black px-4 sm:px-6 lg:px-8 font-titleFont"
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
            I am currently pursuing my Software Engineering degree at the
            <span className="text-designColor font-medium"> Sri Lanka Institute of Information Technology (SLIIT)</span>,
            alongside an Applied Science degree at the
            <span className="text-designColor font-medium"> University of Sri Jayewardenepura</span>. I thrive in environments where innovation meets collaboration.
          </p>
          <p className="mt-4">
            With a deep understanding of <span className="text-designColor font-medium">Object-Oriented Programming (OOP)</span> and real-world experience from university projects, I specialize in building web and mobile applications using the <span className="text-designColor font-medium">MERN Stack</span> and cross-platform tools like <span className="text-designColor font-medium">Flutter</span>. My goal is to create meaningful digital experiences and contribute to impactful software projects.
          </p>
        </div>

        {/* Contact Info */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-semibold text-white mb-2">Contact Me</h3>
          <div className="text-gray-400 flex flex-col gap-2">
            <a
              href="tel:+94705320812"
              className="text-lightText hover:text-designColor transition-colors"
            >
              📞 +94 70 532 0812
            </a>
            <a
              href="mailto:kaviniwickramasooriya@gmail.com"
              className="text-lightText hover:text-designColor transition-colors"
            >
              ✉️ kaviniwickramasooriya@gmail.com
            </a>
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
              <a
                href="https://github.com/KaviniPramudika"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <span className="bannerIcon">
                  <FaGithub />
                </span>
              </a>
              <a
                href="https://www.linkedin.com/in/kavini-wickramasooriya-937a70179/"
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
              <a
                href="https://reactjs.org/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="React"
              >
                <span className="bannerIcon">
                  <FaReact />
                </span>
              </a>
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/HTML"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="HTML5"
              >
                <span className="bannerIcon">
                  <FaHtml5 />
                </span>
              </a>
              <a
                href="https://www.java.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Java"
              >
                <span className="bannerIcon">
                  <FaJava />
                </span>
              </a>
              <a
                href="https://flutter.dev/"
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