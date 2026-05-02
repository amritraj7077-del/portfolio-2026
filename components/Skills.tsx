'use client';

import { useState, useMemo } from 'react';
import { 
  Code2, Terminal, FileCode2, Database, Layout, 
  Monitor, Atom, Cpu, Server, Zap, 
  Network, Activity, Lock, Brain, Shield, 
  Navigation, Radar, Settings, Container,
  Layers, Package, Palette, Box
} from 'lucide-react';
import type { SiteConfig } from '../site.config';

interface SkillsProps {
  skills: SiteConfig['skills'];
}

const iconMap: Record<string, any> = {
  "🟨": Code2,
  "🐍": Box,
  "📄": FileCode2,
  "🎨": Palette,
  "⚙️": Settings,
  "🗄️": Database,
  "⚛️": Atom,
  "▲": Layers,
  "📱": Monitor,
  "🎭": Component,
  "🟢": Server,
  "⚡": Zap,
  "🔌": Network,
  "🔗": Activity,
  "🔐": Lock,
  "🎯": Shield,
  "🍶": Container,
  "📊": Activity,
  "🔢": Database,
  "🧠": Brain,
  "🔥": Zap,
  "📈": Activity,
  "👁️": Radar,
  "🤖": Cpu,
  "🚁": Navigation,
  "🗺️": Radar,
  "📡": Network,
  "🔒": Lock,
  "🐙": Code2,
  "🐳": Package,
  "☁️": Layers,
  "💻": Terminal,
  "📓": BookOpen,
  "🐧": Terminal
};

// Fallback for Component which doesn't exist in the list above or was misspelled
function Component(props: any) {
  return <Layers {...props} />;
}
function BookOpen(props: any) {
  return <Layout {...props} />;
}

export function Skills({ skills: initialSkills }: SkillsProps) {
  const [activeTab, setActiveTab] = useState('All');

  const categories = useMemo(() => {
    const cats = ['All', ...new Set(initialSkills.map(s => s.category))];
    return cats;
  }, [initialSkills]);

  const filteredSkills = useMemo(() => {
    if (activeTab === 'All') return initialSkills;
    return initialSkills.filter(s => s.category === activeTab);
  }, [activeTab, initialSkills]);

  return (
    <section id="skills" className="py-8">
      <header className="mb-16">
        <div className="section-label">Inventory</div>
        <h2 className="section-title">TECHNICAL STACK</h2>
        
        {/* Category Tabs - Monochromatic Minimalism */}
        <div className="flex flex-wrap gap-3 mt-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-[2px] transition-all duration-300 border ${
                activeTab === cat
                  ? 'bg-white text-black border-white shadow-2xl scale-105'
                  : 'bg-[#111] text-slate-400 border-[#1f1f1f] hover:border-slate-400 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </header>

      {/* Skills Grid - Professional Clean Style */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filteredSkills.map((skill) => {
          const SkillIcon = iconMap[skill.icon] || Code2;
          
          return (
            <div
              key={skill.name}
              className="group section-card !p-6"
            >
              <div className="flex items-center gap-4">
                <div className="grayscale-interaction">
                  <SkillIcon size={24} strokeWidth={1.5} className="text-white" />
                </div>
                <h3 className="text-[12px] font-bold text-white uppercase tracking-tight">
                  {skill.name}
                </h3>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
