"use client";

import type { SiteConfig } from '../site.config';

interface ContactProps {
  contact: SiteConfig['contact'];
  socials: SiteConfig['socials'];
}

export function Contact({ contact, socials }: ContactProps) {
  return (
    <section id="contact" className="py-8">
      <header className="mb-16 text-center">
        <div className="section-label">Communication</div>
        <h2 className="section-title">CONTACT & NETWORKS</h2>
      </header>

      <div className="grid gap-8 sm:grid-cols-3 max-w-5xl mx-auto">
        {/* Email Button */}
        <a
          href={`mailto:${contact.email}`}
          className="group flex flex-col items-center justify-center gap-6 p-10 rounded-[3rem] bg-white text-black transition-all duration-500 hover:scale-105 hover:shadow-[0_40px_80px_-20px_rgba(255,255,255,0.2)] animate-slide-up delay-100"
        >
          <div className="w-16 h-16 rounded-2xl bg-black/10 flex items-center justify-center">
            <span className="text-4xl grayscale transition-all duration-500 group-hover:grayscale-0">📧</span>
          </div>
          <div className="text-center space-y-2">
            <span className="block text-[10px] font-black uppercase tracking-[3px]">Direct Message</span>
            <span className="block text-sm font-bold opacity-80">{contact.email}</span>
          </div>
        </a>

        {/* GitHub Button */}
        <a
          href={socials.github}
          target="_blank"
          rel="noreferrer"
          className="group flex flex-col items-center justify-center gap-6 p-10 rounded-[3rem] border border-[#1f1f1f] bg-[#111] text-white transition-all duration-500 hover:scale-105 hover:border-white hover:shadow-[0_40px_80px_-20px_rgba(255,255,255,0.1)] animate-slide-up delay-200"
        >
          <div className="w-16 h-16 rounded-2xl bg-[#0a0a0a] border border-[#1f1f1f] flex items-center justify-center transition-all duration-500 group-hover:border-white">
            <span className="text-4xl grayscale transition-all duration-500 group-hover:grayscale-0">🐙</span>
          </div>
          <div className="text-center space-y-2">
            <span className="block text-[10px] font-black uppercase tracking-[3px] text-slate-500 transition-colors group-hover:text-white">Repository</span>
            <span className="block text-sm font-bold">GitHub Source</span>
          </div>
        </a>

        {/* LinkedIn Button */}
        <a
          href={socials.linkedin}
          target="_blank"
          rel="noreferrer"
          className="group flex flex-col items-center justify-center gap-6 p-10 rounded-[3rem] border border-[#1f1f1f] bg-[#111] text-white transition-all duration-500 hover:scale-105 hover:border-white hover:shadow-[0_40px_80px_-20px_rgba(255,255,255,0.1)] animate-slide-up delay-300"
        >
          <div className="w-16 h-16 rounded-2xl bg-[#0a0a0a] border border-[#1f1f1f] flex items-center justify-center transition-all duration-500 group-hover:border-white">
            <span className="text-4xl grayscale transition-all duration-500 group-hover:grayscale-0">🔗</span>
          </div>
          <div className="text-center space-y-2">
            <span className="block text-[10px] font-black uppercase tracking-[3px] text-slate-500 transition-colors group-hover:text-white">Professional</span>
            <span className="block text-sm font-bold">LinkedIn Connect</span>
          </div>
        </a>
      </div>
    </section>
  );
}
