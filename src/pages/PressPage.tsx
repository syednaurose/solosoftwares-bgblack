import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Mail, FileText, Share2, Award, Calendar, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface PressPageProps {
  isDarkMode: boolean;
  setIsDarkMode: (val: boolean) => void;
  theme?: 'bright' | 'dark' | 'warm' | 'nordic';
  setTheme?: (theme: 'bright' | 'dark' | 'warm' | 'nordic') => void;
}

export default function PressPage({ isDarkMode, setIsDarkMode, theme, setTheme }: PressPageProps) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const releases = [
    {
      title: "Solo Softwares Unveils SoloAccount v2.0 - Decoupled Personal Ledger Management",
      excerpt: "Solo Softwares launches a sovereign, privacy-first personal ledger framework structured to provide comprehensive client-side local IndexedDB balances on Android & Web portals.",
      date: "May 22, 2026",
      source: "Corporate Media Relations"
    },
    {
      title: "The Intelligent Core Engine: Accelerating Cloud-Native Deployments for Global Commerce",
      excerpt: "Solo Softwares founder M.S. Syed Masood rolls out 'The Intelligent Core | The Infinite Capability', a modular engine to deploy robust cross-border finance and compliance systems.",
      date: "April 15, 2026",
      source: "Technology Digest"
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
              Newsroom
            </span>
            <h1 className="mt-6 font-display text-4xl font-bold tracking-tight text-brand-text sm:text-5xl">
              Press Releases & Kit
            </h1>
            <p className="mt-4 text-base text-brand-muted max-w-2xl mx-auto">
              Follow official announcements, media coverage, and architectural milestones shaping Solo Softwares' enterprise offerings.
            </p>
            <p className="mt-2 text-xs text-brand-muted/70 font-mono">
              Oversight: M.S. Syed Masood • Last Sync: May 2026
            </p>
          </motion.div>
        </div>
      </section>

      {/* Media Kits */}
      <section className="py-16 border-b border-brand-border">
        <div className="mx-auto max-w-4xl px-6">
          <div className="rounded-2xl border border-brand-border bg-brand-card p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
            <div className="text-left">
              <span className="text-[10px] font-mono text-[#10b981] font-bold bg-[#10b981]/10 px-2.5 py-1 rounded-md">
                Brand Resources Available
              </span>
              <h3 className="text-lg font-bold text-brand-text mt-3">Solo Softwares Media & Logo Bundle</h3>
              <p className="text-sm text-brand-muted mt-1 leading-relaxed font-light">
                Retrieve high-resolution png marks, vector logotypes (including SoloAccount), compliance records, and founder profiles.
              </p>
            </div>
            <a 
              href="mailto:info@solosoftwares.com" 
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest bg-brand-text text-brand-bg px-6 py-3 rounded-full hover:scale-105 transition-transform shrink-0"
            >
              Request Assets ↗
            </a>
          </div>
        </div>
      </section>

      {/* Releases list */}
      <section className="py-20 flex-1">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl font-display font-bold text-center mb-12 text-brand-text">
            Official Statements
          </h2>
          <div className="space-y-8">
            {releases.map((rel, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group rounded-3xl border border-brand-border bg-brand-card p-8 hover:border-brand-text/10 transition-all shadow-sm"
              >
                <div className="flex items-center gap-2.5 text-xs text-brand-muted font-mono mb-4">
                  <Calendar className="h-4 w-4" />
                  <span>{rel.date}</span>
                  <span className="text-brand-border">•</span>
                  <span>{rel.source}</span>
                </div>
                <h3 className="text-lg font-bold text-brand-text group-hover:text-emerald-500 transition-colors mb-4 leading-snug">
                  {rel.title}
                </h3>
                <p className="text-sm text-brand-muted leading-relaxed font-light mb-6">
                  {rel.excerpt}
                </p>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#10b981] cursor-pointer hover:underline">
                  <span>Read Full Release</span>
                  <ExternalLink className="h-3 w-3" />
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 bg-brand-text text-brand-bg rounded-3xl p-8 relative overflow-hidden shadow-2xl">
            <h3 className="font-display text-xl font-bold mb-3 flex items-center gap-2">
              <Share2 className="h-5 w-5" />
              Corporate Communications
            </h3>
            <p className="text-sm opacity-80 leading-relaxed mb-6">
              For interviews, technical briefings, or commentary requests regarding India's growing cloud-native financial technology ecosystem, reach out directly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between border-t border-brand-bg/10 pt-6">
              <span className="text-xs font-mono font-bold tracking-wider opacity-60">REF ID: PR-DESK-2026</span>
              <a 
                href="mailto:info@solosoftwares.com"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest bg-brand-bg text-brand-text px-5 py-2.5 rounded-full hover:scale-105 transition-transform font-bold"
              >
                <Mail className="h-3.5 w-3.5" />
                Inquire via Email
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
