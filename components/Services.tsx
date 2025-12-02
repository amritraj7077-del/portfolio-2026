import type { SiteConfig } from '../site.config';

interface ServicesProps {
  services: SiteConfig['services'];
}

export function Services({ services }: ServicesProps) {
  return (
    <section className="section-card" id="services">
      <header className="flex items-center justify-between mb-3">
        <div>
          <div className="section-label">What I Do</div>
          <div className="section-title">Services</div>
        </div>
      </header>
      <div className="grid gap-3 sm:grid-cols-2 text-xs text-slate-200">
        {services.map((service) => (
          <div
            key={service.title}
            className="rounded-2xl border border-slate-700/70 bg-slate-950/70 p-3"
          >
            <div className="font-semibold mb-1">{service.title}</div>
            <p className="text-[11px] text-slate-300 leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
