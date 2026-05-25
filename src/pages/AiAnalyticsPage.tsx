import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Eye, Shield, ArrowLeft, Mail, Cpu, BarChart3, LineChart, BrainCircuit } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface AiAnalyticsPageProps {
  isDarkMode: boolean;
  setIsDarkMode: (val: boolean) => void;
  theme?: 'bright' | 'dark' | 'warm' | 'nordic';
  setTheme?: (theme: 'bright' | 'dark' | 'warm' | 'nordic') => void;
}

export default function AiAnalyticsPage({ isDarkMode, setIsDarkMode, theme, setTheme }: AiAnalyticsPageProps) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const sections = [
    {
      icon: <BrainCircuit className="h-6 w-6 text-brand-text" />,
      title: "1. Decentralized Local AI Models",
      content: `Solo Softwares utilizes state-of-the-art WebML frameworks to execute artificial intelligence directly on your device CPU/GPU sandbox.
      
      • **On-Device Scoring:** Categorization of finance trends, balance forecasting, and text summarization run entirely local. We do not dispatch your raw transaction lines to external LLM servers or cloud endpoints.
      • **Infinite Privacy:** Your sensitive metrics and budgets never train generic models. The system weights adapt dynamically inside your browser storage.`
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-brand-text" />,
      title: "2. Intelligent Ledger Categorization",
      content: `Our AI engines learn from your historical ledger updates to automate data processing:
      
      • **Intent Grouping:** When typing transaction memo lines (e.g., 'Uber trip, Bangalore airport'), the system recognizes patterns and matches categories automatically.
      • **Anomaly Protection:** Detects unexpected double charges, extreme balance drops, or budget deviations using robust local statistical algorithms.`
    },
    {
      icon: <LineChart className="h-6 w-6 text-brand-text" />,
      title: "3. Interactive Forecasting Engine",
      content: `Forecast future financial state profiles using robust trend lines:
      
      • Simulates 6-12 month financial outcomes under custom expense parameters.
      • Automatically factors variable costs, cyclical fees, and inflation ratios to predict net-worth trajectory on local charts.`
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
              Artificial Intelligence
            </span>
            <h1 className="mt-6 font-display text-4xl font-bold tracking-tight text-brand-text sm:text-5xl">
              AI Analytics Engine
            </h1>
            <p className="mt-4 text-base text-brand-muted max-w-2xl mx-auto">
              Real-time calculations, automated categorization pipelines, and localized regression forecasting without cloud data leakage.
            </p>
            <p className="mt-2 text-xs text-brand-muted/70 font-mono">
              Oversight: The Intelligent Core • Version 2.4.0
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
                <div className="text-sm leading-relaxed text-brand-muted space-y-4 whitespace-pre-line font-light">
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
              <span className="text-xs font-mono font-bold tracking-wider opacity-60">REF ID: AI-ANALYTICS-2026</span>
              <a 
                href="mailto:info@solosoftwares.com"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest bg-brand-bg text-brand-text px-5 py-2.5 rounded-full hover:scale-105 transition-transform"
              >
                <Mail className="h-3.5 w-3.5" />
                Contact Syed Masood
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
