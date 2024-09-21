import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from './PortfolioContainer/Home/Home';
import About from './PortfolioContainer/AboutMe/About';
import Resume from './PortfolioContainer/Resume/Resume';
import Testimonial from './PortfolioContainer/Testimonial/Testimonial';
import ContactMe from './PortfolioContainer/ContactMe/Contact'
import Project from './PortfolioContainer/Projects/Project';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/AboutMe" element={<About />} />
          <Route path="/Resume" element={<Resume />} />
          <Route path="/Projects" element={<Project />} />
          <Route path="/Testimonial" element={<Testimonial />} />
          <Route path="/ContactMe" element={<ContactMe />} />/
          </Routes> 
      </Router>
    </div>
  );
}

export default App;