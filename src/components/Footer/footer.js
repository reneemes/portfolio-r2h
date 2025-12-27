import "./footer.css";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithubAlt } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  const location = useLocation();
  const isProjectPage = location.pathname === "/portfolio";

  return (
    <footer className={`footer ${isProjectPage ? "project-footer" : ""}`}>
      <p className="footer__text">Created by Renee Messersmith</p>
      <div className="footer__links">
        <a className="footer__links-icon" href="https://www.linkedin.com/in/reneemessersmith/">
          <FontAwesomeIcon icon={faLinkedinIn} size="lg" style={{color: "#033d5e",}} />
        </a>
        <a className="footer__links-icon" href="https://github.com/reneemes">
          <FontAwesomeIcon icon={faGithubAlt} size="lg" style={{color: "#033d5e",}} />
        </a>
      </div>
    </footer>
  )
}

export default Footer;