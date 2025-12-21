import "./nav-bar.css";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();
  const isContactPage = location.pathname === "/contact";

  return (
    <div className={`header ${isContactPage ? "contact-header" : ""}`}>
      <div className="header__initial">
        <a className="header__initial--char" href="/">R</a>
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
        <FontAwesomeIcon icon={faBars} size="2xl" style={{color: "var(--font-color)",}} id="hamburger-icon" onClick={() => setIsOpen(true)}/>
        {/* Mobile Nav with Overlay*/}
        <div className={`nav-overlay ${isOpen ? "open" : ""}`} onClick={() => setIsOpen(false)}>
          <div className={`header__nav-bar--mobile ${isOpen ? "open" : ""}`}>
            <FontAwesomeIcon icon={faXmark} size="2xl" id="close-btn" onClick={() => setIsOpen(false)}/>
            <a href="/">About</a>
            <a href="/portfolio">Portfolio</a>
            <a href="/contact">Contact</a>
            <a href="/resume">Resume</a>
            <a href="/reflections">Reflections</a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;