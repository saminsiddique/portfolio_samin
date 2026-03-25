import { skills } from "@/data/skills";
import AnimateOnScroll from "./AnimateOnScroll";

const categories = ["Software", "Analysis", "Programming"] as const;
const delayClasses = ["animate-delay-1", "animate-delay-2", "animate-delay-3"];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <AnimateOnScroll animation="animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Skills
          </h2>
        </AnimateOnScroll>
        <div className="grid md:grid-cols-3 gap-12">
          {categories.map((category, catIndex) => (
            <AnimateOnScroll
              key={category}
              animation="animate-fade-up"
              delay={delayClasses[catIndex]}
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                {category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills
                  .filter((s) => s.category === category)
                  .map((skill) => (
                    <span
                      key={skill.name}
                      className="px-4 py-2 bg-blue-50 text-blue-700 font-medium text-sm rounded-full border border-blue-200"
                    >
                      {skill.name}
                    </span>
                  ))}
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
