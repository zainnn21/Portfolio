"use client";

import { skillsData } from "../../data/skillsData";
import SkillBar from "../elements/SkillBar";
import { motion } from "framer-motion";

const SkillsSection = () => {
  // 1. Definisikan variants untuk container (grid)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Jeda 0.1 detik antara setiap item
      },
    },
  };

  // 2. Definisikan variants untuk setiap item (skill bar)
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className="w-full max-w-6xl p-8">
      <motion.h2
        className="text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        My Skills
      </motion.h2>
      {/* Container untuk semua kategori */}
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {skillsData.map((category) => (
          // Card untuk setiap kategori
          <motion.div
            key={category.id}
            variants={itemVariants}
            className="p-6 rounded-lg shadow-2xl border-4 bg-background/80 backdrop-blur-sm flex flex-col gap-4"
          >
            <h3 className="text-2xl font-semibold text-center text-[#0CB36B] mb-4">
              {category.title}
            </h3>
            {category.skills.map((skill) => (
              <SkillBar
                key={skill.name}
                name={skill.name}
                level={skill.level}
                Icon={skill.Icon}
              />
            ))}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default SkillsSection;
