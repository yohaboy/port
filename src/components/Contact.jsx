import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = formData;
    const subject = `New Message from ${name}`;
    const body = `${message}`;

    window.location.href = `mailto:yohannesgziaw777@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="flex flex-col items-center px-4 md:px-0 py-20">
      <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-lg p-10 max-w-xl w-full border border-neutral-200 dark:border-neutral-800">
        <h2 className="text-4xl font-extrabold text-neutral-900 dark:text-neutral-100 mb-4 text-center tracking-tight">
          Get in Touch
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 mb-8 text-center text-lg">
          Have a project in mind or job to be done ? Drop me a message!
        </p>

        <form className="w-full flex flex-col gap-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              required
              className="w-full p-3 rounded-xl bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 border border-neutral-200 dark:border-neutral-700 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              required
              className="w-full p-3 rounded-xl bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 border border-neutral-200 dark:border-neutral-700 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              placeholder="Write your message..."
              required
              className="w-full p-3 rounded-xl bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 border border-neutral-200 dark:border-neutral-700 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full px-6 py-3 bg-cyan-500 text-white rounded-xl font-semibold shadow-md hover:bg-cyan-600 hover:shadow-lg transition duration-300 ease-in-out"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
