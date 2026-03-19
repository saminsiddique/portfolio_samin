import { skills } from "@/data/skills";

const categories = ["Software", "Analysis", "Programming"] as const;

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
          Skills
        </h2>
        <div className="grid md:grid-cols-3 gap-12">
          {categories.map((category) => (
            <div key={category}>
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
                          className="bg-blue-600 h-2.5 rounded-full"
                          style={{ width: `${skill.proficiency}%` }}
                        />
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
