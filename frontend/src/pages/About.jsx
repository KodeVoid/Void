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
          I'm Kendrick Olori — a fullstack web developer with deep experience in Django and Tailwind, now sharpening my edge with React, React Native, and C++. I focus on building clean, scalable systems that work in the real world, not just on paper. My goal? Launch a dev agency that puts results and reliability first. I don’t chase trends — I combine what’s proven with what’s next, and I build like it matters.          </p>
        </div>

        {/* Tech Stack / Skills */}
        <div className="mt-10 max-w-3xl text-center">
          <h2 className="text-2xl font-bold mb-4">Core Tech Stack</h2>
          <div className="flex flex-wrap justify-center gap-4 text-white/90 font-semibold">
            {[
              "Django",
              "Tailwind CSS",
              "React",
              
              "Git & GitHub",
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
          <p>© 2023 Kendrick Olori. All rights reserved.</p>
        </div>
      </div>
    </>
  );
};

export default About;
