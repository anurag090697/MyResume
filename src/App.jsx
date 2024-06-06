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
      <div className='inforSection'>
        <Navbar />
        <About />
        {/* <Certificates />
        <Projects />
        <Moresection />
        <Contact/> */}
        <div className="w-full flex justify-end px-6 my-4"><button className="border-2 py-2 font-black text-blue-700 px-4 bg-lime-300 border-lime-700 rounded-ss-3xl hover:bg-lime-400 hover:rounded-ee-3xl hover:rounded-ss-none hover:text-white">Next</button></div>
      </div>
    </div>
  );
}

export default App;
