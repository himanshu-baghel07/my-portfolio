import { SiGithub, SiX } from "@icons-pack/react-simple-icons";
import { Linkedin, Mail } from "lucide-react";
import {
  EXPERIENCE,
  PERSONAL_INFO,
  PROJECTS,
  SKILL_GROUPS,
} from "../lib/constants";
import AnimatedTerminal from "./AnimatedTerminal";
import ExperienceSection from "./ExperienceSection";
import Navigation from "./Navigation";
import ProjectCard from "./ProjectCard";
import SkillsSection from "./SkillsSection";

export default function HomeScreen() {
  return (
    <div className="min-h-screen bg-primary text-primary">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section
        id="about"
        className="min-h-screen flex items-center justify-center px-6 pt-20"
      >
        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 items-center">
          {/* Animated Terminal Side */}
          <div className="col-span-1 md:col-span-1 lg:col-span-6 flex justify-center md:justify-center order-1 md:order-1">
            <AnimatedTerminal />
          </div>

          {/* Info Side */}
          <div className="col-span-1 md:col-span-1 lg:col-span-6 text-center md:text-left order-2 md:order-2">
            <div className="mb-6">
              <span className="text-[#ff6b9d] text-lg font-bold tracking-wider">
                👋 HEY THERE, I&apos;M
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-[#ffd93d] retro-shadow">
              Himanshu Baghel
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 text-[#00d9ff]">
              Frontend Developer
            </h2>
            <p className="text-lg md:text-xl text-[#c4b5a0] mb-8 leading-relaxed">
              I build exceptional digital experiences using{" "}
              <span className="text-[#00d9ff] font-semibold">React.js</span> and{" "}
              <span className="text-[#00d9ff] font-semibold">Next.js</span>,
              focusing on clean, efficient, and user-friendly applications, with
              working knowledge of{" "}
              <span className="text-[#00d9ff] font-semibold">Node.js</span> for
              backend integration and APIs.
            </p>

            {/* Social Links */}
            <div className="flex gap-4 justify-center md:justify-start mb-8">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-[#00d9ff] text-[#0a0e27] rounded-lg hover:bg-[#ffd93d] transition-all hover:scale-110 shadow-lg shadow-[#00d9ff]/50"
              >
                <SiGithub size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-[#00d9ff] text-[#0a0e27] rounded-lg hover:bg-[#ffd93d] transition-all hover:scale-110 shadow-lg shadow-[#00d9ff]/50"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-[#00d9ff] text-[#0a0e27] rounded-lg hover:bg-[#ffd93d] transition-all hover:scale-110 shadow-lg shadow-[#00d9ff]/50"
              >
                <SiX size={24} />
              </a>
              <a
                href="mailto:your@email.com"
                className="p-3 bg-[#00d9ff] text-[#0a0e27] rounded-lg hover:bg-[#ffd93d] transition-all hover:scale-110 shadow-lg shadow-[#00d9ff]/50"
              >
                <Mail size={24} />
              </a>
            </div>

            <div className="flex gap-4 justify-center md:justify-start flex-wrap">
              <a
                href="#projects"
                className="px-8 py-3 bg-[#ff6b9d] text-[#0a0e27] rounded-lg hover:bg-[#ffd93d] transition-colors font-bold tracking-wide shadow-lg shadow-[#ff6b9d]/50"
              >
                VIEW MY WORK
              </a>
              <a
                href="#contact"
                className="px-8 py-3 border-2 border-[#00d9ff] text-[#00d9ff] rounded-lg hover:bg-[#00d9ff] hover:text-[#0a0e27] transition-colors font-bold tracking-wide"
              >
                GET IN TOUCH
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <SkillsSection groups={SKILL_GROUPS} />

      {/* Experience Section */}
      <ExperienceSection experiences={EXPERIENCE} />

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-yellow retro-text">
            FEATURED PROJECTS
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {PROJECTS.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title.toUpperCase()}
                description={project.description}
                image={project.image}
                techStack={project.techStack}
                liveUrl={project.liveUrl}
                githubUrl={project.githubUrl}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-yellow retro-text">
            LET&apos;S WORK TOGETHER
          </h2>
          <p className="text-xl text-secondary mb-8 leading-relaxed">
            I&apos;m currently available for freelance work and full-time
            opportunities.
          </p>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="inline-flex items-center gap-2 px-8 py-4 bg-pink text-primary rounded-lg hover-bg-yellow transition-colors font-bold text-lg tracking-wide shadow-pink"
          >
            <Mail size={20} />
            GET IN TOUCH
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t-2 border-pink">
        <div className="max-w-6xl mx-auto px-6 text-center text-secondary">
          <p className="font-semibold">
            &copy; 2025 {PERSONAL_INFO.name.toUpperCase()}. ALL RIGHTS RESERVED.
          </p>
        </div>
      </footer>
    </div>
  );
}
