import Navbar from "./Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="w-full text-white font-mono min-h-screen flex justify-center items-center bg-black/30 backdrop-blur-sm">
        <div className="text-center p-6 md:p-10 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-pulse bg-black/50 backdrop-blur-lg p-4 rounded">
            WEB DEVELOPMENT FROM THE VOID
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto bg-black/40 backdrop-blur-sm p-4 rounded">
            Welcome to my journey of web development, where technology meets creativity. Join me as I build innovative and scalable solutions.
          </p>
          <div className="mt-10">
            <a href="/portfolio" className="inline-block px-6 py-3 bg-white/20 hover:bg-white/30 backdrop-blur-md text-white rounded transition-all duration-300 font-bold border border-white/30">
              Explore My Work
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;