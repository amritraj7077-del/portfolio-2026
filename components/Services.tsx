import type { SiteConfig } from '../site.config';

interface ServicesProps {
  services: SiteConfig['services'];
}

export function Services({ services }: ServicesProps) {
  return (
    <section className="section-card h-full" id="services">
      <header className="mb-10">
        <div className="section-label">Offerings</div>
        <h2 className="text-xl font-bold text-white uppercase tracking-tight">Technical Services</h2>
      </header>
      <div className="grid gap-6 sm:grid-cols-2">
        {services.map((service) => (
          <div
            key={service.title}
            className="group rounded-2xl border border-[#1f1f1f] bg-[#0a0a0a]/50 p-6 transition-all duration-300 hover:border-white"
          >
            <div className="font-bold text-white mb-3 tracking-tight transition-colors">{service.title}</div>
            <p className="text-[14px] text-slate-400 leading-relaxed font-semibold">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
