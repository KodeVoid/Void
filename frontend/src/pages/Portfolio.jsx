import { useState } from 'react';
import { Github, Linkedin, Mail, Globe, Bookmark, Award, Calendar, MapPin, ChevronDown, ChevronUp, FileText } from 'lucide-react';

export default function Portfolio() {
  const [expandedSections, setExpandedSections] = useState({
    experience: true,
    education: true,
    certifications: true,
    projects: true
  });

  const toggleSection = (section) => {
    setExpandedSections({
      ...expandedSections,
      [section]: !expandedSections[section]
    });
  };

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      {/* Header */}
      <header className="bg-blue-900 text-white p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">Olori Kendrick</h1>
          <h2 className="text-xl mb-4">Python Developer</h2>
          
          <div className="flex flex-wrap gap-4 text-sm">
            <a href="mailto:olorik362@gmail.com" className="flex items-center gap-1 hover:text-blue-300">
              <Mail size={16} /> olorik362@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/kendrick-olori-4a594b232/" className="flex items-center gap-1 hover:text-blue-300">
              <Linkedin size={16} /> LinkedIn
            </a>
            <a href="https://void-iota-ashen.vercel.app/" className="flex items-center gap-1 hover:text-blue-300">
              <Globe size={16} /> Portfolio
            </a>
            <a href="https://github.com/Kendricktech" className="flex items-center gap-1 hover:text-blue-300">
              <Github size={16} /> GitHub
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto p-6">
        {/* Summary */}
        <section className="mb-8 bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4 text-blue-900 flex items-center gap-2">
            <FileText size={20} /> Summary
          </h2>
          <p className="text-gray-700">
            I am a Python Developer with a focus on building robust applications and systems. 
            I have experience in developing innovative solutions like the Academic Scoring System 
            using advanced technologies such as Python, Django, and speech recognition tools. 
            With a solid foundation from the University of Nigeria, I am passionate about leveraging my 
            skills in software development and technology to create efficient and user-friendly systems.
          </p>
        </section>

        {/* Key Achievements */}
        <section className="mb-8 bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4 text-blue-900 flex items-center gap-2">
            <Award size={20} /> Key Achievements
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold">Academic Scoring System</h3>
              <p className="text-gray-700">Designed and developed an Academic Scoring System that automated the scoring process and reduced manual errors</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Networking Utility</h3>
              <p className="text-gray-700">Developed a Java-based GUI application to streamline access to commonly used network diagnostic and troubleshooting commands.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Deep Learning Certification</h3>
              <p className="text-gray-700">Completed NVIDIA's Fundamentals of Deep Learning course and earned a certificate of completion.</p>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="mb-8 bg-white p-6 rounded-lg shadow">
          <div 
            className="flex justify-between items-center cursor-pointer" 
            onClick={() => toggleSection('experience')}
          >
            <h2 className="text-2xl font-bold text-blue-900 flex items-center gap-2">
              <Bookmark size={20} /> Experience
            </h2>
            {expandedSections.experience ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </div>
          
          {expandedSections.experience && (
            <div className="mt-4 space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <h3 className="text-lg font-semibold">Network Intern</h3>
                  <span className="text-gray-600 text-sm">01/2024 - 05/2024</span>
                </div>
                <div className="flex items-center mb-3 text-gray-600">
                  <MapPin size={16} className="mr-1" />
                  <span>University of Nigeria ICT Unit, Networking section - Nsukka, Enugu State, Nigeria</span>
                </div>
                <p className="text-gray-700 mb-2">The ICT Unit is responsible for deploying infrastructure and services that support administration, teaching, research, and learning across the University.</p>
                <ul className="list-disc pl-5 text-gray-700">
                  <li>Contributed to a team responsible for building and maintaining LAN and general network infrastructure on campus</li>
                  <li>Developed a GUI application in Java for troubleshooting and resolving common network issues</li>
                </ul>
              </div>
            </div>
          )}
        </section>

        {/* Education */}
        <section className="mb-8 bg-white p-6 rounded-lg shadow">
          <div 
            className="flex justify-between items-center cursor-pointer" 
            onClick={() => toggleSection('education')}
          >
            <h2 className="text-2xl font-bold text-blue-900 flex items-center gap-2">
              <FileText size={20} /> Education
            </h2>
            {expandedSections.education ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </div>
          
          {expandedSections.education && (
            <div className="mt-4">
              <div className="flex justify-between mb-2">
                <h3 className="text-lg font-semibold">Bachelor's Degree</h3>
                <span className="text-gray-600 text-sm">09/2020 - 05/2024</span>
              </div>
              <div className="flex items-center text-gray-600">
                <MapPin size={16} className="mr-1" />
                <span>University of Nigeria, Nsukka</span>
              </div>
            </div>
          )}
        </section>

        {/* Certifications */}
        <section className="mb-8 bg-white p-6 rounded-lg shadow">
          <div 
            className="flex justify-between items-center cursor-pointer" 
            onClick={() => toggleSection('certifications')}
          >
            <h2 className="text-2xl font-bold text-blue-900 flex items-center gap-2">
              <Award size={20} /> Certifications
            </h2>
            {expandedSections.certifications ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </div>
          
          {expandedSections.certifications && (
            <div className="mt-4">
              <div>
                <h3 className="text-lg font-semibold">NVIDIA Deep Learning Institute</h3>
                <p className="text-gray-700">Fundamentals of Deep Learning</p>
              </div>
            </div>
          )}
        </section>

        {/* Skills */}
        <section className="mb-8 bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4 text-blue-900 flex items-center gap-2">
            <Award size={20} /> Skills
          </h2>
          <div className="flex flex-wrap gap-2">
            {['Python', 'Django', 'Git', 'GitHub', 'Java', 'JavaScript', 'PostgreSQL', 'CSS', 'Tailwind', 'SQLite', 'Jupyter Notebook', 'Google Collab', 'Machine Learning'].map((skill) => (
              <span key={skill} className="bg-blue-100 text-blue-800 px-3 py-1 rounded">
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="mb-8 bg-white p-6 rounded-lg shadow">
          <div 
            className="flex justify-between items-center cursor-pointer" 
            onClick={() => toggleSection('projects')}
          >
            <h2 className="text-2xl font-bold text-blue-900 flex items-center gap-2">
              <FileText size={20} /> Projects
            </h2>
            {expandedSections.projects ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </div>
          
          {expandedSections.projects && (
            <div className="mt-4 space-y-6">
              <div>
                <h3 className="text-lg font-semibold">ASR Academic Scoring System</h3>
                <p className="text-gray-600 italic mb-2">Final Year Project focused on academic staff scoring automation</p>
                <ul className="list-disc pl-5 text-gray-700">
                  <li>Designed a system to automate academic staff scoring based on publication records</li>
                  <li>Integrated speech-to-text functionality using Deepgram, with custom transcription parsing via Google Gemini</li>
                  <li>Eliminated manual scoring errors by automating logic from UNN's Yellow Book</li>
                  <li>Successfully captured part of the staff scoring process in UNN</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold">Online Library Management System</h3>
                <p className="text-gray-600 italic mb-2">Application for managing library operations</p>
                <ul className="list-disc pl-5 text-gray-700">
                  <li>Built full-stack app to manage lending, returns, and fine payments</li>
                  <li>Implemented secure Paystack integration for online transactions</li>
                  <li>Used Django template engine for rapid and clean server-rendered pages</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold">Leave Management System</h3>
                <p className="text-gray-600 italic mb-2">System for managing leave requests in a workplace</p>
                <ul className="list-disc pl-5 text-gray-700">
                  <li>Developed a multi-role system for HR leave requests with dashboards for admins, managers, and employees</li>
                  <li>Streamlined leave tracking and reduced administrative load</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold">House Rent Management System</h3>
                <p className="text-gray-600 italic mb-2">Platform for managing rental properties</p>
                <ul className="list-disc pl-5 text-gray-700">
                  <li>Created a platform for property owners to list houses and track rental payments</li>
                  <li>Added admin dashboard to monitor occupancy status and due dates</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold">Void</h3>
                <p className="text-gray-700 mb-2">Developed a personal digital platform showcasing minimalist utilities and tools.</p>
                <ul className="list-disc pl-5 text-gray-700">
                  <li>Implemented a WhatsApp direct messaging utility that enables users to initiate chats without saving contacts, enhancing ease of communication</li>
                  <li>Project demonstrates clean design principles, utility-first thinking, and fullstack integration</li>
                </ul>
              </div>
            </div>
          )}
        </section>

        {/* View More */}
        <div className="text-center">
          <a 
            href="https://github.com/Kendricktech" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-800 text-white rounded-lg hover:bg-blue-900 transition-colors"
          >
            <Github size={20} />
            View more on GitHub
          </a>
        </div>
      </main>

      <footer className="bg-gray-800 text-center text-white p-6 mt-12">
        <p>&copy; {new Date().getFullYear()} Olori Kendrick. All rights reserved.</p>
      </footer>
    </div>
  );
}