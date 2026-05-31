import React from 'react';
import { BsGithub } from "react-icons/bs";

const ProjectsCard = ({ title, des, src, technologies, githubLink, hostedLink }) => {
  return (
    <div className="w-full p-2 xl:px-6 xl:py-6 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:to-gray-900 transition-colors duration-1000">
      
      {/* Image */}
      <div className="w-full h-[200px] overflow-hidden rounded-lg flex-shrink-0">
        <img
          className="w-full h-full object-cover group-hover:scale-110 duration-300 cursor-pointer"
          src={src}
          alt={title}
        />
      </div>

      {/* Content */}
      <div className="w-full mt-4 flex flex-col gap-3 flex-grow">

        {/* Title + GitHub icon */}
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1">
            {hostedLink ? (
              
              <a href={hostedLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm uppercase text-designColor font-semibold leading-snug hover:underline"
              >
                {title}
              </a>
            ) : (
              <h3 className="text-sm uppercase text-designColor font-semibold leading-snug">
                {title}
              </h3>
            )}
          </div>
          {githubLink && (
            
              <a href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 w-8 h-8 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 mt-0.5"
            >
              <BsGithub />
            </a>
          )}
        </div>

        {/* Description */}
        {des && (
          <p className="text-xs text-gray-400 leading-relaxed group-hover:text-gray-300 duration-300">
            {des}
          </p>
        )}

        {/* Tech badges */}
        <div className="flex flex-wrap gap-2 mt-auto pt-2">
          {technologies?.map((tech, index) => (
            <span
              key={index}
              className="text-xs px-3 py-1 rounded-full bg-cyan-950 text-cyan-300 font-medium border border-cyan-800"
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