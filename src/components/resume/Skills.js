import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const technicalSkills = [
    { name: "HTML", proficiency: 100 },
    { name: "CSS / Tailwind / Bootstrap", proficiency: 90 },
    { name: "JavaScript", proficiency: 85 },
    { name: "PHP", proficiency: 85 },
    { name: "Java", proficiency: 80 },
    { name: "Python", proficiency: 60 },
    { name: "Kotlin", proficiency: 70 },
    { name: "C / C++", proficiency: 75 },
    { name: "React JS / React Native", proficiency: 85 },
    { name: "Node JS / Express JS", proficiency: 80 },
    { name: "MongoDB", proficiency: 80 },
    { name: "MySQL / PostgreSQL / SQL", proficiency: 85 },
    { name: "Docker / Jenkins / AWS", proficiency: 55 },
    { name: "Git / GitHub / Bitbucket", proficiency: 85 },
  ];

  const devTools = [
    "VS Code", "Eclipse", "IntelliJ IDEA", "Android Studio",
    "Postman", "Arduino IDE", "Trello", "Bitbucket",
  ];

  const itTools = [
    "Microsoft Word", "Microsoft Excel", "Microsoft PowerPoint",
    "Canva", "Figma"
  ];

  const halfLength = Math.ceil(technicalSkills.length / 2);
  const leftColumnSkills = technicalSkills.slice(0, halfLength);
  const rightColumnSkills = technicalSkills.slice(halfLength);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col gap-10"
    >
      {/* Header */}
      <div className="py-12 font-titleFont flex flex-col gap-4">
        <p className="text-sm text-designColor tracking-[4px] uppercase">Technical</p>
        <h2 className="text-3xl md:text-4xl font-bold">Technical Skills</h2>
      </div>

      {/* ── 1st: IT & Office Tools ── */}
      <div className="flex flex-col gap-4">
        <p className="text-sm text-designColor tracking-[4px] uppercase font-titleFont">
          IT & Office Tools
        </p>
        <div className="flex flex-wrap gap-3">
          {itTools.map((tool, i) => (
            <span
              key={i}
              className="text-xs px-4 py-2 rounded-full bg-cyan-950 text-cyan-300 font-medium border border-cyan-800 hover:border-cyan-400 hover:text-cyan-100 transition-colors duration-300"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-[1px] bg-gray-700" />

      {/* ── 2nd: Development Tools ── */}
      <div className="flex flex-col gap-4">
        <p className="text-sm text-designColor tracking-[4px] uppercase font-titleFont">
          Development Tools
        </p>
        <div className="flex flex-wrap gap-3">
          {devTools.map((tool, i) => (
            <span
              key={i}
              className="text-xs px-4 py-2 rounded-full bg-gray-800 text-gray-300 font-medium border border-gray-600 hover:border-designColor hover:text-designColor transition-colors duration-300"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-[1px] bg-gray-700" />

      {/* ── 3rd: Skill Bars ── */}
      <div className="flex flex-col gap-4">
        <p className="text-sm text-designColor tracking-[4px] uppercase font-titleFont">
          Programming Languages & Frameworks
        </p>
      </div>

      <div className="flex flex-col lgl:flex-row gap-10 lgl:gap-20">
        {/* Left Column */}
        <div className="w-full lgl:w-1/2">
          <div className="flex flex-col gap-6">
            {leftColumnSkills.map((skill, index) => (
              <div key={index} className="overflow-x-hidden">
                <p className="text-sm uppercase font-medium">{skill.name}</p>
                <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                  <motion.span
                    initial={{ x: "-100%", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    style={{ width: `${skill.proficiency}%` }}
                    className="h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                  >
                    <span className="absolute -top-7 right-0">{skill.proficiency}%</span>
                  </motion.span>
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full lgl:w-1/2">
          <div className="flex flex-col gap-6">
            {rightColumnSkills.map((skill, index) => (
              <div key={index + halfLength} className="overflow-x-hidden">
                <p className="text-sm uppercase font-medium">{skill.name}</p>
                <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                  <motion.span
                    initial={{ x: "-100%", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    style={{ width: `${skill.proficiency}%` }}
                    className="h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                  >
                    <span className="absolute -top-7 right-0">{skill.proficiency}%</span>
                  </motion.span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

    </motion.div>
  );
};

export default Skills;