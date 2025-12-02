import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Workflow } from '../components/Workflow';
import { Stats } from '../components/Stats';
import { Skills } from '../components/Skills';
import { Journey } from '../components/Journey';
import { Projects } from '../components/Projects';
import { Services } from '../components/Services';
import { Achievements } from '../components/Achievements';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';
import { siteConfig } from '../site.config';

export default function Page() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-6 sm:py-8">
      <header className="flex items-center justify-between py-2 mb-4 sticky top-0 bg-gradient-to-b from-background/95 via-background/90 to-transparent backdrop-blur-md z-10">
        <div className="text-xs font-semibold tracking-[0.18em] uppercase text-primary">
          Amritraj Portfolio
        </div>
        <nav className="hidden sm:block text-[11px] text-slate-300">
          <a href="#about" className="mr-3 hover:text-slate-50">
            About
          </a>
          <a href="#projects" className="mr-3 hover:text-slate-50">
            Projects
          </a>
          <a href="#journey" className="mr-3 hover:text-slate-50">
            Journey
          </a>
          <a href="#skills" className="mr-3 hover:text-slate-50">
            Skills
          </a>
          <a href="#contact" className="hover:text-slate-50">
            Contact
          </a>
        </nav>
      </header>

      <main className="grid gap-6 md:grid-cols-[minmax(0,0.9fr),minmax(0,1.1fr)]">
        <Hero config={siteConfig.hero} />
        <div className="space-y-4 md:space-y-5">
          <About about={siteConfig.about} />
          <Projects projects={siteConfig.projects} />
          <Workflow steps={siteConfig.workflow} />
          <Stats stats={siteConfig.stats} />
          <Skills skills={siteConfig.skills} />
          <Journey journey={siteConfig.journey} />
          <Services services={siteConfig.services} />
          <Achievements achievements={siteConfig.achievements} />
          <Contact contact={siteConfig.contact} socials={siteConfig.socials} />
        </div>
      </main>

      <Footer socials={siteConfig.socials} />
    </div>
  );
}
