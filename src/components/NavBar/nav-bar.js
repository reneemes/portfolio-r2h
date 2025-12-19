import "./nav-bar.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
// import { byPrefixAndName } from '@awesome.me/free-brands-svg/icons'

function NavBar() {

  return (
    <div className="nav-wrapper">
      <div className="color-mode-icons">
        <FontAwesomeIcon icon={faMoon} className="moon-icon" size="xl" style={{ color: "#ffffff" }} />
        <FontAwesomeIcon icon={faSun} className="sun-icon" size="xl" style={{ color: "#000000" }} />
      </div>
      <nav className="nav-bar">
        <div className="nav-buttons">
          <a href="/">About</a>
          <a href="/reflections">Reflections</a>
          <a href="/contact">Contact</a>
          <a href="/resume">Resume</a>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;