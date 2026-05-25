import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Shield, Lock, Eye, CheckCircle2, FileText, ArrowLeft, Mail, AlertTriangle, Key } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface SecurityPageProps {
  isDarkMode: boolean;
  setIsDarkMode: (val: boolean) => void;
  theme?: 'bright' | 'dark' | 'warm' | 'nordic';
  setTheme?: (theme: 'bright' | 'dark' | 'warm' | 'nordic') => void;
}

export default function SecurityPage({ isDarkMode, setIsDarkMode, theme, setTheme }: SecurityPageProps) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const sections = [
    {
      icon: <Lock className="h-6 w-6 text-brand-text" />,
      title: "1. Zero Trust & Decentralized Database Architecture",
      content: `The ultimate form of security is the absence of data to steal. Solo Softwares builds under a zero-trust, decentralized layout:
      
      • **Client-Side Core:** There are no central databases storing your transaction history, account credentials, or budget profiles. Everything executes inside sandboxed browser memory or device storage.
      • **No Database Traps:** Because we choose not to aggregate or cache user financial raw indices, Solo Softwares represents a zero-target value for cross-site hackers or mass database extractors.`
    },
    {
      icon: <Key className="h-6 w-6 text-brand-text" />,
      title: "2. Secure Local Authentication & Biometrics",
      content: `SoloAccount incorporates device hardware level secure enclaves on mobile and desktop platforms:
      
      • **Hardware Biometrics:** Fingerprint or Face IDs are validated inside your smartphone's secure biometric hardware unit. Our application receives only a boolean pass/fail confirmation from the operating system and has no exposure to bio-keys or passcode strings.
      • **Encrypted Site Data:** Your browser local logs are partitioned by the browser sandbox, which restricts other websites from scanning local entries.`
    },
    {
      icon: <CheckCircle2 className="h-6 w-6 text-brand-text" />,
      title: "3. Safe Cryptographic Backups",
      content: `When exporting database balances or ledger configurations from SoloAccount:
      
      • All files are compiled down into heavily packed, structured offline JSON formats.
      • To maximize personal protection, we advise saving these exported ledger archives under password-protected folders or in encrypted cloud lockers controlled by you alone.`
    },
    {
      icon: <AlertTriangle className="h-6 w-6 text-brand-text" />,
      title: "4. Reporting Vulnerabilities & Incident Handling",
      content: `We maintain active oversight on security frameworks. If you identify software loopholes or compliance concerns, we want to hear about it immediately:
      
      • We will assess and commit fixes to codebases within 24–48 hours for verified bugs.
      • Feedback Officer: M.S. Syed Masood
      • Priority Email: info@solosoftwares.com
      • Support Line: +91 9994120250`
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
              Defensive Systems
            </span>
            <h1 className="mt-6 font-display text-4xl font-bold tracking-tight text-brand-text sm:text-5xl">
              Security Protocol
            </h1>
            <p className="mt-4 text-base text-brand-muted max-w-2xl mx-auto">
              How our zero-storage decentralized engineering minimizes risk vector profiles and ensures absolute local data confidence.
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
              Sovereignty Verification
            </h3>
            <p className="text-sm opacity-80 leading-relaxed mb-6">
              Our code works direct to memory. Solo Softwares guarantees it will never log keystrokes, deploy predictive advertising cookies, or monetarily trade client balance history.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between border-t border-brand-bg/10 pt-6">
              <span className="text-xs font-mono font-bold tracking-wider opacity-60">REF ID: SEC-SA-2026-ENCLAVE</span>
              <a 
                href="mailto:info@solosoftwares.com"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest bg-brand-bg text-brand-text px-5 py-2.5 rounded-full hover:scale-105 transition-transform"
              >
                <Mail className="h-3.5 w-3.5" />
                Contact Security Officer
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
