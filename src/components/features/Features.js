import React from 'react';
import { FaMobile, FaCloud, FaDatabase } from 'react-icons/fa';
import { MdDesignServices, MdAnalytics } from 'react-icons/md';
import { BiCodeAlt } from 'react-icons/bi';
import Title from '../layouts/Title';
import Card from './Card';

const Features = () => {
  return (
    <section id="features" className="w-full py-20 border-b-[1px] border-b-black">
      <Title title="Services" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="Full Stack Web Development"
          des="Building responsive, high-performance web applications using the MERN stack — MongoDB, Express.js, React, and Node.js."
          icon={<BiCodeAlt />}
        />
        <Card
          title="Mobile App Development"
          des="Developing cross-platform mobile applications using React Native and Kotlin for both iOS and Android platforms."
          icon={<FaMobile />}
        />
        <Card
          title="UI/UX Design"
          des="Crafting clean, intuitive, and visually appealing interfaces using Figma, Tailwind CSS, and Bootstrap with a strong focus on user experience."
          icon={<MdDesignServices />}
        />
        <Card
          title="Database & API Integration"
          des="Designing and managing databases with MongoDB, MySQL, and PostgreSQL, and integrating third-party APIs for enhanced application functionality."
          icon={<FaDatabase />}
        />
        <Card
          title="Cloud & DevOps"
          des="Deploying and managing scalable applications using AWS, Docker, and Jenkins with version control via Git and GitHub."
          icon={<FaCloud />}
        />
        <Card
          title="Data Analysis & Finance Tech"
          des="Applying data-driven insights and financial knowledge — backed by CA Sri Lanka and Banking & Finance studies — to support business decision-making."
          icon={<MdAnalytics />}
        />
      </div>
    </section>
  );
};

export default Features;