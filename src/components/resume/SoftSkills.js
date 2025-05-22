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
      className="w-full px-4 sm:px-8 flex flex-col gap-10"
    >
      {/* Title Section */}
      <div className="py-10 font-titleFont flex flex-col gap-2 text-center sm:text-left">
        <p className="text-sm text-designColor tracking-[4px] uppercase">
          Professional
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold">Soft Skills</h2>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {softSkills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="p-5 rounded-xl border border-gray-700 bg-[#1e1e1e] hover:bg-[#2c2c2c] shadow-sm hover:shadow-xl transition-all duration-300 ease-in-out cursor-pointer"
          >
            <h3 className="text-lg sm:text-xl font-semibold text-designColor mb-1">
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