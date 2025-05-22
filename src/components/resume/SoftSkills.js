import React from 'react';
import { motion } from 'framer-motion';

const softSkills = [
  {
    title: 'Leadership',
    description: 'Experienced in leading teams and coordinating group activities.',
  },
  {
    title: 'Communication',
    description: 'Effective verbal and written communication skills for conveying ideas clearly.',
  },
  {
    title: 'Teamwork',
    description: 'Skilled in collaborating with others to achieve common goals.',
  },
  {
    title: 'Time Management',
    description: 'Capable of managing multiple tasks efficiently and meeting deadlines.',
  },
  {
    title: 'Collaboration',
    description: 'Works well with diverse teams, fostering positive and productive interactions.',
  },
  {
    title: 'Responsibility',
    description: 'Takes ownership of tasks and delivers results reliably and consistently.',
  },
];

const SoftSkills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full px-4 sm:px-2 py-6 sm:py-12 flex flex-col gap-8"
    >
      {/* Title Section */}
      <div className="font-titleFont flex flex-col gap-2 text-center sm:text-left">
        <p className="text-xs sm:text-sm text-designColor tracking-[3px] uppercase">
          Professional
        </p>
        <h2 className="text-2xl sm:text-4xl font-bold">Soft Skills</h2>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-2">
        {softSkills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="p-4 sm:p-5 rounded-xl border border-gray-700 bg-[#1e1e1e] hover:bg-[#2c2c2c] shadow-sm hover:shadow-lg transition-all duration-300 ease-in-out cursor-pointer transform hover:scale-[1.02]"
          >
            <h3 className="text-base sm:text-lg font-semibold text-designColor mb-2">
              {skill.title}
            </h3>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              {skill.description}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default SoftSkills;