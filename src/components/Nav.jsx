import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { id: "hero", label: "00 / Home" },
  { id: "skills", label: "01 / Skills" },
  { id: "projects", label: "02 / Work" },
  { id: "contact", label: "03 / Contact" },
];

export default function Nav() {
  const [active, setActive] = useState("hero");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 16);
      const offsets = links.map((l) => {
        const el = document.getElementById(l.id);
        if (!el) return { id: l.id, top: Infinity };
        const r = el.getBoundingClientRect();
        return { id: l.id, top: Math.abs(r.top - 120) };
      });
      offsets.sort((a, b) => a.top - b.top);
      setActive(offsets[0].id);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      data-testid="top-nav"
      className={`fixed top-0 inset-x-0 z-50 transition-all ${
        scrolled ? "bg-black/70 backdrop-blur-xl border-b border-[#39FF14]/15" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <a
          href="#hero"
          data-testid="nav-logo"
          className="flex items-center gap-2 font-mono text-sm tracking-widest"
        >
          <span className="inline-block w-2 h-2 rounded-full bg-[#39FF14] shadow-[0_0_12px_#39FF14]" />
          <span className="text-white">chaitash<span className="text-[#39FF14]">.dev</span></span>
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              data-testid={`nav-link-${l.id}`}
              className={`relative font-mono text-xs px-3 py-2 tracking-widest uppercase transition-colors ${
                active === l.id ? "text-[#39FF14]" : "text-white/60 hover:text-white"
              }`}
            >
              {l.label}
              {active === l.id && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute left-3 right-3 bottom-1 h-[2px] bg-[#39FF14] shadow-[0_0_10px_#39FF14]"
                />
              )}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          data-testid="nav-cta"
          className="hidden md:inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest px-4 py-2 border border-[#39FF14]/40 text-[#39FF14] hover:bg-[#39FF14] hover:text-black transition-all"
        >
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#39FF14] animate-pulse" />
          Available
        </a>

        <button
          onClick={() => setOpen((s) => !s)}
          data-testid="nav-mobile-toggle"
          className="md:hidden text-white/80 font-mono text-xs uppercase tracking-widest border border-white/15 px-3 py-1.5"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/90 backdrop-blur-xl">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              onClick={() => setOpen(false)}
              className="block px-6 py-3 font-mono text-sm tracking-widest uppercase text-white/70 hover:text-[#39FF14] border-b border-white/5"
              data-testid={`nav-mobile-link-${l.id}`}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </motion.header>
  );
}
