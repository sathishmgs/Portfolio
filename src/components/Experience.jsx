import { Briefcase, Calendar, CheckCircle2, Building2, MapPin } from 'lucide-react';
import { EXPERIENCE_LIST } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="section reveal" aria-labelledby="experience-heading">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Career Journey</span>
          <h2 id="experience-heading" className="section-title">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <p className="section-subtitle">
            Hands-on training and practical application development across frontend interfaces,
            backend APIs, and relational databases.
          </p>
        </div>

        <div className="experience-list">
          {EXPERIENCE_LIST.map((item) => (
            <article key={item.id} className="experience-card glass-card">
              <div className="experience-card__header">
                <div className="experience-card__role-wrap">
                  <div className="experience-card__icon" aria-hidden="true">
                    <Briefcase size={22} />
                  </div>
                  <div>
                    <h3 className="experience-card__role">{item.role}</h3>
                    <div className="experience-card__meta">
                      <span className="experience-card__meta-item placeholder-chip">
                        <Building2 size={14} aria-hidden="true" />
                        <span>{item.company}</span>
                      </span>
                      <span className="experience-card__meta-item placeholder-chip">
                        <Calendar size={14} aria-hidden="true" />
                        <span>{item.duration}</span>
                      </span>
                      <span className="experience-card__meta-item">
                        <MapPin size={14} aria-hidden="true" />
                        <span>{item.location}</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="experience-card__body">
                <h4 className="experience-card__subheading">Key Responsibilities &amp; Focus Areas</h4>
                <ul className="experience-card__tasks">
                  {item.responsibilities.map((task) => (
                    <li key={task} className="experience-card__task">
                      <CheckCircle2 size={16} aria-hidden="true" />
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

