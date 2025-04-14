import React, { useState, useEffect, useRef } from "react";
import { commandList } from "../commands";

function Window() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState([]);
  const [history, setHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef(null);

  // Key-based command handlers
  const handlers = {
    Enter: () => {
      const cmd = input.trim();
      setHistory((prev) => [cmd, ...prev]);
      setHistoryIndex(-1);

      if (cmd.toLowerCase() === "clear") {
        setOutput([]);
      } else {
        const result = commandList[cmd.toLowerCase()] || `Command not found: ${cmd}`;
        setOutput((prev) => [...prev, `$ ${cmd}`, result]);
      }

      setInput("");
    },

    ArrowUp: () => {
      const newIndex = Math.min(history.length - 1, historyIndex + 1);
      setHistoryIndex(newIndex);
      setInput(history[newIndex] || "");
    },

    ArrowDown: () => {
      const newIndex = Math.max(-1, historyIndex - 1);
      setHistoryIndex(newIndex);
      setInput(history[newIndex] || "");
    },
  };

  const handleKeyDown = (e) => {
    const action = handlers[e.key];
    if (action) action();
  };

  // 🔥 Global shortcut: Ctrl + `
  useEffect(() => {
    const shortcutListener = (e) => {
      if (e.ctrlKey && e.key === "`") {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };

    window.addEventListener("keydown", shortcutListener);
    return () => window.removeEventListener("keydown", shortcutListener);
  }, []);

  return (
    <div className="bg-black/30 border border-white/20 rounded-2xl backdrop-blur-md text-green-400 font-mono p-4 w-full max-w-3xl h-[500px] overflow-y-auto shadow-2xl">
      {output.map((line, index) => (
        <div key={index} className="whitespace-pre-wrap">{line}</div>
      ))}

      <div className="flex items-center mt-2">
        <span className="mr-2 text-green-500 font-bold">$</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="bg-transparent outline-none w-full text-green-400 placeholder:text-green-500 caret-green-400"
          placeholder="Type a command..."
          autoFocus
        />
      </div>
    </div>
  );
}

export default Window;
