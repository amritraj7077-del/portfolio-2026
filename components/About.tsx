import { Terminal, GraduationCap, Award, Cpu } from 'lucide-react';
import type { SiteConfig } from '../site.config';

interface AboutProps {
  aboutCards: SiteConfig['aboutCards'];
}

const iconMap: Record<string, any> = {
  "💻": Terminal,
  "🎓": GraduationCap,
  "🎪": Award,
  "🚁": Cpu,
};

export function About({ aboutCards }: AboutProps) {
  return (
    <section id="about" className="py-8">
      <header className="mb-16">
        <div className="section-label">Identity</div>
        <h2 className="section-title">CORE PROFILE</h2>
      </header>
      
      <div className="grid gap-8 sm:grid-cols-2">
        {aboutCards.map((card, index) => {
          const Icon = iconMap[card.icon] || Terminal;
          return (
            <div
              key={index}
              className="group section-card relative overflow-hidden"
            >
              <div className="relative z-10 space-y-6">
                <div className="flex items-center justify-between">
                  <div className="grayscale-interaction">
                    <Icon size={32} strokeWidth={1.5} className="text-white" />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-[2px] px-3 py-1 bg-white text-black rounded-sm">
                    {card.tag}
                  </span>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-white transition-colors duration-300">
                    {card.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-400 leading-relaxed font-medium">
                    {card.text}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
