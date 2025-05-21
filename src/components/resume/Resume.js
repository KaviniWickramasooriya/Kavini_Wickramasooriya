import React, { useState } from 'react';
import Title from '../layouts/Title';
import Education from './Education';
import Skills from './Skills';
import Certificates from "./Certificates";

const Resume = () => {
  const [activeTab, setActiveTab] = useState("education");

  const tabs = [
    { key: "education", label: "Education" },
    { key: "skills", label: "Professional Skills" },
    { key: "certificates", label: "Certificates" },
  ];

  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="3+ YEARS OF EXPERIENCE" des="My Resume" />
      </div>
      <div className="flex justify-center">
        <ul className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
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
      {activeTab === "skills" && <Skills />}
      {activeTab === "certificates" && <Certificates />}
    </section>
  );
};

export default Resume;