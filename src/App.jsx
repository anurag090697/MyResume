import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar.jsx";
import "./App.css";
import About from "./About.jsx";
import Navbar from "./Navbar.jsx";
import Certificates from "./Certificates.jsx";
import Projects from "./Projects.jsx";
import Moresection from "./Moresection.jsx";
import Contact from "./Contact.jsx";

const routes = ['/', '/certificates', '/projects', '/more', '/contact'];

function MainContent() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNext = () => {
    const currentIndex = routes.indexOf(location.pathname);
    const nextIndex = (currentIndex + 1) % routes.length;
    navigate(routes[nextIndex]);
  };

  return (
    <div className='inforSection rounded-3xl bg-gradient-to-br from-cyan-600 to-cyan-800 p-8 '>
      <Navbar />
      <Routes>
        <Route path='/' element={<About />} />
        <Route path='/certificates' element={<Certificates />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/more' element={<Moresection />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <div className='w-full flex justify-end px-6 mt-12'>
        <button 
          onClick={handleNext}
          className='border-2 py-2 font-black text-blue-700 px-4 bg-lime-300 border-lime-700 rounded-ss-3xl hover:bg-lime-400 hover:rounded-ee-3xl hover:rounded-ss-none hover:text-white'
        >
          Next
        </button>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className='container min-h-dvh p-8 relative bg-gradient-to-br from-indigo-900 via-sky-800 to-cyan-900 min-w-full'>
        <Sidebar />
        <MainContent />
      </div>
    </BrowserRouter>
  );
}

export default App;