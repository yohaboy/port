import React from "react";

export default function Projects() {
  return (
    <section className="px-8 md:px-32 py-16">
      <h2 className="text-2xl font-bold text-teal-400 mb-4">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Example project card */}
        <div className="bg-[#0a192f] p-6 rounded-lg border border-slate-700">
          <h3 className="text-xl font-semibold text-white mb-2">Project Title</h3>
          <p className="text-slate-300 mb-2">Short project description goes here.</p>
          <a href="#" className="text-teal-400 underline">View Project</a>
        </div>
        {/* Add more project cards as needed */}
      </div>
    </section>
  );
} 