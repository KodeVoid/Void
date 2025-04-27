import Navbar from "./Navbar";
import { Mail, Linkedin, Send, Twitter } from "lucide-react";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="w-full text-white font-mono min-h-screen flex flex-col justify-center items-center bg-black/30 backdrop-blur-sm px-4">

     
        <div className="text-center p-6 md:p-10 max-w-4xl">
          <h1 className="font-mono text-5xl text-white my-3 ">Web Development From The Void</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto bg-black/40 backdrop-blur-sm p-4 rounded">
            Welcome to my journey of web development, where technology meets creativity. Join me as I build innovative and scalable solutions.
          </p>
          <div className="mt-10">
            <a
              href="/portfolio"
              className="inline-block px-6 py-3 bg-white/20 hover:bg-white/30 backdrop-blur-md text-white rounded transition-all duration-300 font-bold border border-white/30"
            >
              Explore My Work
            </a>
          </div>
        </div>

        {/* Contact Links */}
        <div className="mt-12 flex flex-wrap justify-center gap-6 px-4">
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
              href: "https://t.me/Olorikendrick",
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
        <div className="mt-6 text-sm text-gray-400">
          <p>© {new Date().getFullYear()
          } Kendrick Olori. All rights reserved.</p>
        </div>
      </div>
    </>
  );
};

export default Home;
