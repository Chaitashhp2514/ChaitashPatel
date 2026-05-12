import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { projects } from "../data/content";
import { SectionHeader } from "./Skills";
import { ArrowUpRight } from "lucide-react";

export default function Projects() {
  const [active, setActive] = useState(0);
  const p = projects[active];

  return (
    <section id="projects" data-testid="projects-section" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-20 grid-bg" />

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <SectionHeader index="02" eyebrow="// selected.work" title="Projects that shipped, scaled, or surprised." />

        <div className="mt-16 grid lg:grid-cols-12 gap-8">
          {/* List of projects */}
          <div className="lg:col-span-5 space-y-3">
            {projects.map((proj, i) => {
              const isActive = i === active;
              return (
                <button
                  key={proj.id}
                  onClick={() => setActive(i)}
                  onMouseEnter={() => setActive(i)}
                  data-testid={`project-tab-${proj.id}`}
                  data-magnetic
                  className={`group w-full text-left p-5 border transition-all ${
                    isActive
                      ? "border-[#39FF14] bg-[#39FF14]/[0.05]"
                      : "border-white/8 hover:border-white/30 bg-black/30"
                  }`}
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <span className={`font-mono text-xs ${isActive ? "text-[#39FF14]" : "text-white/40"}`}>
                      — {proj.id}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-white/40">
                      {proj.year}
                    </span>
                  </div>
                  <h3 className={`mt-3 font-display text-xl md:text-2xl ${isActive ? "text-white" : "text-white/70"}`}>
                    {proj.title}
                  </h3>
                  <div className="mt-2 font-mono text-[11px] uppercase tracking-[0.2em] text-white/45">
                    {proj.type}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Detail panel */}
          <div className="lg:col-span-7 relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="border border-[#39FF14]/25 bg-black/50 backdrop-blur-sm overflow-hidden"
                data-testid={`project-detail-${p.id}`}
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={p.cover}
                    alt={p.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                  <div className="absolute top-4 left-4 font-mono text-[10px] uppercase tracking-[0.2em] text-[#39FF14] bg-black/70 px-2 py-1 border border-[#39FF14]/30">
                    {p.type} · {p.year}
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="font-display text-2xl md:text-4xl text-white">{p.title}</h3>
                  </div>
                </div>

                <div className="p-6 md:p-8">
                  <p className="text-white/70 text-sm md:text-base leading-relaxed">{p.description}</p>

                  <ul className="mt-5 space-y-2">
                    {p.bullets.map((b, i) => (
                      <li key={i} className="flex gap-3 text-sm text-white/60">
                        <span className="text-[#39FF14] font-mono">▸</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-[10px] uppercase tracking-widest px-3 py-1.5 border border-[#D946EF]/30 text-[#D946EF] bg-[#D946EF]/5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-7 flex items-center justify-between border-t border-white/10 pt-5">
                    <div className="font-mono text-xs text-white/45">
                      Role: <span className="text-white/80">{p.role}</span>
                    </div>
                    <a
                      href={p.link}
                      data-testid={`project-link-${p.id}`}
                      className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-[#39FF14] hover:text-white"
                    >
                      View case <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
