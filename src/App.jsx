import { useCallback, useEffect, useState } from 'react';
import { CheckCircle2, Info, X } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import './App.css';

const TRACKED_SECTIONS = ['home', 'about', 'skills', 'projects', 'experience', 'education', 'contact'];

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [toast, setToast] = useState(null);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  const showToast = useCallback((type, message) => {
    setToast({ type, message, id: Date.now() });
  }, []);

  useEffect(() => {
    if (!toast) return undefined;
    const timer = setTimeout(() => setToast(null), 4500);
    return () => clearTimeout(timer);
  }, [toast]);

  // Active nav link observer
  useEffect(() => {
    const sectionElements = TRACKED_SECTIONS.map((id) => document.getElementById(id)).filter(
      Boolean
    );

    if (sectionElements.length === 0) return undefined;

    const navObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-35% 0px -55% 0px',
        threshold: 0.01,
      }
    );

    sectionElements.forEach((el) => navObserver.observe(el));
    return () => navObserver.disconnect();
  }, []);

  // Section scroll reveal observer
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');
    if (revealElements.length === 0) return undefined;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      revealElements.forEach((el) => el.classList.add('reveal--visible'));
      return undefined;
    }

    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal--visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    revealElements.forEach((el) => revealObserver.observe(el));
    return () => revealObserver.disconnect();
  }, []);

  const handleDownloadResume = () => {
    showToast(
      'success',
      'Resume file ready! You can also click "View Resume" to view, inspect, or print the exact resume.'
    );
  };

  const handleSocialPlaceholder = (platform, placeholderLabel) => {
    showToast('info', `${platform}: ${placeholderLabel}`);
  };

  return (
    <div className="app-shell">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <Navbar
        activeSection={activeSection}
        onDownloadResume={handleDownloadResume}
        onOpenResume={() => setResumeModalOpen(true)}
      />

      <main id="main-content">
        <Hero
          onDownloadResume={handleDownloadResume}
          onOpenResume={() => setResumeModalOpen(true)}
          onSocialPlaceholder={handleSocialPlaceholder}
        />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact onOpenResume={() => setResumeModalOpen(true)} />
      </main>

      <Footer onSocialPlaceholder={handleSocialPlaceholder} />

      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />

      {toast && (
        <div
          className={`toast toast--${toast.type}`}
          role="status"
          aria-live="polite"
        >
          {toast.type === 'success' ? (
            <CheckCircle2 size={18} aria-hidden="true" />
          ) : (
            <Info size={18} aria-hidden="true" />
          )}
          <span>{toast.message}</span>
          <button
            type="button"
            onClick={() => setToast(null)}
            className="toast__close"
            aria-label="Dismiss notification"
          >
            <X size={15} />
          </button>
        </div>
      )}
    </div>
  );
}
