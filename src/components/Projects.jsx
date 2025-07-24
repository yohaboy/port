import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      title: "Telechannels Escrow Marketplace",
      description:
        "A secure escrow marketplace to buy and sell telegram channels and groups built on top of Ton blockchain.",
      image: "/assets/Telechannels.png",
      liveLink: "https://www.telechannels.store",
      githubLink: "#",
      tech: ["Python", "Django", "React","TON","telegram_api","Bot"],
    },
    {
      title: "UNISA Research Management System",
      description:
        "A platform for tracking academic publications, researchers, and collaborations at the University of South Australia, with automated data fetching from CSV and advanced research analytics.",
      image: "/assets/unisa.png",
      liveLink: "#",
      githubLink: "https://github.com/yohaboy/Research-csv",
      tech: ["Python", "Django","Celery", "Redis", "Google Scholar", "ORCID"],
    },
    {
      title: "FoodME 🍽️",
      description:
        "An AI-powered food recommendation app that suggests meals based on mood, diet, serving size, and spice level, with estimated pricing for quick decisions.",
      image: "/assets/foodme.png",
      liveLink: "#",
      githubLink: "https://github.com/yohaboy/FoodME",
      tech: ["python","Django","React","DRF" , "Postgress" , "Tailwind", ,"OpenAI"],
    },
    {
      title: "Bookstore API 📚",
      description:
        "A RESTful API for managing books, authors, and orders, built with FastAPI for fast and efficient backend services.",
      image: "/assets/bookstore.png",
      liveLink: "#",
      githubLink: "https://github.com/yohaboy/Bookstore",
      tech: ["Python", "FastAPI", "JWT","SQLAlchemy", "PostgreSQL"],
    },
    {
      title: "Design Blog 🎨",
      description:
        "A Dribbble-like platform where designers can share and showcase their creative work, built for posting, browsing, and engaging with design projects.",
      image: "/assets/design.jpg",
      liveLink: "#",
      githubLink: "https://github.com/yohaboy/design_blog",
      tech: ["Python", "Django", "Tailwind", "SQLite"],
    },
    
        
  ];

  return (
    <section
      id="projects"
      className="px-4 md:px-0 py-20 w-full flex flex-col items-center"
    >
      <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-10 tracking-tight">
        Featured Projects
      </h2>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-6xl">
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
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
                {project.title}
              </h3>
              <p className="text-neutral-700 dark:text-neutral-300 text-base mb-4">
                {project.description}
              </p>

              {/* Tech stack as text */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-neutral-100 dark:bg-neutral-800 text-cyan-600 px-3 py-1 rounded-full text-sm font-medium shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex space-x-6 mt-auto">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-600 hover:text-cyan-800 dark:text-cyan-400 dark:hover:text-cyan-200 transition-colors text-xl"
                >
                  <FaExternalLinkAlt />
                </a>
                <a
                  href={project.githubLink}
                  rel="noopener noreferrer"
                  className="text-cyan-600 hover:text-cyan-800 dark:text-cyan-400 dark:hover:text-cyan-200 transition-colors text-xl"
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
