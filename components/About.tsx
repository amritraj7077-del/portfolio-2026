import type { SiteConfig } from '../site.config';

interface AboutProps {
  about: SiteConfig['about'];
}

export function About({ about }: AboutProps) {
  return (
    <section className="section-card" id="about">
      <header className="flex items-center justify-between mb-3">
        <div>
          <div className="section-label">Overview</div>
          <div className="section-title">About Me</div>
        </div>
      </header>
      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{about}</p>
    </section>
  );
}
