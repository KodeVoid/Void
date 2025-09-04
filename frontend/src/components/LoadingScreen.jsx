import { useEffect, useState } from "react";

const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const fullText = "Hello World! \u{1F980}";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(interval);
        setTimeout(() => {
          onComplete();
        }, 1000);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-black text-gray-50 flex flex-col items-center justify-center">
      <div className="mb-4 text-4xl font-bold font-mono">
        {text}
        <span className="animate-blink ml-1">|</span>
      </div>
      <div className="w-[200px] h-[2px] bg-gray-800 rounded relative overflow-hidden">
        <div className="w-[40%] h-full bg-purple-800 shadow-[0_0_15px_#3b82f6] animate-loading-bar" />
      </div>
    </div>
  );
};

export default LoadingScreen;
