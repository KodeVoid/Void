import React, { useState } from "react";

// WhatsApp GUI component that can send commands to the terminal
function WhatsAppGUI({ sendTerminalCommand }) {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (!phoneNumber.trim()) {
      setError("Please enter a phone number");
      return;
    }

    // Basic validation
    const cleaned = phoneNumber.replace(/[^\d+]/g, "");
    if (cleaned.length < 10) {
      setError("Please enter a valid phone number");
      return;
    }

    setError("");
    
    // If there's a message, include it in the WhatsApp link
    if (message.trim()) {
      // We need to encode the message for the URL
      const encodedMessage = encodeURIComponent(message);
      sendTerminalCommand(`whatsapp ${phoneNumber} ${encodedMessage}`);
    } else {
      sendTerminalCommand(`whatsapp ${phoneNumber}`);
    }
    
    // Reset form after sending
    setPhoneNumber("");
    setMessage("");
  };

  return (
    <div className="bg-black/30 border border-white/20 rounded-xl backdrop-blur-md p-4 text-green-400 w-full max-w-md">
      <h2 className="text-xl mb-4 font-bold text-center">WhatsApp Messenger</h2>
      
      <div className="mb-4">
        <label className="block mb-1">Phone Number</label>
        <input
          type="text"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="+1 415 555 2671"
          className="w-full bg-black/50 border border-green-800 rounded p-2 text-green-400 outline-none focus:border-green-500"
        />
      </div>
      
      <div className="mb-4">
        <label className="block mb-1">Message (optional)</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter your message here..."
          className="w-full bg-black/50 border border-green-800 rounded p-2 text-green-400 outline-none focus:border-green-500 h-24"
        />
      </div>
      
      {error && <div className="text-red-500 mb-4">{error}</div>}
      
      <button
        onClick={handleSubmit}
        className="w-full bg-green-700 hover:bg-green-600 text-white py-2 px-4 rounded transition-colors"
      >
        Open WhatsApp Chat
      </button>
    </div>
  );
}

export default WhatsAppGUI;