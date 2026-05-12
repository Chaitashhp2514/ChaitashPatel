import { motion } from "framer-motion";
import { useState } from "react";
import { skillCategories } from "../data/content";
import { Cpu, Code2, Database, Smartphone } from "lucide-react";

const icons = [Code2, Cpu, Database, Smartphone];

export default function Skills() {
  const [active, setActive] = useState(0);
  const cat = skillCategories[active];
  const Icon = icons[active];

  return (
    <section id="skills" data-testid="skills-section" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-30 grid-bg" />

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <SectionHeader index="01" eyebrow="// skills.matrix" title="A stack that spans pixels to silicon." />

        <div className="mt-16 grid lg:grid-cols-12 gap-8">
          {/* Tabs */}
          <div className="lg:col-span-4 flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
            {skillCategories.map((c, i) => {
              const I = icons[i];
              const isActive = i === active;
              return (
                <button
                  key={c.name}
                  onClick={() => setActive(i)}
                  data-testid={`skills-tab-${c.name.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}
                  data-magnetic
                  className={`group flex items-center justify-between gap-4 px-5 py-4 border text-left transition-all ${
                    isActive
                      ? "border-[#39FF14] bg-[#39FF14]/8 text-white shadow-[0_0_24px_-8px_rgba(57,255,20,0.55)]"
                      : "border-white/10 text-white/60 hover:border-white/30 hover:text-white"
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <I className={`w-4 h-4 ${isActive ? "text-[#39FF14]" : "text-white/40"}`} />
                    <span className="font-mono text-xs uppercase tracking-[0.18em]">{c.name}</span>
                  </span>
                  <span className={`font-mono text-[10px] ${isActive ? "text-[#39FF14]" : "text-white/30"}`}>
                    0{i + 1}/0{skillCategories.length}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Skills panel */}
          <motion.div
            key={active}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-8 border border-[#39FF14]/20 bg-black/40 backdrop-blur-sm p-6 md:p-10 relative"
            data-testid={`skills-panel-${cat.name.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}
          >
            <div className="absolute top-0 left-0 w-12 h-12 border-t border-l border-[#39FF14]" />
            <div className="absolute bottom-0 right-0 w-12 h-12 border-b border-r border-[#D946EF]" />

            <div className="flex items-center gap-3 mb-8">
              <Icon className="w-5 h-5 text-[#39FF14]" />
              <h3 className="font-display text-2xl md:text-3xl text-white">{cat.name}</h3>
              <span className="ml-auto font-mono text-xs text-white/40">[{cat.skills.length} entries]</span>
            </div>

            <div className="space-y-7">
              {cat.skills.map((s, i) => (
                <div key={s.name} data-testid={`skill-${s.name.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-sm text-white tracking-wide">{s.name}</span>
                    <span className="font-mono text-xs text-[#39FF14]">{s.level}%</span>
                  </div>
                  <div className="relative h-[6px] bg-white/5 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${s.level}%` }}
                      transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
                      className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#39FF14] via-[#39FF14] to-[#D946EF]"
                    >
                      <span className="absolute inset-0 bar-shimmer" />
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function SectionHeader({ index, eyebrow, title }) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-[#39FF14]">
        <span>{index}</span>
        <span className="w-8 h-px bg-[#39FF14]" />
        <span className="text-white/60">{eyebrow}</span>
      </div>
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white max-w-3xl"
      >
        {title}
      </motion.h2>
    </div>
  );
}
