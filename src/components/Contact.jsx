import React, { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <section id="contact" className="flex flex-col items-center px-4 md:px-0 py-20">
      <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow p-10 max-w-lg w-full flex flex-col items-center border border-neutral-200 dark:border-neutral-800">
        <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-6 tracking-tight">Contact</h2>
        {submitted ? (
          <div className="text-cyan-600 dark:text-cyan-400 text-lg font-semibold py-8">Thank you for reaching out! 🚀</div>
        ) : (
          <form className="w-full flex flex-col gap-5" onSubmit={e => { e.preventDefault(); setSubmitted(true); }}>
            <div className="relative">
              <input type="text" placeholder="Name" className="w-full p-3 pl-10 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 border border-neutral-200 dark:border-neutral-700 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition" />
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-cyan-500 text-xl">👤</span>
            </div>
            <div className="relative">
              <input type="email" placeholder="Email" className="w-full p-3 pl-10 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 border border-neutral-200 dark:border-neutral-700 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition" />
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-cyan-500 text-xl">✉️</span>
            </div>
            <div className="relative">
              <textarea placeholder="Message" rows="4" className="w-full p-3 pl-10 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 border border-neutral-200 dark:border-neutral-700 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition resize-none" />
              <span className="absolute left-3 top-4 text-cyan-500 text-xl">💬</span>
            </div>
            <button type="submit" className="px-6 py-3 bg-cyan-500 text-white rounded font-bold shadow hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition">Send</button>
          </form>
        )}
      </div>
    </section>
  );
} 