import React from "react";

const SOCIALS = [
  { href: "https://twitter.com/yohannesCJ", label: "Twitter", icon: (
    <svg width="24" height="24" fill="none" viewBox="0 0 24 24" className="text-cyan-500"><path fill="currentColor" d="M22.46 6c-.77.35-1.6.58-2.47.69a4.3 4.3 0 0 0 1.88-2.37 8.59 8.59 0 0 1-2.72 1.04A4.28 4.28 0 0 0 12 9.03c0 .34.04.67.1.99A12.13 12.13 0 0 1 3.1 4.9a4.28 4.28 0 0 0 1.32 5.7c-.7-.02-1.36-.22-1.94-.53v.05a4.28 4.28 0 0 0 3.43 4.19c-.33.09-.68.14-1.04.14-.25 0-.5-.02-.74-.07a4.28 4.28 0 0 0 4 2.98A8.6 8.6 0 0 1 2 19.54a12.13 12.13 0 0 0 6.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19 0-.37-.01-.56A8.7 8.7 0 0 0 24 4.59a8.5 8.5 0 0 1-2.54.7z"/></svg>
  ) },
  { href: "https://linkedin.com/in/yohannesCj", label: "LinkedIn", icon: (
    <svg width="24" height="24" fill="none" viewBox="0 0 24 24" className="text-cyan-500"><path fill="currentColor" d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.88v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z"/></svg>
  ) },
  { href: "https://github.com/yohaboy", label: "GitHub", icon: (
    <svg width="24" height="24" fill="none" viewBox="0 0 24 24" className="text-cyan-500"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.66-.22.66-.48 0-.24-.01-.87-.01-1.7-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.1-1.46-1.1-1.46-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 6.8c.85.004 1.71.115 2.51.337 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85 0 1.33-.01 2.4-.01 2.73 0 .27.16.58.67.48A10.01 10.01 0 0 0 22 12c0-5.52-4.48-10-10-10z"/></svg>
  ) },
];

export default function Hero() {
  return (
    <section id="home" className="flex flex-col items-center justify-center min-h-[60vh] w-full max-w-3xl mx-auto px-4 md:px-0 text-center py-24">
      {/* Avatar/Initials */}
      <div className="w-24 h-24 rounded-full bg-neutral-200 dark:bg-neutral-800 mb-6 flex items-center justify-center shadow border border-neutral-300 dark:border-neutral-700">
        <span className="text-4xl font-extrabold text-neutral-800 dark:text-neutral-100">JZ</span>
      </div>
      <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-neutral-900 dark:text-neutral-100">John Zee.</h1>
      <h2 className="text-2xl md:text-3xl font-medium text-neutral-600 dark:text-neutral-300 mb-8 max-w-2xl">
        Addicted to building seamless web experiences with creativity.
      </h2>
      <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
        <a
          href="/John-Zee-Resume.pdf#"
          download
          className="px-8 py-3 bg-cyan-500 text-white font-bold rounded shadow hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
        >
          Download Resume
        </a>
        <div className="flex gap-4 mt-4 md:mt-0">
          {SOCIALS.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="hover:text-cyan-600 text-cyan-500 transition-colors">
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
} 