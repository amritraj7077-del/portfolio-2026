import type { SiteConfig } from '../site.config';

interface ProjectsProps {
  projects: SiteConfig['projects'];
}

export function Projects({ projects }: ProjectsProps) {
  return (
    <section className="section-card" id="projects">
      <header className="flex items-center justify-between mb-3">
        <div>
          <div className="section-label">Featured Work</div>
          <div className="section-title">Projects</div>
        </div>
      </header>
      <p className="section-subtext mb-3">
        Below are a couple of key projects. You can add more projects later by editing the config file.
      </p>
      <div className="grid gap-3 sm:grid-cols-2">
        {projects.featured.map((project) => (
          <article
            key={project.id}
            className="group rounded-2xl border border-slate-700/70 bg-slate-950/70 p-4 text-xs text-slate-200 shadow-sm hover:border-primary/70 hover:shadow-fuchsia-700/40 transition"
          >
            <div className="flex items-center justify-between mb-1">
              <h3 className="font-semibold text-sm text-slate-50">{project.title}</h3>
            </div>
            <p className="text-[11px] text-slate-300 mb-2 leading-relaxed">{project.description}</p>
            <p className="text-[10px] text-slate-400 mb-2">
              Tech: {project.tech.join(', ')}
            </p>
            <div className="flex flex-wrap gap-2 text-[11px]">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="underline-offset-2 text-sky-400 hover:text-sky-300 hover:underline"
              >
                Live Demo
              </a>
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="underline-offset-2 text-slate-400 hover:text-slate-200 hover:underline"
              >
                Source Code
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
