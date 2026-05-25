import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Mail, Code, Terminal, Play, Shield, Copy, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface ApiDocsPageProps {
  isDarkMode: boolean;
  setIsDarkMode: (val: boolean) => void;
  theme?: 'bright' | 'dark' | 'warm' | 'nordic';
  setTheme?: (theme: 'bright' | 'dark' | 'warm' | 'nordic') => void;
}

export default function ApiDocsPage({ isDarkMode, setIsDarkMode, theme, setTheme }: ApiDocsPageProps) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const [copiedText, setCopiedText] = useState<'transaction' | 'ledger' | null>(null);

  const copyToClipboard = (text: string, id: 'transaction' | 'ledger') => {
    navigator.clipboard.writeText(text);
    setCopiedText(id);
    setTimeout(() => setCopiedText(null), 2000);
  };

  const transactionSchema = `{
  "id": "tx_2026_98823a",
  "amount": 149.50,
  "currency": "USD",
  "category": "Software Subscriptions",
  "description": "Solo Softwares License Fee",
  "date": "2026-05-25",
  "attachments": [],
  "metadata": {
    "engine": "The Intelligent Core v2.4",
    "developer_compliance": "info@solosoftwares.com"
  }
}`;

  const ledgerSchema = `{
  "ledger_id": "ldg_primary_2026",
  "owner": "M.S. Syed Masood",
  "base_currency": "INR",
  "balances": {
    "bank_accounts": 245000.00,
    "cash": 12500.00,
    "receivables": 89000.00
  },
  "created_at": "2026-05-25T11:43:30Z",
  "system_status": "Active"
}`;

  const sections = [
    {
      icon: <Code className="h-6 w-6 text-brand-text" />,
      title: "1. Decentralized JSON Schema Specifications",
      content: `SoloAccount allows full programmatic backup, migration, and import of transactions. The schema is design-compliant with strict ECMA specifications to ensure complete portability. You can feed this format directly into custom localized systems or automation microservices.`
    },
    {
      icon: <Terminal className="h-6 w-6 text-brand-text" />,
      title: "2. Sample Data Models & Backups",
      content: `Integrating third-party databases is simple. Utilize our pre-built models to map API calls directly into the SoloAccount state machines.`
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
              Developer Ecosystem
            </span>
            <h1 className="mt-6 font-display text-4xl font-bold tracking-tight text-brand-text sm:text-5xl">
              API Documentation & Schemas
            </h1>
            <p className="mt-4 text-base text-brand-muted max-w-2xl mx-auto">
              Port your billing systems and ledger databases effortlessly. Inspect JSON models, transactional structures, and export schemas.
            </p>
            <p className="mt-2 text-xs text-brand-muted/70 font-mono">
              Lead Architect: M.S. Syed Masood • Version 2.4.0
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 flex-1">
        <div className="mx-auto max-w-3xl px-6">
          <div className="space-y-12">
            <div className="group rounded-3xl border border-brand-border bg-brand-card p-8 transition-all hover:border-brand-text/10 shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-text/5 border border-brand-border group-hover:bg-brand-text group-hover:text-brand-bg transition-all duration-300">
                  <Code className="h-6 w-6 text-brand-text" />
                </div>
                <h2 className="text-xl font-display font-bold text-brand-text">
                  1. Local Schema Serialization
                </h2>
              </div>
              <p className="text-sm leading-relaxed text-brand-muted font-light mb-6">
                All ledger information is serialized in real-time. This offline design gives you infinite autonomy—you can import or export these files from any tool.
              </p>

              {/* Transaction JSON Structure */}
              <div className="space-y-3 mb-8">
                <div className="flex justify-between items-center bg-brand-bg px-4 py-2 border-t border-x border-brand-border rounded-t-xl">
                  <span className="text-xs font-mono text-brand-muted font-bold">Transaction Object Format</span>
                  <button 
                    onClick={() => copyToClipboard(transactionSchema, 'transaction')}
                    className="text-xs text-brand-muted hover:text-brand-text flex items-center gap-1 cursor-pointer"
                  >
                    {copiedText === 'transaction' ? (
                      <>
                        <Check className="h-3.5 w-3.5 text-emerald-500" />
                        <span className="text-emerald-500 font-bold">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5" />
                        <span>Copy JSON</span>
                      </>
                    )}
                  </button>
                </div>
                <pre className="p-4 bg-brand-bg border-b border-x border-brand-border rounded-b-xl text-xs font-mono text-brand-text overflow-x-auto max-h-72">
                  {transactionSchema}
                </pre>
              </div>

              {/* Ledger JSON Structure */}
              <div className="space-y-3">
                <div className="flex justify-between items-center bg-brand-bg px-4 py-2 border-t border-x border-brand-border rounded-t-xl">
                  <span className="text-xs font-mono text-brand-muted font-bold">Ledger Balance Format</span>
                  <button 
                    onClick={() => copyToClipboard(ledgerSchema, 'ledger')}
                    className="text-xs text-brand-muted hover:text-brand-text flex items-center gap-1 cursor-pointer"
                  >
                    {copiedText === 'ledger' ? (
                      <>
                        <Check className="h-3.5 w-3.5 text-emerald-500" />
                        <span className="text-emerald-500 font-bold">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5" />
                        <span>Copy JSON</span>
                      </>
                    )}
                  </button>
                </div>
                <pre className="p-4 bg-brand-bg border-b border-x border-brand-border rounded-b-xl text-xs font-mono text-brand-text overflow-x-auto max-h-72">
                  {ledgerSchema}
                </pre>
              </div>
            </div>
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
              <span className="text-xs font-mono font-bold tracking-wider opacity-60">REF ID: API-INTEGRITY-2026</span>
              <a 
                href="mailto:info@solosoftwares.com"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest bg-brand-bg text-brand-text px-5 py-2.5 rounded-full hover:scale-105 transition-transform"
              >
                <Mail className="h-3.5 w-3.5" />
                Contact Developer Desk
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
