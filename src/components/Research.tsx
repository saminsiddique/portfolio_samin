import { FaChartLine, FaCogs, FaWind } from "react-icons/fa";
import { researchInterests, publications } from "@/data/research";

const interestIcons = [FaChartLine, FaCogs, FaWind];

export default function Research() {
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

        {/* Publications */}
        {publications.length > 0 && (
          <>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Publications
            </h3>
            <div className="space-y-4">
              {publications.map((pub, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl p-6 shadow-sm"
                >
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">
                    {pub.title}
                  </h4>
                  <p className="text-gray-600 text-sm mb-1">{pub.authors}</p>
                  <p className="text-gray-500 text-sm italic">
                    {pub.journal}, {pub.year}
                  </p>
                  {pub.doi && (
                    <a
                      href={`https://doi.org/${pub.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 text-sm hover:underline mt-2 inline-block"
                    >
                      DOI: {pub.doi}
                    </a>
                  )}
                  {pub.link && !pub.doi && (
                    <a
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 text-sm hover:underline mt-2 inline-block"
                    >
                      View Paper
                    </a>
                  )}
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
