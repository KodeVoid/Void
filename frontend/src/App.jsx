import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import WorksDisplay from "./components/Display";
import About from "./pages/About";
import { Analytics } from "@vercel/analytics/react";
import Contact from "./pages/Contact";
import Utilities from "./pages/Utilities";
function App() {
  const [activeTab, setActiveTab] = useState("terminal");

  return (
    <Router>
      <div>
        {/* You can add a navbar here with links to different routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<WorksDisplay />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/utilities" element={<Utilities activeTab={activeTab} setActiveTab={setActiveTab} />} />
        </Routes>
      </div>
      <Analytics />
    </Router>
  );
}

export default App;
