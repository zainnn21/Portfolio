"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projectData, Project } from "../../data/projectData";
import ProjectCards from "../elements/ProjectCards";
import ProjectFilter from "../elements/ProjectFilter";
import ProjectDetailModal from "../elements/ProjectDetailModal";

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState<"web" | "game">("web");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    document.body.style.overflow = selectedProject ? "hidden" : "auto";
  }, [selectedProject]);

  const filteredProjects = projectData.filter(
    (p) => p.category === activeCategory
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className="w-full max-w-7xl p-8">
      <motion.h2
        className="text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        My Projects
      </motion.h2>

      <ProjectFilter
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />

      <motion.div
        key={activeCategory}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {filteredProjects.map((project) => (
          <motion.div key={project.id} variants={itemVariants}>
            <ProjectCards
              title={project.title}
              projectContext={project.description}
              techStack={project.techStack}
              imageUrl={project.imageUrl}
              imageTitle={project.title}
              onCardClick={() => setSelectedProject(project)}
            />
          </motion.div>
        ))}
      </motion.div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectDetailModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};
export default ProjectsSection;
