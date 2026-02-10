import { SkillColor } from "../lib/types";

interface SkillCardProps {
  title: string;
  skills: string[];
  color: SkillColor;
}

const colorClasses = {
  blue: {
    title: "text-cyan",
    border: "border-cyan hover-border-yellow",
    shadow: "shadow-cyan-card",
  },
  purple: {
    title: "text-pink",
    border: "border-pink hover-border-yellow",
    shadow: "shadow-pink-card",
  },
  pink: {
    title: "text-pink",
    border: "border-pink hover-border-yellow",
    shadow: "shadow-pink-card",
  },
  cyan: {
    title: "text-cyan",
    border: "border-cyan hover-border-yellow",
    shadow: "shadow-cyan-card",
  },
  green: {
    title: "text-green",
    border: "border-green hover-border-yellow",
    shadow: "shadow-green-card",
  },
};

export default function SkillCard({ title, skills, color }: SkillCardProps) {
  const colors = colorClasses[color] || colorClasses.pink;

  return (
    <div
      className={`bg-secondary p-6 rounded-lg border-2 ${colors.border} transition-colors ${colors.shadow}`}
    >
      <h3 className={`text-2xl font-bold mb-4 ${colors.title}`}>{title}</h3>
      <ul className="space-y-2 text-primary">
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}
