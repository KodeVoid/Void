import Navbar from "../components/Navbar";
import { Mail, Linkedin, Send, Twitter } from "lucide-react";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="w-full text-white font-mono min-h-screen bg-black/30 backdrop-blur-sm px-4 py-12 flex flex-col items-center">
        
        {/* Hero Section */}
        <div className="text-center max-w-4xl p-6 md:p-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-black/50 backdrop-blur-lg p-4 rounded animate-pulse">
            ABOUT KENDRICK OLORI
          </h1>
          <p className="text-lg md:text-xl bg-black/40 p-4 rounded backdrop-blur-md">
            I'm Kendrick Olori, a Fullstack Developer with over 4 years of experience in software development, holding a B.Sc in Computer Science from the University of Nigeria, Nsukka. I specialize in building scalable web applications using Python, Rust, and React, with a strong background in network infrastructure and academic system automation. Passionate about open-source contributions and performance optimization, I aim to deliver reliable, high-quality solutions.
          </p>
        </div>

        {/* Professional Experience */}
        <div className="mt-10 max-w-4xl text-left">
          <h2 className="text-2xl font-bold mb-4 text-center">Professional Experience</h2>
          <div className="space-y-6">
            <div className="bg-white/10 p-6 rounded-lg border border-white/20">
              <h3 className="text-xl font-semibold">Network Engineer - UNN ICT and Innovation Center, Nsukka</h3>
              <p className="text-sm text-gray-300">2024</p>
              <ul className="list-disc ml-6 mt-2 text-sm">
                <li>Provided IT support and maintenance for enterprise network equipment.</li>
                <li>Extended campus-wide LAN infrastructure in collaboration with cross-functional teams.</li>
                <li>Configured systems for Computer-Based Test (CBT) examinations.</li>
                <li>Maintained 99%+ network uptime through proactive monitoring.</li>
              </ul>
            </div>
            <div className="bg-white/10 p-6 rounded-lg border border-white/20">
              <h3 className="text-xl font-semibold">Software Developer (Freelance)</h3>
              <p className="text-sm text-gray-300">2024 - Present</p>
              <ul className="list-disc ml-6 mt-2 text-sm">
                <li>Developed a full-stack library management system using Django.</li>
                <li>Automated academic staff scoring at UNN, reducing processing time by 60%.</li>
                <li>Delivered custom software solutions for education and business sectors.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Key Projects */}
        <div className="mt-10 max-w-4xl text-left">
          <h2 className="text-2xl font-bold mb-4 text-center">Key Projects</h2>
          <div className="space-y-6">
            <div className="bg-white/10 p-6 rounded-lg border border-white/20">
              <h3 className="text-xl font-semibold">Academic Staff Scoring System</h3>
              <p className="text-sm text-gray-300">Technologies: Python, Django, PostgreSQL</p>
              <p className="text-sm mt-2">
                <a href="https://github.com/KodeVoid/asr-academic-scoring-system" target="_blank" rel="noopener noreferrer" className="underline">GitHub</a>
              </p>
              <ul className="list-disc ml-6 mt-2 text-sm">
                <li>Partially automated university staff evaluation processes.</li>
                <li>Implemented secure data handling and reporting features.</li>
                <li>Streamlined administrative workflows for academic departments.</li>
              </ul>
            </div>
            <div className="bg-white/10 p-6 rounded-lg border border-white/20">
              <h3 className="text-xl font-semibold">Library Management System</h3>
              <p className="text-sm text-gray-300">Technologies: Django, PostgreSQL, JavaScript</p>
              <ul className="list-disc ml-6 mt-2 text-sm">
                <li>Built a comprehensive book cataloging and borrower management system.</li>
                <li>Implemented real-time inventory tracking and automated fine calculations.</li>
                <li>Designed a responsive user interface with modern UX principles.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Tech Stack / Skills */}
        <div className="mt-10 max-w-3xl text-center">
          <h2 className="text-2xl font-bold mb-4">Technical Skills</h2>
          <div className="flex flex-wrap justify-center gap-4 text-white/90 font-semibold">
            {[
              "Python",
              "Rust",
              "JavaScript",
              "HTML5",
              "Django",
              "React",
              "TailwindCSS",
              "sqlx",
              "actix_web",
              "PostgreSQL",
              "Git",
              "Network Configuration",
              "System Administration",
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-white/10 border border-white/20 rounded-full hover:bg-white/20 transition"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Education & Certifications */}
        <div className="mt-10 max-w-4xl text-left">
          <h2 className="text-2xl font-bold mb-4 text-center">Education & Certifications</h2>
          <div className="bg-white/10 p-6 rounded-lg border border-white/20">
            <h3 className="text-xl font-semibold">Bachelor of Science in Computer Science</h3>
            <p className="text-sm text-gray-300">University of Nigeria, Nsukka | 2024</p>
          </div>
          <div className="bg-white/10 p-6 rounded-lg border border-white/20 mt-4">
            <h3 className="text-xl font-semibold">Fundamentals of Deep Learning</h3>
            <p className="text-sm text-gray-300">Nvidia Deep Learning Institute</p>
            <p className="text-sm mt-2">Gained expertise in machine learning workflows, including data cleaning, feature engineering, and model training.</p>
          </div>
        </div>

        {/* Contact Links */}
        <div className="mt-16 flex flex-wrap justify-center gap-6 px-4">
          {[
            {
              href: "mailto:olorik362@gmail.com",
              label: "Email",
              icon: <Mail size={28} />,
            },
            {
              href: "https://www.linkedin.com/in/kendrick-olori-4a594b232/",
              label: "LinkedIn",
              icon: <Linkedin size={28} />,
            },
            {
              href: "https://t.me/Olorikendeick",
              label: "Telegram",
              icon: <Send size={28} />,
            },
            {
              href: "https://x.com/olorikendrick",
              label: "X (Twitter)",
              icon: <Twitter size={28} />,
            },
            {
              href: "https://wa.me/2348136210636",
              label: "WhatsApp",
              icon: (
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                  alt="WhatsApp"
                  className="w-7 h-7"
                />
              ),
            },
          ].map(({ href, label, icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-xl px-6 py-4 rounded-2xl border border-white/20 bg-white/10 hover:bg-white/20 backdrop-blur-lg text-white font-bold transition-all duration-300 shadow-lg hover:scale-105"
            >
              {icon}
              {label}
            </a>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-10 text-sm text-gray-400 text-center">
          <p>© 2025 Kendrick Olori. All rights reserved.</p>
        </div>
      </div>
    </>
  );
};

export default About;
