import {
  ArrowRight,
  Code2,
  Database,
  Download,
  FileText,
  GraduationCap,
  Mail,
  MapPin,
  Server,
  Sparkles,
} from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from './BrandIcons';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Hero({ onDownloadResume, onOpenResume }) {
  const { socials } = PERSONAL_INFO;

  return (
    <section id="home" className="hero section" aria-labelledby="hero-heading">
      <div className="hero__glow hero__glow--cyan" aria-hidden="true" />
      <div className="hero__glow hero__glow--purple" aria-hidden="true" />
      <div className="hero__grid-overlay" aria-hidden="true" />

      <div className="container hero__grid">
        <div className="hero__content">
          <h1 id="hero-heading" className="hero__title">
            Hi, I&apos;m <span className="text-gradient">{PERSONAL_INFO.name}</span>
          </h1>

          <p className="hero__role">
            <Sparkles size={18} className="hero__role-icon" aria-hidden="true" />
            <span>{PERSONAL_INFO.role} &amp; Full-Stack Builder</span>
          </p>

          <p className="hero__headline">{PERSONAL_INFO.tagline}</p>

          <p className="hero__description">{PERSONAL_INFO.heroIntro}</p>

          <div className="hero__cta-group">
            <a href="#projects" className="btn btn--primary">
              <span>View Projects</span>
              <ArrowRight size={18} aria-hidden="true" />
            </a>

            <button
              type="button"
              onClick={onOpenResume}
              className="btn btn--secondary"
              title="Preview official resume with work experience"
            >
              <FileText size={17} aria-hidden="true" />
              <span>View Resume</span>
            </button>

            <a
              href={PERSONAL_INFO.resumeFile}
              download={PERSONAL_INFO.resumeDownloadName}
              onClick={onDownloadResume}
              className="btn btn--ghost"
              title="Download resume file"
            >
              <Download size={17} aria-hidden="true" />
              <span>Download</span>
            </a>

            <a href="#contact" className="btn btn--ghost">
              <Mail size={17} aria-hidden="true" />
              <span>Contact</span>
            </a>
          </div>

          <div className="hero__socials" aria-label="Social Links">
            <span className="hero__socials-label">Connect:</span>
            <a
              href={socials.github.href}
              target="_blank"
              rel="noopener noreferrer"
              className="social-pill"
              aria-label="GitHub profile: sathishmgs"
              title="GitHub Profile (github.com/sathishmgs)"
            >
              <GitHubIcon size={17} />
              <span>GitHub</span>
            </a>

            <a
              href={socials.linkedin.href}
              target="_blank"
              rel="noopener noreferrer"
              className="social-pill"
              aria-label="LinkedIn profile: sathish-m2005"
              title="LinkedIn Profile (sathish-m2005)"
            >
              <LinkedInIcon size={17} />
              <span>LinkedIn</span>
            </a>

            <a
              href={socials.email.href}
              className="social-pill"
              aria-label="Send direct email"
              title="Send direct email"
            >
              <Mail size={16} />
              <span>Email</span>
            </a>
          </div>
        </div>

        {/* Developer Visual with Sathish M's Photo */}
        <div className="hero__visual">
          <div className="dev-card glass-card">
            <div className="dev-card__topbar">
              <div className="dev-card__dots" aria-hidden="true">
                <span className="dot dot--red" />
                <span className="dot dot--amber" />
                <span className="dot dot--green" />
              </div>
              <span className="dev-card__filename">Sathish M</span>
              <span className="dev-card__tag">PRO</span>
            </div>

            <div className="dev-card__body">
              <div className="dev-card__profile-wrap">
                <div className="dev-card__avatar-ring">
                  <img
                    src={PERSONAL_INFO.profileImage}
                    alt="Sathish M — Software Developer"
                    className="dev-card__avatar"
                    width="240"
                    height="240"
                  />
                  <span className="avatar-status-badge" title="Open to opportunities" />
                </div>
                <div className="dev-card__identity">
                  <span className="dev-card__name">{PERSONAL_INFO.name}</span>
                  <span className="dev-card__title">{PERSONAL_INFO.role}</span>
                  <span className="dev-card__college">
                    <GraduationCap size={13} aria-hidden="true" />
                    Ayya Nadar Janaki Ammal College, Sivakasi (BCA)
                  </span>
                  <span className="dev-card__loc">
                    <MapPin size={13} aria-hidden="true" />
                    {PERSONAL_INFO.locationShort}
                  </span>
                </div>
              </div>

              <div className="dev-card__code" aria-label="Developer stack summary">
                <pre>
                  <code>
                    <span className="code-kw">const</span>{' '}
                    <span className="code-var">developer</span> = {'{\n'}
                    {'  '}name: <span className="code-str">&quot;Sathish M&quot;</span>,{'\n'}
                    {'  '}location: <span className="code-str">&quot;Rajapalayam, TN&quot;</span>,{'\n'}
                    {'  '}college: <span className="code-str">&quot;Ayya Nadar Janaki Ammal College, Sivakasi (BCA)&quot;</span>,{'\n'}
                    {'  '}frontend: [<span className="code-str">&quot;React JS&quot;</span>, <span className="code-str">&quot;JavaScript&quot;</span>],{'\n'}
                    {'  '}backend: [<span className="code-str">&quot;PHP&quot;</span>, <span className="code-str">&quot;Laravel&quot;</span>, <span className="code-str">&quot;Node.js&quot;</span>],{'\n'}
                    {'  '}database: [<span className="code-str">&quot;MySQL&quot;</span>, <span className="code-str">&quot;SQL&quot;</span>]{'\n'}
                    {'}'};
                  </code>
                </pre>
              </div>

              <div className="dev-card__stack-chips" aria-hidden="true">
                <span className="stack-chip">
                  <Code2 size={14} />
                  React UI
                </span>
                <span className="stack-chip">
                  <Server size={14} />
                  PHP / Laravel
                </span>
                <span className="stack-chip">
                  <Database size={14} />
                  MySQL / SQL
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
