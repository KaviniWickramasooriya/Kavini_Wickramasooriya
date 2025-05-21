import React from 'react'
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Kavini Wickramasooriya</h3>
        <p className="text-lg font-normal text-gray-400">
          Full-Stack Developer
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone:{" "}
          <a href="tel:+94705320812" className="text-lightText">
            +9470 5320812
          </a>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email:{" "}
          <a href="mailto:kaviniwickramasooriya@gmail.com" className="text-lightText">
            kaviniwickramasooriya@gmail.com
          </a>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <a 
            href="https://lk.linkedin.com/in/kavini-wickramasooriya-937a70179" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bannerIcon"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>
          <a 
            href="https://fb.com/kavini.pramudika" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bannerIcon"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>
          <a 
            href="https://instagram.com/kavini_pramudika" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bannerIcon"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactLeft;