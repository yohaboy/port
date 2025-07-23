import React from "react";

export default function Hero() {
  return (
    <section className="flex flex-col max-w-4xl mt-16 justify-center items-start px-8 md:px-32">
      <p className="text-teal-500 mb-2 text-xl font-bold">Hello, I’m</p>
      <h1 className="text-4xl md:text-6xl font-extrabold mb-2">John Zee.</h1>
      <h2 className="text-3xl md:text-5xl font-bold text-slate-400 mb-4 max-w-3xl">
        A Full stack developer, I craft seamless web experiences.
      </h2>

      <a
        href="/John-Zee-Resume.pdf#" 
        download
        className="mt-4 px-6 py-3 bg-teal-500 text-black font-semibold rounded-lg hover:bg-teal-400 transition-colors"
      >
        Download Resume
      </a>
    </section>

  );
} 