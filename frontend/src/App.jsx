import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./assets/Home";
import Portfolio from "./pages/Portfolio";
import WorksDisplay from "./components/Display";
import { Analytics } from "@vercel/analytics/react";

function App() {
  const [activeTab, setActiveTab] = useState("terminal");

  return (
    <Router>
      <div>
        {/* You can add a navbar here with links to different routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<WorksDisplay />} />
        </Routes>
      </div>
      <Analytics />
    </Router>
  );
}

export default App;
