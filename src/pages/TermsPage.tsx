import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Shield, Scale, FileCheck, HelpCircle, FileText, ArrowLeft, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface TermsPageProps {
  isDarkMode: boolean;
  setIsDarkMode: (val: boolean) => void;
  theme?: 'bright' | 'dark' | 'warm' | 'nordic';
  setTheme?: (theme: 'bright' | 'dark' | 'warm' | 'nordic') => void;
}

export default function TermsPage({ isDarkMode, setIsDarkMode, theme, setTheme }: TermsPageProps) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const sections = [
    {
      icon: <Scale className="h-6 w-6 text-brand-text" />,
      title: "1. Agreement & Acceptance",
      content: `By downloading, installing, accessing, or using the services provided by Solo Softwares—including but not limited to the SoloAccount web portal, desktop client, or Google Play Android package—you signify your agreement to these Terms of Service. 
      
      If you do not agree to these terms, you are not authorized to use our software, tools, or portals. These terms govern all deployments, local sandboxed databases, and updates issued under Solo Softwares' compliance oversight.`
    },
    {
      icon: <Shield className="h-6 w-6 text-brand-text" />,
      title: "2. Proprietary Rights & Software License",
      content: `All software, algorithms, build engines, UI architectures, and logos (including SoloAccount and The Intelligent Core engine) are the exclusive intellectual property of Solo Softwares, founded and directed by M.S. Syed Masood.
      
      • **Limited Evaluation License:** Solo Softwares grants you a personal, non-exclusive, non-transferable, revocable license to run the code in local sandbox setups strictly for personal or evaluation purposes.
      • **Restrictions:** You are strictly prohibited from copying, decompiling, reverse-engineering, renting, leasing, reselling, or commercially exploiting any proprietary components of Solo Softwares codebases without concrete written authorization from Syed Masood.`
    },
    {
      icon: <FileCheck className="h-6 w-6 text-brand-text" />,
      title: "3. User Data Sovereignty & Risk Allocation",
      content: `SoloAccount behaves as a fully isolated, client-side decentralized program. 
      
      • **Local Execution:** Your financial entries, balances, and ledger logs are stored strictly on your local device (IndexedDB architecture). Consequently, you are solely responsible for managing device hard drive capacity, backups, password locking, and security.
      • **Compliance Desk:** Any legal inquiry, licensing negotiation, or administrative clarification must be directed upstream to our primary developer desk:
        - Lead Representative: M.S. Syed Masood
        - Contact Email: info@solosoftwares.com
        - Remote Compliance: Kadayanallur, India
        - Support WhatsApp: +91 9994120250`
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
              Legal Covenants
            </span>
            <h1 className="mt-6 font-display text-4xl font-bold tracking-tight text-brand-text sm:text-5xl">
              Terms of Service
            </h1>
            <p className="mt-4 text-base text-brand-muted max-w-2xl mx-auto">
              Read our operational boundaries, intellectual property covenants, and developer/compliance commitments.
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
                <div className="text-sm leading-relaxed text-brand-muted space-y-4 whitespace-pre-line font-light">
                  {section.content}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 bg-brand-text text-brand-bg rounded-3xl p-8 relative overflow-hidden shadow-2xl">
            <h3 className="font-display text-xl font-bold mb-3 flex items-center gap-2">
              <Shield className="h-5 w-5" />
              Contract Verification
            </h3>
            <p className="text-sm opacity-80 leading-relaxed mb-6">
              Our software runs locally to respect device sovereignty. If you require specialized corporate licensing or enterprise compliance verification, please contact Syed Masood.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between border-t border-brand-bg/10 pt-6">
              <span className="text-xs font-mono font-bold tracking-wider opacity-60">REF ID: TOS-2026-CORE</span>
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
