import React, { useState, useEffect, useRef } from "react";
import { commandList } from "../commands";

// This is your enhanced Terminal component that exposes an interface for other components
function TerminalWithInterface() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState([]);
  const [history, setHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef(null);
  const terminalRef = useRef(null);

  // Format phone number for WhatsApp
  const formatPhoneNumber = (raw) => {
    // Remove all non-digit characters
    const num = raw.replace(/[^\d+]/g, '');
    
    // Handle country code if missing (assuming US as default)
    if (num.startsWith('+')) return num.substring(1);
    if (num.length === 10) return '1' + num; // US number without country code
    return num.length >= 10 ? num : '';
  };

  // Process the whatsapp command
  const handleWhatsAppCommand = (args) => {
    if (!args.length) {
      return "Usage: whatsapp [phone number] [message] - Opens WhatsApp chat with specified number";
    }
    
    const phoneArg = args[0];
    const formattedNumber = formatPhoneNumber(phoneArg);
    
    if (!formattedNumber) {
      return "Invalid phone number format. Please include country code or use a 10-digit US number.";
    }
    
    // Check if there's a message
    let url = `https://wa.me/${formattedNumber}`;
    if (args.length > 1) {
      // Join remaining args as the message
      const message = args.slice(1).join(' ');
      url += `?text=${encodeURIComponent(message)}`;
    }
    
    window.open(url, '_blank');
    return `Opening WhatsApp chat with +${formattedNumber}...`;
  };

  // Process commands including parsing of args
  const processCommand = (fullCmd) => {
    const parts = fullCmd.trim().split(' ');
    const cmd = parts[0].toLowerCase();
    const args = parts.slice(1);

    // Handle special commands
    if (cmd === "clear") {
      setOutput([]);
      return null; // No output needed
    } else if (cmd === "whatsapp") {
      return handleWhatsAppCommand(args);
    } else {
      // Check in commandList
      return commandList[cmd] || `Command not found: ${cmd}`;
    }
  };

  // Function to execute a command programmatically
  const executeCommand = (cmd) => {
    if (!cmd) return;
    
    // Add command to output
    setOutput((prev) => [...prev, `$ ${cmd}`]);
    
    // Process and display result
    const result = processCommand(cmd);
    if (result !== null) {
      setOutput((prev) => [...prev, result]);
    }
    
    // Add to history
    setHistory((prev) => [cmd, ...prev]);
  };

  // Key-based command handlers
  const handlers = {
    Enter: () => {
      const cmd = input.trim();
      if (!cmd) return; // Don't process empty commands
      
      executeCommand(cmd);
      setInput("");
      setHistoryIndex(-1);
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
    if (action) {
      e.preventDefault();
      action();
    }
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

  // Auto-scroll to bottom when output changes
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [output]);

  useEffect(() => {
    // Add initial welcome message
    setOutput(["Welcome to Void Terminal. Type 'help' for available commands."]);
  }, []);

  return {
    terminalComponent: (
      <div 
        ref={terminalRef}
        className="bg-black/30 border border-white/20 rounded-2xl backdrop-blur-md text-green-400 font-mono p-4 w-full max-w-3xl h-[500px] overflow-y-auto shadow-2xl"
      >
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
    ),
    executeCommand // Expose this function so other components can send commands
  };
}

export default TerminalWithInterface;