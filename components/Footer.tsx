import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const NAV_ITEMS = [
  { label: 'Home',    href: '#home' },
  { label: 'About',   href: '#about' },
  { label: 'Gallery', href: '#works' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">Michal Berco</div>
          <div className="footer-links">
            {NAV_ITEMS.map(({ label, href }) => (
              <a key={href} href={href}>{label}</a>
            ))}
          </div>
          <div className="footer-social">
            <a
              href="https://www.instagram.com/michal_berco"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="https://wa.me/972523055110"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
          </div>
        </div>
        <div className="copyright">
          <p>&copy; 2025 Michal Berco. All Rights Reserved.</p>
          <p className="credit">
            <a href="https://krollkim-portfolio.netlify.app/" target="_blank" rel="noopener noreferrer">
              Developed by Kim Kroll
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
