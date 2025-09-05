
import RevealOnScroll from "../RevealOnScroll";
export const Projects = () => {
  const projects = [
    {
      title: "Academic Staff Scoring System",
      description:
        "Partially automated university staff evaluation process with secure data handling and reporting features. Streamlined administrative workflows for academic departments, significantly reducing manual processing time.",
      technologies: ["Python", "Django", "PostgreSQL"],
      githubUrl: "https://github.com/KodeVoid/asr-academic-scoring-system",
      liveUrl: null,
      highlights: [
        "60% reduction in processing time",
        "Automated evaluation workflows",
        "Secure data handling",
      ],
    },
    {
      title: "Library Management System",
      description:
        "Comprehensive book cataloging and borrower management system with real-time inventory tracking and automated fine calculations. Built with modern UX principles and responsive design.",
      technologies: ["Django", "PostgreSQL", "JavaScript"],
      githubUrl: null,
      liveUrl: null,
      highlights: [
        "Real-time inventory tracking",
        "Automated fine calculations",
        "Responsive UI design",
      ],
    },
    {
      title: "Open Source Contributions",
      description:
        "Active contributor to Arcadia Solutions, collaborating with global developer community on code reviews and improvements. Focused on community-driven development initiatives.",
      technologies: ["Open Source", "Code Review", "Collaboration"],
      githubUrl:
        "https://github.com/Arcadia-Solutions/arcadia/pull/317#discussion_r2288842028",
      liveUrl: null,
      highlights: [
        "Global collaboration",
        "Code review expertise",
        "Community contributions",
      ],
    },
  ];

  return (
    <RevealOnScroll>
        <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 font-mono bg-gradient-to-r from-blue-600 to-purple-800 bg-clip-text text-transparent text-center">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass rounded-xl p-6 border border-white/10 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <div className="flex gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub Repository"
                      className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                    >
                      {/* GitHub SVG */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-4 h-4 text-gray-400 hover:text-white"
                      >
                        <path d="M12 1C5.73 1 1 5.73 1 12c0 4.87 3.16 9 7.55 10.46.55.1.75-.24.75-.53v-1.87c-3.07.67-3.72-1.48-3.72-1.48-.5-1.3-1.22-1.65-1.22-1.65-.99-.68.07-.67.07-.67 1.1.08 1.68 1.13 1.68 1.13.97 1.67 2.54 1.19 3.16.91.1-.7.38-1.18.68-1.45-2.45-.28-5.02-1.22-5.02-5.43 0-1.2.43-2.18 1.13-2.95-.11-.28-.49-1.42.11-2.95 0 0 .92-.29 3.02 1.13A10.4 10.4 0 0 1 12 6.8c.93.01 1.87.13 2.74.38 2.1-1.42 3.02-1.13 3.02-1.13.6 1.53.22 2.67.11 2.95.7.77 1.13 1.75 1.13 2.95 0 4.22-2.57 5.14-5.02 5.43.39.33.73.97.73 1.95v2.88c0 .29.2.63.75.53A11 11 0 0 0 23 12c0-6.27-4.73-11-11-11z" />
                      </svg>
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Live Demo"
                      className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                    >
                      {/* External Link SVG */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-4 h-4 text-gray-400 hover:text-white"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>

              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              {project.highlights?.length > 0 && (
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-blue-400 mb-2">
                    Key Features:
                  </h4>
                  <ul className="text-xs text-gray-400 space-y-1">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-center">
                        <span className="w-1 h-1 bg-blue-400 rounded-full mr-2"></span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="flex flex-wrap gap-2 mt-4">
                {project.technologies?.map((tech) => (
                  <span
                    key={tech}
                    className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 px-3 py-1 rounded-full text-xs font-medium border border-blue-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/kodevoid"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
    </RevealOnScroll>
  );
};
