import Image from "next/image";
import Link from "next/link";
import { HiArrowDown } from "react-icons/hi";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-blue-50/30 to-white"
    >
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text column */}
        <div className="text-center md:text-left order-2 md:order-1">
          <p className="hero-animate hero-animate-delay-1 text-blue-600 font-medium mb-4 tracking-wide uppercase text-sm">
            Welcome to my portfolio
          </p>
          <h1 className="hero-animate hero-animate-delay-2 text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Samin Siddique
          </h1>
          <p className="hero-animate hero-animate-delay-3 text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl">
            Mechanical Engineering Student — Passionate about design,
            simulation, and building real-world engineering solutions.
          </p>
          <div className="hero-animate hero-animate-delay-4 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link
              href="/#projects"
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

        {/* Image column */}
        <div className="hero-image-animate flex justify-center order-1 md:order-2">
          <div className="relative">
            {/* Decorative dot grid */}
            <div
              className="absolute -top-6 -right-6 w-48 h-48 opacity-20"
              style={{
                backgroundImage:
                  "radial-gradient(circle, #3b82f6 1.5px, transparent 1.5px)",
                backgroundSize: "16px 16px",
              }}
            />
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-2xl ring-1 ring-gray-200">
              <Image
                src="/images/samin_profile.jpg"
                alt="Samin Siddique"
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Bottom-left decorative dot grid */}
            <div
              className="absolute -bottom-6 -left-6 w-36 h-36 opacity-15"
              style={{
                backgroundImage:
                  "radial-gradient(circle, #3b82f6 1.5px, transparent 1.5px)",
                backgroundSize: "16px 16px",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
