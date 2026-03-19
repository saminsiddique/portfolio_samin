import { FaChartLine, FaCogs, FaWind } from "react-icons/fa";
import { researchInterests, researchItems } from "@/data/research";

const interestIcons = [FaChartLine, FaCogs, FaWind];

const statusColors: Record<string, string> = {
  ongoing: "bg-yellow-100 text-yellow-800",
  completed: "bg-green-100 text-green-800",
  published: "bg-blue-100 text-blue-800",
};

export default function Research() {
  const ongoingOrCompleted = researchItems.filter(
    (item) => item.status === "ongoing" || item.status === "completed"
  );
  const published = researchItems.filter(
    (item) => item.status === "published"
  );

  return (
    <section id="research" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
          Research
        </h2>
        <p className="text-gray-500 text-center mb-12 max-w-2xl mx-auto">
          My research interests span energy systems analysis, mathematical
          optimization, and fluid mechanics.
        </p>

        {/* Research Interests */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {researchInterests.map((interest, i) => {
            const Icon = interestIcons[i];
            return (
              <div
                key={interest.area}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <Icon className="text-blue-600 text-2xl mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {interest.area}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {interest.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Current Work */}
        {ongoingOrCompleted.length > 0 && (
          <>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Current Work
            </h3>
            <div className="space-y-6">
              {ongoingOrCompleted.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-xl p-6 shadow-sm"
                >
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span
                      className={`text-xs font-medium px-2.5 py-0.5 rounded-full capitalize ${statusColors[item.status]}`}
                    >
                      {item.status}
                    </span>
                    <h4 className="text-lg font-semibold text-gray-900">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Publications */}
        {published.length > 0 && (
          <>
            <h3 className="text-2xl font-bold text-gray-900 mt-16 mb-6">
              Publications
            </h3>
            <div className="space-y-6">
              {published.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-xl p-6 shadow-sm"
                >
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">
                    {item.title}
                  </h4>
                  {item.journal && (
                    <p className="text-gray-500 text-sm italic mb-2">
                      {item.journal}
                      {item.date && ` — ${item.date}`}
                    </p>
                  )}
                  {item.coAuthors && item.coAuthors.length > 0 && (
                    <p className="text-gray-500 text-sm mb-2">
                      Co-authors: {item.coAuthors.join(", ")}
                    </p>
                  )}
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap items-center gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                    {item.doi && (
                      <a
                        href={`https://doi.org/${item.doi}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 text-xs hover:underline ml-auto"
                      >
                        DOI: {item.doi}
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
