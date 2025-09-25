import { motion } from "framer-motion";
import EducationCard from "../elements/Education/educationCards";
import { EducationData } from "../../data/educationData";
import { CertificationData } from "../../data/certificationData";

const Education = () => {
  return (
    <div className="w-full max-w-7xl p-4 md:p-8">
      <motion.h2
        className="mb-12 text-center text-3xl font-bold md:text-4xl"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Education & Certifications
      </motion.h2>
      <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-8">
        {/* Kolom Edukasi */}
        <div className="flex w-full flex-col">
          <h3 className="mb-6 text-center text-2xl font-semibold text-[#0CB36B] md:text-3xl">
            Education
          </h3>
          <div className="flex flex-col gap-6">
            {EducationData.map((item) => (
              <EducationCard
                key={item.id}
                title={item.school}
                subtitle={item.faculty}
                line1={item.degree}
                line2={item.year}
                line3={item.gpa}
              />
            ))}
          </div>
        </div>

        {/* Kolom Sertifikasi */}
        <div className="flex w-full flex-col">
          <h3 className="mb-6 text-center text-2xl font-semibold text-[#0CB36B] md:text-3xl">
            Certifications
          </h3>
          <div className="flex flex-col gap-6">
            {CertificationData.map((item) => (
              <EducationCard
                key={item.id}
                title={item.title}
                subtitle={item.location}
                line1={item.description}
                line2={item.date}
                line3={item.gpa} 
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
