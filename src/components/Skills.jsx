import { useState } from 'react';
import { SKILL_GROUPS } from '../data/portfolioData';

function TechIcon({ techKey }) {
  switch (techKey) {
    case 'react':
      return (
        <svg viewBox="0 0 32 32" className="tech-svg" aria-hidden="true">
          <circle cx="16" cy="16" r="2.8" fill="#38bdf8" />
          <ellipse cx="16" cy="16" rx="12" ry="4.8" stroke="#38bdf8" strokeWidth="1.6" fill="none" />
          <ellipse
            cx="16"
            cy="16"
            rx="12"
            ry="4.8"
            stroke="#38bdf8"
            strokeWidth="1.6"
            fill="none"
            transform="rotate(60 16 16)"
          />
          <ellipse
            cx="16"
            cy="16"
            rx="12"
            ry="4.8"
            stroke="#38bdf8"
            strokeWidth="1.6"
            fill="none"
            transform="rotate(120 16 16)"
          />
        </svg>
      );
    case 'javascript':
      return (
        <svg viewBox="0 0 32 32" className="tech-svg" aria-hidden="true">
          <rect x="4" y="4" width="24" height="24" rx="5" fill="#facc15" fillOpacity="0.18" stroke="#facc15" strokeWidth="1.5" />
          <text x="16" y="21" textAnchor="middle" fill="#fde047" fontSize="11" fontWeight="800" fontFamily="monospace">
            JS
          </text>
        </svg>
      );
    case 'html5':
      return (
        <svg viewBox="0 0 32 32" className="tech-svg" aria-hidden="true">
          <path d="M6 5h20l-1.8 18.5L16 27l-8.2-3.5L6 5z" fill="#f97316" fillOpacity="0.18" stroke="#fb923c" strokeWidth="1.6" strokeLinejoin="round" />
          <path d="M11 11h10l-.4 3.5H12l.4 3.2h7.8l-.6 4.3-3.6 1.2-3.6-1.2-.2-2" stroke="#fdba74" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
      );
    case 'css3':
      return (
        <svg viewBox="0 0 32 32" className="tech-svg" aria-hidden="true">
          <path d="M6 5h20l-1.8 18.5L16 27l-8.2-3.5L6 5z" fill="#3b82f6" fillOpacity="0.18" stroke="#60a5fa" strokeWidth="1.6" strokeLinejoin="round" />
          <path d="M10.8 11h10.4l-.6 4.2H13.5m6.9 0l-.5 5.4-3.9 1.3-3.8-1.3-.3-2.3" stroke="#93c5fd" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
      );
    case 'php':
      return (
        <svg viewBox="0 0 32 32" className="tech-svg" aria-hidden="true">
          <ellipse cx="16" cy="16" rx="13" ry="8.5" fill="#8b5cf6" fillOpacity="0.18" stroke="#a78bfa" strokeWidth="1.6" />
          <text x="16" y="19.5" textAnchor="middle" fill="#c4b5fd" fontSize="9.5" fontWeight="800" fontFamily="monospace">
            PHP
          </text>
        </svg>
      );
    case 'laravel':
      return (
        <svg viewBox="0 0 32 32" className="tech-svg" aria-hidden="true">
          <path
            d="M6 9l5-3 5 3v7l5 3v7l-5 3-5-3v-7l-5-3V9zm15 4l5-3v7l-5 3v-7z"
            fill="#f43f5e"
            fillOpacity="0.16"
            stroke="#fb7185"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      );
    case 'nodejs':
      return (
        <svg viewBox="0 0 32 32" className="tech-svg" aria-hidden="true">
          <polygon
            points="16,4 27,10 27,22 16,28 5,22 5,10"
            fill="#10b981"
            fillOpacity="0.16"
            stroke="#34d399"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <text x="16" y="19.5" textAnchor="middle" fill="#6ee7b7" fontSize="9" fontWeight="800" fontFamily="monospace">
            JS
          </text>
        </svg>
      );
    case 'mysql':
      return (
        <svg viewBox="0 0 32 32" className="tech-svg" aria-hidden="true">
          <ellipse cx="16" cy="9" rx="9" ry="3.5" fill="#0ea5e9" fillOpacity="0.2" stroke="#38bdf8" strokeWidth="1.6" />
          <path d="M7 9v14c0 1.9 4 3.5 9 3.5s9-1.6 9-3.5V9" stroke="#38bdf8" strokeWidth="1.6" fill="none" />
          <path d="M7 16c0 1.9 4 3.5 9 3.5s9-1.6 9-3.5" stroke="#38bdf8" strokeWidth="1.4" strokeOpacity="0.7" fill="none" />
        </svg>
      );
    case 'bootstrap':
      return (
        <svg viewBox="0 0 32 32" className="tech-svg" aria-hidden="true">
          <rect x="4" y="4" width="24" height="24" rx="6" fill="#7952b3" fillOpacity="0.25" stroke="#9333ea" strokeWidth="1.5" />
          <text x="16" y="21" textAnchor="middle" fill="#c084fc" fontSize="13" fontWeight="900" fontFamily="sans-serif">
            B
          </text>
        </svg>
      );
    case 'java':
      return (
        <svg viewBox="0 0 32 32" className="tech-svg" aria-hidden="true">
          <rect x="4" y="4" width="24" height="24" rx="6" fill="#f97316" fillOpacity="0.18" stroke="#ea580c" strokeWidth="1.5" />
          <text x="16" y="21" textAnchor="middle" fill="#fb923c" fontSize="11" fontWeight="800" fontFamily="monospace">
            Java
          </text>
        </svg>
      );
    case 'problemsolving':
      return (
        <svg viewBox="0 0 32 32" className="tech-svg" aria-hidden="true">
          <rect x="4" y="4" width="24" height="24" rx="6" fill="#10b981" fillOpacity="0.18" stroke="#10b981" strokeWidth="1.5" />
          <path d="M12 16l3 3 6-6" stroke="#34d399" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
      );
    case 'designthinking':
      return (
        <svg viewBox="0 0 32 32" className="tech-svg" aria-hidden="true">
          <circle cx="16" cy="16" r="10" fill="#a855f7" fillOpacity="0.2" stroke="#a855f7" strokeWidth="1.5" />
          <circle cx="16" cy="16" r="4" fill="#c084fc" />
        </svg>
      );
    case 'leadership':
      return (
        <svg viewBox="0 0 32 32" className="tech-svg" aria-hidden="true">
          <polygon points="16,6 20,13 27,14 22,20 23,27 16,23 9,27 10,20 5,14 12,13" fill="#f59e0b" fillOpacity="0.2" stroke="#fbbf24" strokeWidth="1.5" />
        </svg>
      );
    case 'sql':
    default:
      return (
        <svg viewBox="0 0 32 32" className="tech-svg" aria-hidden="true">
          <rect x="4" y="6" width="24" height="20" rx="5" fill="#8b5cf6" fillOpacity="0.18" stroke="#a855f7" strokeWidth="1.6" />
          <text x="16" y="19.5" textAnchor="middle" fill="#d8b4fe" fontSize="9.5" fontWeight="800" fontFamily="monospace">
            SQL
          </text>
        </svg>
      );
  }
}

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...SKILL_GROUPS.map((group) => group.category)];

  const visibleGroups =
    selectedCategory === 'All'
      ? SKILL_GROUPS
      : SKILL_GROUPS.filter((group) => group.category === selectedCategory);

  return (
    <section id="skills" className="section reveal" aria-labelledby="skills-heading">
      <div className="container">
        <div className="section-header section-header--split">
          <div>
            <span className="section-eyebrow">Technical Skills</span>
            <h2 id="skills-heading" className="section-title">
              Core <span className="text-gradient">Technologies</span> &amp; Stack
            </h2>
            <p className="section-subtitle">
              Tools and technologies I use to design responsive interfaces, build server APIs, and
              manage relational databases.
            </p>
          </div>

          <div className="filter-tabs" role="tablist" aria-label="Filter skills by category">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={selectedCategory === cat}
                onClick={() => setSelectedCategory(cat)}
                className={`filter-tab ${
                  selectedCategory === cat ? 'filter-tab--active' : ''
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="skills-groups">
          {visibleGroups.map((group) => (
            <div key={group.category} className="skill-group glass-card">
              <div className="skill-group__header">
                <div>
                  <h3 className="skill-group__title">{group.category}</h3>
                  <p className="skill-group__subtitle">{group.subtitle}</p>
                </div>
                <span className="skill-group__count">
                  {group.skills.length} {group.skills.length === 1 ? 'Tech' : 'Technologies'}
                </span>
              </div>

              <div className="skills-grid">
                {group.skills.map((skill) => (
                  <div key={skill.name} className="skill-card">
                    <div className="skill-card__top">
                      <div className="skill-card__icon">
                        <TechIcon techKey={skill.key} />
                      </div>
                      <span className="skill-card__pulse" aria-hidden="true" />
                    </div>

                    <div className="skill-card__info">
                      <h4 className="skill-card__name">{skill.name}</h4>
                      <span className="skill-card__tag">{skill.tag}</span>
                    </div>

                    {/* Animated stack indicator without invented proficiency percentages */}
                    <div className="skill-card__indicator" aria-hidden="true">
                      <span className="skill-card__shimmer" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

