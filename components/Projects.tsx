import type { SiteConfig } from '../site.config';

interface ProjectsProps {
  projects: SiteConfig['projects'];
}

export function Projects({ projects }: ProjectsProps) {
  return (
    <section id="projects" className="py-8">
      <header className="mb-16">
        <div className="section-label">Technical Proof</div>
        <h2 className="section-title">ENGINEERING PROJECTS</h2>
      </header>

      <div className="grid gap-8 md:grid-cols-2">
        {projects.featured.map((p) => (
          <div
            key={p.id}
            className="group section-card flex flex-col justify-between"
          >
            <div className="space-y-6">
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <h3 className="text-2xl font-bold text-white transition-colors duration-300">
                    {p.title}
                  </h3>
                  {p.role && (
                    <span className="text-[10px] font-bold uppercase tracking-[2px] text-slate-500">
                      {p.role}
                    </span>
                  )}
                </div>
                {p.badge && (
                  <span className="text-[10px] font-bold uppercase tracking-[2px] px-3 py-1 bg-white text-black rounded-sm shrink-0">
                    {p.badge}
                  </span>
                )}
              </div>
              
              <p className="text-sm sm:text-base text-slate-400 leading-relaxed font-medium">
                {p.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-[#1f1f1f] bg-[#0a0a0a] px-3 py-1 text-[10px] font-black uppercase tracking-tighter text-slate-400 group-hover:border-white group-hover:text-white transition-all duration-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-[#1f1f1f] flex items-center justify-between">
              <div className="flex items-center gap-6">
                <a
                  href={p.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-white transition-colors"
                >
                  Live Demo
                </a>
                <a
                  href={p.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-white transition-colors"
                >
                  Source
                </a>
              </div>
              <div className="w-8 h-8 rounded-full border border-[#1f1f1f] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
