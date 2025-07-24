import './index.css';

import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { ThemeProvider } from "./components/ThemeContext";

function SocialBar() {
  return (
    <div className="hidden md:flex flex-col gap-4 fixed left-8 top-1/3 z-10">
      <a href="#" className="hover:scale-110 transition" aria-label="Twitter">
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" className="text-teal-400"><path fill="currentColor" d="M22.46 6c-.77.35-1.6.58-2.47.69a4.3 4.3 0 0 0 1.88-2.37 8.59 8.59 0 0 1-2.72 1.04A4.28 4.28 0 0 0 12 9.03c0 .34.04.67.1.99A12.13 12.13 0 0 1 3.1 4.9a4.28 4.28 0 0 0 1.32 5.7c-.7-.02-1.36-.22-1.94-.53v.05a4.28 4.28 0 0 0 3.43 4.19c-.33.09-.68.14-1.04.14-.25 0-.5-.02-.74-.07a4.28 4.28 0 0 0 4 2.98A8.6 8.6 0 0 1 2 19.54a12.13 12.13 0 0 0 6.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19 0-.37-.01-.56A8.7 8.7 0 0 0 24 4.59a8.5 8.5 0 0 1-2.54.7z"/></svg>
      </a>
      <a href="#" className="hover:scale-110 transition" aria-label="LinkedIn">
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" className="text-teal-400"><path fill="currentColor" d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.88v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z"/></svg>
      </a>
      <a href="#" className="hover:scale-110 transition" aria-label="GitHub">
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" className="text-teal-400"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.66-.22.66-.48 0-.24-.01-.87-.01-1.7-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.1-1.46-1.1-1.46-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 6.8c.85.004 1.71.115 2.51.337 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85 0 1.33-.01 2.4-.01 2.73 0 .27.16.58.67.48A10.01 10.01 0 0 0 22 12c0-5.52-4.48-10-10-10z"/></svg>
      </a>
      <a href="#" className="hover:scale-110 transition" aria-label="YouTube">
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" className="text-teal-400"><path fill="currentColor" d="M21.8 8.001a2.75 2.75 0 0 0-1.93-1.95C18.2 5.5 12 5.5 12 5.5s-6.2 0-7.87.55A2.75 2.75 0 0 0 2.2 8.001C1.65 9.68 1.65 12 1.65 12s0 2.32.55 3.999a2.75 2.75 0 0 0 1.93 1.95C5.8 18.5 12 18.5 12 18.5s6.2 0 7.87-.55a2.75 2.75 0 0 0 1.93-1.95C22.35 14.32 22.35 12 22.35 12s0-2.32-.55-3.999zM9.75 15.02V8.98l6.5 3.02-6.5 3.02z"/></svg>
      </a>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen w-full bg-white text-neutral-900 dark:bg-neutral-900 dark:text-neutral-100 font-sans">
        <Header />
        <main className="flex flex-col items-center justify-center w-full">
          <Hero />
          <About />
          <Projects />
          <Contact />
        </main>
      </div>
    </ThemeProvider>
  );
}