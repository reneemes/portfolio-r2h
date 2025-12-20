import "./footer.css";

function Footer() {

  return (
    <footer className="footer">
      <p className="footer__text">Created by Renee Messersmith</p>
      <div className="footer__links">
        <a className="footer__links-icon" href="https://www.linkedin.com/in/reneemessersmith/">
          <img className="footer__links-icon--img" src="/assets/linkedin.png" alt="LinkedIn Icon"/>
        </a>
        <a className="footer__links-icon" href="https://github.com/reneemes">
          <img className="footer__links-icon--img" src="/assets/github.png" alt="GitHub Icon"/>
        </a>
      </div>
    </footer>
  )
}

export default Footer;