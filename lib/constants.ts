import { Experience, PersonalInfo, Project, SkillGroup, Skills } from "./types";

export const PERSONAL_INFO: PersonalInfo = {
  name: "Your Name",
  title: "Full Stack Developer",
  description:
    "I build exceptional digital experiences with modern web technologies. Passionate about creating clean, efficient, and user-friendly applications.",
  email: "himbaghel19@gmail.com",
  github: "https://github.com/himanshu-baghel07",
  linkedin: "https://www.linkedin.com/in/himanshubaghel1900/",
  twitter: "https://x.com/himanshubaghel0",
};

export const SKILLS: Skills = {
  frontend: [
    "⚛️ React / Next.js",
    "🎨 Tailwind CSS",
    "📱 TypeScript",
    "✨ Framer Motion",
  ],
  backend: [
    "🟢 Node.js",
    "⚡ Express.js",
    "🗄️ MongoDB",
    "🔐 JWT Authentication",
  ],
  tools: ["🐙 Git / GitHub", "🐳 Docker", "☁️ Vercel", "📊 REST APIs"],
};

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    company: "Block Stack (Diamanate)",
    position: "Frontend Developer ",
    period: "August 2023 - Present",
    description:
      "Developing and maintaining full-stack web applications using the MERN stack and Next.js, with focus on scalable architecture, performance optimization, and modern development practices.",
    responsibilities: [
      "Developed and maintained scalable full-stack web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js) and Next.js, delivering production-ready systems used by both internal teams and external users",
      "Built reusable, modular, and responsive UI components using React.js, Tailwind CSS, Shadcn/UI, Material UI, Ant Design, and Bootstrap 5, ensuring consistent design patterns and improving development efficiency across projects",
      "Designed and integrated RESTful APIs using Node.js and Express.js, implementing efficient server-side logic, structured API routes, and secure data communication between frontend and backend systems",
      "Managed and optimized database operations with MongoDB, including schema design, query optimization, indexing strategies, and efficient data handling for high-performance applications",
      "Implemented modern frontend performance optimization techniques such as lazy loading, code splitting, memoization (React.memo, useMemo, useCallback), and dynamic imports to reduce load times and enhance user experience",
      "Managed complex application state using Redux and Redux Toolkit, creating scalable state architecture, reusable slices, and predictable state management across large applications",
      "Implemented real-time communication features using WebSockets, enabling live notifications, instant data updates, and interactive user experiences",
      "Integrated Web3 wallet connectivity using WalletConnect, enabling secure blockchain interactions, wallet authentication, and decentralized application (dApp) functionality",
      "Implemented secure authentication systems using JWT tokens, HTTP-only cookies, and middleware-based route protection, ensuring secure session management and protected API access",
      "Worked in Agile development environments, collaborating with teams using Git, GitHub, and Bitbucket for version control, pull requests, code reviews, and continuous integration workflows",
    ],
    techStack: [
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Redux Toolkit",
      "TypeScript",
      "Tailwind CSS",
      "Material UI",
      "Ant Design",
      "Bootstrap 5",
      "WebSockets",
      "WalletConnect",
      "JWT",
      "Git",
      "GitHub",
      "Bitbucket",
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Expense Tracker - Frontend",
    description:
      "A modern expense tracking application with dark theme, glassmorphism effects, authentication, profile management, and comprehensive analytics with category breakdowns and monthly trends.",
    image: "/frontend_image.png",
    techStack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Radix UI",
      "Framer Motion",
    ],
    liveUrl: "https://expense-tracker-ui-blond.vercel.app",
    githubUrl: "https://github.com/himanshu-baghel07/expense-tracker-ui",
  },
  {
    id: 2,
    title: "Expense Tracker - Backend",
    description:
      "A robust Node.js backend API with user authentication, expense management, category system, and MongoDB integration. Features JWT authentication and full TypeScript support.",
    image: "/backend_image.png",
    techStack: [
      "Node.js",
      "Express.js",
      "TypeScript",
      "MongoDB",
      "JWT",
      "Mongoose",
    ],
    githubUrl: "https://github.com/himanshu-baghel07/expense-tracker-backend",
  },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    title: "FRONTEND",
    color: "cyan",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "HTML/CSS",
      "Redux",
      "Framer Motion",
      "Responsive Design",
    ],
  },
  {
    title: "BACKEND",
    color: "pink",
    skills: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "JWT Authentication",
      "WebSockets",
    ],
  },
  {
    title: "TOOLS & PLATFORM",
    color: "green",
    skills: [
      "Git & GitHub",
      "Docker",
      "Vercel",
      "VS Code",
      "Postman",
      "Chrome DevTools",
      "npm/pnpm",
    ],
  },
];
