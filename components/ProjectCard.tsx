"use client";

import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const techColorClasses = [
  "tech-pink",
  "tech-cyan",
  "tech-green",
  "tech-yellow",
];

export default function ProjectCard({
  title,
  description,
  image,
  techStack,
  liveUrl,
  githubUrl,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <article
      className="group relative bg-secondary rounded-xl overflow-hidden border-2 border-pink transition-all duration-500 ease-out hover:border-cyan hover:-translate-y-2 hover:shadow-cyan-card shadow-pink-card motion-reduce:hover:transform-none motion-reduce:transition-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Browser Window Preview */}
      <div className="relative overflow-hidden bg-primary/50 transition-opacity duration-500 motion-reduce:opacity-100">
        {/* Browser Top Bar */}
        <div className="flex items-center gap-2 px-4 py-3 bg-primary/80 backdrop-blur-sm border-b border-pink/30">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56] shadow-[0_0_8px_rgba(255,95,86,0.6)]" />
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e] shadow-[0_0_8px_rgba(255,189,46,0.6)]" />
            <div className="w-3 h-3 rounded-full bg-[#27c93f] shadow-[0_0_8px_rgba(39,201,63,0.6)]" />
          </div>
          <div className="flex-1 ml-2 h-6 bg-primary/60 rounded border border-cyan/20 flex items-center px-3">
            <span className="text-xs text-secondary/60 truncate">
              {liveUrl || "localhost:3000"}
            </span>
          </div>
        </div>

        {/* Screenshot Container with Parallax */}
        <div className="relative h-64 md:h-72 overflow-hidden bg-primary">
          <div className="absolute inset-0 md:group-hover:-translate-y-2 transition-transform duration-700 ease-out motion-reduce:transform-none will-change-transform">
            <Image
              src={image}
              alt={`${title} screenshot`}
              fill
              className="object-cover object-top md:group-hover:scale-105 transition-transform duration-700 ease-out motion-reduce:scale-100 motion-reduce:transform-none"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={false}
            />
          </div>

          {/* Gradient Overlay on Hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 motion-reduce:opacity-0" />
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-2xl font-bold text-yellow mb-2 group-hover:text-cyan transition-colors duration-300">
            {title}
          </h3>
          <p className="text-secondary leading-relaxed">{description}</p>
        </div>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech, index) => (
            <span
              key={tech}
              className={`px-3 py-1.5 border rounded-full text-xs font-semibold transition-all duration-300 hover:scale-110 motion-reduce:hover:scale-100 ${
                techColorClasses[index % techColorClasses.length]
              }`}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Links */}
        <div className="flex gap-4 pt-2">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-pink hover-yellow transition-colors duration-300 font-semibold group/link"
              aria-label={`View live demo of ${title}`}
            >
              <ExternalLink
                size={18}
                className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-300 motion-reduce:transform-none"
              />
              Live Demo
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-cyan hover-green transition-colors duration-300 font-semibold group/link"
              aria-label={`View source code of ${title}`}
            >
              <Github
                size={18}
                className="group-hover/link:rotate-12 transition-transform duration-300 motion-reduce:transform-none"
              />
              Code
            </a>
          )}
        </div>
      </div>

      {/* Neon Glow Effect on Hover */}
      <div className="absolute inset-0 rounded-xl opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 pointer-events-none motion-reduce:opacity-0 shadow-[0_0_30px_rgba(0,217,255,0.4)]" />
    </article>
  );
}
