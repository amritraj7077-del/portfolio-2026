import { Cpu, Award, Target, BookOpen } from 'lucide-react';
import type { SiteConfig } from '../site.config';

interface AchievementsProps {
  achievements: SiteConfig['achievements'];
}

const iconMap: Record<string, any> = {
  "🚁": Cpu,
  "🏆": Award,
  "🎯": Target,
  "📚": BookOpen,
};

export function Achievements({ achievements }: AchievementsProps) {
  return (
    <section id="achievements" className="section-card h-full">
      <header className="mb-10">
        <div className="section-label">Milestones</div>
        <h2 className="text-xl font-bold text-white uppercase tracking-tight">ACHIEVEMENTS</h2>
      </header>

      <div className="grid gap-4">
        {achievements.map((a, index) => {
          const Icon = iconMap[a.icon] || Award;
          return (
            <div
              key={index}
              className="group relative rounded-xl border border-border bg-card/40 p-6 transition-all duration-300 hover:translate-x-2 hover:border-white cursor-default animate-slide-up"
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              <div className="relative z-10 flex items-start gap-6">
                <div className="grayscale-interaction">
                  <Icon size={24} strokeWidth={1.5} className="text-white shrink-0 mt-1" />
                </div>
                
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-[10px] font-black text-slate-600 transition-colors uppercase tracking-[2px] group-hover:text-white">
                      {a.year}
                    </span>
                    <h3 className="text-base font-bold text-white transition-colors">
                      {a.title}
                    </h3>
                  </div>
                  {a.subtitle && (
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">
                      {a.subtitle}
                    </p>
                  )}
                  <p className="text-sm text-slate-500 font-medium leading-relaxed max-w-xl">
                    {a.description}
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
