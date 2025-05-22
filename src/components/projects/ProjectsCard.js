import React from 'react';
import { BsGithub } from "react-icons/bs";

const ProjectsCard = ({ title, des, src, technologies, githubLink, hostedLink }) => {
  return (
    <div className="w-full p-2 xl:px-6 h-[350px] xl:py-6 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000">
      <div className="w-full h-[250px] overflow-hidden rounded-lg">
        <img
          className="w-full h-full object-cover group-hover:scale-110 duration-300 cursor-pointer"
          src={src}
          alt="project"
        />
      </div>
      <div className="w-full mt-3 flex flex-col justify-between gap-4 flex-grow">
        <div className="flex items-center justify-between">
          {hostedLink ? (
            <a
              href={hostedLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm uppercase text-designColor font-normal no-underline hover:no-underline"
            >
              {title}
            </a>
          ) : (
            <h3 className="text-sm uppercase text-designColor font-normal">{title}</h3>
          )}
          <div className="flex gap-1">
            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-md w-8 h-8 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300"
              >
                <BsGithub />
              </a>
            )}
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {technologies?.map((tech, index) => (
            <span
              key={index}
              className="text-xs px-3 py-1 rounded-full bg-cyan-100 text-cyan-800 font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
        {/* <button className="mt-2 px-4 py-2 rounded-full bg-orange-500 text-white hover:bg-orange-600 duration-300">
          View Details
        </button> */}
      </div>
    </div>
  );
};

export default ProjectsCard;