import { Experience, PersonalInfo, Project, Skills } from "./types";

export const PERSONAL_INFO: PersonalInfo = {
  name: "Your Name",
  title: "Full Stack Developer",
  description:
    "I build exceptional digital experiences with modern web technologies. Passionate about creating clean, efficient, and user-friendly applications.",
  email: "your@email.com",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  twitter: "https://twitter.com",
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
    "🗄️ MongoDB / PostgreSQL",
    "🔐 JWT Authentication",
  ],
  tools: ["🐙 Git / GitHub", "🐳 Docker", "☁️ AWS / Vercel", "📊 REST APIs"],
};

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    company: "Block Stack (Diamanate)",
    position: "Frontend Developer",
    period: "August 2023 - Present",
    responsibilities: [
      "Designed and developed an authentication system for user login within the Paycircle web application",
      "Implemented encryption techniques, transmitting user data as encrypted payloads",
      "Developed a notification feature using WebSockets and APIs for real-time updates",
      "Redesigned and enhanced the UI of the Paycircle application using Bootstrap and CSS",
      "Implemented Redux/Redux-toolkit for centralized state management",
      "Designed and developed a blockchain application for NFT creation and transfers",
      "Developed a browser extension (DIAM Wallet) for authentication and transactions on the DIAM Network",
      "Optimized the Diam Explorer application for responsiveness across all screen resolutions",
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with payment integration, user authentication, and admin dashboard.",
    technologies: ["React", "Next.js", "TypeScript", "Stripe"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates and team collaboration features.",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description:
      "A responsive weather dashboard with location-based forecasts and interactive charts.",
    technologies: ["Vue.js", "Chart.js", "OpenWeather API"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Portfolio Website",
    description:
      "A modern, responsive portfolio website built with Next.js and Tailwind CSS.",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    liveUrl: "#",
    githubUrl: "#",
  },
];
