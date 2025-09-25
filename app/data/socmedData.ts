import { ElementType } from "react";
import { TbBrandGithub, TbBrandInstagram, TbBrandLinkedin } from "react-icons/tb";

export interface SocmedItem {
  id: number;
  name: string;
  Icon: ElementType; 
  link: string;
}

export const socmedData: SocmedItem[] = [
  {
    id: 1,
    name: "GitHub",
    Icon: TbBrandGithub,
    link: "https://github.com/zainnn21", 
  },
  {
    id: 2,
    name: "LinkedIn",
    Icon: TbBrandLinkedin,
    link: "https://www.linkedin.com/in/abibzn/", 
  },
  {
    id: 3,
    name: "Instagram",
    Icon: TbBrandInstagram,
    link: "https://www.instagram.com/zain.ats/", 
  },
];
