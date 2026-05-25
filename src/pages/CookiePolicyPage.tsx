import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Shield, Eye, HelpCircle, ArrowLeft, Mail, Database, Ban } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface CookiePolicyPageProps {
  isDarkMode: boolean;
  setIsDarkMode: (val: boolean) => void;
  theme?: 'bright' | 'dark' | 'warm' | 'nordic';
  setTheme?: (theme: 'bright' | 'dark' | 'warm' | 'nordic') => void;
}

export default function CookiePolicyPage({ isDarkMode, setIsDarkMode, theme, setTheme }: CookiePolicyPageProps) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const sections = [
    {
      icon: <Ban className="h-6 w-6 text-brand-text" />,
      title: "1. Zero Advertising or Tracking Cookies",
      content: `At Solo Softwares, we hold a strict stance on web privacy and behavior engineering. 
      
      We do not use tracking pixels, advertising tags, commercial targeters, or analytics scripts (such as Google Analytics or Meta Pixels) to observe user clicks, behavior, or financial plans. Your browsing habits remain isolated within your private web domain.`
    },
    {
      icon: <Database className="h-6 w-6 text-brand-text" />,
      title: "2. Sandboxed Browser Local Storage",
      content: `While we bypass standard tracking cookies, our offline-capable systems (like SoloAccount) require standard browser storage objects to maintain visual layout preferences, authentication state, and offline ledger logs:
      
      • **localStorage:** Used to store your current theme ('bright', 'dark', 'warm', or 'nordic') and local UI settings so they remain stable across browser refreshes.
      • **IndexedDB Table Space:** Used in SoloAccount to store sandboxed transactional files, ledger balances, and tags. This space is highly secured and is not accessible by external websites.`
    },
    {
      icon: <Shield className="h-6 w-6 text-brand-text" />,
      title: "3. Absolute Control and Scrubbing",
      content: `Since all state exists on your specific browser or local sandbox, you hold a total right to erase these cookies and storage items:
      
      • **Application Purge:** Simply head inside your app and clear the data, or perform a manual browser refresh and click "Clear Site Data" inside your settings. 
      • **Browser Control:** You can reject cookies completely through browser menus. Bypassing cookies will not prevent you from using the offline modules of SoloAccount.`
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
              Device Diagnostics
            </span>
            <h1 className="mt-6 font-display text-4xl font-bold tracking-tight text-brand-text sm:text-5xl">
              Cookie Policy
            </h1>
            <p className="mt-4 text-base text-brand-muted max-w-2xl mx-auto">
              How browser local storage, sandboxed memory spaces, and system state caches operate within Solo Softwares platforms.
            </p>
            <p className="mt-2 text-xs text-brand-muted/70 font-mono">
              Last Updated: May 25, 2026 • Version 2.4.0
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 flex-1">
        <div className="mx-auto max-w-3xl px-6">
          <div className="space-y-12">
            {sections.map((section, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="group rounded-3xl border border-brand-border bg-brand-card p-8 transition-all hover:border-brand-text/10 shadow-sm"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-text/5 border border-brand-border group-hover:bg-brand-text group-hover:text-brand-bg transition-all duration-300">
                    {section.icon}
                  </div>
                  <h2 className="text-xl font-display font-bold text-brand-text">
                    {section.title}
                  </h2>
                </div>
                <div className="text-sm leading-relaxed text-[#94a3b8] space-y-4 whitespace-pre-line font-light">
                  {section.content}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 bg-brand-text text-brand-bg rounded-3xl p-8 relative overflow-hidden shadow-2xl">
            <h3 className="font-display text-xl font-bold mb-3 flex items-center gap-2">
              <Shield className="h-5 w-5" />
              Sovereignty Verification
            </h3>
            <p className="text-sm opacity-80 leading-relaxed mb-6">
              Our code works direct to memory. Solo Softwares guarantees it will never log keystrokes, deploy predictive advertising cookies, or monetarily trade client balance history.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between border-t border-brand-bg/10 pt-6">
              <span className="text-xs font-mono font-bold tracking-wider opacity-60">REF ID: COO-2026-SA</span>
              <a 
                href="mailto:info@solosoftwares.com"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest bg-brand-bg text-brand-text px-5 py-2.5 rounded-full hover:scale-105 transition-transform"
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
