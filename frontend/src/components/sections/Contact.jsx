import { useState } from "react";
import RevealOnScroll from "../RevealOnScroll";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY);
      
      setStatus({ type: "success", message: "✅ Message sent successfully!" });
      setFormData({ name: "", email: "", message: "" });
      
      setTimeout(() => setStatus({ type: "", message: "" }), 5000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus({ 
        type: "error", 
        message: "❌ Something went wrong. Please try again." 
      });
      
      setTimeout(() => setStatus({ type: "", message: "" }), 5000);
    } finally {
      setIsLoading(false);
    }
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/kodevoid",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      color: "hover:text-blue-500",
    },
    {
      name: "X (Twitter)",
      url: "https://x.com/olorikendrick",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
      color: "hover:text-gray-300",
    },
    {
      name: "Email",
      url: "mailto:olorik362@gmail.com",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5"
        >
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
          <polyline points="22,6 12,13 2,6"/>
        </svg>
      ),
      color: "hover:text-red-400",
    },
  ];

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20 bg-black text-gray-100"
    >
      <div className="max-w-2xl w-full px-4">
        <RevealOnScroll>
          <h2 className="text-3xl font-bold mb-8 font-mono bg-gradient-to-r from-blue-300 to-purple-800 bg-clip-text text-transparent text-center">
            Get In Touch
          </h2>

          {/* Social Links */}
          <div className="flex justify-center items-center gap-6 mb-8">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                className={`p-3 rounded-full bg-white/5 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg text-gray-400 ${link.color} group`}
              >
                {link.icon}
              </a>
            ))}
          </div>

          <div className="text-center mb-8">
            <p className="text-gray-400 text-sm">
              Connect with me on social media or send a message below
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-6 bg-white/5 p-6 rounded-2xl border border-white/10 shadow-lg"
          >
            {/* Status Banner */}
            {status.message && (
              <div
                className={`p-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                  status.type === "success"
                    ? "bg-green-500/20 text-green-400 border border-green-500/30"
                    : "bg-red-500/20 text-red-400 border border-red-500/30"
                }`}
              >
                {status.message}
              </div>
            )}

            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                disabled={isLoading}
                required
                className="w-full px-4 py-2 rounded-lg bg-black/50 border border-white/10 focus:border-blue-500 focus:ring focus:ring-blue-500/30 outline-none transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                disabled={isLoading}
                required
                className="w-full px-4 py-2 rounded-lg bg-black/50 border border-white/10 focus:border-blue-500 focus:ring focus:ring-blue-500/30 outline-none transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Your message ..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                disabled={isLoading}
                required
                className="w-full px-4 py-2 rounded-lg bg-black/50 border border-white/10 focus:border-blue-500 focus:ring focus:ring-blue-500/30 outline-none resize-none transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:hover:shadow-none flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </button>
          </form>
        </RevealOnScroll>
      </div>
    </section>
  );
};