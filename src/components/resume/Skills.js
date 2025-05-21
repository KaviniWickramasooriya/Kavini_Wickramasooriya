import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const technicalSkills = [
    { name: "HTML", proficiency: 100 },
    { name: "CSS", proficiency: 90 },
    { name: "SQL", proficiency: 90 },
    { name: "JavaScript", proficiency: 85 },
    { name: "PHP", proficiency: 90 },
    { name: "React", proficiency: 85 },
    { name: "Node", proficiency: 75 },
    { name: "Python", proficiency: 55 },
    { name: "Java", proficiency: 80 },
    { name: "C, C++", proficiency: 95 },
  ];

  // Split skills into two columns
  const halfLength = Math.ceil(technicalSkills.length / 2);
  const leftColumnSkills = technicalSkills.slice(0, halfLength);
  const rightColumnSkills = technicalSkills.slice(halfLength);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col gap-10"
    >
      {/* Header Section - Displayed Once */}
      <div className="py-12 font-titleFont flex flex-col gap-4">
        <p className="text-sm text-designColor tracking-[4px] uppercase">
          Technical
        </p>
        <h2 className="text-3xl md:text-4xl font-bold">Technical Skills</h2>
      </div>

      {/* Two-Column Layout for Technical Skills */}
      <div className="flex flex-col lgl:flex-row gap-10 lgl:gap-20">
        {/* Left Column: First Half of Technical Skills */}
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

        {/* Right Column: Second Half of Technical Skills */}
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