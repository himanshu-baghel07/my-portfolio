import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  imageUrl?: string;
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
  technologies,
  liveUrl,
  githubUrl,
  imageUrl,
}: ProjectCardProps) {
  return (
    <div className="bg-primary rounded-lg overflow-hidden border-2 border-pink hover:border-cyan transition-all hover:scale-105 shadow-pink-card">
      <div
        className="h-48 bg-gradient-project"
        style={
          imageUrl
            ? {
                backgroundImage: `url(${imageUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }
            : {}
        }
      />
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2 text-yellow">{title}</h3>
        <p className="text-secondary mb-4">{description}</p>

        <div className="flex gap-2 mb-4 flex-wrap">
          {technologies.map((tech, index) => (
            <span
              key={tech}
              className={`px-3 py-1 border rounded text-sm font-semibold ${techColorClasses[index % techColorClasses.length]}`}
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-pink hover-yellow transition-colors font-semibold"
            >
              <ExternalLink size={18} />
              Live Demo
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-cyan hover-green transition-colors font-semibold"
            >
              <Github size={18} />
              Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
