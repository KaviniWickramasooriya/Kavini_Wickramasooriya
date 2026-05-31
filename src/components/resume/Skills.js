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

      {/* Tools & Frameworks note */}
      <div className="flex flex-wrap gap-2 mb-2">
        {[
          "VS Code", "Eclipse", "IntelliJ IDEA", "Android Studio",
          "Postman", "Figma", "Arduino IDE", "Trello", "Docker", "Jenkins"
        ].map((tool, i) => (
          <span
            key={i}
            className="text-xs px-3 py-1 rounded-full bg-cyan-900 text-cyan-200 font-medium"
          >
            {tool}
          </span>
        ))}
      </div>

      {/* Two-Column Layout */}
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