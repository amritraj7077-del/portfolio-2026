import type { SiteConfig } from '../site.config';

interface SkillsProps {
  skills: SiteConfig['skills'];
}

export function Skills({ skills }: SkillsProps) {
  return (
    <section className="section-card" id="skills">
      <header className="flex items-center justify-between mb-3">
        <div>
          <div className="section-label">Stack</div>
          <div className="section-title">Skills</div>
        </div>
      </header>
      <div className="grid gap-3 text-xs text-slate-200 sm:grid-cols-2">
        <SkillGroup title="Languages" items={skills.languages} />
        <SkillGroup title="Frontend" items={skills.frontend} />
        <SkillGroup title="Backend" items={skills.backend} />
        <SkillGroup title="Tools / Platforms" items={skills.tools} />
      </div>
    </section>
  );
}

function SkillGroup({ title, items }: { title: string; items: string[] }) {
  if (!items.length) return null;
  return (
    <div>
      <div className="text-[11px] uppercase tracking-wide text-slate-400 mb-1">{title}</div>
      <div className="flex flex-wrap gap-1">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-full border border-slate-700/70 bg-slate-900/80 px-2.5 py-1 text-[11px]"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
