"use client";

import React from "react";
import Image from "next/image";
import { Tech } from "@/app/data/projectData";

interface ProjectCardsProps {
  title: string;
  projectContext: string;
  techStack: Tech[];
  imageUrl: string;
  imageTitle: string;
  onCardClick: () => void;
}

const ProjectCards: React.FC<ProjectCardsProps> = ({
  title,
  projectContext,
  techStack,
  imageUrl,
  imageTitle,
  onCardClick,
}) => {
  return (
    <div
      onClick={onCardClick}
      className="group relative block aspect-video w-full cursor-pointer overflow-hidden rounded-xl shadow-lg"
    >
      {/* Gambar Background */}
      <Image
        src={imageUrl}
        alt={imageTitle}
        fill
        className="z-0 object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
      />

      {/* Overlay Untuk Content */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/90 via-black/60 to-transparent"></div>

      {/* Content Container */}
      <div className="relative z-20 flex h-full flex-col justify-end p-6 text-white transition-transform duration-300 ease-in-out group-hover:-translate-y-2">
        <div>
          <p className="text-sm font-semibold text-green-400">
            {projectContext}
          </p>
          <h3 className="mb-2 text-2xl font-bold leading-tight text-slate-100">
            {title}
          </h3>
        </div>

        {/* Bagian Content ini Tampil Saat Hover */}
        <div className="overflow-hidden transition-all duration-300 ease-in-out max-h-0 group-hover:max-h-40 group-hover:mt-4">
          <div className="flex flex-wrap gap-2">
            {techStack.slice(0, 4).map((tech) => (
              <div
                key={tech.name}
                className="flex items-center rounded-full bg-white/10 px-3 py-1 text-xs backdrop-blur-sm"
              >
                <tech.Icon className="mr-1.5 h-4 w-4" />
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Border glow on hover */}
      <div className="absolute inset-0 z-30 rounded-xl border-2 border-transparent transition-all duration-300 group-hover:border-green-400/50"></div>
    </div>
  );
};

export default ProjectCards;
