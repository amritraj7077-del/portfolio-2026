import type { SiteConfig } from '../site.config';

interface FooterProps {
  socials: SiteConfig['socials'];
}

export function Footer({ socials }: FooterProps) {
  return (
    <footer className="mt-32 border-t border-[#1f1f1f] pt-12 pb-20 flex flex-col items-center gap-8 text-center max-w-4xl mx-auto">
      <div className="flex items-center gap-10">
        <a 
          href={socials.github} 
          target="_blank" 
          rel="noreferrer" 
          className="text-[11px] font-bold uppercase tracking-[3px] text-slate-500 hover:text-white transition-all duration-300"
        >
          GitHub Source
        </a>
        
        <div className="w-1.5 h-1.5 rounded-full bg-[#1f1f1f]" />

        <a 
          href={socials.linkedin} 
          target="_blank" 
          rel="noreferrer" 
          className="text-[11px] font-bold uppercase tracking-[3px] text-slate-500 hover:text-white transition-all duration-300"
        >
          LinkedIn Profile
        </a>
      </div>
      
      <div className="space-y-4">
        <div className="text-2xl font-bold text-white tracking-tighter uppercase">
          AMRIT RAJ
        </div>
        <p className="text-[11px] font-bold text-slate-600 max-w-md mx-auto leading-relaxed uppercase tracking-[3px]">
          Full-Stack | AI/ML | Kolino Founder
        </p>
        <div className="pt-4 flex flex-col gap-2">
          <p className="text-[10px] text-slate-700 font-bold uppercase tracking-[2px]">
            © {new Date().getFullYear()} — Engineering Portfolio
          </p>
          <p className="text-[9px] text-slate-800 font-bold uppercase tracking-[4px] italic">
            ~ terminal entry enabled
          </p>
        </div>
      </div>
    </footer>
  );
}
