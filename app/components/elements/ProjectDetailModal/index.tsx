"use client";

import React, { useEffect } from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaCalendarAlt,
  FaTools,
  FaLink,
  FaTimes,
} from "react-icons/fa";
import { GoChecklist } from "react-icons/go";
import { Project } from "@/app/data/projectData";

/** @interface ProjectDetailModalProps
 * @description Props yang dibutuhkan oleh komponen ProjectDetailModal.
 */
interface ProjectDetailModalProps {
  /**
   * @param {Project} project - Objek data lengkap dari proyek yang akan ditampilkan.
   */
  project: Project;
  /**
   * @param {() => void} onClose - Fungsi callback yang akan dipanggil saat pengguna
   * ingin menutup modal (misalnya, dengan mengklik tombol tutup atau latar belakang).
   */
  onClose: () => void;
}

/** @const dropIn
 * @description Varian animasi untuk Framer Motion.
 * Menciptakan efek modal yang "jatuh" dari atas layar saat muncul dan keluar.
 */
const dropIn: Variants = {
  hidden: { y: "-100vh", opacity: 0 },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: { y: "100vh", opacity: 0 },
};

/** @component ProjectDetailModal
 * @description Komponen modal (popup) yang menampilkan detail lengkap dari sebuah proyek.
 * Komponen ini muncul di atas konten halaman utama, menonaktifkan scroll di body,
 * dan dapat ditutup dengan mengklik latar belakang, tombol 'X', atau menekan tombol 'Escape'.
 */
const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
}) => {
  /** @function useEffect
   * @description Hook ini menangani event listener untuk keyboard.
   * Saat komponen dimuat, ia akan mendengarkan penekanan tombol. Jika tombol 'Escape'
   * ditekan, ia akan memanggil fungsi `onClose`. Event listener akan dihapus
   * secara otomatis saat komponen di-unmount untuk mencegah kebocoran memori.
   */
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <motion.div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        onClick={(e) => e.stopPropagation()} // Mencegah penutupan modal saat mengklik kontennya
        className="relative mx-4 my-8 max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 shadow-2xl scrollbar-thin scrollbar-thumb-slate-600 scrollbar-track-slate-800"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 rounded-full p-2 text-slate-400 transition-all hover:bg-slate-700/50 hover:text-white"
          aria-label="Close project details"
        >
          <FaTimes size={24} />
        </button>

        <div className="relative h-64 w-full overflow-hidden md:h-96">
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="p-8 md:p-12">
          <p className="font-semibold text-green-400">{project.description}</p>
          <h1 className="my-2 text-4xl font-bold text-white md:text-5xl">
            {project.title}
          </h1>
          <div className="mb-8 flex items-center gap-2 text-slate-400">
            <FaCalendarAlt />
            <span>{project.date}</span>
          </div>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            <div className="md:col-span-2">
              <h2 className="mb-4 flex items-center gap-3 border-b border-slate-700 pb-2 text-2xl font-bold text-white">
                <GoChecklist className="text-green-400" />
                <span>Responsibilities</span>
              </h2>
              <ul className="list-inside list-disc space-y-2 text-slate-300">
                {project.responsibilities.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="mb-4 flex items-center gap-3 border-b border-slate-700 pb-2 text-2xl font-bold text-white">
                  <FaTools className="text-green-400" />
                  <span>Tech Stack</span>
                </h2>
                <ul className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <li
                      key={tech.name}
                      className="flex items-center gap-2 rounded-full bg-slate-700 px-4 py-2 text-sm text-slate-200 transition-transform hover:scale-105"
                    >
                      <tech.Icon className="h-5 w-5" />
                      <span>{tech.name}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="mb-4 flex items-center gap-3 border-b border-slate-700 pb-2 text-2xl font-bold text-white">
                  <FaLink className="text-green-400" />
                  <span>Links</span>
                </h2>
                <div className="flex flex-col space-y-3">
                  {project.githubUrl && project.githubUrl !== "#" && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-slate-300 transition-colors hover:text-green-400"
                    >
                      <FaGithub />
                      <span>View Code on GitHub</span>
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-slate-300 transition-colors hover:text-green-400"
                    >
                      <FaExternalLinkAlt />
                      <span>View Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectDetailModal;
