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
    <section className="px-8 md:px-32 py-16">
      <h2 className="text-2xl font-bold text-teal-400 mb-8">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#0a192f] rounded-lg overflow-hidden border border-slate-700 shadow-md hover:shadow-lg hover:border-teal-400 transition-all duration-300"
          >
            {/* Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />

            {/* Content */}
            <div className="p-4 flex flex-col justify-between h-full">
              <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
              <p className="text-slate-300 text-sm mb-4">{project.description}</p>

              {/* Tech stack icons */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((TechIcon, i) => (
                  <span
                    key={i}
                    className="bg-slate-800 text-teal-400 p-2 rounded-full text-sm"
                    title={TechIcon.displayName || ""}
                  >
                    <TechIcon className="w-4 h-4" />
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex space-x-4 mt-auto">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-400 hover:text-teal-300 transition-colors text-lg"
                >
                  <FaExternalLinkAlt />
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-400 hover:text-teal-300 transition-colors text-lg"
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
