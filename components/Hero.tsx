'use client';

import { GraduationCap, Cpu, Award } from 'lucide-react';
import Image from 'next/image';
import type { SiteConfig } from '../site.config';

interface HeroProps {
  config: SiteConfig['hero'];
}

export function Hero({ config }: HeroProps) {
  return (
    <section className="relative min-h-[60vh] flex flex-col items-center justify-center py-12 sm:py-32 overflow-hidden">
      <div className="relative z-10 w-full grid gap-16 lg:grid-cols-[1.2fr,0.8fr] items-center">
        {/* ── Left Content ── */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-12 animate-fade-in">
          
          {/* Minimal Badge */}
          <div className="inline-flex items-center gap-4 px-6 py-2 rounded-full border border-[#1f1f1f] bg-[#111] animate-fade-in-up">
            <div className="flex items-center gap-2 border-r border-[#1f1f1f] pr-4">
              <GraduationCap size={14} className="text-slate-400" />
              <span className="text-[10px] font-black tracking-[0.2em] uppercase text-slate-400">IIT Madras</span>
            </div>
            <div className="flex items-center gap-2 border-r border-[#1f1f1f] pr-4">
              <Cpu size={14} className="text-slate-400" />
              <span className="text-[10px] font-black tracking-[0.2em] uppercase text-slate-400">Kolino Founder</span>
            </div>
            <div className="flex items-center gap-2">
              <Award size={14} className="text-slate-400" />
              <span className="text-[10px] font-black tracking-[0.2em] uppercase text-slate-400">Gir House</span>
            </div>
          </div>

          <div className="space-y-6 animate-fade-in-up delay-100">
            <h1 className="text-6xl sm:text-7xl md:text-9xl font-bold tracking-tighter leading-[1] text-white">
              {config.headline}
            </h1>
            <p className="text-2xl sm:text-4xl font-medium text-slate-300 tracking-tight">
              {config.subheadline}
            </p>
            <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
              {config.tagline}
            </p>
          </div>

          {/* CTAs - Minimal Outline Style */}
          <div className="flex flex-wrap gap-6 justify-center lg:justify-start animate-fade-in-up delay-200">
            {config.ctas.map((cta, idx) => (
              <a
                key={cta.href}
                href={cta.href}
                className={idx === 0 ? 'btn-solid' : 'btn-outline'}
              >
                {cta.label}
              </a>
            ))}
          </div>
        </div>

        {/* ── Right Image ── */}
        <div className="relative animate-fade-in delay-300 flex justify-center lg:justify-end">
          <div className="relative w-80 h-80 sm:w-96 sm:h-96 md:w-[450px] md:h-[450px]">
            <div className="relative h-full w-full rounded-2xl border border-[#1f1f1f] bg-[#111] overflow-hidden flex items-center justify-center shadow-2xl">
              <div className="relative h-full w-full opacity-100 transition-all duration-700">
                <Image
                  src={config.image.src}
                  alt={config.image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 450px"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
