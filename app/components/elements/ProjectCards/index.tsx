import React from "react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";

interface ProjectCardsProps {
  Title: string;
  Project: string;
  DateProject: string;
  Responsibilities: string[];
  TechStack: string[];
  ImageUrl: string;
  ImageTitle: string;
  githubUrl?: string; //
}

const ProjectCards: React.FC<ProjectCardsProps> = (props) => {
  const {
    Title,
    Project,
    DateProject,
    Responsibilities,
    TechStack,
    ImageUrl,
    ImageTitle,
    githubUrl,
  } = props;
  return (
    <div className="w-full flex bg-[#e4e6eb] gap-10">
      <div className="group flex w-full flex-col overflow-hidden rounded-lg border-4 border-[#0d3b24] bg-white shadow-lg transition-transform duration-500 ease-in-out hover:scale-105 hover:shadow-2xl md:flex-row h-72">
        <div className="relative h-48 w-full md:h-auto md:w-1/3">
          <Image src={ImageUrl} alt={ImageTitle} fill></Image>

          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          >
            <FaGithub className="text-5xl text-white" />
          </a>
        </div>
        <div className="flex w-full flex-col gap-4 p-6 md:w-2/3 justify-center">
          <div>
            <h1 className="text-2xl font-bold">{Title}</h1>
            <p className="text-gray-600">
              {Project} | <span className="font-bold">{DateProject} </span>
            </p>
            <ul className="list-disc space-y-1 pl-5">
              {Responsibilities.map((responsibility) => (
                <li key={responsibility} className="text-gray-700">
                  {responsibility}
                </li>
              ))}
            </ul>
            <div className="mt-auto flex items-center gap-2 pt-4">
              <p className="font-bold text-gray-700">Tech Stack:</p>

              <ul className="flex flex-wrap gap-2">
                {TechStack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded bg-[#0CB36B] px-3 py-1 text-sm text-white"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCards;
