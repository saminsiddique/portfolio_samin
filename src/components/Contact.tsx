"use client";

import { useState, FormEvent } from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    await fetch("https://formspree.io/f/YOUR_FORM_ID", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    setSubmitted(true);
    form.reset();
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
          Get In Touch
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Have a question or want to work together? Send me a message and
          I&apos;ll get back to you as soon as possible.
        </p>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Contact form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition resize-none"
                placeholder="Your message..."
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Send Message
            </button>
            {submitted && (
              <p className="text-green-600 text-sm text-center">
                Thanks! Your message has been sent.
              </p>
            )}
          </form>

          {/* Social links */}
          <div className="flex flex-col justify-center space-y-6">
            <a
              href="https://linkedin.com/in/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-gray-600 hover:text-blue-600 transition-colors group"
            >
              <span className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                <FaLinkedin size={24} />
              </span>
              <div>
                <p className="font-medium text-gray-900">LinkedIn</p>
                <p className="text-sm">Connect with me</p>
              </div>
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-gray-600 hover:text-gray-900 transition-colors group"
            >
              <span className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-gray-200 transition-colors">
                <FaGithub size={24} />
              </span>
              <div>
                <p className="font-medium text-gray-900">GitHub</p>
                <p className="text-sm">Check out my code</p>
              </div>
            </a>
            <a
              href="mailto:your@email.com"
              className="flex items-center gap-4 text-gray-600 hover:text-blue-600 transition-colors group"
            >
              <span className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                <FaEnvelope size={24} />
              </span>
              <div>
                <p className="font-medium text-gray-900">Email</p>
                <p className="text-sm">your@email.com</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
