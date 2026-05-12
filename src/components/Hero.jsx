import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import { ArrowDownRight, ArrowUpRight, MapPin, Github, Linkedin } from "lucide-react";
import { profile, ticker, hero3d } from "../data/content";
import { useEffect, useState } from "react";

const terminalLines = [
  { p: "$", t: "boot --system engineer.exe" },
  { p: ">", t: "Loading React · Node · Flutter modules..." },
  { p: ">", t: "Spinning up MongoDB cluster..." },
  { p: ">", t: "Connection established. ready." },
];

function Terminal() {
  const [step, setStep] = useState(0);
  useEffect(() => {
    if (step >= terminalLines.length) return;
    const t = setTimeout(() => setStep((s) => s + 1), 650);
    return () => clearTimeout(t);
  }, [step]);

  return (
    <div
      data-testid="terminal-card"
      className="relative w-full max-w-md bg-[#08080c] border border-[#39FF14]/25 rounded-md overflow-hidden shadow-[0_0_40px_-12px_rgba(57,255,20,0.45)]"
    >
      <div className="flex items-center justify-between px-4 py-2 bg-black/60 border-b border-[#39FF14]/15">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#D946EF]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#FACC15]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#39FF14]" />
        </div>
        <span className="font-mono text-[10px] tracking-widest text-white/50">engineer.exe</span>
        <span className="font-mono text-[10px] tracking-widest text-[#39FF14]">status: running</span>
      </div>
      <div className="p-5 font-mono text-[13px] leading-relaxed min-h-[180px]">
        {terminalLines.slice(0, step).map((l, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35 }}
            className="flex gap-2"
          >
            <span className="text-[#D946EF]">{l.p}</span>
            <span className={i === terminalLines.length - 1 ? "text-[#39FF14]" : "text-white/80"}>{l.t}</span>
          </motion.div>
        ))}
        {step >= terminalLines.length && (
          <div className="flex items-center gap-2 mt-3">
            <span className="text-[#D946EF]">$</span>
            <span className="text-white/60">_</span>
            <span className="inline-block w-2 h-4 bg-[#39FF14] blink" />
          </div>
        )}
      </div>
      {/* scanlines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.06] bg-[repeating-linear-gradient(0deg,transparent_0,transparent_2px,#39FF14_3px,transparent_4px)]" />
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      data-testid="hero-section"
      className="relative min-h-screen flex flex-col justify-center pt-28 pb-20 overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg -z-10" />
      <div className="noise -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 w-full">
        {/* tag line top */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-6 font-accent text-xs text-[#39FF14]"
        >
          <span className="inline-block w-8 h-px bg-[#39FF14]" />
          <span>// open_to_work</span>
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#39FF14] animate-pulse" />
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-6 items-end">
          {/* Left: title */}
          <div className="lg:col-span-7">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-[3rem] sm:text-[4.5rem] lg:text-[6rem] leading-[0.95] font-extrabold"
            >
              <span className="block text-white">Hi, I'm</span>
              <span className="block">
                <span className="glitch" data-testid="hero-name">Chaitash</span>
                <span className="text-[#39FF14]">.</span>
              </span>
              <span className="block text-white/80 text-[1.4rem] sm:text-[2rem] lg:text-[2.6rem] font-display font-semibold mt-2">
                a <span className="text-[#D946EF]">Computer</span> Engineer
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.7 }}
              className="mt-8 max-w-xl text-white/65 text-sm md:text-base leading-relaxed"
              data-testid="hero-tagline"
            >
              {profile.tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-10 flex flex-wrap items-center gap-3"
            >
              <a
                href={"https://drive.google.com/file/d/1qa3xFDgxEK9xmhXwblXN-f0U_Q8CUwQF/view?usp=sharing"}
                data-testid="hero-resume-btn"
                data-magnetic
                className="group relative inline-flex items-center gap-3 bg-[#39FF14] text-black font-mono text-xs uppercase tracking-[0.2em] px-6 py-4 rounded-sm hover:bg-white transition-colors"
              >
                Download Resume
                <ArrowDownRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
              </a>
              <a
                href="#contact"
                data-testid="hero-contact-btn"
                data-magnetic
                className="group inline-flex items-center gap-3 border border-white/20 text-white font-mono text-xs uppercase tracking-[0.2em] px-6 py-4 rounded-sm hover:border-[#D946EF] hover:text-[#D946EF] transition-colors"
              >
                Get in touch
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </motion.div>

            {/* socials & location */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-10 flex flex-wrap items-center gap-6 font-mono text-xs text-white/50"
            >
              <span className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#39FF14]" />
                {profile.location}
              </span>
              <a href={profile.socials.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-[#39FF14]" data-testid="hero-github">
                <Github className="w-3.5 h-3.5" /> GitHub
              </a>
              <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-[#39FF14]" data-testid="hero-linkedin">
                <Linkedin className="w-3.5 h-3.5" /> LinkedIn
              </a>
            </motion.div>
          </div>

          {/* Right: terminal + 3d */}
          <div className="lg:col-span-5 flex flex-col items-end gap-6 relative">
            <motion.img
              src={hero3d}
              alt=""
              initial={{ opacity: 0, scale: 0.9, rotate: -8 }}
              animate={{ opacity: 0.85, scale: 1, rotate: 0 }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
              className="absolute -top-10 -right-6 w-72 lg:w-96 pointer-events-none mix-blend-screen opacity-80 select-none"
              style={{ filter: "drop-shadow(0 0 40px rgba(217,70,239,0.45))" }}
            />
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="relative z-10 w-full flex justify-end"
            >
              <Terminal />
            </motion.div>
          </div>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-[#39FF14]/15 border border-[#39FF14]/15"
          data-testid="hero-stats"
        >
          {profile.stats.map((s, i) => (
            <div key={i} className="bg-black/70 px-6 py-6">
              <div className="font-display text-3xl md:text-4xl text-white">{s.value}</div>
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/50 mt-1">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Marquee ticker */}
      <div className="mt-16 border-y border-[#39FF14]/15 py-5 bg-black/40 backdrop-blur-sm">
        <Marquee gradient={false} speed={48} className="marquee-mask">
          {[...ticker, ...ticker].map((t, i) => (
            <span key={i} className="font-display text-xl md:text-3xl px-6 text-white/85 flex items-center gap-6">
              {t}
              <span className="text-[#39FF14]">◆</span>
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
