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
  const [proficiency, setProficiency] = useState<{ [key: string]: number }>(
    Object.fromEntries(initialSkills.map(s => [s.name, s.level]))
  );

  const categories = useMemo(() => {
    const cats = ['All', ...new Set(initialSkills.map(s => s.category))];
    return cats;
  }, [initialSkills]);

  const filteredSkills = useMemo(() => {
    if (activeTab === 'All') return initialSkills;
    return initialSkills.filter(s => s.category === activeTab);
  }, [activeTab, initialSkills]);

  const handleSliderChange = (name: string, value: string) => {
    setProficiency(prev => ({
      ...prev,
      [name]: parseInt(value)
    }));
  };

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
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredSkills.map((skill) => {
          const currentLevel = proficiency[skill.name];
          const SkillIcon = iconMap[skill.icon] || Code2;
          
          return (
            <div
              key={skill.name}
              className="group section-card !p-8"
            >
              <div className="relative z-10 space-y-6">
                {/* Header: Icon + Name + % */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="grayscale-interaction">
                      <SkillIcon size={24} strokeWidth={1.5} className="text-white" />
                    </div>
                    <h3 className="text-[12px] font-bold text-white uppercase tracking-tight">
                      {skill.name}
                    </h3>
                  </div>
                  <span className="text-sm font-bold text-white">
                    {currentLevel}%
                  </span>
                </div>

                {/* Monochromatic Progress Bar */}
                <div className="relative h-1 w-full bg-[#1f1f1f] rounded-full overflow-hidden">
                  <div
                    className="absolute inset-y-0 left-0 bg-white transition-all duration-700 ease-out"
                    style={{ width: `${currentLevel}%` }}
                  />
                </div>

                {/* Minimal Slider Interaction */}
                <div className="space-y-4">
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={currentLevel}
                    onChange={(e) => handleSliderChange(skill.name, e.target.value)}
                    className="w-full h-1 bg-[#1f1f1f] rounded-lg appearance-none cursor-pointer accent-white opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                  <p className="text-[9px] text-slate-400 font-bold uppercase tracking-[2px] opacity-0 group-hover:opacity-100 transition-opacity">
                    Adjust Metric
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
