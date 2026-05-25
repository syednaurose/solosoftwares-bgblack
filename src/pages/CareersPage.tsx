import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Mail, Cpu, Sparkles, Code, Globe, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface CareersPageProps {
  isDarkMode: boolean;
  setIsDarkMode: (val: boolean) => void;
  theme?: 'bright' | 'dark' | 'warm' | 'nordic';
  setTheme?: (theme: 'bright' | 'dark' | 'warm' | 'nordic') => void;
}

export default function CareersPage({ isDarkMode, setIsDarkMode, theme, setTheme }: CareersPageProps) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const principles = [
    {
      icon: <Code className="h-6 w-6 text-brand-text" />,
      title: "Obsession with Clean Code",
      description: "We believe code is craftsmanship. We maintain strict typing, elegant styling, and lightning-fast client execution."
    },
    {
      icon: <Cpu className="h-6 w-6 text-brand-text" />,
      title: "Decentralized First Architecture",
      description: "We trust user memory. We design tools that prioritize sandboxed localStorage, databases, and biometric isolation."
    },
    {
      icon: <Globe className="h-6 w-6 text-brand-text" />,
      title: "Uncompromising Output Speed",
      description: "No bureaucracies. We build fast, deploy immediately, and let our tools speak for our commitment."
    }
  ];

  const positions = [
    {
      title: "Senior Full-Stack Developer",
      type: "Remote / Full-Time",
      department: "Product & Engineering",
      summary: "Work directly on the future of SoloAccount. Optimize client-side speed, IndexedDB query plans, and WebML models.",
      skills: ["React 19", "Vite", "IndexedDB", "PostgreSQL", "Next.js"]
    },
    {
      title: "Product Visual Designer",
      type: "Remote / Contract",
      department: "UI & Aesthetics",
      summary: "Map beautiful, ultra-high-contrast theme systems. Leverage negative space, displays, and smooth animations.",
      skills: ["Figma", "Tailwind CSS", "Motion", "SVG Vector Design"]
    }
  ];

  return (
    <div className="min-h-screen bg-brand-bg text-brand-text flex flex-col font-sans">
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} theme={theme} setTheme={setTheme} />
      
      {/* Page Title Banner */}
      <section className="relative overflow-hidden border-b border-brand-border bg-brand-bg pt-32 pb-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-muted hover:text-brand-text transition-colors mb-6 group"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Home
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-text/10 bg-brand-text/5 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-text">
              Join Our Mission
            </span>
            <h1 className="mt-6 font-display text-4xl font-bold tracking-tight text-brand-text sm:text-5xl">
              Career Openings
            </h1>
            <p className="mt-4 text-base text-brand-muted max-w-2xl mx-auto">
              Construct high-integrity software components, AI agent pipelines, and the proprietary Intelligent Core with ambitious global engineers.
            </p>
            <p className="mt-2 text-xs text-brand-muted/70 font-mono">
              Founder: M.S. Syed Masood • Kadayanallur Headquarters
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-20 border-b border-brand-border">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-2xl font-display font-bold text-center mb-12 text-brand-text">
            Our Development Covenants
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {principles.map((pr, idx) => (
              <div key={idx} className="rounded-2xl border border-brand-border bg-brand-card p-6 shadow-sm hover:border-brand-text/10 transition-colors">
                <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-brand-text/5 border border-brand-border mb-4 text-brand-text">
                  {pr.icon}
                </div>
                <h3 className="text-base font-bold text-brand-text mb-2">{pr.title}</h3>
                <p className="text-sm text-brand-muted leading-relaxed font-light">{pr.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Active Roles */}
      <section className="py-20 flex-1">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl font-display font-bold text-center mb-12 text-brand-text">
            Active Global Openings
          </h2>
          <div className="space-y-8">
            {positions.map((pos, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group rounded-3xl border border-brand-border bg-brand-card p-8 hover:border-brand-text/10 hover:shadow-lg transition-all"
              >
                <div className="flex justify-between items-start gap-4 mb-4 flex-wrap">
                  <div>
                    <h3 className="text-lg font-bold text-brand-text group-hover:text-emerald-500 transition-colors">
                      {pos.title}
                    </h3>
                    <p className="text-xs text-brand-muted mt-1 font-mono uppercase tracking-wider">{pos.department} • {pos.type}</p>
                  </div>
                  <span className="text-[10px] font-mono font-bold bg-[#10b981]/10 text-[#10b981] border border-[#10b981]/20 px-2.5 py-1 rounded-full">
                    Accepting Resumes
                  </span>
                </div>
                <p className="text-sm text-brand-muted leading-relaxed font-light mb-6">
                  {pos.summary}
                </p>
                <div className="flex flex-wrap gap-2">
                  {pos.skills.map((sk, sIdx) => (
                    <span key={sIdx} className="text-[10px] font-mono text-brand-muted border border-brand-border bg-brand-bg px-2.5 py-1 rounded-md">
                      {sk}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 bg-brand-text text-brand-bg rounded-3xl p-8 relative overflow-hidden shadow-2xl">
            <h3 className="font-display text-xl font-bold mb-3 flex items-center gap-2">
              <Sparkles className="h-5 w-5" />
              Direct Application Pipeline
            </h3>
            <p className="text-sm opacity-80 leading-relaxed mb-6">
              Skip the recruitment grids. Send your Github profile, active projects, or technical case studies directly under the attention of Syed Masood for a high-level briefing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between border-t border-brand-bg/10 pt-6">
              <span className="text-xs font-mono font-bold tracking-wider opacity-60">REF ID: HR-PIPELINE-2026</span>
              <a 
                href="mailto:info@solosoftwares.com"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest bg-brand-bg text-brand-text px-5 py-2.5 rounded-full hover:scale-105 transition-transform font-bold"
              >
                <Mail className="h-3.5 w-3.5" />
                info@solosoftwares.com
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
