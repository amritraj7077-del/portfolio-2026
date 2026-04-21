import type { SiteConfig } from '../site.config';

interface JourneyProps {
  journey: SiteConfig['journey'];
}

export function Journey({ journey }: JourneyProps) {
  return (
    <section id="journey" className="relative py-12">
      <header className="mb-16 text-center">
        <div className="section-label">Trajectory</div>
        <h2 className="section-title">CHRONOLOGICAL LOG</h2>
      </header>

      <div className="relative max-w-4xl mx-auto">
        {/* Vertical Line - Monochromatic */}
        <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-white via-[#1f1f1f] to-transparent -translate-x-1/2 hidden sm:block" />
        <div className="absolute left-4 top-0 bottom-0 w-[1px] bg-gradient-to-b from-white via-[#1f1f1f] to-transparent sm:hidden" />

        <div className="space-y-16">
          {journey.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={item.date + item.title}
                className={`relative flex items-center justify-between w-full sm:flex-row ${
                  isEven ? 'sm:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Node - Minimal */}
                <div className="absolute left-4 sm:left-1/2 w-3 h-3 rounded-full bg-black border border-white -translate-x-1/2 z-10" />

                {/* Content Card */}
                <div className="ml-12 sm:ml-0 w-full sm:w-[42%] group">
                  <div className="section-card !p-8 transition-all duration-500 hover:border-white">
                    <div className="text-[10px] font-black uppercase tracking-[3px] mb-3 text-slate-400 group-hover:text-white transition-colors duration-300">
                      {item.date}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed font-medium">
                      {item.description}
                    </p>
                  </div>
                  
                  {/* Decorative Connector (Desktop) */}
                  <div className={`absolute top-1/2 w-8 h-[1px] bg-[#1f1f1f] group-hover:bg-white transition-colors hidden sm:block ${
                    isEven ? 'right-[50%] -translate-x-4' : 'left-[50%] translate-x-4'
                  }`} />
                </div>

                {/* Spacer (Desktop) */}
                <div className="hidden sm:block w-[42%]" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
