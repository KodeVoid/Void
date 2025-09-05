import { useState } from "react";
import RevealOnScroll from "../RevealOnScroll";
import emailjs from "emailjs-com";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Use env variables so keys aren't hardcoded (safer, easier to manage)
    const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

    setLoading(true);
    setStatus({ type: "info", message: "📨 Sending your message..." });

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
      .then(() => {
        setLoading(false);
        setStatus({ type: "success", message: "✅ Message sent successfully!" });
        setFormData({ name: "", email: "", message: "" });

        // Auto-clear status after 5s so the banner doesn’t linger forever
        setTimeout(() => setStatus({ type: "", message: "" }), 5000);
      })
      .catch(() => {
        setLoading(false);
        setStatus({ type: "error", message: "❌ Something went wrong. Please try again." });

        // Auto-clear error too, to keep UI clean
        setTimeout(() => setStatus({ type: "", message: "" }), 5000);
      });
  };

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

          <form
            onSubmit={handleSubmit}
            className="space-y-6 bg-white/5 p-6 rounded-2xl border border-white/10 shadow-lg"
          >
            {/* Status banner explains whether we’re sending, succeeded, or failed */}
            {status.message && (
              <div
                className={`p-3 rounded-lg text-sm font-medium ${
                  status.type === "success"
                    ? "bg-green-500/20 text-green-400 border border-green-500/30"
                    : status.type === "error"
                    ? "bg-red-500/20 text-red-400 border border-red-500/30"
                    : "bg-blue-500/20 text-blue-400 border border-blue-500/30"
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
                required
                disabled={loading} // prevent edits while sending
                className="w-full px-4 py-2 rounded-lg bg-black/50 border border-white/10 focus:border-blue-500 focus:ring focus:ring-blue-500/30 outline-none disabled:opacity-50"
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
                required
                disabled={loading}
                className="w-full px-4 py-2 rounded-lg bg-black/50 border border-white/10 focus:border-blue-500 focus:ring focus:ring-blue-500/30 outline-none disabled:opacity-50"
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
                required
                disabled={loading}
                className="w-full px-4 py-2 rounded-lg bg-black/50 border border-white/10 focus:border-blue-500 focus:ring focus:ring-blue-500/30 outline-none resize-none disabled:opacity-50"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading} // avoid duplicate sends
              className={`w-full px-6 py-3 rounded-lg font-medium text-white transition-all duration-300 ${
                loading
                  ? "bg-gray-600 cursor-not-allowed"
                  : "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:-translate-y-1 hover:shadow-lg"
              }`}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </RevealOnScroll>
      </div>
    </section>
  );
};
