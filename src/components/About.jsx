import {
  Code2,
  Database,
  ExternalLink,
  GraduationCap,
  Layout,
  MapPin,
  Server,
  Sparkles,
} from 'lucide-react';
import { ABOUT_HIGHLIGHTS, PERSONAL_INFO, STATS } from '../data/portfolioData';

const ICON_MAP = {
  Code2,
  Layout,
  Server,
  Database,
};

export default function About() {
  return (
    <section id="about" className="section section--about reveal" aria-labelledby="about-heading">
      <div className="section-bg-effect" aria-hidden="true" />
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">About Me</span>
          <h2 id="about-heading" className="section-title">
            Crafting Reliable <span className="text-gradient">Full-Stack</span> Web Solutions
          </h2>
          <p className="section-subtitle">
            BCA at Ayya Nadar Janaki Ammal College, Sivakasi, bridging interactive React
            frontends with secure PHP / Laravel backend architectures.
          </p>
        </div>

        {/* Stats Strip */}
        <div className="about__stats-grid">
          {STATS.map((stat) => (
            <div key={stat.label} className="about__stat-card glass-card">
              <span className="about__stat-value text-gradient">{stat.value}</span>
              <span className="about__stat-label">{stat.label}</span>
            </div>
          ))}
        </div>

        <div className="about__layout">
          <div className="about__bio glass-card">
            <div className="about__meta">
              <span className="about__badge">
                <MapPin size={15} aria-hidden="true" />
                {PERSONAL_INFO.locationFull}
              </span>
              <span className="about__badge about__badge--college">
                <GraduationCap size={15} aria-hidden="true" />
                <span>Ayya Nadar Janaki Ammal College, Sivakasi (BCA)</span>
              </span>
              <span className="about__badge about__badge--role">
                {PERSONAL_INFO.role}
              </span>
            </div>

            <p className="about__text">{PERSONAL_INFO.aboutIntro}</p>

            <div className="about__focus-list" aria-label="Core Focus Areas">
              <div className="about__focus-item">
                <span className="about__focus-label">College</span>
                <span className="about__focus-value">
                  <a
                    href={PERSONAL_INFO.collegeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-link"
                    title="Visit Ayya Nadar Janaki Ammal College website"
                  >
                    <span>{PERSONAL_INFO.college}</span>
                    <ExternalLink size={13} aria-hidden="true" />
                  </a>
                </span>
              </div>
              <div className="about__focus-item">
                <span className="about__focus-label">Degree</span>
                <span className="about__focus-value">{PERSONAL_INFO.degree}</span>
              </div>
              <div className="about__focus-item">
                <span className="about__focus-label">Frontend</span>
                <span className="about__focus-value">React JS, JavaScript (ES6+), HTML5, CSS3</span>
              </div>
              <div className="about__focus-item">
                <span className="about__focus-label">Backend</span>
                <span className="about__focus-value">PHP, Laravel, Node.js, REST APIs</span>
              </div>
              <div className="about__focus-item">
                <span className="about__focus-label">Database</span>
                <span className="about__focus-value">MySQL, Relational Schema Design, SQL</span>
              </div>
            </div>

            <div className="about__bio-cta">
              <a href="#education" className="btn btn--secondary btn--sm">
                <GraduationCap size={15} />
                <span>View Academic Profile</span>
              </a>
              <a href="#projects" className="btn btn--ghost btn--sm">
                <Sparkles size={15} />
                <span>Explore Projects</span>
              </a>
            </div>
          </div>

          <div className="about__highlights">
            {ABOUT_HIGHLIGHTS.map((item) => {
              const IconComponent = ICON_MAP[item.icon] || Code2;
              return (
                <article key={item.id} className="highlight-card glass-card">
                  <div
                    className="highlight-card__icon"
                    style={{ color: item.accentColor }}
                    aria-hidden="true"
                  >
                    <IconComponent size={22} />
                  </div>
                  <h3 className="highlight-card__title">{item.title}</h3>
                  <p className="highlight-card__desc">{item.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
