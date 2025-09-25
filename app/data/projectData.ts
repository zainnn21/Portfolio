import { IconType } from "react-icons";
import { DiJava } from "react-icons/di";
import { FaEnvelope, FaPhp, FaServer } from "react-icons/fa";
import {
  SiReact,
  SiTailwindcss,
  SiUnity,
  SiDovecot,
  SiSpring,
  SiDocker,
  SiHtml5,
  SiCss3,
  SiMysql,
  SiBootstrap,
} from "react-icons/si";
import {
  TbBrandCSharp,
  TbBrandJavascript,
  TbBrandNodejs,
  TbBrandTypescript,
} from "react-icons/tb";

export interface Tech {
  name: string;
  Icon: IconType;
}

export interface Project {
  id: number;
  title: string;
  category: "web" | "game";
  description: string; // Konteks proyek, misal: "Proyek Tim" atau "Proyek Akhir"
  date: string;
  responsibilities: string[];
  techStack: Tech[];
  imageUrl: string;
  githubUrl?: string;
  liveUrl?: string; // URL Vercel/live demo (opsional)
}

export const projectData: Project[] = [
  {
    id: 1,
    title: "Education Web Video Learning Platform",
    category: "web",
    description: "Harisenin Final Project",
    date: "Aug 2025 - Present",
    responsibilities: [
      "Developing Video Learning Platform Website.",
      "Creating Education Website for the final project.",
    ],
    techStack: [
      { name: "React", Icon: SiReact },
      { name: "Tailwind CSS", Icon: SiTailwindcss },
      { name: "Node.js", Icon: TbBrandNodejs },
      { name: "Typescript", Icon: TbBrandTypescript },
    ],
    imageUrl: "/assets/videobelajar.png",
    githubUrl: "https://github.com/zainnn21/videobelajar-web",
  },
  {
    id: 2,
    title: "Email Provider Project",
    category: "web",
    description: "Team Project",
    date: "Aug 2025 - Present",
    responsibilities: [
      "Develop complete email provider system similar to Gmail.",
      "The Goal is to understand how email infrastructure works, protocols, and system architecture.",
    ],
    techStack: [
      { name: "Postfix", Icon: FaEnvelope },
      { name: "Dovecot", Icon: SiDovecot },
      { name: "React", Icon: SiReact },
      { name: "Java", Icon: DiJava },
      { name: "Spring", Icon: SiSpring },
      { name: "VPS", Icon: FaServer },
      { name: "Docker", Icon: SiDocker },
    ],
    imageUrl: "/assets/underdevelopment.jpg",
    githubUrl: "https://github.com/meQlause/EmailProviderMonorepo",
  },
  {
    id: 3,
    title: "Company Profile Website",
    category: "web",
    description: "Self Project",
    date: "October 2025",
    responsibilities: [
      "Develop complete company profile website for Don & pro consultant.",
    ],
    techStack: [
      { name: "React", Icon: SiReact },
      { name: "Tailwind CSS", Icon: SiTailwindcss },
    ],
    imageUrl: "/assets/underdevelopment.jpg",
    githubUrl: "#", // Repositori tidak publik
  },
  {
    id: 4,
    title: "2D Game Project",
    category: "game",
    description: "Final Project University",
    date: "May 2021 - Aug 2021",
    responsibilities: ["Develop 2D game using finite state machine method."],
    techStack: [
      { name: "Unity", Icon: SiUnity },
      { name: "C#", Icon: TbBrandCSharp },
    ],
    imageUrl: "/assets/2dgame.png",
    githubUrl: "https://github.com/zainnn21/2D-Game-The-Legend-of-Rick-",
  },
  {
    id: 5,
    title: "Website Perumahan",
    category: "web",
    description: "Self Project",
    date: "May 2021 - Aug 2021",
    responsibilities: ["Develop website perumahan Tamini Residence."],
    techStack: [
      { name: "HTML", Icon: SiHtml5 },
      { name: "CSS", Icon: SiCss3 },
      { name: "PHP", Icon: FaPhp },
      { name: "MySQL", Icon: SiMysql },
      { name: "Bootstrap", Icon: SiBootstrap },
    ],
    imageUrl: "/assets/websiteperumahan.jpg",
    githubUrl: "https://github.com/zainnn21/Website-Perumahan",
  },
];
