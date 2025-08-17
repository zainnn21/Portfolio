"use client";

import { motion } from "framer-motion";
import { IconType } from "react-icons";

interface SkillBarProps {
  name: string;
  level: number;
  Icon: IconType;
}

const SkillBar = ({ name, level, Icon }: SkillBarProps) => {
  const variants = {
    hidden: { width: 0 },
    visible: {
      width: `${level}%`,
      transition: { duration: 1.2, ease: [0.25, 1, 0.5, 1] },
    },
  };

  return (
    <div className="w-full">
      <div className="flex justify-between mb-1 items-center">
        <div className="flex items-center gap-2">
          <Icon className="text-[#0CB36B] text-xl" />
          <span className="text-base font-medium text-foreground">{name}</span>
        </div>
        <span className="text-sm font-medium text-foreground">{level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <motion.div
          className="bg-gradient-to-r from-green-400 to-[#0CB36B] h-2.5 rounded-full"
          variants={variants}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.8 }}
        ></motion.div>
      </div>
    </div>
  );
};

export default SkillBar;
