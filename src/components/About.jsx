import React from "react";

export default function About() {
  return (
<section className="flex flex-col px-8 md:px-32 py-16 mt-8">
  <h2 className="text-3xl font-bold text-teal-400 mb-4">About Me</h2>
  <p className="text-slate-300 max-w-2xl mb-4 text-lg">
    I’m a full-stack developer passionate about building secure, scalable, and user-friendly web applications. I enjoy solving complex problems and turning ideas into seamless digital experiences. Currently, I’m building a secure escrow marketplace at
    <a href="https://www.telechannels.store" className="text-teal-400 underline"> Telechannels</a>
  </p>
  <p className="text-slate-300 max-w-2xl text-lg">
    Outside of coding, I’m a huge fan of <span className="text-teal-400">chess</span> and <span className="text-teal-400">music</span>. Chess sharpens my strategic thinking, while music keeps my creativity alive—both of which inspire how I approach problem-solving as a developer.
  </p>
</section>

  );
} 