import type { SiteConfig } from '../site.config';

interface AchievementsProps {
  achievements: SiteConfig['achievements'];
}

export function Achievements({ achievements }: AchievementsProps) {
  return (
    <section className="section-card" id="achievements">
      <header className="flex items-center justify-between mb-3">
        <div>
          <div className="section-label">Highlights</div>
          <div className="section-title">Achievements</div>
        </div>
      </header>
      <ul className="mt-1 space-y-2 text-xs text-slate-300">
        {achievements.map((a) => (
          <li key={a.title} className="leading-relaxed">
            <span className="font-semibold text-slate-100">{a.title}: </span>
            {a.description}
          </li>
        ))}
      </ul>
    </section>
  );
}
