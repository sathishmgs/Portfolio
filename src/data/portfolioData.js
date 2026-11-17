import sathishImg from '../assets/sathish.jpg';
import flowerShopImg from '../assets/project-flower-shop.png';
import aquariumShopImg from '../assets/project-aquarium-shop.png';
import movieBookingImg from '../assets/project-movie-booking.png';
import hospitalErpImg from '../assets/project-hospital-erp.png';
import collegePortalImg from '../assets/project-college-portal.png';
import inventoryBillingImg from '../assets/project-inventory-billing.png';
import logisticsImg from '../assets/project-logistics.png';

export const PERSONAL_INFO = {
  brand: 'Sathish M',
  name: 'Sathish M',
  role: 'Software Developer',
  tagline: 'Building Modern Web Applications & Scalable Full-Stack Solutions.',
  locationShort: 'Rajapalayam, Virudhunagar',
  locationFull: 'Rajapalayam, Virudhunagar - 626117, Tamil Nadu, India',
  college: 'Ayya Nadar Janaki Ammal College, Sivakasi',
  degree: 'Bachelor of Computer Applications (BCA) | 2023 - 2026',
  collegeUrl: 'https://anjac.edu.in/',
  phone: '7708691940',
  phoneDisplay: '+91 7708691940',
  phoneHref: 'tel:+917708691940',
  whatsappHref: 'https://wa.me/917708691940',
  heroIntro:
    'Motivated Frontend & Full-Stack Developer with hands-on experience building responsive web applications using HTML, CSS, JavaScript, Bootstrap, React.js, PHP, Laravel, and MySQL. Passionate about creating clean UI/UX designs and production-grade enterprise software.',
  aboutIntro:
    "I'm Sathish M, a dedicated Software Developer based in Rajapalayam, Tamil Nadu, pursuing Bachelor of Computer Applications (BCA) at Ayya Nadar Janaki Ammal College, Sivakasi. I specialize in building responsive, modern user interfaces with React and engineering dependable backends using PHP, Laravel, and MySQL. With experience spanning web portals, e-commerce applications, and enterprise systems (HMS, Billing, Logistics), I focus on building high-performance, user-friendly solutions.",
  careerObjective:
    'Motivated and detail-oriented Frontend Developer fresher with hands-on experience in building responsive and user-friendly web applications using HTML, CSS, JavaScript, and Bootstrap. Passionate about creating interactive UI/UX designs and eager to contribute technical skills in a growth-oriented organization.',
  profileImage: sathishImg,
  resumeFile: '/Sathish-Resume-Placeholder.html',
  resumeDownloadName: 'Sathish_M_Software_Developer_Resume.html',
  socials: {
    email: {
      value: 'sathishsenthil2005@gmail.com',
      href: 'mailto:sathishsenthil2005@gmail.com',
      placeholderLabel: 'sathishsenthil2005@gmail.com',
      isPlaceholder: false,
    },
    github: {
      value: 'github.com/sathishmgs',
      href: 'https://github.com/sathishmgs',
      placeholderLabel: 'GitHub: sathishmgs',
      isPlaceholder: false,
    },
    linkedin: {
      value: 'linkedin.com/in/sathish-m2005',
      href: 'https://www.linkedin.com/in/sathish-m2005/',
      placeholderLabel: 'LinkedIn: sathish-m2005',
      isPlaceholder: false,
    },
    phone: {
      value: '+91 7708691940',
      href: 'tel:+917708691940',
      placeholderLabel: '+91 7708691940',
      isPlaceholder: false,
    },
  },
};

export const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

export const ABOUT_HIGHLIGHTS = [
  {
    id: 'software-dev',
    title: 'Software Development',
    description:
      'End-to-end web architecture focusing on clean modular design, high performance, and real-world practical problem solving.',
    icon: 'Code2',
    accentColor: '#38bdf8',
  },
  {
    id: 'frontend-dev',
    title: 'Frontend Engineering',
    description:
      'Building ultra-responsive, accessible user interfaces crafted with React.js, modern ES6+ JavaScript, HTML5, CSS3, and Bootstrap.',
    icon: 'Layout',
    accentColor: '#818cf8',
  },
  {
    id: 'backend-dev',
    title: 'Backend & APIs',
    description:
      'Designing structured MVC architectures, server logic, and RESTful API endpoints using PHP, Laravel, and Node.js.',
    icon: 'Server',
    accentColor: '#a855f7',
  },
  {
    id: 'database-mgmt',
    title: 'Database Architecture',
    description:
      'Relational data modeling, ACID transaction integrity, CRUD operations, and optimized indexing with MySQL and SQL.',
    icon: 'Database',
    accentColor: '#10b981',
  },
];

export const STATS = [
  { value: 'BCA', label: 'Ayya Nadar Janaki Ammal College, Sivakasi' },
  { value: '7+', label: 'Total Projects' },
  { value: '3+', label: 'Enterprise Systems' },
  { value: 'Rajapalayam', label: 'Tamil Nadu' },
];

export const SKILL_GROUPS = [
  {
    category: 'Frontend Development',
    subtitle: 'Interactive User Interfaces & Responsive Design',
    color: '#38bdf8',
    skills: [
      {
        name: 'React.js',
        tag: 'Component Architecture & Hooks',
        key: 'react',
        level: 90,
      },
      {
        name: 'JavaScript',
        tag: 'ES6+, Async/Await & DOM Logic',
        key: 'javascript',
        level: 88,
      },
      {
        name: 'HTML5 & CSS3',
        tag: 'Semantic Markup & Responsive UI',
        key: 'html5',
        level: 95,
      },
      {
        name: 'Bootstrap',
        tag: 'Responsive Grid & Component Styling',
        key: 'bootstrap',
        level: 88,
      },
    ],
  },
  {
    category: 'Backend & Programming',
    subtitle: 'Server Logic, MVC Architecture & Languages',
    color: '#a855f7',
    skills: [
      {
        name: 'PHP',
        tag: 'Server-Side Scripting & Web Apps',
        key: 'php',
        level: 85,
      },
      {
        name: 'Laravel',
        tag: 'MVC Framework, Routing & Blade',
        key: 'laravel',
        level: 82,
      },
      {
        name: 'Java',
        tag: 'Object-Oriented Programming (OOP)',
        key: 'java',
        level: 80,
      },
      {
        name: 'Node.js',
        tag: 'Runtime & Asynchronous Services',
        key: 'nodejs',
        level: 78,
      },
    ],
  },
  {
    category: 'Database & Soft Skills',
    subtitle: 'Relational Modeling, Query Optimization & Teamwork',
    color: '#10b981',
    skills: [
      {
        name: 'MySQL & SQL',
        tag: 'Relational RDBMS, CRUD & Joins',
        key: 'mysql',
        level: 86,
      },
      {
        name: 'Problem Solving',
        tag: 'Algorithmic Thinking & Debugging',
        key: 'problemsolving',
        level: 90,
      },
      {
        name: 'Design Thinking',
        tag: 'Intuitive UX & User Flow Design',
        key: 'designthinking',
        level: 85,
      },
      {
        name: 'Adaptability & Leadership',
        tag: 'Time Management & Team Collaboration',
        key: 'leadership',
        level: 88,
      },
    ],
  },
];

// Part 1: Current / Academic & Web Projects (Hospital replaced with College Portal)
export const ACADEMIC_PROJECTS = [
  {
    id: 'flower-shop',
    title: 'Website for Flower Shop',
    category: 'Frontend Web Application | Internship',
    section: 'academic',
    sectionLabel: 'Academic & Personal Project',
    date: 'June 2025',
    image: flowerShopImg,
    description:
      'A responsive Flower Shop website developed using HTML, CSS, and JavaScript during internship, featuring dynamic product showcase, real-time pricing calculation, and interactive contact form.',
    highlights: [
      'Developed a responsive Flower Shop website using HTML, CSS, and JavaScript during internship',
      'Designed a user-friendly UI/UX with product listing, pricing display, and contact form integration',
      'Ensured responsive design, cross-browser compatibility, and smooth navigation for better user experience',
      'Applied DOM manipulation and interactive features to enhance functionality',
    ],
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    liveUrl: 'https://flowershop-rouge-eight.vercel.app',
    repoUrl: 'https://github.com/sathishmgs',
  },
  {
    id: 'aquarium-shop',
    title: 'Website for Aquarium Shop',
    category: 'Full-Stack Web Application | Final Year Project',
    section: 'academic',
    sectionLabel: 'Academic & Personal Project',
    date: 'August 2025',
    image: aquariumShopImg,
    description:
      'A dynamic Aquarium Shop web application built with PHP and MySQL featuring product management, customer authentication, shopping cart, and database-driven CRUD operations.',
    highlights: [
      'Developed a dynamic Aquarium Shop web application using PHP and MySQL during final year project',
      'Created features like product management, user authentication, shopping cart, and database integration',
      'Designed and implemented a user-friendly UI/UX for product browsing, detailed views, and order management',
      'Implemented database connectivity using MySQL for efficient data storage and retrieval',
    ],
    technologies: ['PHP', 'MySQL', 'JavaScript', 'HTML5', 'CSS3'],
    liveUrl: 'https://github.com/sathishmgs',
    repoUrl: 'https://github.com/sathishmgs',
  },
  {
    id: 'movie-booking',
    title: 'Website for Book Store / Movie Ticket Booking',
    category: 'React & Laravel Web Application | Personal Project',
    section: 'academic',
    sectionLabel: 'Academic & Personal Project',
    date: 'April 2026',
    image: movieBookingImg,
    description:
      'An interactive management and booking web application featuring authenticated accounts, dynamic listings, interactive selection matrix, admin dashboard, and database operations.',
    highlights: [
      'Developed management web application using React.js, Laravel, and MySQL architecture',
      'Implemented user authentication, dynamic search, listing, and interactive cart/booking flows',
      'Created an intuitive admin dashboard for managing catalog categories and customer orders',
      'Integrated relational database operations with clean MVC design patterns',
    ],
    technologies: ['React.js', 'Laravel', 'PHP', 'MySQL', 'CSS3'],
    liveUrl: 'https://github.com/sathishmgs',
    repoUrl: 'https://github.com/sathishmgs',
  },
  {
    id: 'college-portal',
    title: 'Website for College Management System',
    category: 'Full-Stack Web Portal | Personal Project',
    section: 'academic',
    sectionLabel: 'Academic & Personal Project',
    date: 'March 2026',
    image: collegePortalImg,
    description:
      'A full-stack College Management System and student academic portal website built using HTML, CSS, JavaScript, PHP, and MySQL to manage student data, academic records, and administrative functions.',
    highlights: [
      'Developed a full-stack College Management System website using HTML, CSS, JavaScript, PHP, and MySQL as a personal project',
      'Built a user-friendly portal to manage student data, academic information, and administrative functions',
      'Implemented both front-end and back-end functionalities with seamless database connectivity',
      'Created dynamic web pages to enhance user interaction and system usability',
      'Live deployed at Portal-mgscollege.wuaze.com',
    ],
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL', 'Bootstrap'],
    liveUrl: 'http://Portal-mgscollege.wuaze.com',
    repoUrl: 'https://github.com/sathishmgs',
  },
];

// Part 2: Work Experience Projects (Hospital HMS, Inventory & Billing, Logistics)
export const WORK_EXPERIENCE_PROJECTS = [
  {
    id: 'work-hospital-hms',
    title: 'Hospital Management System (HMS)',
    category: 'Enterprise Healthcare Application',
    section: 'work-experience',
    sectionLabel: 'Work Experience Project',
    date: 'Production Project',
    image: hospitalErpImg,
    description:
      'Comprehensive Hospital Management System (HMS) developed for clinical workflows, patient registrations, doctor consultation scheduling, outpatient/inpatient management, electronic medical records, and automated billing.',
    highlights: [
      'Engineered end-to-end patient lifecycle tracking: OPD queue, doctor consultation, digital diagnosis, and IPD bed allotment',
      'Developed automated medical billing module with itemized pharmacy prescriptions, lab tests, and invoice receipts',
      'Built doctor schedule manager and multi-role access control for doctors, receptionists, pharmacists, and administrators',
      'Integrated React.js frontend with RESTful PHP/Laravel API endpoints and relational MySQL database queries',
    ],
    technologies: ['React.js', 'Laravel', 'PHP', 'MySQL', 'REST APIs', 'Bootstrap'],
    liveUrl: 'https://github.com/sathishmgs',
    repoUrl: 'https://github.com/sathishmgs',
  },
  {
    id: 'work-inventory-billing',
    title: 'Inventory & Billing Management System',
    category: 'Enterprise Retail & POS System',
    section: 'work-experience',
    sectionLabel: 'Work Experience Project',
    date: 'Production Project',
    image: inventoryBillingImg,
    description:
      'Robust POS and inventory management platform facilitating real-time stock monitoring, automated invoice generation, GST/tax computation, SKU barcode scanning, supplier purchase orders, and sales revenue analytics.',
    highlights: [
      'Implemented real-time stock audit system with automatic low-stock notifications and SKU threshold warnings',
      'Engineered point-of-sale (POS) billing screen with barcode scanner input, multi-tier pricing, and GST tax calculations',
      'Built automated PDF receipt generation, supplier procurement workflow, and daily/monthly revenue analytics',
      'Designed responsive dashboard interface with transaction logs and database ACID integrity in MySQL',
    ],
    technologies: ['React.js', 'PHP / Laravel', 'MySQL', 'Chart.js', 'CSS3', 'REST APIs'],
    liveUrl: 'https://github.com/sathishmgs',
    repoUrl: 'https://github.com/sathishmgs',
  },
  {
    id: 'work-logistics-fleet',
    title: 'Logistics & Fleet Management System',
    category: 'Supply Chain & Distribution Platform',
    section: 'work-experience',
    sectionLabel: 'Work Experience Project',
    date: 'Production Project',
    image: logisticsImg,
    description:
      'End-to-end logistics and shipment management platform designed for consignment manifests, hub-to-hub dispatching, fleet vehicle assignment, driver schedules, and real-time consignment status tracking.',
    highlights: [
      'Built consignment booking engine with automated AWB tracking number generation and multi-stage transit milestones',
      'Developed fleet tracking module for vehicle assignment, maintenance logs, route scheduling, and driver dispatches',
      'Designed customer tracking portal with real-time shipment status updates and digital Proof of Delivery (POD)',
      'Engineered backend database schemas for high-volume dispatch logs and real-time logistics analytics',
    ],
    technologies: ['React.js', 'Node.js', 'PHP', 'MySQL', 'RESTful APIs', 'Modern CSS'],
    liveUrl: 'https://github.com/sathishmgs',
    repoUrl: 'https://github.com/sathishmgs',
  },
];

// Combined for backwards-compatibility and easy aggregation
export const PROJECTS = [...ACADEMIC_PROJECTS, ...WORK_EXPERIENCE_PROJECTS];

export const EXPERIENCE_LIST = [
  {
    id: 'internship-ps-infotech',
    role: 'Web Design Intern',
    company: 'PS Infotech – Madurai',
    duration: 'May 2025 – June 2025 (30 Days)',
    location: 'Madurai, Tamil Nadu',
    responsibilities: [
      'Completed a 30-day intensive internship gaining hands-on experience in web designing using HTML, CSS, and JavaScript',
      'Developed responsive, cross-browser compatible web pages and interactive UI features',
      'Gained deep understanding of front-end development concepts, DOM manipulation, and modern web styling',
      'Built the Flower Shop e-commerce website with product catalog and contact form integration',
      'Demonstrated strong punctuality, dedication, and a keen interest in learning throughout the program',
    ],
  },
  {
    id: 'enterprise-projects-exp',
    role: 'Software Developer (Enterprise & Full-Stack Projects)',
    company: 'Production Systems & Enterprise Solutions',
    duration: '2025 – Present',
    location: 'Tamil Nadu, India',
    responsibilities: [
      'Architected and implemented Hospital Management System (HMS) managing patient records, doctor scheduling, and billing',
      'Built Inventory & Billing Management System with POS billing, GST tax calculation, and real-time stock audits',
      'Engineered Logistics & Fleet Management platform managing consignment manifests, vehicle dispatch, and tracking',
      'Developed full-stack web applications with React.js frontend interfaces and PHP / Laravel / MySQL backends',
      'Implemented secure RESTful API integrations, responsive designs, and database performance optimizations',
    ],
  },
];

export const EDUCATION_TIMELINE = [
  {
    id: 'edu-1',
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'Ayya Nadar Janaki Ammal College, Sivakasi',
    period: '2023 – 2026',
    details:
      'Autonomous Institution affiliated to Madurai Kamaraj University (Re-accredited with A+ Grade by NAAC, College of Excellence by UGC). Coursework in Full-Stack Web Development, Relational Databases (MySQL/SQL), PHP, Java, Data Structures, and Software Engineering.',
    websiteUrl: 'https://anjac.edu.in/',
    isCollege: true,
  },
  {
    id: 'edu-2',
    degree: 'Higher Secondary Certificate (HSC)',
    institution: 'N.A. Annapparaja Memorial Higher Secondary School',
    period: '2022 – 2023',
    details:
      'Completed Higher Secondary Education with distinction, establishing strong academic fundamentals in Computer Science, Mathematics, Physics, and Chemistry.',
    websiteUrl: '',
    isCollege: false,
  },
];

export const CERTIFICATIONS = [
  {
    id: 'cert-1',
    title: 'Full Stack Development (MERN Stack) – 30 Days Masterclass',
    issuer: 'Novi Tech (Online)',
    date: '2025',
    credentialNote: 'Hands-on masterclass covering React.js, Node.js, Express, MongoDB, and full-stack web architecture.',
    credentialUrl: 'https://www.linkedin.com/in/sathish-m2005/',
  },
  {
    id: 'cert-2',
    title: 'Object-Oriented Programming (OOP) in Java',
    issuer: 'Scaler (Online)',
    date: '2025',
    credentialNote: 'Core Java, OOP principles, inheritance, polymorphism, abstraction, and software design patterns.',
    credentialUrl: 'https://www.linkedin.com/in/sathish-m2005/',
  },
  {
    id: 'cert-3',
    title: 'Data Analytics – 30 Days Masterclass',
    issuer: 'Novi Tech (Online)',
    date: '2025',
    credentialNote: 'Practical data analytics, query optimization, dataset handling, and visualization.',
    credentialUrl: 'https://www.linkedin.com/in/sathish-m2005/',
  },
  {
    id: 'cert-4',
    title: 'Crash Course on Blog and Website Creation using WordPress',
    issuer: 'Ayya Nadar Janaki Ammal College, Sivakasi',
    date: '2025',
    credentialNote: 'WordPress architecture, CMS customization, theme configuration, and plugin management.',
    credentialUrl: 'https://anjac.edu.in/',
  },
  {
    id: 'cert-5',
    title: 'Crash Course on Internet of Things (IoT)',
    issuer: 'Ayya Nadar Janaki Ammal College, Sivakasi',
    date: '2025',
    credentialNote: 'Hardware-software integration, microcontroller sensor connectivity, and IoT communications.',
    credentialUrl: 'https://anjac.edu.in/',
  },
];

export const ACHIEVEMENTS = [
  {
    id: 'achieve-1',
    title: 'Treasure Hunt III Prize – State Level Inter-College',
    institution: 'P.S.R Engineering College',
    year: '2025',
    description: 'Won 3rd Prize in state-level inter-collegiate technical competition demonstrating analytical & problem-solving abilities.',
  },
  {
    id: 'achieve-2',
    title: 'Wisdom Rally Participation',
    institution: 'P.S.R Engineering College',
    year: '2025',
    description: 'Active participant in state-level Wisdom Rally and academic symposium representing college department.',
  },
  {
    id: 'achieve-3',
    title: 'Super Senior District Level Kabaddi Match Runner-Up',
    institution: 'School of Education',
    year: 'State Sports',
    description: 'District level Kabaddi championship runner-up trophy showcasing athletic excellence, agility, and team leadership.',
  },
];
