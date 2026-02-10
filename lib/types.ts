export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  imageUrl?: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  description: string;
  email: string;
  github: string;
  linkedin: string;
  twitter: string;
}

export interface Skills {
  frontend: string[];
  backend: string[];
  tools: string[];
}

export interface Experience {
  id: number;
  company: string;
  position: string;
  period: string;
  responsibilities: string[];
}

export type SkillColor = "blue" | "purple" | "pink" | "cyan" | "green";
