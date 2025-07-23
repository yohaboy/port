import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="px-8 md:px-32 py-16">
      <h2 className="text-2xl font-bold text-teal-400 mb-4">Contact</h2>
      <form className="max-w-lg flex flex-col gap-4">
        <input type="text" placeholder="Name" className="p-2 rounded bg-[#112240] text-white border border-slate-700 focus:outline-none" />
        <input type="email" placeholder="Email" className="p-2 rounded bg-[#112240] text-white border border-slate-700 focus:outline-none" />
        <textarea placeholder="Message" rows="4" className="p-2 rounded bg-[#112240] text-white border border-slate-700 focus:outline-none"></textarea>
        <button type="submit" className="px-4 py-2 bg-teal-400 text-[#0a192f] rounded font-bold hover:bg-teal-300 transition">Send</button>
      </form>
    </section>
  );
} 