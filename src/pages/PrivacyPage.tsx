import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Shield, Lock, Eye, CheckCircle2, FileText, ArrowLeft, Mail, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface PrivacyPageProps {
  isDarkMode: boolean;
  setIsDarkMode: (val: boolean) => void;
  theme?: 'bright' | 'dark' | 'warm' | 'nordic';
  setTheme?: (theme: 'bright' | 'dark' | 'warm' | 'nordic') => void;
}

export default function PrivacyPage({ isDarkMode, setIsDarkMode, theme, setTheme }: PrivacyPageProps) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const sections = [
    {
      icon: <Eye className="h-6 w-6 text-brand-text" />,
      title: "1. Privacy-First Architecture & Data Collection",
      content: `At SoloAccount, we believe that your financial raw data is yours alone. SoloAccount is architected as a privacy-first, decentralized application. 

• **Personal Data Collection:** We do not collect or harvest any of your personal financial information or credentials on our servers. Any contact information you share with us (such as your email address when contacting support) is used exclusively for responding to your inquiries.
• **App Usage Data:** The app processes data locally using sandboxed IndexedDB storage on your device. We do not transmit your transactions, accounts, balance breakdowns, or ledger files to our servers or any third parties, unless you explicitly choose to authenticate and synchronize with an optional, opt-in cloud sync provider (such as a personal Supabase instance under your control).`
    },
    {
      icon: <Lock className="h-6 w-6 text-brand-text" />,
      title: "2. Google Play and Device Hardware Permissions",
      content: `To provide the full spectrum of modern ledger management tools, SoloAccount may request access to specific device capabilities. We conform strictly to Google Play developer standards regarding hardware permission usage:

• **Storage Permissions (Read/Write):** Used solely to allow you to save PDF receipts, upload local invoices as transaction attachments, or export/import encrypted HTML/JSON ledger backups.
• **Camera Access:** Used on-demand only if you choose to take a photo of a physical receipt to attach to a transaction row. Images remain stored in your local device sandbox.
• **Biometric Authentication (Face ID / Fingerprint):** Used to restrict unauthorized app opening on your device. All biometric calculations are processed securely in your hardware's secure element (Secure Enclave); SoloAccount has absolutely no access to raw biometric templates.`
    },
    {
      icon: <CheckCircle2 className="h-6 w-6 text-brand-text" />,
      title: "3. Service Providers & Third-Party APIs",
      content: `The application may utilize third-party services that collect information used to identify you or facilitate specific utilities. Here are the links to the privacy policies of third-party service providers used by the app:

• **Google Play Services:** Used for app distribution, updates, and crash diagnostics (https://policies.google.com/privacy)
• **Currency Fetching Gateways:** Used on-demand to request global exchange rates. These calls are completely anonymized and transmit zero financial details or personal identifiers.
• **Supabase (Optional Cloud Sync):** If you manually opt-in and configure cloud syncing, data is synchronized according to Supabase data security policies.`
    },
    {
      icon: <Shield className="h-6 w-6 text-brand-text" />,
      title: "4. Data Retention, Portability & Deletion Policy",
      content: `We believe in total user data sovereignty. Your rights under GDPR, CCPA, and Google Play policies include:

• **Local Data Deletion:** You have complete, instant authority to permanently scrub all your data from the device. Simply navigate to Settings > Data Management and click "Reset Application Data" to erase all IndexedDB tables. This is irreversible.
• **Account / Cloud Data Deletion:** If you have registered an account or set up cloud sync, you can request absolute purging of all backup files by initiating a support ticket.
• **Purge Requests:** Direct requests for server-side contact record removal can be emailed to info@solosoftwares.com and will be processed immediately within 24–48 hours.`
    },
    {
      icon: <FileText className="h-6 w-6 text-brand-text" />,
      title: "5. Children's Privacy (COPPA Compliance)",
      content: `SoloAccount is not directed to, and does not knowingly collect personally identifiable information from, children under the age of 13. In the event that we discover a child under 13 has provided us with personal information (such as via email support), we immediately delete this from our servers. If you are a parent or guardian and are aware that your child has provided us with personal data, please contact info@solosoftwares.com.`
    },
    {
      icon: <Globe className="h-6 w-6 text-brand-text" />,
      title: "6. Developer Identity, Contact & Compliance Oversight",
      content: `This application and its privacy provisions are proudly supervised by our primary compliance officer and developer:
 
• **Developer / Compliance Officer:** M.S. Syed Masood
• **Developer Email:** info@solosoftwares.com
• **Corporate Headquarters / Jurisdiction:** Kadayanallur, Tamil Nadu, India
• **Direct Support Line / WhatsApp:** +91 9994120250`
    }
  ];

  return (
    <div className="min-h-screen bg-brand-bg text-brand-text flex flex-col font-sans">
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} theme={theme} setTheme={setTheme} />
      
      {/* Privacy Title Banner */}
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
              Legal & Compliance Desk
            </span>
            <h1 className="mt-6 font-display text-4xl font-bold tracking-tight text-brand-text sm:text-5xl">
              SoloAccount Privacy Policy
            </h1>
            <p className="mt-4 text-base text-brand-muted max-w-2xl mx-auto">
              Sovereignty. Decoupling. Encryption. Understanding how SoloAccount respects your local financial boundaries and cryptographic data protocols.
            </p>
            <p className="mt-2 text-xs text-brand-muted/70 font-mono">
              Last Updated: May 22, 2026 • Version 2.4.0
            </p>
          </motion.div>
        </div>
        <div className="absolute -bottom-24 -right-24 h-64 w-64 bg-brand-text/5 rounded-full blur-3xl" />
        <div className="absolute -top-24 -left-24 h-64 w-64 bg-brand-text/5 rounded-full blur-3xl" />
      </section>

      {/* Main Privacy Core Content */}
      <section className="py-20 flex-1 relative">
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

          {/* Quick Notice Card */}
          <div className="mt-16 bg-brand-text text-brand-bg rounded-3xl p-8 relative overflow-hidden shadow-2xl">
            <h3 className="font-display text-xl font-bold mb-3 flex items-center gap-2">
              <Shield className="h-5 w-5" />
              Sovereignty Covenant
            </h3>
            <p className="text-sm opacity-80 leading-relaxed mb-6">
              Our code works direct to memory. SoloAccount guarantees it will never log keystrokes, deploy predictive advertising cookies, or monetarily trade client balance history.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between border-t border-brand-bg/10 pt-6">
              <span className="text-xs font-mono font-bold tracking-wider opacity-60">REF ID: SEC-PWA-2026-SA</span>
              <a 
                href="mailto:info@solosoftwares.com"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest bg-brand-bg text-brand-text px-5 py-2.5 rounded-full hover:scale-105 transition-transform"
              >
                <Mail className="h-3.5 w-3.5" />
                Contact Syed Masood
              </a>
            </div>
            <div className="absolute -bottom-12 -right-12 h-40 w-40 bg-brand-bg/10 rounded-full blur-2xl" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
