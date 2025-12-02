import type { SiteConfig } from '../site.config';

interface JourneyProps {
  journey: SiteConfig['journey'];
}

export function Journey({ journey }: JourneyProps) {
  return (
    <section className="section-card" id="journey">
      <header className="flex items-center justify-between mb-3">
        <div>
          <div className="section-label">Growth</div>
          <div className="section-title">My Journey</div>
        </div>
      </header>
      <div className="mt-1 space-y-3">
        {journey.map((item) => (
          <div
            key={item.date + item.title}
            className="grid gap-3 text-xs text-slate-200 sm:grid-cols-[90px,minmax(0,1fr)]"
          >
            <div className="text-[10px] uppercase tracking-wide text-slate-400">{item.date}</div>
            <div>
              <div className="font-semibold mb-0.5">{item.title}</div>
              <p className="text-slate-300 text-[11px] leading-relaxed">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
