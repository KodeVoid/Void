import { useState, useEffect } from "react";

const WorksDisplay = () => {
  const [projects, setProjects] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [isLoading, setIsLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    fetch('/projectsData.json')
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch projects:", err);
        setIsLoading(false);
      });
  }, []);

  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter(project => project.category === activeFilter);

  const categories = ["All", ...new Set(projects.map(project => project.category))];

  const closeModal = () => setSelectedProject(null);

  return (
    <div className="w-full py-12 px-4 md:px-8 bg-black/30 backdrop-blur-sm">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white text-center">My Works</h2>

      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveFilter(category)}
            className={`px-4 py-2 rounded font-mono transition-all duration-300 ${
              activeFilter === category
                ? "bg-white/40 text-white"
                : "bg-black/40 text-white/70 hover:bg-black/60"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <div 
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="cursor-pointer bg-black/50 backdrop-blur-md rounded-lg overflow-hidden transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-lg border border-white/10"
            >
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 right-2">
                  <span className="bg-black/70 text-white text-xs px-2 py-1 rounded">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-white/80 text-sm mb-4">{project.description}</p>
                <div className="flex gap-2 flex-wrap mb-4">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="text-xs bg-white/10 text-white/90 px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-3 text-center text-white py-10">
            No projects found in this category.
          </div>
        )}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex justify-center items-center">
          <div className="relative bg-black text-white p-6 rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-white/20">
            <button
              className="absolute top-2 right-2 text-white/70 hover:text-white text-xl"
              onClick={closeModal}
            >
              ✕
            </button>
            <h3 className="text-2xl font-bold mb-2">{selectedProject.title}</h3>
            <p className="text-white/70 mb-4">{selectedProject.description}</p>

            {selectedProject.media?.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                {selectedProject.media.map((src, idx) => {
                  const ext = src.split('.').pop().toLowerCase();
                  const isImage = ['png', 'jpg', 'jpeg', 'gif', 'webp'].includes(ext);
                  const isPdf = ext === 'pdf';

                  return (
                    <div key={idx} className="bg-white/5 p-3 rounded-lg border border-white/10">
                      {isImage ? (
                        <img
                          src={src}
                          alt={`media-${idx}`}
                          className="rounded object-cover w-full h-auto"
                        />
                      ) : isPdf ? (
                        <a
                          href={src}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white/90 underline"
                        >
                          📄 View PDF {src.split('/').pop()}
                        </a>
                      ) : (
                        <a
                          href={src}
                          download
                          className="text-white/90 underline"
                        >
                          📎 Download File {src.split('/').pop()}
                        </a>
                      )}
                    </div>
                  );
                })}
              </div>
            )}

            <div className="flex gap-3 flex-wrap">
              {selectedProject.demoUrl && (
                <a
                  href={selectedProject.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/20 hover:bg-white/30 text-white px-3 py-1 rounded"
                >
                  Live Demo
                </a>
              )}
              {selectedProject.codeUrl && (
                <a
                  href={selectedProject.codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-white/30 hover:border-white/50 text-white px-3 py-1 rounded"
                >
                  View Code
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WorksDisplay;
