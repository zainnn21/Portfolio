import ProjectCards from "../elements/ProjectCards";
import { projectData } from "../../data/projectData";

const Project = () => {
  return (
    <div className="md:mx-10 bg-white p-10 rounded-lg shadow-lg border-4 border-[#0d3b24] ">
      <h1 className="text-3xl font-bold text-center mb-5">Projects</h1>
      <p className="text-center text-gray-600 mb-5">
        Here are some of the projects I have worked on, showcasing my skills in
        full-stack development and game development.
      </p>
      <div className="flex flex-col gap-8">
        {projectData.map((project) => (
          <ProjectCards
            key={project.id}
            Title={project.title}
            Project={project.project}
            DateProject={project.dateProject}
            Responsibilities={project.responsibilities}
            TechStack={project.techStack}
            ImageUrl={project.imageUrl}
            ImageTitle={project.imageTitle}
            githubUrl={project.githubUrl}
          />
        ))}
      </div>
    </div>
  );
};
export default Project;
