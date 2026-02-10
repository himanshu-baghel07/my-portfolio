"use client";

import SkillChip from "./SkillChip";

interface SkillGroupCardProps {
  title: string;
  skills: string[];
  color: "cyan" | "pink" | "green";
}

const colorStyles = {
  cyan: {
    title: "text-cyan",
    border: "border-cyan/30 hover:border-cyan/50",
    glow: "shadow-[0_4px_20px_rgba(0,217,255,0.15)]",
  },
  pink: {
    title: "text-pink",
    border: "border-pink/30 hover:border-pink/50",
    glow: "shadow-[0_4px_20px_rgba(255,107,157,0.15)]",
  },
  green: {
    title: "text-green",
    border: "border-green/30 hover:border-green/50",
    glow: "shadow-[0_4px_20px_rgba(107,207,127,0.15)]",
  },
};

export default function SkillGroupCard({
  title,
  skills,
  color,
}: SkillGroupCardProps) {
  const styles = colorStyles[color];

  return (
    <div
      className={`
        bg-secondary/80 backdrop-blur-sm p-8 rounded-2xl 
        border-2 ${styles.border} ${styles.glow}
        transition-all duration-300 ease-out
        hover:bg-secondary
      `}
    >
      {/* Title */}
      <h3
        className={`
          text-2xl font-bold mb-6 tracking-wider
          ${styles.title}
        `}
      >
        {title}
      </h3>

      {/* Skills Grid */}
      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <SkillChip key={skill} name={skill} color={color} />
        ))}
      </div>
    </div>
  );
}
