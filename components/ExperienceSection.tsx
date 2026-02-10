"use client";

import { useEffect, useRef, useState } from "react";
import { Experience } from "../lib/types";
import ExperienceCard from "./ExperienceCard";

interface ExperienceSectionProps {
  experiences: Experience[];
}

export default function ExperienceSection({
  experiences,
}: ExperienceSectionProps) {
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
      id="experience"
      ref={sectionRef}
      className="py-20 px-6 bg-primary relative overflow-hidden"
    >
      {/* Background Glow Effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-pink/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-cyan/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
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
            WORK EXPERIENCE
          </h2>
          <p className="text-secondary text-lg max-w-2xl mx-auto">
            Professional journey and key contributions
          </p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <div
              key={experience.id}
              className={`
                transition-all duration-700 ease-out
                ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }
              `}
              style={{
                transitionDelay: `${index * 200}ms`,
              }}
            >
              <ExperienceCard
                company={experience.company}
                position={experience.position}
                period={experience.period}
                description={experience.description}
                responsibilities={experience.responsibilities}
                techStack={experience.techStack}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
