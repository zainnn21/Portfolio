"use client";

import React from "react";

type Category = "web" | "game";

interface ProjectFilterProps {
  activeCategory: Category;
  setActiveCategory: (category: Category) => void;
}

const filterButtons: { label: string; category: Category }[] = [
  { label: "Web Development", category: "web" },
  { label: "Game Development", category: "game" },
];

const ProjectFilter: React.FC<ProjectFilterProps> = ({
  activeCategory,
  setActiveCategory,
}) => {
  return (
    <div className="flex justify-center gap-4 mb-12">
      {filterButtons.map((button) => (
        <button
          key={button.category}
          onClick={() => setActiveCategory(button.category)}
          className={`px-6 py-2 font-semibold rounded-lg transition-colors duration-300 ${
            activeCategory === button.category
              ? "bg-gradient-to-r from-green-400 to-[#0CB36B] text-white"
              : "bg-slate-800 text-slate-300 hover:bg-slate-700"
          }`}
        >
          {button.label}
        </button>
      ))}
    </div>
  );
};

export default ProjectFilter;
