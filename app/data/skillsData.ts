import {
  SiNextdotjs,
  SiNodedotjs,
  SiTypescript,
  SiTailwindcss,
  SiFramer,
  SiPostgresql,
  SiGit,
  SiDocker,
  SiReact,
  SiPrisma,
  SiOracle,
  SiC,
  SiSpringboot,
  SiElasticsearch,
} from "react-icons/si";
import { FaCode, FaDatabase } from "react-icons/fa";
import { IconType } from "react-icons";
import { TbBrandCSharp } from "react-icons/tb";

export interface Skill {
  name: string;
  level: number; // Persentase dari 0 sampai 100
  Icon: IconType;
}

export interface SkillCategory {
  id: number;
  title: string;
  skills: Skill[];
}

export const skillsData: SkillCategory[] = [
  {
    id: 1,
    title: "Frontend Development",
    skills: [
      { name: "React & Next.js", level: 85, Icon: SiNextdotjs },
      { name: "TypeScript", level: 75, Icon: SiTypescript },
      { name: "Tailwind CSS", level: 80, Icon: SiTailwindcss },
      { name: "Framer Motion", level: 50, Icon: SiFramer },
    ],
  },
  {
    id: 2,
    title: "Backend & Database",
    skills: [
      { name: "Node.js & Express", level: 75, Icon: SiNodedotjs },
      { name: "PostgreSQL", level: 70, Icon: SiPostgresql },
      { name: "Oracle", level: 70, Icon: SiOracle },
      { name: "RESTful APIs", level: 70, Icon: FaCode },
      { name: "C#", level: 40, Icon: TbBrandCSharp },
      { name: "C", level: 60, Icon: SiC },
      { name: "Java  & Spring Boot", level: 65, Icon: SiSpringboot },
    ],
  },
  {
    id: 3,
    title: "Tools & DevOps",
    skills: [
      { name: "Git & GitHub", level: 85, Icon: SiGit },
      { name: "Docker", level: 50, Icon: SiDocker },
      { name: "Elasticsearch", level: 50, Icon: SiElasticsearch },
    ],
  },
];
