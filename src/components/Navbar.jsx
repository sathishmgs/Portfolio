import { useEffect, useState } from 'react';
import { FileText, Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../data/portfolioData';

export default function Navbar({ activeSection, onOpenResume }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <a href="#home" className="navbar__logo" aria-label="Sathish M Home">
          <span className="navbar__logo-text">
            Sathish <span className="navbar__logo-accent">M</span>
          </span>
        </a>

        <nav className="navbar__nav" aria-label="Primary Navigation">
          <ul className="navbar__list">
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={`navbar__link ${
                    activeSection === link.id ? 'navbar__link--active' : ''
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="navbar__actions">
          <button
            type="button"
            onClick={onOpenResume}
            className="btn btn--primary btn--sm navbar__resume-btn"
            title="View full resume with work experience"
          >
            <FileText size={16} aria-hidden="true" />
            <span>Resume</span>
          </button>

          <button
            type="button"
            className="navbar__toggle"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div
        id="mobile-navigation"
        className={`navbar__mobile ${menuOpen ? 'navbar__mobile--open' : ''}`}
      >
        <nav aria-label="Mobile Navigation">
          <ul className="navbar__mobile-list">
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={handleLinkClick}
                  className={`navbar__mobile-link ${
                    activeSection === link.id ? 'navbar__mobile-link--active' : ''
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <button
            type="button"
            onClick={() => {
              onOpenResume();
              handleLinkClick();
            }}
            className="btn btn--primary navbar__mobile-resume"
          >
            <FileText size={17} aria-hidden="true" />
            <span>View Full Resume</span>
          </button>
        </nav>
      </div>
    </header>
  );
}

