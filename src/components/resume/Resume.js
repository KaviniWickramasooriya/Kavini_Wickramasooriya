import React, { useState } from 'react';
import Title from '../layouts/Title';
import Education from './Education';
import Skills from './Skills';
import SoftSkills from './SoftSkills';
import Certificates from "./Certificates";
import Experience from "./Experience";

const Resume = () => {
  const [activeTab, setActiveTab] = useState("education");

  const tabs = [
    { key: "education", label: "Education" },
    { key: "experience", label: "Experience" },
    { key: "skills", label: "Technical Skills" },
    { key: "softskills", label: "Professional Skills" },
    { key: "certificates", label: "Certificates" },
  ];

  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="EDUCATION | EXPERIENCE | SKILLS" des="My Resume" />
      </div>
      <div className="flex justify-center">
        <ul className="w-full max-w-6xl grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4">
          {tabs.map((tab) => (
            <li
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`resumeLi ${activeTab === tab.key ? "border-designColor rounded-lg" : "border-transparent"}`}
            >
              {tab.label}
            </li>
          ))}
        </ul>
      </div>

      {activeTab === "education" && <Education />}
      {activeTab === "experience" && <Experience />}
      {activeTab === "skills" && <Skills />}
      {activeTab === "softskills" && <SoftSkills />}
      {activeTab === "certificates" && <Certificates />}
    </section>
  );
};

export default Resume;