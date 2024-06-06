/** @format */

import { useState } from "react";
import Sidebar from "./Sidebar.jsx";
import "./App.css";
import About from "./About.jsx";
import Navbar from "./Navbar.jsx";
import Certificates from "./Certificates.jsx";
import Projects from "./Projects.jsx";
import Moresection from "./Moresection.jsx";
import Contact from "./Contact.jsx";

function App() {
  return (
    <div className='container p-8'>
      <Sidebar />
      <div className="inforSection">
        <Navbar />
        <About />
        {/* <Certificates />
        <Projects />
        <Moresection />
        <Contact/> */}
      </div>
    </div>
  );
}

export default App;
