import { useState, useEffect } from 'react'; // Correct the import
import * as Icons from 'lucide-react';

export default function Portfolio() {
  const [portfolioData, setPortfolioData] = useState(null);
  const [expandedSections, setExpandedSections] = useState({
    experience: true,
    education: true,
    certifications: true,
    projects: true,
  });

  useEffect(() => {
    fetch('/portfolioData.json') // Ensure you have your JSON file in the public folder
      .then(res => res.json())
      .then(data => setPortfolioData(data))
      .catch(err => console.error('Failed to load portfolio data:', err));
  }, []);

  if (!portfolioData) {
    return (
      <div className="bg-gray-50 min-h-screen font-sans">
        {/* Show loading screen or skeleton loader */}
        <p>Loading...</p>
      </div>
    );
  }

  const getIcon = (iconName) => {
    const IconComponent = Icons[iconName];
    return IconComponent ? <IconComponent size={16} /> : null;
  };

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      {/* Header */}
      <header className="bg-blue-900 text-white p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">{portfolioData.name}</h1>
          <h2 className="text-xl mb-4">{portfolioData.title}</h2>
          <div className="flex flex-wrap gap-4 text-sm">
            {portfolioData.contact.map((item, idx) => (
              <a key={idx} href={item.href} className="flex items-center gap-1 hover:text-blue-300">
                {getIcon(item.icon)} {item.label}
              </a>
            ))}
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto p-6">
        {/* Summary */}
        <section className="mb-8 bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4 text-blue-900 flex items-center gap-2">
            <Icons.FileText size={20} /> Summary
          </h2>
          <p className="text-gray-700">{portfolioData.summary}</p>
        </section>

        {/* Achievements */}
        <section className="mb-8 bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4 text-blue-900 flex items-center gap-2">
            <Icons.Award size={20} /> Key Achievements
          </h2>
          <div className="space-y-4">
            {portfolioData.achievements.map((ach, idx) => (
              <div key={idx}>
                <h3 className="text-lg font-semibold">{ach.title}</h3>
                <p className="text-gray-700">{ach.description}</p>
              </div>
            ))}
          </div>
        </section>

  

        {/* Achievements */}
        <section className="mb-8 bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4 text-blue-900 flex items-center gap-2">
            <Icons.Award size={20} /> Key Achievements
          </h2>
          <div className="space-y-4">
            {portfolioData.achievements.map((ach, idx) => (
              <div key={idx}>
                <h3 className="text-lg font-semibold">{ach.title}</h3>
                <p className="text-gray-700">{ach.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Repeat the same for Experience, Education, Certifications, Skills, Projects */}
      </main>
    </div>
  );
}

