import { useEffect } from 'react';
import { Download, Printer, X } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      className="modal-backdrop resume-modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-title"
      onClick={onClose}
    >
      <div
        className="resume-modal-dialog"
        onClick={(event) => event.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="resume-modal-bar">
          <div className="resume-modal-bar__info">
            <h3 id="resume-title">Sathish M &mdash; Resume</h3>
            <span className="resume-modal-tag">Official Resume with Work Experience</span>
          </div>

          <div className="resume-modal-bar__actions">
            <button
              type="button"
              onClick={handlePrint}
              className="btn btn--primary btn--sm"
              title="Print or Save as PDF"
            >
              <Printer size={16} aria-hidden="true" />
              <span>Print / Save PDF</span>
            </button>

            <a
              href={PERSONAL_INFO.resumeFile}
              download={PERSONAL_INFO.resumeDownloadName}
              className="btn btn--secondary btn--sm"
              title="Download Resume HTML File"
            >
              <Download size={16} aria-hidden="true" />
              <span>Download File</span>
            </a>

            <button
              type="button"
              onClick={onClose}
              className="modal-card__close"
              aria-label="Close resume preview"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Paper Document Preview */}
        <div className="resume-paper-scroll">
          <div className="resume-paper printable-area" id="resume-document">
            {/* Header */}
            <header className="res-header">
              <h1 className="res-name">SATHISH M</h1>
              <div className="res-contact-line">
                <span>&bull; Rajapalayam,Virudhunagar - 626117</span>
                <span>&bull; Mob: 7708691940</span>
              </div>
              <div className="res-contact-line">
                <span>
                  &bull; E-mail:{' '}
                  <a href="mailto:sathishsenthil2005@gmail.com">sathishsenthil2005@gmail.com</a>
                </span>
                <span>
                  &bull; GitHub:{' '}
                  <a
                    href="https://github.com/sathishmgs"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://github.com/sathishmgs
                  </a>
                </span>
              </div>
            </header>

            <hr className="res-divider" />

            {/* Career Objective */}
            <section className="res-section">
              <h2 className="res-heading">CAREER OBJECTIVE</h2>
              <p className="res-text">
                Motivated and detail-oriented Frontend Developer fresher with hands-on experience in
                building responsive and user-friendly web applications using HTML, CSS, JavaScript,
                and Bootstrap. Passionate about creating interactive UI/UX designs and eager to
                contribute technical skills in a growth-oriented organization.
              </p>
            </section>

            {/* Education */}
            <section className="res-section">
              <h2 className="res-heading">EDUCATION</h2>
              <div className="res-item">
                <div className="res-item-row">
                  <span className="res-item-bold">&bull; AYYA NADAR JANAKI AMMAL COLLEGE</span>
                  <span className="res-item-right">2023 &ndash; 2026</span>
                </div>
                <div className="res-item-sub">
                  BACHELOR OF COMPUTER APPLICATIONS | 2023-2026 |
                </div>
              </div>

              <div className="res-item">
                <div className="res-item-row">
                  <span className="res-item-bold">&bull; N.A. ANNAPPARAJA MEMORIAL HIGHER SECONDARY SCHOOL</span>
                  <span className="res-item-right">2022 &ndash; 2023</span>
                </div>
                <div className="res-item-sub">HSC | 2022-2023 |</div>
              </div>
            </section>

            {/* Skills */}
            <section className="res-section">
              <h2 className="res-heading">SKILLS</h2>
              <ul className="res-bullets">
                <li>
                  <strong>Programming Languages :</strong> PHP, Java
                </li>
                <li>
                  <strong>Web Technologies :</strong> HTML, CSS, JavaScript, Bootstrap, React.js
                </li>
                <li>
                  <strong>Framework :</strong> Laravel (Basic)
                </li>
                <li>
                  <strong>Database :</strong> MySQL
                </li>
                <li>
                  <strong>Soft Skills :</strong> Adaptability, Time Management, Problem Solving,
                  Leadership, Design Thinking
                </li>
              </ul>
            </section>

            {/* Internship */}
            <section className="res-section">
              <h2 className="res-heading">INTERNSHIP</h2>
              <div className="res-item">
                <div className="res-item-bold">PS Infotech &ndash; Madurai</div>
                <p className="res-text">
                  I completed a 30-day internship at PS Infotech from May 2025 to June 2025, where I
                  gained hands-on experience in web designing using HTML, CSS, and JavaScript. During
                  the internship, I developed basic web pages and improved my understanding of
                  front-end development concepts. I also demonstrated strong punctuality, dedication,
                  and a keen interest in learning throughout the program.
                </p>
              </div>
            </section>

            {/* Work Experience / Enterprise Projects */}
            <section className="res-section">
              <h2 className="res-heading">WORK EXPERIENCE &amp; ENTERPRISE SYSTEMS</h2>
              <div className="res-item">
                <div className="res-item-bold">
                  Enterprise Software Developer &bull; Production Projects | 2025 &ndash; Present
                </div>
                <ul className="res-bullets">
                  <li>
                    <strong>Hospital Management System (HMS):</strong> Designed and implemented
                    end-to-end clinical workflow modules including patient registration, OPD/IPD queue,
                    doctor consultation scheduling, digital prescriptions, and automated billing using
                    React.js, Laravel, and MySQL.
                  </li>
                  <li>
                    <strong>Inventory &amp; Billing Management System:</strong> Developed robust POS
                    and inventory control system supporting real-time SKU tracking, barcode scanner
                    input, automated GST tax invoices, supplier purchase orders, and daily revenue
                    analytics.
                  </li>
                  <li>
                    <strong>Logistics &amp; Fleet Management System:</strong> Architected shipment
                    manifest distribution platform managing fleet vehicle dispatches, warehouse routing,
                    driver delivery schedules, and real-time consignment tracking with relational MySQL
                    database.
                  </li>
                </ul>
              </div>
            </section>

            {/* Academic & Personal Projects */}
            <section className="res-section">
              <h2 className="res-heading">PROJECTS</h2>

              <div className="res-project">
                <div className="res-project-title">
                  Website for Flower Shop | June 2025
                </div>
                <ul className="res-bullets">
                  <li>Developed a responsive Flower Shop website using HTML, CSS, and JavaScript during internship</li>
                  <li>Designed a user-friendly UI/UX with product listing, pricing display, and contact form integration</li>
                  <li>Ensured responsive design, cross-browser compatibility, and smooth navigation for better user experience</li>
                  <li>Applied DOM manipulation and interactive features to enhance functionality</li>
                  <li>Strengthened front-end development and web design skills through hands-on implementation</li>
                  <li>
                    Live Project:{' '}
                    <a
                      href="https://flowershop-rouge-eight.vercel.app"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://flowershop-rouge-eight.vercel.app
                    </a>
                  </li>
                </ul>
              </div>

              <div className="res-project">
                <div className="res-project-title">
                  Website for Aquarium Shop | Aug 2025
                </div>
                <ul className="res-bullets">
                  <li>Developed a dynamic Aquarium Shop web application using PHP and MySQL during final year project</li>
                  <li>Created features like product management, user authentication, shopping cart, and database integration</li>
                  <li>Designed and implemented a user-friendly UI/UX for product browsing, detailed views, and order management</li>
                  <li>Built dynamic web applications with front-end and back-end integration</li>
                  <li>Implemented database connectivity using MySQL for efficient data storage and retrieval</li>
                  <li>Performed CRUD operations to manage products and user data effectively</li>
                </ul>
              </div>

              <div className="res-project">
                <div className="res-project-title">
                  Website for Book Store | April 2026
                </div>
                <ul className="res-bullets">
                  <li>Developed a Bookstore Management Web Application using Laravel and MySQL as a personal project</li>
                  <li>Implemented user authentication, book listing, search, and cart functionalities</li>
                  <li>Created an admin dashboard for managing books, categories, and customer orders</li>
                  <li>Integrated database operations using Laravel Eloquent ORM and MVC architecture</li>
                  <li>Designed responsive web pages using HTML, CSS, Bootstrap, and JavaScript.</li>
                </ul>
              </div>

              <div className="res-project">
                <div className="res-project-title">
                  Website for College Management System | March 2026
                </div>
                <ul className="res-bullets">
                  <li>Developed a full-stack College Management System website using HTML, CSS, JavaScript, PHP, and MySQL as a personal project</li>
                  <li>Built a user-friendly portal to manage student data, academic information, and administrative functions</li>
                  <li>Implemented both front-end and back-end functionalities with proper integration</li>
                  <li>Designed efficient database connectivity for smooth data handling and operations</li>
                  <li>Created dynamic web pages to enhance user interaction and system usability</li>
                  <li>Strengthened skills in full-stack web development and dynamic web application design</li>
                  <li>
                    Live Project:{' '}
                    <a
                      href="http://Portal-mgscollege.wuaze.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Portal-mgscollege.wuaze.com
                    </a>
                  </li>
                </ul>
              </div>
            </section>

            {/* Certifications */}
            <section className="res-section">
              <h2 className="res-heading">CERTIFICATIONS</h2>
              <ul className="res-bullets">
                <li>Full Stack Development (MERN Stack) &ndash; 30 Days Masterclass, Novi Tech (Online), 2025</li>
                <li>Object-Oriented Programming (OOP) in Java &ndash; Scaler (Online), 2025</li>
                <li>Data Analytics &ndash; 30 Days Masterclass, Novi Tech (Online), 2025</li>
                <li>Crash Course on Blog and Website Creation using WordPress &ndash; Ayya Nadar Janaki Ammal College, Sivakasi, 2025</li>
                <li>Crash Course on Internet of Things (IoT) &ndash; Ayya Nadar Janaki Ammal College, Sivakasi, 2025</li>
              </ul>
            </section>

            {/* Achievements */}
            <section className="res-section">
              <h2 className="res-heading">ACHIEVEMENTS</h2>
              <ul className="res-bullets">
                <li>Treasure Hunt III Prize &ndash; State Level, Inter-College, P.S.R Engineering College</li>
                <li>Wisdom Rally Participation &ndash; P.S.R Engineering College</li>
                <li>Super Senior District Level Kabaddi Match Runner-Up &ndash; School of Education</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
