import "./nav-bar.css";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="header">
      <div className="header__initial">
        <a className="header__initial--char">R</a>
      </div>
      <nav className="header__nav-bar">
        {/* Desktop Nav */}
        <div className="header__nav-bar--desktop">
          <a href="/">About</a>
          <a href="/reflections">Reflections</a>
          <a href="/contact">Contact</a>
          <a href="/resume">Resume</a>
        </div>

        {/* Hamburger Icon */}
        <FontAwesomeIcon icon={faBars} size="2xl" id="hamburger-icon" onClick={() => setIsOpen(true)}/>
        {/* Mobile Nav */}
        <div className={`header__nav-bar--mobile ${isOpen ? "open" : ""}`}>
          <FontAwesomeIcon icon={faXmark} size="2xl" id="close-btn" onClick={() => setIsOpen(false)}/>
          <a href="/">About</a>
          <a href="/reflections">Reflections</a>
          <a href="/contact">Contact</a>
          <a href="/resume">Resume</a>
        </div>
        {/* {!isOpen ? 
          <FontAwesomeIcon icon={faBars} size="2xl" id="hamburger-icon" onClick={() => setIsOpen(true)}/>
          :
          <div className="header__nav-bar--mobile">
            <FontAwesomeIcon icon={faXmark} size="2xl" id="close-btn" onClick={() => setIsOpen(false)}/>
            <a href="/">About</a>
            <a href="/reflections">Reflections</a>
            <a href="/contact">Contact</a>
            <a href="/resume">Resume</a>
          </div>
        } */}
      </nav>
    </div>
  );
}

export default NavBar;