import React from 'react';
import { FaMobile, FaCloud, FaShieldAlt } from 'react-icons/fa';
import { MdDesignServices } from 'react-icons/md';
import { BiCodeAlt } from 'react-icons/bi';
import { RiCodeBoxLine } from 'react-icons/ri';
import Title from '../layouts/Title';
import Card from './Card';

const Features = () => {
  return (
    <section id="features" className="w-full py-20 border-b-[1px] border-b-black">
      <Title title="Services" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="Web Development"
          des="Building responsive, high-performance websites using modern frameworks like React, Node.js, and more."
          icon={<BiCodeAlt />}
        />
        <Card
          title="UI/UX Design"
          des="Crafting intuitive and visually appealing user interfaces with a focus on user experience."
          icon={<MdDesignServices />}
        />
        <Card
          title="API Integration"
          des="Seamlessly connecting your application with third-party APIs for enhanced functionality."
          icon={<RiCodeBoxLine size={40} />
}
        />
        <Card
          title="Mobile Development"
          des="Developing cross-platform mobile apps with React Native for iOS and Android."
          icon={<FaMobile />}
        />
        <Card
          title="Cloud Solutions"
          des="Deploying scalable applications on cloud platforms like AWS, Azure, and Google Cloud."
          icon={<FaCloud />}
        />
        <Card
          title="Web Security"
          des="Implementing robust security measures to protect your web applications from threats."
          icon={<FaShieldAlt />}
        />
      </div>
    </section>
  );
};

export default Features;