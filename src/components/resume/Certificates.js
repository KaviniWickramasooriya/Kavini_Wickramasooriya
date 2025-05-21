import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Certificates = () => {
  const certs = [
    { title: "Web Design for Beginners", subTitle: "University of Moratuwa", result: "Completed" },
    { title: "Front-End Web Development", subTitle: "UOM", result: "In Progress" },
    { title: "Python for Beginners", subTitle: "UOM", result: "Completed" },
    { title: "Python Programming", subTitle: "UOM", result: "In Progress" },
    { title: "JavaScript Essentials I & II", subTitle: "Cisco Networking Academy", result: "Completed" },
    { title: "Linux for Beginners", subTitle: "KodeKloud", result: "Completed" },
    { title: "Terraform for Beginners", subTitle: "KodeKloud", result: "Completed" },
    { title: "AWS Cloud Practitioner Essentials", subTitle: "AWS", result: "In Progress" },
    { title: "AI/ML Engineer – Stage 1, 2 & 3", subTitle: "SLIIT", result: "In Progress" }
  ];

  // Split certificates into two columns
  const halfLength = Math.ceil(certs.length / 2);
  const leftColumnCerts = certs.slice(0, halfLength);
  const rightColumnCerts = certs.slice(halfLength);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col gap-2"
    >
      {/* Header Section - Displayed Once */}
      <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
        <p className="text-sm text-designColor tracking-[4px] uppercase">Certifications</p>
        <h2 className="text-3xl md:text-4xl font-bold">My Certificates</h2>
      </div>

      {/* Two-Column Layout for Certificates */}
      <div className="flex flex-col lgl:flex-row gap-10 lgl:gap-20">
        {/* Left Column: First Half of Certificates */}
        <div className="w-full lgl:w-1/2">
          <div className="mt-6 lgl:mt-14 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-8">
            {leftColumnCerts.map((cert, index) => (
              <ResumeCard
                key={index}
                title={cert.title}
                subTitle={cert.subTitle}
                result={cert.result}
              />
            ))}
          </div>
        </div>

        {/* Right Column: Second Half of Certificates */}
        <div className="w-full lgl:w-1/2">
          <div className="mt-6 lgl:mt-14 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-8">
            {rightColumnCerts.map((cert, index) => (
              <ResumeCard
                key={index + halfLength}
                title={cert.title}
                subTitle={cert.subTitle}
                result={cert.result}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Certificates;