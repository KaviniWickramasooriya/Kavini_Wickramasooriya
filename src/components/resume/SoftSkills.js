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
      className="w-full flex flex-col gap-10"
    >
      {/* Header Section */}
      <div className="py-12 font-titleFont flex flex-col gap-4">
        <p className="text-sm text-designColor tracking-[4px] uppercase">
          Professional
        </p>
        <h2 className="text-3xl md:text-4xl font-bold">Soft Skills</h2>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {softSkills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="w-full p-5 rounded-lg border border-gray-700 bg-[#1e1e1e] hover:bg-[#2c2c2c] shadow-md hover:shadow-xl transition-all duration-300 ease-in-out"
          >
            <h3 className="text-lg font-semibold text-designColor mb-2">{skill.title}</h3>
            <p className="text-sm text-gray-300 leading-relaxed">{skill.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default SoftSkills;