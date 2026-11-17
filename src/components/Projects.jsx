import { useEffect, useState } from 'react';
import {
  Briefcase,
  CheckCircle2,
  ExternalLink,
  FolderGit2,
  GraduationCap,
  Info,
  Layers,
  X,
} from 'lucide-react';
import { ACADEMIC_PROJECTS, WORK_EXPERIENCE_PROJECTS } from '../data/portfolioData';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeTab, setActiveTab] = useState('all'); // 'all' | 'academic' | 'work-experience'

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setSelectedProject(null);
      }
    };

    if (selectedProject) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject]);

  const showAcademic = activeTab === 'all' || activeTab === 'academic';
  const showWorkExp = activeTab === 'all' || activeTab === 'work-experience';

  const renderProjectCard = (project, index, badgeType) => (
    <article key={project.id} className="project-card glass-card">
      <div
        className="project-card__media"
        onClick={() => setSelectedProject(project)}
        style={{ cursor: 'pointer' }}
        title="Click to view full project details"
      >
        <img
          src={project.image}
          alt={`${project.title} preview`}
          className="project-card__img"
          loading="lazy"
          width="640"
          height="380"
        />
        <span className="project-card__index" aria-hidden="true">
          {String(index + 1).padStart(2, '0')}
        </span>
        <div className="project-card__overlay-hint">
          <Info size={16} />
          <span>Click to view details</span>
        </div>
      </div>

      <div className="project-card__body">
        <div className="project-card__header-meta">
          <span className="project-card__category">{project.category}</span>
          {badgeType === 'work' ? (
            <span className="project-badge project-badge--work">
              <Briefcase size={12} aria-hidden="true" />
              <span>Work Exp</span>
            </span>
          ) : (
            <span className="project-badge project-badge--academic">
              <GraduationCap size={12} aria-hidden="true" />
              <span>Academic</span>
            </span>
          )}
        </div>

        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__desc">{project.description}</p>

        <ul className="project-card__highlights" aria-label={`${project.title} features`}>
          {project.highlights.slice(0, 3).map((feature) => (
            <li key={feature}>
              <CheckCircle2 size={15} aria-hidden="true" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <div className="project-card__tech" aria-label="Technologies used">
          {project.technologies.map((tech) => (
            <span key={tech} className="tech-pill">
              {tech}
            </span>
          ))}
        </div>

        <div className="project-card__actions">
          <button
            type="button"
            onClick={() => setSelectedProject(project)}
            className="btn btn--primary btn--sm"
            aria-label={`View details for ${project.title}`}
          >
            <Info size={15} aria-hidden="true" />
            <span>Project Details</span>
          </button>

          <a
            href={project.repoUrl || 'https://github.com/sathishmgs'}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--secondary btn--sm"
            title={`View ${project.title} source code on GitHub`}
          >
            <FolderGit2 size={15} aria-hidden="true" />
            <span>Source Code</span>
          </a>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--ghost btn--sm"
              title={`Open live demo / site for ${project.title}`}
            >
              <ExternalLink size={15} aria-hidden="true" />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );

  return (
    <section id="projects" className="section section--projects reveal" aria-labelledby="projects-heading">
      <div className="section-bg-effect" aria-hidden="true" />
      <div className="container">
        {/* Main Section Header */}
        <div className="section-header">
          <span className="section-eyebrow">Featured Work</span>
          <h2 id="projects-heading" className="section-title">
            Selected <span className="text-gradient">Projects</span>
          </h2>
          <p className="section-subtitle">
            Split into Academic &amp; Personal Web Applications and Production Work Experience Systems
            (Hospital Management, Inventory &amp; Billing, Logistics).
          </p>
        </div>

        {/* Section Filter Switcher */}
        <div className="project-tabs-container">
          <div className="filter-tabs" role="tablist" aria-label="Filter project sections">
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'all'}
              className={`filter-tab ${activeTab === 'all' ? 'filter-tab--active' : ''}`}
              onClick={() => setActiveTab('all')}
            >
              <Layers size={14} aria-hidden="true" />
              <span>All Projects ({ACADEMIC_PROJECTS.length + WORK_EXPERIENCE_PROJECTS.length})</span>
            </button>

            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'academic'}
              className={`filter-tab ${activeTab === 'academic' ? 'filter-tab--active' : ''}`}
              onClick={() => setActiveTab('academic')}
            >
              <GraduationCap size={14} aria-hidden="true" />
              <span>Academic &amp; Web Projects ({ACADEMIC_PROJECTS.length})</span>
            </button>

            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'work-experience'}
              className={`filter-tab ${activeTab === 'work-experience' ? 'filter-tab--active' : ''}`}
              onClick={() => setActiveTab('work-experience')}
            >
              <Briefcase size={14} aria-hidden="true" />
              <span>Work Experience Projects ({WORK_EXPERIENCE_PROJECTS.length})</span>
            </button>
          </div>
        </div>

        <div className="projects-split-layout">
          {/* SECTION 1: Academic & Personal Projects */}
          {showAcademic && (
            <div className="projects-sub-section">
              <div className="projects-sub-header">
                <div className="sub-header-pill sub-header-pill--academic">
                  <GraduationCap size={15} aria-hidden="true" />
                  <span>Section 1 &bull; Academic &amp; Personal Projects</span>
                </div>
                <h3 className="projects-sub-title">
                  Academic &amp; Web <span className="text-gradient">Applications</span>
                </h3>
                <p className="projects-sub-desc">
                  Responsive frontend web apps and database-backed portals including Flower Shop,
                  Aquarium Shop, Book Store &amp; College Management System.
                </p>
              </div>

              <div className="projects-grid">
                {ACADEMIC_PROJECTS.map((project, index) =>
                  renderProjectCard(project, index, 'academic')
                )}
              </div>
            </div>
          )}

          {/* SECTION 2: Work Experience Projects */}
          {showWorkExp && (
            <div className="projects-sub-section projects-sub-section--work">
              <div className="projects-sub-header">
                <div className="sub-header-pill sub-header-pill--work">
                  <Briefcase size={15} aria-hidden="true" />
                  <span>Section 2 &bull; Work Experience Projects</span>
                </div>
                <h3 className="projects-sub-title">
                  Enterprise &amp; Work Experience <span className="text-gradient">Projects</span>
                </h3>
                <p className="projects-sub-desc">
                  Production-grade enterprise software systems built for Hospital Management (HMS),
                  Point-of-Sale Inventory &amp; Billing, and Logistics Fleet tracking.
                </p>
              </div>

              <div className="projects-grid">
                {WORK_EXPERIENCE_PROJECTS.map((project, index) =>
                  renderProjectCard(project, index, 'work')
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Accessible Project Details Modal */}
      {selectedProject && (
        <div
          className="modal-backdrop"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-project-title"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="modal-card glass-card"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="modal-card__header">
              <div>
                <span className="project-card__category">{selectedProject.category}</span>
                <h3 id="modal-project-title" className="modal-card__title">
                  {selectedProject.title}
                </h3>
              </div>
              <button
                type="button"
                className="modal-card__close"
                aria-label="Close project details"
                onClick={() => setSelectedProject(null)}
              >
                <X size={20} />
              </button>
            </div>

            <div className="modal-card__media">
              <img
                src={selectedProject.image}
                alt={`${selectedProject.title} preview`}
                width="640"
                height="380"
              />
            </div>

            <p className="modal-card__desc">{selectedProject.description}</p>

            <div className="modal-card__section">
              <h4>Key Capabilities &amp; Highlights</h4>
              <ul className="project-card__highlights">
                {selectedProject.highlights.map((feature) => (
                  <li key={feature}>
                    <CheckCircle2 size={15} aria-hidden="true" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="modal-card__section">
              <h4>Technologies &amp; Architecture</h4>
              <div className="project-card__tech">
                {selectedProject.technologies.map((tech) => (
                  <span key={tech} className="tech-pill">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="modal-card__actions">
              <a
                href={selectedProject.repoUrl || 'https://github.com/sathishmgs'}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--primary btn--sm"
              >
                <FolderGit2 size={16} aria-hidden="true" />
                <span>View on GitHub</span>
              </a>
              {selectedProject.liveUrl && (
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--secondary btn--sm"
                >
                  <ExternalLink size={16} aria-hidden="true" />
                  <span>Open Live Project</span>
                </a>
              )}
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="btn btn--ghost btn--sm"
              >
                <span>Close</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
