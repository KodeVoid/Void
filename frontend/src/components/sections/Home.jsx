export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <div className="text-center z-10 px-4">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight bg-gradient-to-r from-purple-500 to-purple-900 bg-clip-text text-transparent">
          Hello, I'm Kendrick
        </h1>
        <p className="text-gray-50 mb-10 mx-auto font-mono max-w-2xl">
          I'm a full-stack developer who loves creating clean, composable, and
          scalable applications. My goal is to build solutions that deliver peak
          performance, efficiency, and a delightful user experience.
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="#projects"
            className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded font-medium transition"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="border border-blue-500 text-blue-500 py-3 px-6 rounded font-medium hover:bg-blue-500 hover:text-white transition"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};
