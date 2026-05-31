import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* Left Column: Work Experience */}
      <div className="w-full lgl:w-1/2">
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px] uppercase">Work History</p>
          <h2 className="text-3xl md:text-4xl font-bold">Work Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Intern Software Engineer"
            subTitle="NEXORA PVT LTD (July 2025 – December 2025)"
            result="Internship"
            des="Contributed to developing and maintaining web and mobile applications using React, Node.js, PostgreSQL, and MongoDB while gaining hands-on experience in full-stack development and teamwork."
          />
        </div>
      </div>

      {/* Right Column: Professional Qualifications */}
      <div className="w-full lgl:w-1/2">
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px] uppercase">Professional</p>
          <h2 className="text-3xl md:text-4xl font-bold">Professional Qualifications</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Business Level – CA Sri Lanka"
            subTitle="Institute of Chartered Accountants of Sri Lanka (2025 - Present)"
            result="In Progress"
          />
          <ResumeCard
            title="Diploma in Banking & Finance"
            subTitle="Institute of Bankers of Sri Lanka (2026 - Present)"
            result="In Progress"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;