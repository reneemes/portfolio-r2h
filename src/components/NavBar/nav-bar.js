import "./nav-bar.css";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);


  return (
    <div className="header">
      <div className="header__mode-icons">
        <FontAwesomeIcon icon={faMoon} className="header__mode-icons--moon" size="xl" style={{ color: "#000000" }} />
        <FontAwesomeIcon icon={faSun} className="header__mode-icons--sun" size="xl" style={{ color: "#ffffff" }} />
      </div>
      <nav className="header__nav-bar">
        <div className="header__nav-bar--desktop">
          <a href="/">About</a>
          <a href="/reflections">Reflections</a>
          <a href="/contact">Contact</a>
          <a href="/resume">Resume</a>
        </div>

        {!isOpen ? 
          <FontAwesomeIcon icon={faBars} size="xl" id="hamburger-icon" onClick={() => setIsOpen(true)}/>
          :
          <div className="header__nav-bar--mobile">
            <FontAwesomeIcon icon={faXmark} size="xl" id="close-btn" onClick={() => setIsOpen(false)}/>
            <a href="/">About</a>
            <a href="/reflections">Reflections</a>
            <a href="/contact">Contact</a>
            <a href="/resume">Resume</a>
          </div>
        }
      </nav>
    </div>
  );
}

export default NavBar;