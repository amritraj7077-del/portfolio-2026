import type { SiteConfig } from '../site.config';

interface StatsProps {
  stats: SiteConfig['stats'];
}

export function Stats({ stats }: StatsProps) {
  const items = [
    { label: 'Public Repos', value: stats.publicRepos },
    { label: 'Total Commits', value: stats.totalCommits },
    { label: 'Hackathons', value: stats.hackathons },
    { label: 'Stars', value: stats.stars },
    { label: 'Forks', value: stats.forks },
  ];

  return (
    <section className="section-card h-full" id="stats">
      <header className="mb-10">
        <div className="section-label">Performance Core</div>
        <h2 className="text-xl font-bold text-white uppercase tracking-tight">Technical Activity</h2>
      </header>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
        {items.map((item) => (
          <div key={item.label} className="space-y-1">
            <div className="text-[10px] font-bold uppercase tracking-[2px] text-slate-400">
              {item.label}
            </div>
            <div className="text-2xl font-black text-white">{item.value}</div>
          </div>
        ))}
      </div>
      <div className="mt-12 pt-8 border-t border-[#1f1f1f]">
        <p className="text-[10px] font-black uppercase tracking-[2px] text-slate-500">
          Core Languages: <span className="text-white ml-2">{stats.topLanguages.join(' | ')}</span>
        </p>
      </div>
    </section>
  );
}
