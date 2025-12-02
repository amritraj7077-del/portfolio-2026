import type { SiteConfig } from '../site.config';

interface StatsProps {
  stats: SiteConfig['stats'];
}

export function Stats({ stats }: StatsProps) {
  const items = [
    { label: 'Public Repos', value: stats.publicRepos },
    { label: 'Approx. Commits', value: stats.totalCommits },
    { label: 'Hackathons', value: stats.hackathons },
    { label: 'Stars', value: stats.stars },
    { label: 'Forks', value: stats.forks },
  ];

  return (
    <section className="section-card" id="stats">
      <header className="flex items-center justify-between mb-3">
        <div>
          <div className="section-label">Stats</div>
          <div className="section-title">GitHub Activity</div>
        </div>
      </header>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-slate-200">
        {items.map((item) => (
          <div key={item.label} className="rounded-xl border border-slate-700/70 bg-slate-900/70 px-3 py-2">
            <div className="text-[10px] uppercase tracking-wide text-slate-400">
              {item.label}
            </div>
            <div className="text-base font-semibold">{item.value}</div>
          </div>
        ))}
      </div>
      <p className="mt-3 text-[11px] text-slate-400">
        Top languages: {stats.topLanguages.join(', ')}. {/* Amrit: you can embed a real GitHub stats image below later. */}
      </p>
    </section>
  );
}
