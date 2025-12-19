import "./nav-bar.css";

<FontAwesomeIcon icon={byPrefixAndName.fans['sun']} size="xl" style={{color: "#ababab",}} />

function NavBar() {

  return (
    <div className="nav-wrapper">
      <i class="fa-solid fa-moon fa-xl"></i>
      <i class="fa-solid fa-sun fa-xl" style="color: #ffffff;"></i>
      <i class="fa-notdog fa-solid fa-sun fa-xl" style="color: #ababab;"></i>
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