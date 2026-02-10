"use client";

import { useState } from "react";

interface SkillChipProps {
  name: string;
  color: "cyan" | "pink" | "green";
}

const colorStyles = {
  cyan: {
    base: "bg-cyan/10 text-cyan border-cyan/30",
    hover:
      "hover:bg-cyan/20 hover:border-cyan hover:shadow-[0_0_12px_rgba(0,217,255,0.4)]",
  },
  pink: {
    base: "bg-pink/10 text-pink border-pink/30",
    hover:
      "hover:bg-pink/20 hover:border-pink hover:shadow-[0_0_12px_rgba(255,107,157,0.4)]",
  },
  green: {
    base: "bg-green/10 text-green border-green/30",
    hover:
      "hover:bg-green/20 hover:border-green hover:shadow-[0_0_12px_rgba(107,207,127,0.4)]",
  },
};

export default function SkillChip({ name, color }: SkillChipProps) {
  const [isHovered, setIsHovered] = useState(false);
  const styles = colorStyles[color];

  return (
    <div
      className={`
        px-4 py-2 rounded-full border-2 
        ${styles.base} ${styles.hover}
        transition-all duration-300 ease-out
        font-medium text-sm
        ${isHovered ? "-translate-y-0.5" : ""}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {name}
    </div>
  );
}
