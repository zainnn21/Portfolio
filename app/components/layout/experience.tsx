"use client";

import { motion } from "framer-motion";
import { experienceData } from "@/app/data/experienceData";
import { FaExternalLinkAlt } from "react-icons/fa";

const ExperienceSection = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, x: -50 },
    show: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="w-full max-w-4xl p-8">
      <motion.h2
        className="text-4xl font-bold text-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Work Experience
      </motion.h2>

      <motion.div
        className="relative border-l-2 border-slate-700 pl-10"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {experienceData.map((exp) => (
          <motion.div
            key={exp.id}
            className="relative pl-10 pb-12"
            variants={item}
          >
            <div className="rounded-lg border-4 bg-background/80 backdrop-blur-sm p-6 shadow-2xl transition-all duration-300 hover:border-green-400/30 hover:shadow-green-400/10 hover:-translate-y-2 cursor-pointer">
              <p className="text-sm font-semibold ">{exp.duration}</p>
              <h3 className="mt-1 text-2xl text-[#0CB36B] font-bold ">{exp.role}</h3>
              {exp.companyUrl ? (
                <a
                  href={exp.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-lg hover:underline"
                >
                  {exp.company}
                  <FaExternalLinkAlt className="h-3.5 w-3.5" />
                </a>
              ) : (
                <p className="text-lg ">{exp.company}</p>
              )}
              <p className="text-sm  mb-4">{exp.location}</p>

              <ul className="list-disc space-y-2 pl-5 ">
                {exp.responsibilities.map((resp, index) => (
                  <li key={index}>{resp}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ExperienceSection;