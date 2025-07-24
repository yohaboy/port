import React from "react";

export default function About() {
  return (
    <section id="about" className="flex flex-col items-center px-4 md:px-0 py-20">
      <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow p-10 max-w-2xl w-full flex flex-col items-center border border-neutral-200 dark:border-neutral-800">
        {/* Avatar */}
        <div className="w-16 h-16 rounded-full bg-neutral-200 dark:bg-neutral-800 mb-6 flex items-center justify-center shadow border border-neutral-300 dark:border-neutral-700">
          <span className="text-2xl font-extrabold text-neutral-800 dark:text-neutral-100">JZ</span>
        </div>
        <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-4 tracking-tight">About Me</h2>
        <p className="text-neutral-700 dark:text-neutral-300 max-w-2xl mb-4 text-lg text-center">
          I’m a full-stack developer passionate about building <span className="font-semibold text-cyan-600">secure</span>, <span className="font-semibold text-cyan-600">scalable</span>, and <span className="font-semibold text-cyan-600">user-friendly</span> web applications. I enjoy solving complex problems and turning ideas into seamless digital experiences. Currently, I’m building a secure escrow marketplace at
          <a href="https://www.telechannels.store" className="text-cyan-500 underline ml-1">Telechannels</a>.
        </p>
        <div className="w-full flex flex-col gap-2 mt-6">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-cyan-500" />
            <span className="text-neutral-600 dark:text-neutral-400 text-sm">2023–Present: Building at Telechannels</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-cyan-500" />
            <span className="text-neutral-600 dark:text-neutral-400 text-sm">Fan of <span className="text-cyan-600">chess</span> & <span className="text-cyan-600">music</span></span>
          </div>
        </div>
      </div>
    </section>
  );
} 