export const siteConfig = {
  hero: {
    headline: "Hi, I'm Amrit Raj.",
    subheadline: "Full Stack Developer | AI/ML Enthusiast",
    tagline:
      'Building modern, scalable, and user-focused digital experiences with clean and efficient code.',
    ctas: [
      { label: 'View Projects', href: '#projects' },
      { label: 'Contact Me', href: '#contact' },
    ],
    // Hero image path relative to /public
    image: {
      src: '/12.jpg',
      alt: 'Portrait of Amrit Raj',
    },
  },
  about:
    'I am a student developer who started with web development and Python, and quickly moved into building real projects and participating in hackathons. I enjoy designing modern, responsive interfaces and connecting them with solid backend logic. Recently, I have been focusing on full‑stack development and starting to explore AI/ML to build smarter applications.',
  workflow: [
    'Plan & Research',
    'Design UI/UX',
    'Develop Frontend & Backend',
    'Version Control (Git & GitHub)',
    'Test & Debug',
    'Deploy & Monitor',
  ],
  stats: {
    publicRepos: 2,
    totalCommits: 7,
    hackathons: 1,
    topLanguages: ['JavaScript', 'HTML', 'CSS'],
    stars: 0,
    forks: 0,
  },
  skills: {
    languages: ['HTML', 'CSS', 'JavaScript', 'Python'],
    frontend: ['React', 'Next.js', 'Tailwind CSS', 'Responsive Web Design'],
    backend: ['Node.js', 'Express'],
    tools: ['Git', 'GitHub', 'VS Code'],
  },
  journey: [
    {
      date: 'Aug 2024',
      title: 'Started Learning Web Development',
      description:
        'Began exploring HTML, CSS, and JavaScript and understanding how modern websites are built.',
    },
    {
      date: 'Sep 2024',
      title: 'Learning Python & Core Programming',
      description:
        'Picked up Python to build problem‑solving skills and strengthen core programming fundamentals.',
    },
    {
      date: 'Oct 2024',
      title: 'First Mini Projects',
      description:
        'Built small web projects and simple apps, and started focusing on clean UI, UX, and responsive design.',
    },
    {
      date: 'Sep 2025',
      title: 'First Hackathon Experience',
      description:
        'Entered hackathons and built the Bharat Education Portal, an educational platform with AI‑based tools and student resources.',
    },
    {
      date: 'Sep 2025',
      title: 'Bharat Education Portal Launched',
      description:
        'Designed and deployed a functional educational portal with multiple features and a modern UI.',
    },
    {
      date: 'Oct 2025',
      title: 'Portfolio Website Launched',
      description:
        'Built and deployed a modern, responsive portfolio to showcase skills, projects, and achievements.',
    },
    {
      date: 'Late 2025',
      title: 'Deepening Full‑Stack & AI/ML',
      description:
        'Learning advanced frameworks like React, Next.js, and Node.js, and exploring AI/ML tools to build smarter, more powerful applications.',
    },
  ],
  projects: {
    featured: [
      {
        id: 'portfolio',
        title: 'Portfolio Website',
        description:
          'A modern, responsive developer portfolio with futuristic UI and smooth animations.',
        liveUrl: 'https://amritraj7077-del.github.io/my-portfolio/',
        repoUrl: 'https://github.com/amritraj7077-del/my-portfolio',
        tech: ['HTML', 'CSS', 'JavaScript'],
      },
      {
        id: 'bharat-education-portal',
        title: 'Bharat Education Portal',
        description:
          'Hackathon project: an educational platform with AI-powered assistance and virtual labs.',
        liveUrl: 'https://amritraj7077-del.github.io/BHARAT-EDUCATION-PORTAL/',
        repoUrl: 'https://github.com/amritraj7077-del/BHARAT-EDUCATION-PORTAL',
        tech: ['HTML', 'CSS', 'JavaScript'],
      },
    ],
    others: [],
  },
  services: [
    {
      title: 'Web Development',
      description: 'Building fast, responsive websites and web apps with clean, maintainable code.',
    },
    {
      title: 'UI/UX Implementation',
      description:
        'Translating designs into pixel-perfect, accessible, and user-friendly interfaces.',
    },
    {
      title: 'API Integration',
      description:
        'Connecting frontends with REST/third‑party APIs to enable real‑world functionality.',
    },
    {
      title: 'AI Tools Exploration',
      description:
        'Experimenting with AI/ML tools to build smarter features into web experiences.',
    },
  ],
  achievements: [
    {
      title: 'Hackathon Participation',
      description:
        'Participated in hackathons and built the Bharat Education Portal, focusing on education and AI‑powered tools.',
    },
  ],
  contact: {
    email: 'amritraj7077@gmail.com',
    successMessage: 'Thanks! I will reply soon.',
  },
  socials: {
    github: 'https://github.com/amritraj7077-del',
    linkedin: 'https://www.linkedin.com/in/amrit-r-93b936367',
  },
};

export type SiteConfig = typeof siteConfig;
