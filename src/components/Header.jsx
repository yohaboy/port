import React from "react";

export default function Header() {
  return (
    <header className="flex gap-4 px-8 py-8">
      <nav className="space-x-8 ">
      <a href="#home" className="text-sm text-teal-300 hover:text-white transition">Home</a>
        <a href="#about" className="text-sm text-teal-300 hover:text-white transition">About</a>
        <a href="#experience" className="text-sm text-teal-300 hover:text-white transition">Experience</a>
        <a href="#contact" className="text-sm text-teal-300 hover:text-white transition">Contact</a>
      </nav>
    </header>
  );
} 