/**
 * @interface Experience
 * @description Mendefinisikan struktur untuk setiap item pengalaman kerja.
 */
export interface Experience {
  id: number;
  role: string;
  company: string;
  companyUrl?: string;
  duration: string;
  location: string;
  responsibilities: string[];
}

export const experienceData: Experience[] = [
  {
    id: 1,
    role: "Backend Developer",
    company: "PT. Next TI",
    companyUrl: "https://next-ti.co.id/",
    duration: "June 2023 - April 2024",
    location: "Jakarta, Indonesia",
    responsibilities: [
      "Developed and maintained backend systems for banking applications using Java and Spring Boot, ensuring high performance and reliability.",
      "Collaborated with cross-functional teams to design and implement new features, fixing bugs, and optimizing existing systems.",
    ],
  },
  {
    id: 2,
    role: "Full Stack Developer",
    company: "PT. Next TI",
    companyUrl: "https://next-ti.co.id/",
    duration: "Dec 2022 - June 2023",
    location: "Jakarta, Indonesia",
    responsibilities: [
      "Developed and maintained banking applications using C, Html, XML , ensuring high performance and reliability.",
      "Collaborated with cross-functional teams to design and implement new features, fixing bugs, and optimizing existing systems.",
    ],
  },
  {
    id: 3,
    role: "Zoom Operator",
    company: "Freelance",
    duration: "March 2022 - Apr 2022",
    location: "Jakarta, Indonesia",
    responsibilities: [
      "Managed and operated Zoom meetings for various clients, ensuring smooth and professional virtual events.",
    ],
  },
];
