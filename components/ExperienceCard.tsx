"use client";

import { Briefcase } from "lucide-react";

interface ExperienceCardProps {
  company: string;
  position: string;
  period: string;
  description?: string;
  responsibilities: string[];
  techStack?: string[];
}

const techColorClasses = [
  "tech-pink",
  "tech-cyan",
  "tech-green",
  "tech-yellow",
];

export default function ExperienceCard({
  company,
  position,
  period,
  description,
  responsibilities,
  techStack,
}: ExperienceCardProps) {
  return (
    <article className="group relative bg-secondary rounded-xl p-6 md:p-8 border-2 border-cyan transition-all duration-500 ease-out hover:border-pink hover:-translate-y-1 hover:shadow-cyan-card shadow-pink-card motion-reduce:hover:transform-none motion-reduce:transition-none">
      {/* Header Section */}
      <div className="flex items-start gap-4 md:gap-6 mb-6">
        {/* Icon */}
        <div className="p-3 bg-cyan/20 rounded-lg border border-cyan group-hover:bg-pink/20 group-hover:border-pink transition-all duration-300 motion-reduce:transition-none">
          <Briefcase
            size={24}
            className="text-cyan group-hover:text-pink transition-colors duration-300 motion-reduce:transition-none"
            aria-hidden="true"
          />
        </div>

        {/* Company & Role Info */}
        <div className="flex-1 min-w-0">
          <h3 className="text-2xl md:text-3xl font-bold text-yellow mb-2 group-hover:text-cyan transition-colors duration-300">
            {company}
          </h3>
          <p className="text-lg md:text-xl text-pink font-semibold mb-1">
            {position}
          </p>
          <p className="text-sm text-secondary/80 font-mono">{period}</p>
        </div>
      </div>

      {/* Description (Optional) */}
      {description && (
        <p className="text-secondary leading-relaxed mb-6">{description}</p>
      )}

      {/* Responsibilities List */}
      <ul className="space-y-3 mb-6">
        {responsibilities.map((responsibility, index) => (
          <li
            key={index}
            className="flex items-start gap-3 text-secondary leading-relaxed"
          >
            <span
              className="text-pink mt-1 text-lg shrink-0"
              aria-hidden="true"
            >
              ▸
            </span>
            <span>{responsibility}</span>
          </li>
        ))}
      </ul>

      {/* Tech Stack Pills */}
      {techStack && techStack.length > 0 && (
        <div className="flex flex-wrap gap-2 pt-4 border-t border-cyan/20">
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
      )}

      {/* Neon Glow Effect on Hover */}
      <div className="absolute inset-0 rounded-xl opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 pointer-events-none motion-reduce:opacity-0 shadow-[0_0_25px_rgba(0,217,255,0.3)]" />
    </article>
  );
}
