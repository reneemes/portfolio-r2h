import "./footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithubAlt } from "@fortawesome/free-brands-svg-icons";

function Footer() {

  return (
    <footer className="footer">
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