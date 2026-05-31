import React from 'react';
import { BsGithub } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";

const ProjectsCard = ({ title, des, src, technologies, githubLink, hostedLink }) => {
  return (
    <div className="w-full h-full rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:to-gray-900 transition-colors duration-1000 overflow-hidden">

      {/* Image — fixed height container, full image visible with contain */}
      <div className="w-full h-[240px] overflow-hidden flex-shrink-0 bg-[#13151a] flex items-center justify-center">
        <img
          className="w-full h-full object-contain group-hover:scale-105 duration-500 cursor-pointer p-2"
          src={src}
          alt={title}
        />
      </div>

      {/* Content */}
      <div className="w-full p-4 xl:px-6 xl:py-5 flex flex-col gap-3 flex-grow min-h-[190px]">

        {/* Title + Icons */}
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1">
            <h3 className="text-sm uppercase text-designColor font-semibold leading-snug line-clamp-2">
              {title}
            </h3>
          </div>
          <div className="flex gap-2 flex-shrink-0 mt-0.5">
            {hostedLink && (
              
              <a href={hostedLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300"
                title="Live Demo"
              >
                <FiExternalLink size={15} />
              </a>
            )}
            {githubLink && (
              
              <a href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300"
                title="GitHub"
              >
                <BsGithub size={15} />
              </a>
            )}
          </div>
        </div>

        {/* Description */}
        {des && (
          <p className="text-xs text-gray-400 leading-relaxed group-hover:text-gray-300 duration-300 line-clamp-3">
            {des}
          </p>
        )}

        {/* Tech badges — pinned to bottom */}
        <div className="flex flex-wrap gap-2 mt-auto pt-2">
          {technologies?.map((tech, index) => (
            <span
              key={index}
              className="text-xs px-2 py-1 rounded-full bg-cyan-950 text-cyan-300 font-medium border border-cyan-800"
            >
              {tech}
            </span>
          ))}
        </div>

      </div>
    </div>
  );
};

export default ProjectsCard;