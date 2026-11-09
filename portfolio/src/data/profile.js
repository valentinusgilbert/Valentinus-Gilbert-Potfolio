/**
 * Single source of truth for every piece of profile content shown on the site.
 * Kept in sync with https://www.linkedin.com/in/valentinus-gilbert-sanjaya-770b26217/
 */

import imgVisionvip from '../assets/project/visionvip.jpeg';
import imgVvip from '../assets/project/vvip.jpeg';
import imgFs from '../assets/project/fs.jpeg';
import imgBicooks from '../assets/project/bicooks.jpeg';
import imgTalpapos from '../assets/project/talpapos.jpeg';
import imgSewas from '../assets/project/sewas.jpeg';
import imgGitFinder from '../assets/project/git-profile-finder.jpeg';
import imgNoka from '../assets/project/noka.jpeg';
import imgFurnid from '../assets/project/furnid.jpeg';
import imgJuragantruk from '../assets/project/juragantruk.jpeg';
import imgIntraniaga from '../assets/project/intraniaga.jpeg';
import imgDiskonan from '../assets/project/diskonan.jpeg';
import imgInsuren from '../assets/project/insuren.jpeg';

export const identity = {
  name: 'Valentinus Gilbert Sanjaya',
  shortName: 'Gilbert',
  pronouns: 'He/Him',
  headline: 'Frontend & Full-Stack Developer',
  tagline: "Bachelor's Degree in Computer Science — BINUS University",
  location: 'Tangerang Selatan, Banten, Indonesia',
  currentCompany: 'PT. Toyo Business Engineering Indonesia',
  website: 'https://www.valentinusgilbert.me/',
  availability: 'Open to opportunities',
  /** Rotating roles used by the banner type-writer. */
  roles: [
    'ERP Consultant & Developer',
    'Full-Stack Developer',
    'Frontend Engineer',
  ],
};

export const social = {
  whatsapp:
    'https://wa.me/6285366768686?text=Hi%20Gilbert%21%20Aku%20kesini%20karena%20website%20portofoliomu%20nih',
  whatsappNumber: '6285366768686',
  instagram: 'http://instagram.com/valentinusgilbert',
  linkedin: 'https://www.linkedin.com/in/valentinus-gilbert-sanjaya/',
  github: 'https://github.com/valentinusgilbert',
};

/** LinkedIn "About" section, split into paragraphs. */
export const about = [
  'I am a Software Developer and ERP Consultant with a robust foundation in front-end and full-stack development. Currently, I specialize in analyzing complex business requirements and building custom enterprise solutions, particularly for the manufacturing sector.',
  'With strong expertise in modern frameworks like Vue.js and Nuxt.js, I am deeply passionate about creating intuitive, responsive, and high-performance user interfaces. My experience spans a wide range of projects, from developing scalable HRIS platforms to architecting robust full-stack subsystems that optimize operational workflows.',
  'I thrive in collaborative environments, where I can bridge the gap between technical execution and business needs. I highly value clean, maintainable code, and continuously explore new technologies to deliver seamless user experiences and stay ahead in the ever-evolving landscape of software development.',
];

/** LinkedIn "Top skills". */
export const topSkills = ['Enterprise Resource Planning (ERP)', 'Full-Stack Development'];

export const skillGroups = [
  {
    label: 'ERP & Enterprise',
    icon: '🏭',
    items: [
      'mcframe',
      'Enterprise Resource Planning (ERP)',
      'Business Process Analysis',
      'Requirement Gathering',
      'HRIS',
    ],
  },
  {
    label: 'Frontend',
    icon: '🎨',
    items: [
      'Vue.js',
      'Nuxt.js',
      'Next.js',
      'React.js',
      'React Native',
      'TypeScript',
      'JavaScript',
      'Tailwind CSS',
      'HTML / CSS',
    ],
  },
  {
    label: 'Backend & Data',
    icon: '⚙️',
    items: ['Node.js', 'Laravel', 'MySQL', 'REST API', 'Full-Stack Development'],
  },
  {
    label: 'Tools & Practices',
    icon: '🧰',
    items: [
      'Git',
      'Bitbucket',
      'Jira',
      'Agile / Scrum',
      'Integration Testing',
      'Cloud Deployment',
    ],
  },
];

export const experiences = [
  {
    role: 'ERP Consultant & Developer',
    company: 'PT. Toyo Business Engineering Indonesia',
    employmentType: 'Full-time',
    period: 'Nov 2025 — Present',
    location: 'Jakarta Raya, Indonesia · Hybrid',
    current: true,
    highlights: [
      'Work with manufacturing clients to understand their processes and requirements.',
      'Develop custom mcframe ERP modules for client-specific workflows.',
      'Build and maintain full-stack subsystems that extend the core ERP.',
      'Troubleshoot system issues and support clients through implementation.',
    ],
    skills: ['mcframe', 'ERP', 'Requirement Analysis', 'Full-Stack Development'],
  },
  {
    role: 'Frontend Developer',
    company: 'PUSAT GADAI INDONESIA',
    employmentType: 'Contract',
    period: 'Jun 2025 — Nov 2025',
    location: 'Indonesia',
    highlights: [
      'Built the frontend for an internal HRIS using Nuxt.js.',
      'Developed payroll and employee administration interfaces.',
      'Built an online recruitment and testing platform.',
      'Worked with backend developers and HR teams on API integration.',
    ],
    skills: ['Vue.js', 'Nuxt.js', 'TypeScript', 'HRIS'],
  },
  {
    role: 'Front End Developer',
    company: 'Blibli.com',
    employmentType: 'Internship',
    period: 'Feb 2024 — Feb 2025',
    location: 'Jakarta, Indonesia',
    highlights: [
      'Built responsive web interfaces with Vue.js.',
      'Wrote integration tests and used local API mocks during development.',
      'Integrated API endpoints and helped release applications to production.',
      'Collaborated using Git, Bitbucket, and Jira.',
    ],
    skills: ['Vue.js', 'Integration Testing', 'Git', 'Bitbucket', 'Jira'],
  },
  {
    role: 'Freelance Web Developer',
    company: 'Ditto Dev',
    employmentType: 'Freelance',
    period: 'Sep 2023 — Present',
    location: 'Remote',
    current: true,
    highlights: [
      'Build custom web applications end-to-end for clients across insurance, retail, and rental businesses.',
      'Translate design files into modern, accessible, and responsive user interfaces.',
      'Optimize website performance, SEO, and deployment pipelines.',
    ],
    skills: ['Next.js', 'Laravel', 'Tailwind CSS', 'MySQL'],
  },
];

/** Campus / organizational roles at BINUS University. */
export const campusRoles = [
  {
    role: 'Scholarship Mentor',
    company: 'BINUS University',
    period: 'Sep 2023 — Jan 2024',
    skills: ['Communication', 'Teaching'],
  },
  {
    role: 'Freshman Partner',
    company: 'BINUS University',
    period: 'Sep 2022 — Jun 2023',
    skills: ['Communication', 'Time Management'],
  },
  {
    role: 'Freshman Leader',
    company: 'BINUS University',
    period: 'Jul 2022 — Aug 2022',
    skills: ['Communication'],
  },
];

export const education = {
  school: 'BINUS University',
  degree: 'Bachelor of Computer Science',
  major: 'Computer Science',
  period: '2021 — 2025',
  grade: '3.91 / 4.00',
};

export const featuredProjects = [
  {
    id: 'juragantruk',
    image: imgJuragantruk,
    title: 'Juragan Truk',
    category: 'Truck business operations',
    domain: 'juragantruk.com',
    link: 'https://juragantruk.com',
    desc: 'A working companion for truck owners. Record trips, track income and expenses, and keep driver payroll and trip allowances in one place.',
    features: ['Trip records (ritase)', 'Income & expenses', 'Driver payroll', 'Trip allowances'],
    scope: 'I planned the product, designed the interface, built the frontend and backend, and deployed the application.',
    cover: ['Every trip.', 'Accounted for.'],
  },
  {
    id: 'intraniaga',
    image: imgIntraniaga,
    title: 'Intra Niaga Mulya',
    category: 'Coffee exporter company website',
    domain: 'intraniaga.com',
    link: 'https://intraniaga.com',
    desc: 'A company website introducing PT Intra Niaga Mulya and its Lampung Robusta coffee to international buyers, with the story behind the coffee and a way to get in touch.',
    features: ['Company profile', 'Lampung Robusta coffee', 'Export presence', 'Business enquiries'],
    scope: 'I handled planning, visual design, frontend and backend development, and deployment of the company website.',
    cover: ['Lampung coffee.', 'Meet the world.'],
  },
  {
    id: 'diskonan',
    image: imgDiskonan,
    title: 'Diskonan',
    category: 'Brand discount discovery',
    domain: 'diskonan.online',
    link: 'https://diskonan.online',
    desc: 'Find discounts from different brands, starting with the biggest savings. A website for browsing brand offers and deciding where to shop next.',
    features: ['Brand discovery', 'Discount browsing', 'Biggest discounts first'],
    scope: 'I took the product from planning and interface design through full-stack development and deployment.',
    cover: ['Good brands.', 'Better prices.'],
  },
  {
    id: 'insuren',
    image: imgInsuren,
    title: 'Insuren',
    category: 'AI chat & insurance agent marketplace',
    domain: 'insuren.id',
    link: 'https://insuren.id',
    desc: 'An insurance platform bringing AI chat and an insurance agent marketplace into one experience, giving people a place to ask questions and discover agents.',
    features: ['AI chat', 'Insurance agent marketplace'],
    scope: 'I designed the product and its interfaces, developed the frontend and backend, and deployed the platform.',
    cover: ['Ask a question.', 'Find your agent.'],
  },
];

export const projects = [
  ...featuredProjects,
  {
    image: imgVisionvip,
    title: 'Vision CRM Web App',
    year: '2025',
    desc: 'Customer Relationship Management platform for an insurance agency, built with Next.js.',
    tags: ['Next.js', 'React', 'Tailwind CSS'],
    link: 'https://visionvip.id',
  },
  {
    image: imgVvip,
    title: 'VVIP.CO.ID',
    year: '2025',
    desc: 'Link-in-bio website with a generative profile-page template for insurance agents.',
    tags: ['Next.js', 'Tailwind CSS', 'SSR'],
    link: 'https://vvip.co.id/vagilsan',
  },
  {
    image: imgFs,
    title: 'Blibli — Financial Service',
    year: '2024',
    desc: 'Front-end development and maintenance of the Blibli financial service product during my internship.',
    tags: ['Vue.js', 'SCSS', 'Integration Test'],
    link: 'https://www.blibli.com/keuangan?appsWebview=true',
  },
  {
    image: imgBicooks,
    title: 'Bicooks — Mobile App',
    year: '2024',
    desc: 'Cooking companion app built with the Expo framework on top of React Native.',
    tags: ['React Native', 'Expo'],
  },
  {
    image: imgTalpapos,
    title: 'Talpapos — POS Web App',
    year: '2023',
    desc: 'Point of Sale web application for small businesses, built with Laravel and MySQL.',
    tags: ['Laravel', 'MySQL', 'Blade'],
    link: 'https://talpapos.com',
  },
  {
    image: imgSewas,
    title: 'Sewas — Rent Marketplace',
    year: '2023',
    desc: 'Marketplace for renting goods between users, built with Laravel and MySQL.',
    tags: ['Laravel', 'MySQL'],
  },
  {
    image: imgGitFinder,
    title: 'Git Profile Finder',
    year: '2023',
    desc: 'Search any GitHub username and browse the profile details and repositories.',
    tags: ['Vue.js', 'REST API'],
    link: 'https://git-profile-finder-valentinus.vercel.app/',
  },
  {
    image: imgNoka,
    title: 'NOKA',
    year: '2022',
    desc: 'Game website project built as part of a college assignment.',
    tags: ['JavaScript', 'HTML', 'CSS'],
    link: 'https://noka-3-valentinus-gilbert.netlify.app/',
  },
  {
    image: imgFurnid,
    title: 'Furnid',
    year: '2022',
    desc: 'Furniture shop website built as a college project.',
    tags: ['JavaScript', 'HTML', 'CSS'],
    link: 'https://furnid-valentinusgilbert.netlify.app/',
  },
];

/** Career start date, used to keep the "years of experience" stat accurate over time. */
const CAREER_START = new Date('2023-09-01T00:00:00Z');

export const yearsOfExperience = Math.max(
  1,
  Math.floor((Date.now() - CAREER_START.getTime()) / (1000 * 60 * 60 * 24 * 365.25)),
);

export const stats = [
  { value: `${yearsOfExperience}+`, label: 'Years of experience' },
  { value: `${experiences.length}`, label: 'Professional roles' },
  { value: `${projects.length}+`, label: 'Projects delivered' },
  { value: education.grade.split(' / ')[0], label: 'GPA at BINUS' },
];

export default {
  identity,
  social,
  about,
  topSkills,
  skillGroups,
  experiences,
  campusRoles,
  education,
  projects,
  stats,
  yearsOfExperience,
};
