import { useState } from 'react';
import {
  Check,
  Copy,
  ExternalLink,
  GraduationCap,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send,
  Sparkles,
  UserCheck,
} from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from './BrandIcons';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Contact({ onOpenResume }) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const { socials } = PERSONAL_INFO;

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(socials.email.value);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch {
      setCopiedEmail(false);
    }
  };

  const handleCopyPhone = async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL_INFO.phone);
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2500);
    } catch {
      setCopiedPhone(false);
    }
  };

  return (
    <section id="contact" className="section section--contact reveal" aria-labelledby="contact-heading">
      <div className="section-bg-effect" aria-hidden="true" />
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Get In Touch</span>
          <h2 id="contact-heading" className="section-title">
            Let&apos;s Build Something <span className="text-gradient">Together</span>
          </h2>
          <p className="section-subtitle">
            Interested in discussing a software developer role, web application project, or collaboration?
            Connect directly through any of the channels below.
          </p>
        </div>

        <div className="contact-direct-layout">
          {/* Left Column: Direct Communication Channels */}
          <div className="contact-info">
            {/* Email Card */}
            <div className="contact-card glass-card">
              <div className="contact-card__icon" aria-hidden="true">
                <Mail size={20} />
              </div>
              <div className="contact-card__content">
                <span className="contact-card__label">Email Address</span>
                <a
                  href={`mailto:${socials.email.value}`}
                  className="contact-card__link"
                  title="Send email to Sathish M"
                >
                  {socials.email.value}
                </a>
              </div>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="icon-btn"
                aria-label="Copy email address"
                title="Copy email to clipboard"
              >
                {copiedEmail ? <Check size={16} /> : <Copy size={16} />}
              </button>
            </div>

            {/* Phone & WhatsApp Card */}
            <div className="contact-card glass-card">
              <div className="contact-card__icon" aria-hidden="true">
                <Phone size={20} />
              </div>
              <div className="contact-card__content">
                <span className="contact-card__label">Phone &amp; WhatsApp</span>
                <a
                  href={PERSONAL_INFO.phoneHref}
                  className="contact-card__link"
                  title="Call Sathish M"
                >
                  {PERSONAL_INFO.phoneDisplay}
                </a>
              </div>
              <button
                type="button"
                onClick={handleCopyPhone}
                className="icon-btn"
                aria-label="Copy phone number"
                title="Copy phone number to clipboard"
              >
                {copiedPhone ? <Check size={16} /> : <Copy size={16} />}
              </button>
            </div>

            {/* LinkedIn Card */}
            <div className="contact-card glass-card">
              <div className="contact-card__icon" aria-hidden="true">
                <LinkedInIcon size={20} />
              </div>
              <div className="contact-card__content">
                <span className="contact-card__label">LinkedIn Profile</span>
                <a
                  href={socials.linkedin.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-card__link"
                  title="Visit LinkedIn Profile"
                >
                  <span>{socials.linkedin.value}</span>
                  <ExternalLink size={14} aria-hidden="true" />
                </a>
              </div>
            </div>

            {/* GitHub Card */}
            <div className="contact-card glass-card">
              <div className="contact-card__icon" aria-hidden="true">
                <GitHubIcon size={20} />
              </div>
              <div className="contact-card__content">
                <span className="contact-card__label">GitHub Profile</span>
                <a
                  href={socials.github.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-card__link"
                  title="Visit GitHub Profile"
                >
                  <span>{socials.github.value}</span>
                  <ExternalLink size={14} aria-hidden="true" />
                </a>
              </div>
            </div>

            {/* Location Card */}
            <div className="contact-card glass-card">
              <div className="contact-card__icon" aria-hidden="true">
                <MapPin size={20} />
              </div>
              <div className="contact-card__content">
                <span className="contact-card__label">Location</span>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Rajapalayam+Tamil+Nadu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-card__link"
                  title="View Rajapalayam on Google Maps"
                >
                  <span>{PERSONAL_INFO.locationFull}</span>
                  <ExternalLink size={14} aria-hidden="true" />
                </a>
              </div>
            </div>

            {/* College Card */}
            <div className="contact-card glass-card">
              <div className="contact-card__icon" aria-hidden="true">
                <GraduationCap size={20} />
              </div>
              <div className="contact-card__content">
                <span className="contact-card__label">Institution (BCA 2023–2026)</span>
                <a
                  href="https://anjac.edu.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-card__link"
                  title="Visit Ayya Nadar Janaki Ammal College website"
                >
                  <span>Ayya Nadar Janaki Ammal College, Sivakasi</span>
                  <ExternalLink size={14} aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Connect & Hiring Hub */}
          <div className="contact-hub-card glass-card">
            <div className="contact-hub-card__top">
              <div className="availability-pill">
                <span className="status-dot" aria-hidden="true" />
                <span>Available for Immediate Joining</span>
              </div>
              <span className="role-tag">Frontend &bull; Full-Stack</span>
            </div>

            <h3 className="contact-hub-card__title">
              Ready to create impactful web applications together?
            </h3>

            <p className="contact-hub-card__text">
              I am actively seeking Frontend and Full-Stack Software Developer opportunities.
              Whether you have an opening in your engineering team, an internship, or a freelance
              project, feel free to reach out directly.
            </p>

            <div className="contact-hub-card__actions">
              <a
                href={`mailto:${socials.email.value}?subject=Opportunity%20for%20Sathish%20M%20-%20Software%20Developer`}
                className="btn btn--primary btn--lg contact-cta-btn"
              >
                <Send size={18} aria-hidden="true" />
                <span>Send Email to Sathish</span>
              </a>

              <a
                href={PERSONAL_INFO.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--secondary btn--lg contact-cta-btn"
              >
                <MessageSquare size={18} aria-hidden="true" />
                <span>WhatsApp / Chat ({PERSONAL_INFO.phone})</span>
              </a>

              <a
                href={socials.linkedin.href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--ghost btn--lg contact-cta-btn"
              >
                <LinkedInIcon size={18} />
                <span>Connect on LinkedIn</span>
              </a>

              {onOpenResume && (
                <button
                  type="button"
                  onClick={onOpenResume}
                  className="btn btn--ghost btn--lg contact-cta-btn"
                >
                  <Sparkles size={18} aria-hidden="true" />
                  <span>View Full Resume Online</span>
                </button>
              )}
            </div>

            <div className="contact-hub-card__footer">
              <div className="footer-metric">
                <UserCheck size={16} aria-hidden="true" />
                <span>Open for Relocation / Remote</span>
              </div>
              <div className="footer-metric">
                <Sparkles size={16} aria-hidden="true" />
                <span>Fast response within 24 hours</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
