import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle2 } from "lucide-react";
import { profile } from "../data/content";
import { SectionHeader } from "./Skills";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    const subject = encodeURIComponent(`Portfolio · message from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" data-testid="contact-section" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-25 grid-bg" />
      <div
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full -z-10"
        style={{ background: "radial-gradient(circle, rgba(217,70,239,0.18), transparent 60%)" }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <SectionHeader index="03" eyebrow="// open.channel" title="Let's build something worth shipping." />

        <p className="mt-6 max-w-2xl text-white/60 text-sm md:text-base">
          Have a role, a freelance brief, or just want to nerd out over a project idea?
          My inbox is open — I reply within a day or two.
        </p>

        <div className="mt-16 grid lg:grid-cols-12 gap-8">
          {/* Direct contacts */}
          <div className="lg:col-span-5 space-y-3">
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/40 mb-4">
              Direct contacts
            </div>

            <ContactRow
              icon={Mail}
              label="Email"
              value={profile.email}
              href={`mailto:${profile.email}`}
              testid="contact-email"
            />
            <ContactRow
              icon={Phone}
              label="Phone"
              value={profile.phone}
              href={`tel:${profile.phone.replace(/\s+/g, "")}`}
              testid="contact-phone"
            />
            <ContactRow
              icon={MapPin}
              label="Location"
              value={profile.location}
              testid="contact-location"
            />

            <div className="pt-6 mt-6 border-t border-white/10 flex flex-wrap gap-3">
              <SocialBtn icon={Github} label="GitHub" href={profile.socials.github} testid="contact-github" />
              <SocialBtn icon={Linkedin} label="LinkedIn" href={profile.socials.linkedin} testid="contact-linkedin" />
            </div>
          </div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            onSubmit={submit}
            data-testid="contact-form"
            className="lg:col-span-7 relative border border-[#39FF14]/25 bg-black/50 backdrop-blur-md p-6 md:p-10"
          >
            <div className="absolute top-0 left-0 w-10 h-10 border-t border-l border-[#39FF14]" />
            <div className="absolute bottom-0 right-0 w-10 h-10 border-b border-r border-[#D946EF]" />

            <div className="grid sm:grid-cols-2 gap-5">
              <Field
                label="Name"
                testid="contact-input-name"
                value={form.name}
                onChange={(v) => setForm((f) => ({ ...f, name: v }))}
                placeholder="Ada Lovelace"
              />
              <Field
                label="Email"
                type="email"
                testid="contact-input-email"
                value={form.email}
                onChange={(v) => setForm((f) => ({ ...f, email: v }))}
                placeholder="you@domain.com"
              />
            </div>

            <div className="mt-5">
              <label className="block font-mono text-[10px] uppercase tracking-[0.2em] text-white/45 mb-2">
                Message
              </label>
              <textarea
                rows={5}
                value={form.message}
                onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                placeholder="Tell me about your project, brief, or wild idea..."
                data-testid="contact-input-message"
                className="w-full bg-black/60 border border-white/10 focus:border-[#39FF14] outline-none px-4 py-3 font-mono text-sm text-white placeholder:text-white/30 transition-colors"
              />
            </div>

            <div className="mt-6 flex items-center justify-between gap-4 flex-wrap">
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">
                <span className="text-[#39FF14]">●</span> response time ~ 24–48h
              </div>
              <button
                type="submit"
                data-testid="contact-submit-btn"
                data-magnetic
                className="group inline-flex items-center gap-3 bg-[#39FF14] text-black font-mono text-xs uppercase tracking-[0.22em] px-6 py-4 hover:bg-white transition-colors"
              >
                {sent ? (
                  <>
                    <CheckCircle2 className="w-4 h-4" /> Message Ready
                  </>
                ) : (
                  <>
                    Transmit <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </>
                )}
              </button>
            </div>
          </motion.form>
        </div>

        {/* footer */}
        <div className="mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row md:items-center md:justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.22em] text-white/40">
          <div>Chaitash · 2026 · engineer.exe</div>
          <div className="flex items-center gap-2">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#39FF14] animate-pulse" />
            crafted with React + Framer Motion
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({ icon: Icon, label, value, href, testid }) {
  const Comp = href ? "a" : "div";
  return (
    <Comp
      href={href}
      data-testid={testid}
      className="flex items-center gap-4 border border-white/8 bg-black/30 hover:border-[#39FF14]/40 transition-all p-4 group"
    >
      <span className="w-10 h-10 rounded-sm flex items-center justify-center border border-[#39FF14]/30 bg-[#39FF14]/5 text-[#39FF14] group-hover:bg-[#39FF14] group-hover:text-black transition-colors">
        <Icon className="w-4 h-4" />
      </span>
      <span>
        <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">{label}</span>
        <span className="block font-mono text-sm text-white">{value}</span>
      </span>
    </Comp>
  );
}

function SocialBtn({ icon: Icon, label, href, testid }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      data-testid={testid}
      className="inline-flex items-center gap-2 px-4 py-2.5 border border-white/15 font-mono text-xs uppercase tracking-[0.2em] text-white/80 hover:border-[#D946EF] hover:text-[#D946EF] transition-colors"
    >
      <Icon className="w-3.5 h-3.5" /> {label}
    </a>
  );
}

function Field({ label, type = "text", value, onChange, placeholder, testid }) {
  return (
    <label className="block">
      <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-white/45 mb-2">
        {label}
      </span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        data-testid={testid}
        className="w-full bg-black/60 border border-white/10 focus:border-[#39FF14] outline-none px-4 py-3 font-mono text-sm text-white placeholder:text-white/30 transition-colors"
      />
    </label>
  );
}
