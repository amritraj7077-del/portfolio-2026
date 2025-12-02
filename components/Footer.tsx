import type { SiteConfig } from '../site.config';

interface FooterProps {
  socials: SiteConfig['socials'];
}

export function Footer({ socials }: FooterProps) {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-10 border-t border-slate-800/70 pt-4 text-[11px] text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-2">
      <p>
        &copy; {year} Amritraj. Built for learning, experimentation, and growth.
      </p>
      <div className="flex items-center gap-3">
        <a href={socials.github} target="_blank" rel="noreferrer" className="hover:text-slate-300">
          GitHub
        </a>
        <a href={socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-slate-300">
          LinkedIn
        </a>
      </div>
    </footer>
  );
}
