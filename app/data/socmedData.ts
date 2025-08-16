import { Github, Linkedin, Instagram } from "lucide-react";
import { ElementType } from "react";

export interface SocmedItem {
  id: number;
  name: string;
  Icon: ElementType; // Menggunakan komponen ikon, bukan string path
  link: string;
}

export const socmedData: SocmedItem[] = [
  {
    id: 1,
    name: "GitHub",
    Icon: Github,
    link: "https://github.com/zainnn21", // Ganti dengan URL Anda
  },
  {
    id: 2,
    name: "LinkedIn",
    Icon: Linkedin,
    link: "https://www.linkedin.com/in/abibzn/", // Ganti dengan URL Anda
  },
  {
    id: 3,
    name: "Instagram",
    Icon: Instagram,
    link: "https://www.instagram.com/zain.ats/", // Ganti dengan URL Anda
  },
];
