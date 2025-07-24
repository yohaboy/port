import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { SiPython, SiDjango, SiReact, SiFastapi, SiTelegram } from "react-icons/si";

export default function Projects() {
  const projects = [
    {
      title: "Telechannels Escrow Marketplace",
      description:
        "A secure escrow marketplace built with Django, FastAPI, React, and TON SDK.",
      image: "/images/telechannels.png",
      liveLink: "https://www.telechannels.store",
      githubLink: "https://github.com/your-repo",
      tech: [SiPython, SiDjango, SiReact, SiFastapi, SiTelegram],
    },
    {
      title: "Chess Tactics Trainer",
      description:
        "AI-generated chess puzzles to train tactics. Built with React and FastAPI.",
      image: "/images/chess.png",
      liveLink: "#",
      githubLink: "#",
      tech: [SiReact, SiFastapi, SiPython],
    },
  ];

  return (
    <section id="projects" className="px-4 md:px-0 py-20 w-full flex flex-col items-center">
      <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-10 tracking-tight">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-5xl">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative bg-white dark:bg-neutral-900 rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 shadow flex flex-col min-h-[340px]"
          >
            {/* Image (grayscale) */}
            <div className="relative w-full h-40 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover scale-105 grayscale"
              />
            </div>
            {/* Content */}
            <div className="p-6 flex flex-col flex-1 justify-between h-full">
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-2">{project.title}</h3>
              <p className="text-neutral-700 dark:text-neutral-300 text-base mb-4">{project.description}</p>
              {/* Tech stack icons */}
              <div className="flex flex-wrap gap-3 mb-4">
                {project.tech.map((TechIcon, i) => (
                  <span
                    key={i}
                    className="bg-neutral-100 dark:bg-neutral-800 text-cyan-600 p-2 rounded-full text-lg shadow-sm"
                    title={TechIcon.displayName || ""}
                  >
                    <TechIcon className="w-5 h-5" />
                  </span>
                ))}
              </div>
              {/* Links */}
              <div className="flex space-x-6 mt-auto">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-600 hover:text-cyan-800 dark:text-cyan-400 dark:hover:text-cyan-200 transition-colors text-2xl"
                >
                  <FaExternalLinkAlt />
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-600 hover:text-cyan-800 dark:text-cyan-400 dark:hover:text-cyan-200 transition-colors text-2xl"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
