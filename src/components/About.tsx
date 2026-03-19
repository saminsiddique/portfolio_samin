import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <Image
              src="/images/samin_profile.jpg"
              alt="Samin Siddique"
              width={400}
              height={400}
              className="rounded-2xl shadow-lg"
            />
          </div>
          <div>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              I&apos;m a 3rd year Mechanical Engineering undergraduate with a strong
              passion for computer-aided design, finite element analysis, and
              computational fluid dynamics. I enjoy turning complex engineering
              problems into elegant, optimized solutions.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              My coursework and projects have given me hands-on experience with
              SolidWorks, ANSYS, MATLAB, and Python. I&apos;m always looking for
              opportunities to apply my skills to real-world challenges.
            </p>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-semibold text-gray-900 mb-2">Education</h3>
              <p className="text-gray-700 font-medium">
                B.Sc. Mechanical Engineering
              </p>
              <p className="text-gray-500">
                Expected Graduation: 2027
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
