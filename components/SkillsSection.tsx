"use client";

import { useEffect, useRef, useState } from "react";
import { SkillGroup } from "../lib/types";
import SkillGroupCard from "./SkillGroupCard";

interface SkillsSectionProps {
  groups: SkillGroup[];
}

export default function SkillsSection({ groups }: SkillsSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-20 px-6 bg-primary relative overflow-hidden"
    >
      {/* Background Glow Effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div
          className={`
            text-center mb-16 transition-all duration-700 ease-out
            ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }
          `}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-yellow retro-text mb-4">
            SKILLS & TECHNOLOGIES
          </h2>
          <p className="text-secondary text-lg max-w-2xl mx-auto">
            Technologies I work with and have experience using
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {groups.map((group, index) => (
            <div
              key={group.title}
              className={`
                transition-all duration-700 ease-out
                ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }
              `}
              style={{
                transitionDelay: `${index * 150}ms`,
              }}
            >
              <SkillGroupCard
                title={group.title}
                skills={group.skills}
                color={group.color}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
