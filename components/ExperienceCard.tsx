import { Briefcase } from "lucide-react";

interface ExperienceCardProps {
  company: string;
  position: string;
  period: string;
  responsibilities: string[];
}

export default function ExperienceCard({
  company,
  position,
  period,
  responsibilities,
}: ExperienceCardProps) {
  return (
    <div className="bg-secondary border-2 border-cyan rounded-lg p-6 hover:border-pink transition-all hover:shadow-lg hover:shadow-cyan/30">
      <div className="flex items-start gap-4 mb-4">
        <div className="p-3 bg-cyan rounded-lg">
          <Briefcase size={24} className="text-primary" />
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-yellow mb-1">{company}</h3>
          <p className="text-lg text-cyan font-semibold mb-1">{position}</p>
          <p className="text-sm text-secondary">{period}</p>
        </div>
      </div>
      <ul className="space-y-2">
        {responsibilities.map((responsibility, index) => (
          <li key={index} className="flex items-start gap-2 text-secondary">
            <span className="text-pink mt-1">▸</span>
            <span>{responsibility}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
