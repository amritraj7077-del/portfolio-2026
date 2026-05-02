import { Signal, Zap, Network } from 'lucide-react';
import type { SiteConfig } from '../site.config';

interface ResearchProps {
  research: SiteConfig['research'];
}

const iconMap: Record<string, any> = {
  "📡": Signal,
  "🤖": Zap,
  "🌐": Network,
};

export function Research({ research }: ResearchProps) {
  return (
    <section id="research" className="py-8">
      <header className="mb-16">
        <div className="section-label">Exploration</div>
        <h2 className="section-title">RESEARCH & PUBLICATIONS</h2>
      </header>

      <div className="space-y-8">
        {research.map((paper, index) => {
          const Icon = iconMap[paper.icon] || Signal;
          return (
            <div
              key={index}
              className="group section-card animate-slide-up"
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              <div className="relative z-10 flex flex-col sm:flex-row sm:items-start gap-8">
                <div className="grayscale-interaction">
                  <div className="w-16 h-16 rounded-xl bg-card border border-border flex items-center justify-center shrink-0">
                    <Icon size={32} strokeWidth={1.5} className="text-white" />
                  </div>
                </div>
                
                <div className="space-y-4 flex-grow">
                  <div className="flex flex-wrap items-center gap-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-white transition-colors duration-300">
                      {paper.title}
                    </h3>
                    <span className="text-[10px] font-black px-3 py-1 border border-border text-slate-600 uppercase tracking-[2px] rounded-sm group-hover:border-white group-hover:text-white transition-colors">
                      {paper.status}
                    </span>
                  </div>
                  
                  <p className="text-sm sm:text-base text-slate-400 font-medium leading-relaxed max-w-4xl">
                    {paper.description}
                  </p>
                  
                  <div className="flex items-center gap-2 pt-2 text-[10px] font-black uppercase tracking-[2px] text-slate-400">
                    <span className="text-white">Domain:</span>
                    <span>{paper.focus}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
