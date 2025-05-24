import React, { useState } from 'react';
import Title from '../layouts/Title';
import {
  projectTwo,
  projectThree,
  projectFour,
  projectFive,
  projectSix,
  projectSeven,
  projectEight,
  projectNine,
  projectTen,
  projectEleven,
  projectTwelve,
  projectThirteen,
  projectFourteen,
  projectFifteen,
  projectSixteen,
  projectSeventeen,
  projectEighteen,
  projectNineteen,
  projectTwenty,
  projectTwentyOne,
  projectTwentyTwo,
} from "../../assets/index";

import ProjectsCard from './ProjectsCard';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 3;

  const projects = [
    {
      title: "TastiGo - Online Food Ordering Application",
      des: "An online food ordering platform for seamless dining experiences.",
      src: projectSeventeen,
      technologies: ["ReactJS", "NodeJS", "ExpressJS", "MongoDB"],
      githubLink: "https://bitbucket.org/my_projects_iresh/workspace/projects/FOOD",
      hostedLink: "http://tastigo.ddns.net/",
    },
    {
      title: "Emerald Bay Restaurant",
      des: "A web application for restaurant management and online orders.",
      src: projectThirteen,
      technologies: ["ReactJS", "NodeJS", "ExpressJS", "MongoDB"],
      githubLink: "https://github.com/KaviniPramudika/Emerald-Bay-Resort-Restaurant",
    },
    {
      title: "EcoSort Waste Management System",
      des: "A system to manage and sort waste efficiently.",
      src: projectThree,
      technologies: ["ReactJS", "NodeJS", "ExpressJS", "MongoDB"],
      githubLink: "https://github.com/KaviniWickramasooriya/EcoSort_Waste_Management_System",
    },
    {
      title: "TransMate Translator Web Application",
      des: "A web app for translating text across multiple languages.",
      src: projectSixteen,
      technologies: ["ReactJS", "NodeJS", "ExpressJS", "MongoDB"],
      githubLink: "https://github.com/KaviniWickramasooriya/Job_Vacancy_Website",
    },
    {
      title: "Hospital Website",
      des: "A website for managing hospital services.",
      src: projectTwo,
      technologies: ["HTML", "CSS", "JS", "PHP"],
      githubLink: "https://github.com/KaviniPramudika/Hospital_Website",
    },
    {
      title: "SALICS - Job Vacancy Web Application",
      des: "A platform to browse and apply for job vacancies.",
      src: projectTen,
      technologies: ["ReactJS", "NodeJS", "ExpressJS", "MongoDB"],
      githubLink: "https://bitbucket.org/my_projects_iresh/workspace/projects/FOOD",
    },
    {
      title: "Global Explorer Country Application",
      des: "An app to explore information about countries worldwide.",
      src: projectTwenty,
      technologies: ["ReactJS", "NodeJS", "ExpressJS", "MongoDB"],
      githubLink: "https://github.com/KaviniWickramasooriya/Global_Explorer_Country_App",
      hostedLink: "https://global-explorer-lac.vercel.app/",
    },
    {
      title: "FitPro Fitness Mobile Application",
      des: "A mobile app to track fitness goals and routines.",
      src: projectNineteen,
      technologies: ["React Native", "MongoDB"],
      githubLink: "https://github.com/KaviniWickramasooriya/FitPro_Fitness_App",
    },
    {
      title: "E-Channeling Web Application",
      des: "A web app for scheduling medical appointments online.",
      src: projectTwelve,
      technologies: ["Java", "SQL"],
      githubLink: "https://github.com/KaviniPramudika/E_Channelling_System",
    },
    {
      title: "Online Bookstore",
      des: "A desktop application for browsing and purchasing books.",
      src: projectEight,
      technologies: ["HTML", "CSS", "JS", "PHP"],
      githubLink: "https://github.com/KaviniPramudika/Online_Bookstore",
    },
    {
      title: "Tour and Travel Website",
      des: "A website for booking tours and travel services.",
      src: projectFour,
      technologies: ["HTML", "CSS", "JS", "PHP"],
      githubLink: "https://github.com/KaviniPramudika/Tour_and_Travel_Website",
    },
    {
      title: "Restaurant Management System",
      des: "A system to manage restaurant operations and orders.",
      src: projectTwentyTwo,
      technologies: ["Java (JFrame)", "SQL"],
      githubLink: "https://github.com/KaviniWickramasooriya/Restaurant_Management_System",
    },
    {
      title: "University Website",
      des: "A website to showcase university information.",
      src: projectTwentyOne,
      technologies: ["HTML", "CSS", "JS", "PHP"],
      githubLink: "https://github.com/KaviniPramudika/University-Website",
    },
    {
      title: "ToDo App",
      des: "A mobile app to manage tasks and to-do lists.",
      src: projectFifteen,
      technologies: ["Kotlin", "SQLite"],
      githubLink: "https://github.com/KaviniWickramasooriya/To_Do_App",
    },
        {
      title: "Snake Game",
      des: "A mobile version of the classic Snake game.",
      src: projectSix,
      technologies: ["Kotlin", "SQLite"],
      githubLink: "https://github.com/KaviniWickramasooriya/Save_The_Rocket_Game",
    },
    {
      title: "Power Fit Gym Management System",
      des: "A system for managing gym operations.",
      src: projectEleven,
      technologies: ["HTML", "CSS", "JS", "PHP", "Bootstrap"],
      githubLink: "https://github.com/KaviniWickramasooriya/Gym_Management_System",
    },
    {
      title: "Save the Rocket Game",
      des: "A mobile game to save a rocket in space.",
      src: projectNine,
      technologies: ["Kotlin", "SQLite"],
      githubLink: "https://github.com/KaviniWickramasooriya/Save_The_Rocket_Game",
    },
    {
      title: "Book Vending Machine",
      des: "A system to automate book vending using Java.",
      src: projectFourteen,
      technologies: ["Java"],
      githubLink: "https://github.com/KaviniPramudika/Book_Vending_Machine",
    },
    {
      title: "Brick Breaker Game",
      des: " A classic arcade game developed for mobile.",
      src: projectFive,
      technologies: ["Kotlin", "SQLite"],
      githubLink: "https://github.com/KaviniWickramasooriya/Brick_Breaker_Game",
    },
    {
      title: "Personal Finance Tracker System",
      des: "A web app to track income, expenses, and budgets with visual reports.",
      src: projectEighteen,
      technologies: ["NodeJS", "ExpressJS", "MongoDB", "SerpAPI"],
      githubLink: "https://github.com/KaviniWickramasooriya/Personal_Finance_Tracker_System",
    },
    {
      title: "Car Racing Game",
      des: "A mobile version of the classic Car Racing game.",
      src: projectSeven,
      technologies: ["Kotlin", "SQLite"],
      githubLink: "https://github.com/KaviniWickramasooriya/Car_Racing_Game",
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
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 xl:gap-8">
        {currentProjects.map((project, index) => (
          <ProjectsCard
            key={index}
            title={project.title}
            des={project.des}
            src={project.src}
            technologies={project.technologies}
            githubLink={project.githubLink}
            hostedLink={project.hostedLink}
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