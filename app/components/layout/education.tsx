import { motion } from "framer-motion";
import EducationCard from "../elements/Education/educationCards";
import { EducationData } from "../../data/educationData";
import { CertificationData } from "../../data/certificationData";
import { Key } from "lucide-react";

const Education = () => {
  return (
    <>
      <div className="w-full max-w-4xl p-8">
        <motion.h2
          className="text-4xl font-bold text-center mb-10"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Education
        </motion.h2>

        <div className="flex flex-col gap-4">
          {EducationData.map((item) => {
            return (
              <EducationCard
                key={item.id}
                location={item.school}
                faculty={item.faculty}
                degree={item.degree}
                duration={item.year}
                gpa={item.gpa}
              />
            );
          })}
        </div>
      </div>

      <div className="w-full max-w-4xl p-8">
        <motion.h2
          className="text-4xl font-bold text-center mb-10"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Certification
        </motion.h2>

        <div className="flex flex-col gap-4">
          {CertificationData.map((item) => {
            return (
              <EducationCard
                key={item.id}
                location={item.title}
                faculty={item.location}
                degree={item.descripton}
                duration={item.date}
                gpa={item.gpa}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Education;
