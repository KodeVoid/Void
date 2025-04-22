import Navbar from "../components/Navbar";
import { Mail, Linkedin, Send, Twitter } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data:", form);
    // Here you can hook into backend/email service later.
    alert("Message submitted. I’ll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <>
      <Navbar />
      <div className="w-full min-h-screen px-4 py-16 bg-black/30 backdrop-blur-sm text-white font-mono flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-10 bg-black/50 p-4 rounded-xl">
          Contact Kendrick Olori
        </h1>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-xl bg-white/10 p-8 rounded-xl backdrop-blur-lg border border-white/20 shadow-md"
        >
          <div className="mb-6">
            <label className="block mb-2 text-lg">Your Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-black/30 border border-white/20 focus:outline-none"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-lg">Email Address</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-black/30 border border-white/20 focus:outline-none"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-lg">Message</label>
            <textarea
              name="message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-black/30 border border-white/20 focus:outline-none"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3 text-xl bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl transition"
          >
            Send Message
          </button>
        </form>

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

export default Contact;
