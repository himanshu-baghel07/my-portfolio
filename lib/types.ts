export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
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
  description?: string;
  responsibilities: string[];
  techStack?: string[];
}

export type SkillColor = "blue" | "purple" | "pink" | "cyan" | "green";

export interface SkillGroup {
  title: string;
  skills: string[];
  color: "cyan" | "pink" | "green";
}
