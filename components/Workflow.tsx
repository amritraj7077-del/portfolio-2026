import type { SiteConfig } from '../site.config';

interface WorkflowProps {
  steps: SiteConfig['workflow'];
}

export function Workflow({ steps }: WorkflowProps) {
  return (
    <section className="section-card h-full" id="workflow">
      <header className="mb-10">
        <div className="section-label">Pipeline</div>
        <h2 className="text-xl font-bold text-white uppercase tracking-tight">Development Lifecycle</h2>
      </header>
      <ol className="space-y-6">
        {steps.map((step, idx) => (
          <li key={step} className="flex items-start gap-4">
            <span className="shrink-0 flex h-6 w-6 items-center justify-center rounded-sm bg-white text-black text-[10px] font-black">
              {idx + 1}
            </span>
            <span className="text-sm sm:text-base text-slate-400 font-medium group-hover:text-white transition-colors">{step}</span>
          </li>
        ))}
      </ol>
    </section>
  );
}
