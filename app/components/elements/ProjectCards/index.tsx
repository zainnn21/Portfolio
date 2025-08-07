import React from "react";

interface ProjectCardsProps {
  Title: string;
  Project: string;
  DateProject: string;
  Responsibilities: string[];
  TechStack: string[];
}

const ProjectCards: React.FC<ProjectCardsProps> = (props) => {
  const { Title, Project, DateProject, Responsibilities,TechStack } = props;
  return (
    <div className="w-full flex bg-[#e4e6eb] gap-10">
      <div className=" bg-white p-10 rounded-lg shadow-lg w-full gap-2 border-4 border-[#0d3b24] flex flex-col transition-transform hover:scale-105 hover:shadow-2xl ease-in-out duration-500">
        <h1 className="text-3xl font-bold">
          {Title}
        </h1>
        <p className="text-gray-600">
          {Project} |{" "}
          <span className="font-bold text-right">{DateProject} </span>
        </p>
        <ul className="list-disc ml-5">
          {Responsibilities.map((responsibility) => (
            <li key={responsibility} className="text-gray-700">
              {responsibility}
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-4">
          <p className="text-gray-600 font-bold">Tech Stack:</p>
          <div className="flex gap-2">
            <ul className="flex flex-wrap gap-2">
              {TechStack.map((tech) => (
                <li key={tech} className="bg-[#0CB36B] text-white px-3 py-1 rounded">
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCards;
