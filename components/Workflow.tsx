import type { SiteConfig } from '../site.config';

interface WorkflowProps {
  steps: SiteConfig['workflow'];
}

export function Workflow({ steps }: WorkflowProps) {
  return (
    <section className="section-card" id="workflow">
      <header className="flex items-center justify-between mb-3">
        <div>
          <div className="section-label">Process</div>
          <div className="section-title">Development Workflow</div>
        </div>
      </header>
      <ol className="mt-1 space-y-2 text-xs text-slate-300">
        {steps.map((step, idx) => (
          <li key={step} className="flex items-start gap-2">
            <span className="mt-[3px] inline-flex h-4 w-4 items-center justify-center rounded-full border border-slate-600 text-[10px] text-slate-300">
              {idx + 1}
            </span>
            <span>{step}</span>
          </li>
        ))}
      </ol>
    </section>
  );
}
