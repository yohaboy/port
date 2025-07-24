import React, { useState } from "react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-30 w-full bg-white/80 dark:bg-neutral-900/80 border-b border-neutral-200 dark:border-neutral-800 transition-colors">
      <div className="flex items-center justify-between md:justify-center px-8 py-4 max-w-6xl mx-auto">
        {/* Logo/Initials */}
        <div className="md:hidden text-2xl font-extrabold text-cyan-600 dark:text-cyan-400 tracking-tight select-none">JZ</div>
        {/* Desktop nav */}
        <nav className="hidden md:flex gap-8">
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative text-base font-semibold text-neutral-700 dark:text-neutral-200 hover:text-cyan-600 dark:hover:text-cyan-400 transition px-1"
              onClick={e => {
                e.preventDefault();
                handleNavClick(item.href);
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>
        {/* Burger menu for mobile */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 rounded border border-neutral-200 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-800 ml-2 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((v) => !v)}
        >
          {/* Minimal burger icon */}
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24" className="text-neutral-700 dark:text-neutral-200">
            <rect y="5" width="24" height="2" rx="1" fill="currentColor" />
            <rect y="11" width="24" height="2" rx="1" fill="currentColor" />
            <rect y="17" width="24" height="2" rx="1" fill="currentColor" />
          </svg>
        </button>
        {/* Mobile menu overlay */}
        <div
          className={`fixed inset-0 bg-black/30 z-30 transition-opacity duration-200 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
          onClick={() => setMenuOpen(false)}
        />
        {/* Mobile menu */}
        <nav
          className={`fixed top-0 right-0 h-full w-64 bg-white dark:bg-neutral-900 border-l border-neutral-200 dark:border-neutral-800 z-40 flex flex-col gap-6 pt-24 px-8 transition-transform duration-200 md:hidden ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-lg font-semibold text-neutral-700 dark:text-neutral-200 hover:text-cyan-600 dark:hover:text-cyan-400 transition py-2 border-b border-neutral-200 dark:border-neutral-800"
              onClick={e => {
                e.preventDefault();
                handleNavClick(item.href);
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
} 