import "./App.css";
import { Route, Routes } from "react-router-dom";
// import { useState, useEffect } from "react";
import NavBar from "./components/NavBar/nav-bar";
import AboutMe from "./components/AboutMe/about-me";
import Reflections from "./components/Reflections/reflections";
import Contact from "./components/Contact/contact";
import Resume from "./components/Resume/resume";
import Footer from "./components/Footer/footer";

function App() {

  return (
    <div className="main-body">
      <NavBar/>
      <Routes>
        <Route path="/" element={<AboutMe/>}/>
        <Route path="/reflections" element={<Reflections/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/resume" element={<Resume/>}/>
        {/* <Route path="/advanced-css" element={}/> */}
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
