'use client';

import { useEffect, useState } from 'react';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Workflow } from '../components/Workflow';
import { Stats } from '../components/Stats';
import { Skills } from '../components/Skills';
import { Research } from '../components/Research';
import { Journey } from '../components/Journey';
import { Projects } from '../components/Projects';
import { Services } from '../components/Services';
import { Achievements } from '../components/Achievements';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';
import { siteConfig } from '../site.config';

export default function Page() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Research', href: '#research' },
    { label: 'Skills', href: '#skills' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <div className="max-w-[1240px] mx-auto px-6 sm:px-12 py-8 sm:py-16 animate-fade-in relative z-10">
      {/* ── Sticky Navigation ── */}
      <header
        className={`flex items-center justify-between py-4 mb-12 sticky top-6 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-slate-950/80 backdrop-blur-xl border border-slate-700/40 shadow-2xl shadow-black/50'
            : 'bg-transparent border border-transparent'
        } rounded-3xl px-6`}
      >
        {/* AR Logo */}
        <div className="text-xl font-black tracking-tighter gradient-text select-none">
          AR
        </div>

        {/* Nav Links */}
        <nav className="hidden sm:flex items-center gap-8 text-[12px] font-bold uppercase tracking-widest text-slate-400">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative hover:text-teal transition-colors duration-200 group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-gold to-teal group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>
      </header>

      <main className="space-y-24 sm:space-y-32">
        {/* Hero is full width and centered */}
        <Hero config={siteConfig.hero} />
        
        {/* About Section */}
        <section className="animate-slide-up delay-100" id="about">
          <About aboutCards={siteConfig.aboutCards} />
        </section>

        {/* Projects Section - Full Width Grid */}
        <section className="animate-slide-up delay-200" id="projects">
          <Projects projects={siteConfig.projects} />
        </section>

        {/* Research Section */}
        <section className="animate-slide-up delay-300" id="research">
          <Research research={siteConfig.research} />
        </section>

        {/* Technical Stack: Skills */}
        <section className="animate-slide-up delay-500" id="skills">
          <Skills skills={siteConfig.skills} />
        </section>

        {/* Journey - Now perfectly centered */}
        <section className="animate-slide-up delay-600" id="journey">
          <Journey journey={siteConfig.journey} />
        </section>

        {/* Mixed Grid: Workflow & Stats */}
        <div className="grid gap-12 lg:grid-cols-2">
          <section className="animate-slide-up delay-400">
            <Workflow steps={siteConfig.workflow} />
          </section>
          <section className="animate-slide-up delay-400">
            <Stats stats={siteConfig.stats} />
          </section>
        </div>

        {/* Mixed Grid: Services & Achievements */}
        <div className="grid gap-12 lg:grid-cols-2">
          <section className="animate-slide-up delay-700">
            <Services services={siteConfig.services} />
          </section>
          <section className="animate-slide-up delay-700" id="achievements">
            <Achievements achievements={siteConfig.achievements} />
          </section>
        </div>

        {/* Contact Section */}
        <section className="animate-slide-up delay-800" id="contact">
          <Contact contact={siteConfig.contact} socials={siteConfig.socials} />
        </section>
      </main>

      <Footer socials={siteConfig.socials} />
    </div>
  );
}
