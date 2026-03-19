import Link from "next/link";
import { HiArrowDown } from "react-icons/hi";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-blue-600 font-medium mb-4 tracking-wide uppercase text-sm">
          Welcome to my portfolio
        </p>
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
          Samin Siddique
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto">
          Mechanical Engineering Student — Passionate about design, simulation,
          and building real-world engineering solutions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/projects"
            className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            View Projects <HiArrowDown />
          </Link>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-medium hover:border-blue-600 hover:text-blue-600 transition-colors"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
