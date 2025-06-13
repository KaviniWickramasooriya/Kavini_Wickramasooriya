import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* Left Column: Education */}
      <div className="w-full lgl:w-1/2">
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2017 - Present</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-5">
          <ResumeCard
            title="BSc (Hons) in Information Technology specializing in Software Engineering)"
            subTitle="Sri Lanka Institute of Information Technology (2022 - Present)"
            result="2.88/4.0"
          />
          <ResumeCard
            title="BSc in Applied Science (CS, Mathematics, and Physics)"
            subTitle="University of Sri Jayewardenepura (2023 - Present)"
            result="In Progress"
          />
          <ResumeCard
            title="Diploma in IT and English"
            subTitle="IMBS Green Campus (2023)"
            result="Completed"
          />
          <ResumeCard
            title="G.C.E. A/L - Physical Science"
            subTitle="Kalutara Balika National School (2020)"
            result="1B 2C"
          />
          <ResumeCard
            title="G.C.E. O/L"
            subTitle="Kalutara Balika National School (2017)"
            result="9A"
          />
        </div>
      </div>

      {/* Right Column: Extra-Curricular Activities */}
      <div className="w-full lgl:w-1/2">
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">School Life</p>
          <h2 className="text-3xl md:text-4xl font-bold">Extra-Curricular Activities</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Senior Prefect"
            subTitle="Kalutara Balika National School"
            result="(2015 - 2018)"
          />
          <ResumeCard
            title="Junior Prefect"
            subTitle="Kalutara Balika National School"
            result="(2009 - 2011)"
          />
          <ResumeCard
            title="Leader of the Chess Team"
            subTitle="Kalutara Balika National School"
            result="(2010 - 2017)"
          />
          <ResumeCard
            title="Member of Senior Western Band"
            subTitle="Kalutara Balika National School"
            result="(2015 - 2017)"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;