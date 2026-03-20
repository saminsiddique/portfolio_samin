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
              <div className="space-y-5">
                {skills
                  .filter((s) => s.category === category)
                  .map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-gray-700">
                          {skill.name}
                        </span>
                        <span className="text-sm text-gray-500">
                          {skill.proficiency}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div
                          className="progress-bar-fill bg-blue-600 h-2.5 rounded-full"
                          style={{ "--target-width": `${skill.proficiency}%` } as React.CSSProperties}
                        />
                      </div>
                    </div>
                  ))}
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
