import { ArrowUp, GraduationCap, Mail, MapPin } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from './BrandIcons';
import { NAV_LINKS, PERSONAL_INFO } from '../data/portfolioData';

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  const { socials } = PERSONAL_INFO;

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <a href="#home" className="navbar__logo" aria-label="Sathish M Back to Top">
            <span className="navbar__logo-text">
              Sathish <span className="navbar__logo-accent">M</span>
            </span>
          </a>
          <p className="footer__role">{PERSONAL_INFO.role}</p>
          <p className="footer__college">
            <GraduationCap size={14} aria-hidden="true" />
            <span>Ayya Nadar Janaki Ammal College, Sivakasi</span>
          </p>
          <p className="footer__location">
            <MapPin size={14} aria-hidden="true" />
            <span>{PERSONAL_INFO.locationShort}</span>
          </p>
        </div>

        <nav className="footer__nav" aria-label="Footer Navigation">
          {NAV_LINKS.map((link) => (
            <a key={link.id} href={`#${link.id}`} className="footer__link">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="footer__socials">
          <a
            href={socials.github.href}
            target="_blank"
            rel="noopener noreferrer"
            className="icon-btn"
            aria-label="GitHub Profile: sathishmgs"
            title="GitHub: sathishmgs"
          >
            <GitHubIcon size={18} />
          </a>

          <a
            href={socials.linkedin.href}
            target="_blank"
            rel="noopener noreferrer"
            className="icon-btn"
            aria-label="LinkedIn Profile: sathish-m2005"
            title="LinkedIn: sathish-m2005"
          >
            <LinkedInIcon size={18} />
          </a>

          <a
            href={socials.email.href}
            className="icon-btn"
            aria-label="Send direct email"
            title={`Email: ${socials.email.value}`}
          >
            <Mail size={18} />
          </a>

          <a href="#home" className="icon-btn icon-btn--top" aria-label="Scroll to top of page" title="Back to top">
            <ArrowUp size={18} />
          </a>
        </div>
      </div>

      <div className="container footer__bottom">
        <p className="footer__copy">
          &copy; {CURRENT_YEAR} {PERSONAL_INFO.brand}. All rights reserved.
        </p>

      </div>
    </footer>
  );
}
