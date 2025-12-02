import Image from 'next/image';
import type { SiteConfig } from '../site.config';

interface HeroProps {
  config: SiteConfig['hero'];
}

export function Hero({ config }: HeroProps) {
  return (
    <section className="grid gap-10 md:grid-cols-[minmax(0,0.9fr),minmax(0,1.1fr)] items-start">
      <div className="space-y-4 sticky top-20">
        <p className="text-xs tracking-[0.2em] uppercase text-slate-400">
          {config.subheadline}
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
          {config.headline}
        </h1>
        <p className="text-sm text-slate-400 max-w-md">{config.tagline}</p>
        <div className="flex flex-wrap gap-2 pt-1 text-[11px] text-slate-300">
          <span className="px-3 py-1 rounded-full border border-slate-700/70 bg-slate-900/70">
            Web Development
          </span>
          <span className="px-3 py-1 rounded-full border border-slate-700/70 bg-slate-900/70">
            Full Stack
          </span>
          <span className="px-3 py-1 rounded-full border border-slate-700/70 bg-slate-900/70">
            Hackathons
          </span>
          <span className="px-3 py-1 rounded-full border border-slate-700/70 bg-slate-900/70">
            AI / ML
          </span>
        </div>
        <div className="flex flex-wrap gap-3 pt-3">
          {config.ctas.map((cta) => (
            <a
              key={cta.href}
              href={cta.href}
              className={
                cta.href.includes('projects')
                  ? 'inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-xs font-medium text-slate-950 shadow-lg shadow-fuchsia-700/40 hover:shadow-fuchsia-500/50 transition'
                  : 'inline-flex items-center justify-center rounded-full border border-slate-600 bg-slate-900/70 px-4 py-2 text-xs font-medium text-slate-100 hover:bg-slate-800/80 transition'
              }
            >
              {cta.label}
            </a>
          ))}
        </div>
      </div>

      <div className="relative h-64 sm:h-72 md:h-80 lg:h-96">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-sky-500/20 to-transparent blur-3xl" />
        <div className="relative h-full w-full rounded-3xl border border-slate-700/70 bg-slate-900/60 backdrop-blur-xl overflow-hidden flex items-center justify-center shadow-xl">
          {/* Amrit: your photo is here; replace amritraj-profile.jpg in /public if you want a new image */}
          <div className="relative h-48 w-48 sm:h-56 sm:w-56 md:h-64 md:w-64 rounded-full border border-slate-600 overflow-hidden shadow-2xl">
            <Image
              src={config.image.src}
              alt={config.image.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 60vw, 320px"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
