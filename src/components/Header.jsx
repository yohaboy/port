import React from "react";

export default function Header() {
  return (
    <header className="flex gap-4 px-8 py-6">
      {/* Logo */}
      <div className="border border-teal-400 rounded-lg p-2 flex items-center">
        <span className="text-teal-400 font-bold text-lg">JohnZee</span>
      </div>
      {/* Navigation */}
      <nav className="space-x-8 hidden md:flex">
        <a href="#about" className="text-xs text-teal-300 hover:text-white transition">About</a>
        <a href="#experience" className="text-xs text-teal-300 hover:text-white transition">Experience</a>
        <a href="#work" className="text-xs text-teal-300 hover:text-white transition">Work</a>
        <a href="#contact" className="text-xs text-teal-300 hover:text-white transition">Contact</a>
        <button className="ml-4 px-4 py-1 border border-teal-400 text-teal-400 rounded hover:bg-teal-400 hover:text-[#0a192f] transition">Resume</button>
      </nav>
      <button className="flex md:hidden">
        =
      </button>
    </header>
  );
} 