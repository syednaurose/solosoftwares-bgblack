import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Mail, Phone, MapPin, Send, MessageSquare, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface ContactPageProps {
  isDarkMode: boolean;
  setIsDarkMode: (val: boolean) => void;
  theme?: 'bright' | 'dark' | 'warm' | 'nordic';
  setTheme?: (theme: 'bright' | 'dark' | 'warm' | 'nordic') => void;
}

export default function ContactPage({ isDarkMode, setIsDarkMode, theme, setTheme }: ContactPageProps) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

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
              Direct Bridge
            </span>
            <h1 className="mt-6 font-display text-4xl font-bold tracking-tight text-brand-text sm:text-5xl">
              Contact Us & Support
            </h1>
            <p className="mt-4 text-base text-brand-muted max-w-2xl mx-auto">
              Initiate commercial dialogue, technical briefings, or user feedback loops directly with our core engineering desk.
            </p>
            <p className="mt-2 text-xs text-brand-muted/70 font-mono">
              Representative Officer: M.S. Syed Masood • Response Turnaround: &lt;12 Hours
            </p>
          </motion.div>
        </div>
      </section>

      {/* Touchpoints and Form */}
      <section className="py-20 flex-1 relative">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left side: Information */}
            <div className="lg:col-span-5 space-y-8">
              <div className="text-left">
                <h2 className="text-2xl font-display font-bold text-brand-text">
                  Our Headquarters
                </h2>
                <p className="text-sm text-brand-muted mt-2 leading-relaxed font-light">
                  Solo Softwares delivers clean, high-performance financial systems worldwide from our primary development outpost in Southern India.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-5 rounded-2xl border border-brand-border bg-brand-card">
                  <div className="p-3 rounded-xl bg-brand-text/5 border border-brand-border text-brand-text">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-brand-text">Physical Coordinates</h4>
                    <p className="text-xs text-brand-muted mt-1 leading-relaxed">
                      Kadayanallur, Tamil Nadu<br />
                      627751, Republic of India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-2xl border border-brand-border bg-brand-card">
                  <div className="p-3 rounded-xl bg-brand-text/5 border border-brand-border text-brand-text">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-brand-text">Direct Inquiries</h4>
                    <p className="text-xs text-brand-muted mt-1">
                      <a href="mailto:info@solosoftwares.com" className="hover:underline hover:text-brand-text font-mono">info@solosoftwares.com</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-2xl border border-brand-border bg-brand-card">
                  <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-[#10b981]">
                    <MessageSquare className="h-5 w-5 animate-pulse" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-brand-text">Encrypted WhatsApp Support</h4>
                    <p className="text-xs text-brand-muted mt-1">
                      <a href="https://wa.me/919994120250" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-brand-text font-mono">+91 9994120250</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side: Interactive Form */}
            <div className="lg:col-span-7">
              <div className="rounded-3xl border border-brand-border bg-brand-card p-8 lg:p-10 shadow-lg relative">
                {submitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12 space-y-4"
                  >
                    <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10 text-[#10b981] border border-emerald-500/20 mb-2">
                      <CheckCircle2 className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-display font-bold text-brand-text">Message Dispatched Successfully</h3>
                    <p className="text-sm text-brand-muted max-w-md mx-auto leading-relaxed">
                      Thank you for initiating communication. Your briefing ticket has been channeled to founder M.S. Syed Masood. We will respond within 12 hours.
                    </p>
                    <button 
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: '', email: '', company: '', message: '' });
                      }}
                      className="text-xs font-mono text-brand-muted hover:text-brand-text uppercase font-bold tracking-widest border border-brand-border hover:border-brand-text/30 px-6 py-2.5 rounded-full transition-colors mt-6 cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6 text-left">
                    <div>
                      <span className="text-[10px] text-brand-muted font-mono uppercase tracking-widest font-black leading-none">
                        Secure Transmission Portal
                      </span>
                      <h3 className="text-xl font-display font-bold text-brand-text mt-2">
                        Get in Touch
                      </h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-brand-text uppercase font-mono tracking-wider">Your Name <span className="text-emerald-500">*</span></label>
                        <input 
                          type="text" 
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Elizabeth Warren" 
                          className="w-full bg-brand-bg rounded-xl border border-brand-border px-4 py-3 text-sm text-brand-text focus:outline-none focus:border-brand-text/30 placeholder:text-brand-muted/40 transition-colors"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-brand-text uppercase font-mono tracking-wider">Email Address <span className="text-emerald-500">*</span></label>
                        <input 
                          type="email" 
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="elizabeth@senate.gov" 
                          className="w-full bg-brand-bg rounded-xl border border-brand-border px-4 py-3 text-sm text-brand-text focus:outline-none focus:border-brand-text/30 placeholder:text-brand-muted/40 transition-colors"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold text-brand-text uppercase font-mono tracking-wider">Company / Affiliate</label>
                      <input 
                        type="text" 
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="United States Congress (Optional)" 
                        className="w-full bg-brand-bg rounded-xl border border-brand-border px-4 py-3 text-sm text-brand-text focus:outline-none focus:border-brand-text/30 placeholder:text-brand-muted/40 transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold text-brand-text uppercase font-mono tracking-wider">Detailed Message <span className="text-emerald-500">*</span></label>
                      <textarea 
                        rows={5}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Detail your inquiry regarding custom licenses, corporate setups, or general support issues..." 
                        className="w-full bg-brand-bg rounded-xl border border-brand-border px-4 py-3 text-sm text-brand-text focus:outline-none focus:border-brand-text/30 placeholder:text-brand-muted/40 transition-colors resize-none"
                      />
                    </div>

                    <button 
                      type="submit"
                      className="w-full flex items-center justify-center gap-2.5 rounded-xl bg-brand-text text-brand-bg font-bold text-sm tracking-wider uppercase py-4 hover:scale-[1.01] hover:shadow-lg active:scale-[0.99] transition-all cursor-pointer"
                    >
                      <Send className="h-4 w-4" />
                      Dispatch Message Protocol
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
