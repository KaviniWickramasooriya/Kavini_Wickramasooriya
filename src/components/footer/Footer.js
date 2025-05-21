import React from 'react';
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { myPhoto } from "../../assets/index";
import { navLinksdata } from '../../constants'; // Import navLinksdata

const Footer = () => {
  // Filter navLinksdata to include only the relevant links for the footer
  const quickLinks = navLinksdata.filter(item => 
    ["Home", "Services", "Resume", "Contact"].includes(item.title)
  );

  return (
    <div className="w-full py-20 h-auto border-b-[1px] border-b-black grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-4 gap-8">
      <div className="w-full h-full flex flex-col gap-8">
        <img className="w-32" src={myPhoto} alt="logo" style={{ width: '200px', marginLeft:'50px' }} />
      </div>
      <div className="w-full h-full" style={{ marginLeft:'50px' }} >
        <h3 className="text-xl uppercase text-designColor tracking-wider">
          Quick Link
        </h3>
        <ul className="flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden">
          {quickLinks.map((item) => (
            <li key={item._id}>
              <a href={`#${item.link}`} className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
                {item.title}
                <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full h-full">
        <div className="flex gap-4">
          <a href="https://www.linkedin.com/in/kavini-wickramasooriya-937a70179/" target="blank">
            <span className="bannerIcon">
              <FaLinkedinIn />
            </span>
          </a>
          <a href="https://github.com/KaviniPramudika" target="blank">
            <span className="bannerIcon">
              <FaGithub />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;