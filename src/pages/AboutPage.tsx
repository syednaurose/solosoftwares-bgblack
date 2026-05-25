import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Users2, Heart, Compass, Mail, ArrowLeft, Building2, Eye, Shield, CheckCircle2, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface AboutPageProps {
  isDarkMode: boolean;
  setIsDarkMode: (val: boolean) => void;
  theme?: 'bright' | 'dark' | 'warm' | 'nordic';
  setTheme?: (theme: 'bright' | 'dark' | 'warm' | 'nordic') => void;
}

export default function AboutPage({ isDarkMode, setIsDarkMode, theme, setTheme }: AboutPageProps) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const values = [
    {
      icon: <Eye className="h-6 w-6 text-brand-text" />,
      title: "Data Sovereignty & Privacy",
      description: "We believe privacy is a fundamental human right. Our products are engineered local-first, storing transaction telemetry and credentials sandboxed securely on your device, not on our servers."
    },
    {
      icon: <Compass className="h-6 w-6 text-brand-text" />,
      title: "The Infinite Capability",
      description: "We craft software that acts as a cognitive lever. By combining simple, highly precise interactive tools with fluid user environments, we remove frictional barriers between goal and execution."
    },
    {
      icon: <Heart className="h-6 w-6 text-brand-text" />,
      title: "Handcrafted Digital Artifacts",
      description: "No generic templates or sloppy systems. Every pixel, custom line of code, grid margin, typographic pairing, and active fluid transition exists to build the absolute peak developer of craftsmanship."
    }
  ];

  const team = [
    {
      name: "M.S. Syed Masood",
      role: "Founder & Lead Architect",
      bio: "Sovereign systems architect and principal software engineer. Focused on local-first database models, PWA client optimization, and private cryptographic personal ledger structures.",
      location: "Kadayanallur, Tamil Nadu, India",
      initials: "SM"
    },
    {
      name: "Ismail Naurose",
      role: "Quality Assurance & Diagnostics",
      bio: "Automation lead and head of validation tools. Specializes in multi-platform end-to-end testing, Playwright regressions, and container fleet compliance.",
      location: "Kadayanallur, Tamil Nadu, India",
      initials: "IN"
    }
  ];

  return (
    <div className="min-h-screen bg-brand-bg text-brand-text flex flex-col font-sans">
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} theme={theme} setTheme={setTheme} />
      
      {/* Hero Header Section */}
      <section className="relative overflow-hidden border-b border-brand-border bg-brand-bg pt-32 pb-20">
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
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-text/10 bg-brand-text/5 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-text animate-fade-in">
              The Intelligent Core
            </span>
            <h1 className="mt-6 font-display text-4xl font-bold tracking-tight text-brand-text sm:text-6xl">
              About Solo Softwares
            </h1>
            <p className="mt-6 text-lg text-brand-muted max-w-3xl mx-auto leading-relaxed font-light">
              We design, build, and deploy high-density, sovereign software engines and design patterns. Under the guiding philosophy of <span className="font-semibold text-brand-text">The Intelligent Core | The Infinite Capability</span>, we create modern digital tools that redefine speed, elegance, and extreme privacy.
            </p>
          </motion.div>
        </div>
        <div className="absolute -bottom-24 -right-24 h-64 w-64 bg-brand-text/5 rounded-full blur-3xl" />
        <div className="absolute -top-24 -left-24 h-64 w-64 bg-brand-text/5 rounded-full blur-3xl" />
      </section>

      {/* Philosophy Section */}
      <section className="py-24 border-b border-brand-border bg-brand-card/30 relative">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-xs font-bold uppercase tracking-widest text-brand-muted">Our Blueprint</h2>
            <p className="mt-3 font-display text-3xl font-bold text-brand-text tracking-tight">Core Philosophical Pillars</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group rounded-3xl border border-brand-border bg-brand-card p-8 hover:border-brand-text/10 transition-all duration-300"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-text/5 border border-brand-border group-hover:bg-brand-text group-hover:text-brand-bg transition-all duration-300 mb-6">
                  {v.icon}
                </div>
                <h3 className="text-lg font-display font-semibold mb-3 text-brand-text">{v.title}</h3>
                <p className="text-sm text-brand-muted leading-relaxed font-light">{v.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team / Leadership */}
      <section className="py-24 bg-brand-bg">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center mb-20">
            <h2 className="text-xs font-bold uppercase tracking-widest text-brand-muted">The Architects</h2>
            <p className="mt-3 font-display text-3xl font-bold text-brand-text tracking-tight animate-fade-in">Ledger & System Engineers</p>
            <p className="mt-4 text-sm text-brand-muted max-w-xl mx-auto font-light">
              We operate as a high-velocity product laboratory in Tamil Nadu, coding tools optimized for direct offline devices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {team.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group rounded-3xl border border-brand-border bg-brand-card p-8 hover:border-brand-text/20 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 h-40 w-40 bg-brand-text/[0.01] rounded-full blur-3xl" />
                
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-14 w-14 rounded-2xl bg-brand-text/5 border border-brand-border flex items-center justify-center font-display font-black text-brand-text group-hover:bg-brand-text group-hover:text-brand-bg transition-all duration-300 text-lg">
                    {member.initials}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-brand-text leading-tight">{member.name}</h3>
                    <p className="text-xs text-brand-muted font-medium uppercase tracking-wider mt-0.5">{member.role}</p>
                  </div>
                </div>

                <p className="text-sm text-brand-muted leading-relaxed font-light mb-6">
                  {member.bio}
                </p>

                <div className="flex items-center gap-2 border-t border-brand-border/60 pt-4 text-xs font-mono text-brand-muted">
                  <Compass className="h-3.5 w-3.5 text-emerald-500" />
                  <span>{member.location}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-xs text-brand-muted italic max-w-xl mx-auto">
              Our products are guided by feedback loops from elite practitioners globally, including engineering and medical system advocates validated in Egypt and Riyadh.
            </p>
          </div>
        </div>
      </section>

      {/* Direct Contact Invitation */}
      <section className="py-20 border-t border-brand-border relative overflow-hidden bg-brand-card/20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="bg-brand-text text-brand-bg rounded-[2rem] p-8 md:p-12 relative overflow-hidden shadow-2xl text-center">
            <div className="absolute top-0 left-0 h-32 w-32 bg-brand-bg/5 rounded-full blur-2xl" />
            
            <h2 className="font-display text-3xl font-bold tracking-tight mb-4 text-brand-bg">
              Have a Custom System Design Requirement?
            </h2>
            <p className="text-base opacity-80 leading-relaxed max-w-2xl mx-auto mb-8 font-light text-brand-bg/90">
              Whether you need to architect client-side local-first ledgers, integrate secure multi-currency API routes, or validate custom business logic databases, we are ready to assist.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-bg text-brand-text px-8 py-3.5 text-sm font-bold transition-all hover:scale-105"
              >
                <Mail className="h-4 w-4" />
                <span>Contact Engineering Team</span>
              </Link>
              <a 
                href="https://wa.me/919994120250" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-brand-bg/20 bg-brand-bg/10 px-8 py-3.5 text-sm font-bold text-brand-bg transition-all hover:bg-brand-bg/15"
              >
                WhatsApp Hotline
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
