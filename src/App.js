import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Homepage from "./pages/Homepage";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";

import Header from "./components/Headers";
import Footer from "./components/Footers";

function App() {
  return (
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Header />
          <div className="container">
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/aboutme" element={<About />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
  );
}

export default App;
