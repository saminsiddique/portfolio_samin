"use client";

import { useState } from "react";
import { projects, allCategories } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.categories.includes(active));

  return (
    <section id="projects" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
          Projects
        </h2>
        <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
          A selection of my engineering and design work. Use the filters to
          browse by category.
        </p>

        {/* Filter pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {allCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                active === cat
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-gray-500 mt-8">
            No projects found in this category.
          </p>
        )}
      </div>
    </section>
  );
}
