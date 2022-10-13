import '../styles/css/Footer.css';

const Footer = ({ credits }) => {
  const { author, currentYear } = credits;

  return (
    <footer className="footer">
      <nav className="footer-nav">
        <div className="footer-nav-container">
          <ul className="footer-nav__link-list">
            <li className="footer-nav__link-item">
            <a href="https://twitter.com/jesusbr85600230" className="footer-nav__link">
                <img src="https://i.postimg.cc/jdMPQjZK/twitter-socialnetwork-20007.png" alt="LinkedIn" className="footer-nav__link-image" />
              </a>
            </li>
            <li className="footer-nav__link-item">
              <a href="https://www.instagram.com/jesusbravo3006/" className="footer-nav__link">
                <img src="https://i.postimg.cc/sfJtqS4W/instagram.png" alt="Instagram" className="footer-nav__link-image" />
              </a>
            </li>
            <li className="footer-nav__link-item">
              <a href="https://www.facebook.com/jesus.bravo.9828/" className="footer-nav__link">
                <img src="https://i.postimg.cc/7YHyZXZX/facebook.png" alt="Facebook" className="footer-nav__link-image" />
              </a>
            </li>
            <li className="footer-nav__link-item">
              <a href="wa.link/1ki240" className="footer-nav__link">
                <img src="https://i.postimg.cc/tTbjg90n/Whatsapp-icon-icons-com-66931.png" alt="GitHub" className="footer-nav__link-image" />
              </a>
            </li>
            <li className="footer-nav__link-item">
              <a href="https://www.youtube.com/channel/UCFytXBdAKlfP31cR6E9NI6g" className="footer-nav__link">
                <img src="https://i.postimg.cc/dtPYcvbM/youtube.png" alt="YouTube" className="footer-nav__link-image" />
              </a>
            </li>
          
          </ul>
          <h2 className="footer-nav__credits">
            Copyright &copy; {currentYear} <a href="https://www.instagram.com/jesusbravo3006/" className="footer-nav__credits-author" target="_blank" rel="noreferrer">{author}.</a> Todos los derechos reservados.
          </h2>
        </div>
      </nav>
    </footer>
  );
}

export default Footer;