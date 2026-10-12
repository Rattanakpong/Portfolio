import { Experience, Project, Skill, Credential } from './types';

export const SOCIAL_LINKS = {
  EMAIL: "prattanakpong@gmail.com",
  GITHUB: "https://github.com/Rattanakpong",
  LINKEDIN: "https://www.linkedin.com/in/pha-rattanakpong/",
  BEHANCE: "https://www.behance.net/pharattanakpong06"
};

export const SKILLS: Skill[] = [
  {
    category: "TECHNICAL",
    items: ["React", "TypeScript", "Node.js", "Laravel / PHP", "MySQL", "UI/UX Design", "Cybersecurity"]
  },
  {
    category: "TOOLS",
    items: ["Figma", "Adobe Photoshop", "Adobe Illustrator", "Canva", "CapCut", "VS Code", "Google Workspace"]
  },
  {
    category: "PROFESSIONAL",
    items: ["Project Management", "Team Collaboration", "Strategic Planning", "Mentoring"]
  },
  {
    category: "LANGUAGES",
    items: ["Khmer (Native)", "English (Professional)"]
  },
];

export const CREDENTIALS: Credential[] = [
  {
    id: "deg-1",
    title: "Bachelor of Computer Science",
    institution: "Paragon International University",
    date: "2023 – 2027",
    link: "https://paragoniu.edu.kh/"
  },
  {
    id: "deg-2",
    title: "Diploma in English",
    institution: "The Australian Centre for Education",
    date: "2019 – 2025"
  },
  {
    id: "cert-1",
    title: "Junior Cybersecurity Analyst",
    institution: "Cisco Networking Academy",
    date: "2026"
  },
  {
    id: "cert-2",
    title: "Ethical Hacker",
    institution: "Cisco Networking Academy",
    date: "2026"
  },
  {
    id: "cert-3",
    title: "UX/UI Design",
    institution: "DICHI Academy",
    date: "2026"
  },
  {
    id: "cert-4",
    title: "Google Cybersecurity Professional Certificate",
    institution: "Google",
    date: "2025",
    link: "https://coursera.org/verify/professional-cert/EXKHRHH1WST6"
  },
  {
    id: "cert-5",
    title: "The Ultimate React Course",
    institution: "Udemy",
    date: "2025",
    link: "https://www.udemy.com/"
  },
  {
    id: "cert-6",
    title: "Master Laravel & PHP",
    institution: "Udemy",
    date: "2025",
    link: "https://www.udemy.com/"
  },
  {
    id: "award-1",
    title: "Outstanding Award — Young Leaders Program",
    institution: "JCI Phnom Penh",
    date: "2025"
  }
];

export const EXPERIENCE: Experience[] = [
  {
    id: "exp-1",
    date: "APR 2026 - PRESENT",
    role: "Intern",
    company: "Ministry of Industry, Science, Technology & Innovation",
    description: "Support KhmerSME programmes: create digital and print materials, manage website and social media content, and assist with MSME Day and other activities for Cambodian entrepreneurs."
  },
  {
    id: "exp-2",
    date: "2025 - JUN 2026",
    role: "Lead Technical Support & Data Management",
    company: "ឃ្យូអ៎ . Q - R",
    companyLink: "https://www.facebook.com/profile.php?id=61559521294212",
    description: "Managed data operations, reducing post-release bugs by 20%. Provided technical support to 100+ users with a 95% first-response resolution rate."
  },
  {
    id: "exp-3",
    date: "JAN 2025 - PRESENT",
    role: "Local Director",
    company: "JCI Phnom Penh",
    companyLink: "https://www.facebook.com/JCIPhnomPenh",
    description: "Produce marketing materials that increase brand engagement. Manage several projects in parallel, tracking resources to meet strict deadlines. Deputy Project Chair, 2026 Young Leaders Program — planning, scheduling and team coordination."
  }
];

export const PROJECTS: Project[] = [
  {
    id: "p-01",
    title: "CJTT Trading Website",
    type: "WEB APP",
    description: "Frontend Developer — built a responsive job platform in React and TypeScript connecting Cambodian talent with employment opportunities in Japan.",
    tags: ["React", "TypeScript", "CSS", "JavaScript"],
    imageUrl: "/images/projects/cjtt-trading.png",
    link: "https://cjtt.vercel.app/"
  },
  {
    id: "p-02",
    title: "Refugee & Migrant Support Platform (CRMS)",
    type: "WEB DEVELOPMENT",
    description: "Frontend Developer — built an accessible, fast resource hub for housing, healthcare, legal aid and employment services using JavaScript and CSS.",
    tags: ["HTML", "CSS", "JavaScript"],
    imageUrl: "/images/projects/crms-refugee-support.png",
    link: "https://rattanakpong.github.io/CRMS-Done-/"
  },
  {
    id: "p-03",
    title: "KhmerSME Website",
    type: "WEB DEVELOPMENT",
    description: "Full-Stack Developer — platform giving Cambodian entrepreneurs clear access to business information, support services and opportunities.",
    tags: ["React", "Node.js", "MySQL"]
  },
  {
    id: "p-04",
    title: "Health Passport",
    type: "UX/UI DESIGN",
    description: "UX/UI Designer — mobile-first system centralising medical history and test results, accessible to doctors via National ID.",
    tags: ["Figma", "UI/UX"]
  },
  {
    id: "p-05",
    title: "JCI Phnom Penh Newsletter, Issue 2",
    type: "GRAPHIC DESIGN (AI)",
    description: "Layout and graphic design for Issue 2 of the JCI Phnom Penh Newsletter, produced with Adobe Creative Suite and Canva.",
    tags: ["Illustrator", "Photoshop", "Canva"],
    imageUrl: "/images/projects/jci-newsletter-issue-2.jpg",
    link: "https://www.behance.net/gallery/242539603/2025-JCI-Phnom-Penh-Newsletters-Issues-2"
  },
  {
    id: "p-06",
    title: "JCI Phnom Penh Newsletter, Issue 3",
    type: "GRAPHIC DESIGN (AI)",
    description: "Layout and graphic design for Issue 3 of the JCI Phnom Penh Newsletter, produced with Adobe Creative Suite and Canva.",
    tags: ["Illustrator", "Photoshop", "Canva"],
    imageUrl: "/images/projects/jci-newsletter-issue-3.png",
    link: "https://www.behance.net/gallery/242539209/2025-JCI-Phnom-Penh-Newsletter-Issues-3"
  },
  {
    id: "p-07",
    title: "2026 General Membership Meeting",
    type: "GRAPHIC DESIGN (AI)",
    description: "Visual identity and campaign design for the 2026 JCI Phnom Penh General Membership Meeting.",
    tags: ["Photoshop", "Illustrator", "Canva", "CapCut"],
    imageUrl: "/images/projects/jci-general-membership-meeting.png",
    link: "https://www.behance.net/gallery/242538463/2026-General-Membership-Meeting"
  },
  {
    id: "p-08",
    title: "2026 Young Leaders Program",
    type: "GRAPHIC DESIGN (AI)",
    description: "Visual identity and campaign design for the 2026 JCI Phnom Penh Young Leaders Program.",
    tags: ["Photoshop", "Illustrator", "Canva", "CapCut"],
    imageUrl: "/images/projects/jci-young-leaders-program.jpg",
    link: "https://www.behance.net/gallery/242536275/2026-Young-Leaders-Program"
  },
  {
    id: "p-09",
    title: "PackTalk Cambodia 2026 & Creative Class",
    type: "MENTORSHIP",
    description: "Workshop Lead / Mentor — led workshops and created learning materials on typography, branding, layout, colour and Adobe tools.",
    tags: ["Mentorship", "Workshops", "Illustrator", "Photoshop"]
  }
];
