import React, { useState } from 'react';
import Title from '../layouts/Title';
import { projectOne, projectTwo, projectThree, projectFour } from "../../assets/index";
import ProjectsCard from './ProjectsCard';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 3;

  const projects = [
    {
      title: "TastiGo - Online Food Ordering Application",
      des: "An online food ordering platform for seamless dining experiences.",
      src: projectOne,
      technologies: ["ReactJS", "NodeJS", "ExpressJS", "MongoDB"],
    },
    {
      title: "Emerald Bay Restaurant",
      des: "A web application for restaurant management and online orders.",
      src: projectTwo,
      technologies: ["ReactJS", "NodeJS", "ExpressJS", "MongoDB"],
    },
    {
      title: "EcoSort Waste Management System",
      des: "A system to manage and sort waste efficiently.",
      src: projectThree,
      technologies: ["ReactJS", "NodeJS", "ExpressJS", "MongoDB"],
    },
    {
      title: "Translate Translator Web Application",
      des: "A web app for translating text across multiple languages.",
      src: projectFour,
      technologies: ["ReactJS", "NodeJS", "ExpressJS", "MongoDB"],
    },
    {
      title: "SALICS - Job Vacancy Web Application",
      des: "A platform to browse and apply for job vacancies.",
      src: projectOne,
      technologies: ["ReactJS", "NodeJS", "ExpressJS", "MongoDB"],
    },
    {
      title: "Global Explorer Country Application",
      des: "An app to explore information about countries worldwide.",
      src: projectTwo,
      technologies: ["ReactJS", "NodeJS", "ExpressJS", "MongoDB"],
    },
    {
      title: "FitPro Fitness Mobile Application",
      des: "A mobile app to track fitness goals and routines.",
      src: projectThree,
      technologies: ["React Native", "MongoDB"],
    },
    {
      title: "E-Channeling Web Application",
      des: "A web app for scheduling medical appointments online.",
      src: projectFour,
      technologies: ["Java", "SQL"],
    },
    {
      title: "Online Bookstore",
      des: "A desktop application for browsing and purchasing books.",
      src: projectOne,
      technologies: ["Java (JFrame)", "SQL"],
    },
    {
      title: "Tour and Travel Website",
      des: "A website for booking tours and travel services.",
      src: projectTwo,
      technologies: ["HTML", "CSS", "JS", "PHP"],
    },
    {
      title: "Restaurant Management System",
      des: "A system to manage restaurant operations and orders.",
      src: projectThree,
      technologies: ["HTML", "CSS", "JS", "PHP"],
    },
    {
      title: "ToDo App",
      des: "A mobile app to manage tasks and to-do lists.",
      src: projectFour,
      technologies: ["Kotlin", "SQLite"],
    },
    {
      title: "Book Vending Machine",
      des: "A system to automate book vending using Java.",
      src: projectOne,
      technologies: ["Java"],
    },
  ];

  // Logic for pagination
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Calculate total pages
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        {currentProjects.map((project, index) => (
          <ProjectsCard
            key={index}
            title={project.title}
            des={project.des}
            src={project.src}
            technologies={project.technologies}
          />
        ))}
      </div>
      {/* Pagination */}
      <div className="flex justify-center mt-6 space-x-4">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          className="p-3 bg-gray-300 text-black rounded-full hover:bg-gray-400 disabled:opacity-50 flex items-center justify-center"
          aria-label="Previous Page"
        >
          <FaChevronLeft size={18} />
        </button>

        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="p-3 bg-gray-300 text-black rounded-full hover:bg-gray-400 disabled:opacity-50 flex items-center justify-center"
          aria-label="Next Page"
        >
          <FaChevronRight size={18} />
        </button>
      </div>
    </section>
  );
};

export default Projects;