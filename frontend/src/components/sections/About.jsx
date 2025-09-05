export const About = () => {
  const frontendSkills = ["React", "TailwindCSS", "JavaScript", "HTML5"];
  const backendSkills = ["Python", "Rust", "Django", "PostgreSQL", "sqlx", "actix_web"];

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
            I'm an experienced Fullstack Developer with 4+ years in software development 
            and a B.Sc in Computer Science from University of Nigeria, Nsukka. I specialize 
            in building scalable web applications using Python, Rust, and React, with a strong 
            background in network infrastructure and academic system automation. I'm passionate 
            about opensource contributions and performance optimization.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Frontend card */}
            <div className="glass rounded-xl p-6 border border-white/10 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-semibold text-blue-400 mb-2">
                Frontend
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Building responsive, accessible, and modern UIs with React,
                Tailwind, and modern frontend technologies.
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
                Designing scalable APIs and efficient data handling with Python,
                Rust, Django, and PostgreSQL for robust backend solutions.
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-4">
          <div className="p-6 rounded-2xl border-white/10 border hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4">
              Education
            </h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>
                <strong>BSc in Computer Science</strong> - University of Nigeria, Nsukka (2024)
              </li>
              <li>
                <strong>Nvidia Deep Learning Institute</strong> - Fundamentals of Deep Learning
              </li>
              <li>
                Relevant coursework in algorithms, data structures, and software engineering
              </li>
            </ul>
          </div>
          
          <div className="p-6 rounded-2xl border-white/10 border hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4 text-center">
              Work Experience
            </h3>
            <div className="space-y-4 text-gray-300">
              <div>
                <h4 className="font-semibold text-blue-300">Network Engineer</h4>
                <p className="text-sm text-gray-400 mb-1">UNN ICT and Innovation Center • 2024</p>
                <p className="text-sm">Managed enterprise network infrastructure, configured CBT systems, and maintained 99%+ network uptime across university campus.</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-purple-300">Software Developer (Freelance)</h4>
                <p className="text-sm text-gray-400 mb-1">Self-Employed • 2024 - Present</p>
                <p className="text-sm">Developed fullstack applications including library management systems and academic staff scoring automation, reducing processing time by 60%.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};