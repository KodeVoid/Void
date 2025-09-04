export const About = () => {
  const frontendSkills = ["React", "TailwindCSS", "JavaScript"];
  const backendSkills = ["REST", "PostgreSQL", "Requests", "Django"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 font-mono bg-gradient-to-r from-blue-600 to-purple-800 bg-clip-text text-transparent text-center">
          About Me
        </h2>

        <div className="glass rounded-xl p-8 border border-white/10 hover:-translate-y-1 hover:shadow-lg transition-all">
          <p className="text-gray-300 leading-relaxed mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde soluta
            maiores eos, sunt reiciendis consequuntur dicta vel totam
            consectetur laudantium aliquid ducimus esse minus dignissimos.
            Quidem doloribus sunt incidunt facere!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Frontend card */}
            <div className="glass rounded-xl p-6 border border-white/10 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-semibold text-blue-400 mb-2">
                Frontend
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Building responsive, accessible, and modern UIs with React,
                Tailwind, and modern frontend tooling.
              </p>
              <div className="flex flex-wrap gap-2">
                {frontendSkills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-lg text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Backend card */}
            <div className="glass rounded-xl p-6 border border-white/10 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-semibold text-purple-400 mb-2">
                Backend
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Designing scalable APIs and efficient data handling with Rust,
                Python, and other backend technologies.
              </p>
              <div className="flex flex-wrap gap-2">
                {backendSkills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-lg text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
